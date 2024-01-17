import { SSTConfig } from "sst";
import { IAM } from "@/stacks/IAM";
import { NextJs } from "@/stacks/NextJs";

export default {
  config(_input) {
    return {
      profile: "personal",
      name: "next-js-sst-aws",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(NextJs);
    app.stack(IAM);
  },
} satisfies SSTConfig;
