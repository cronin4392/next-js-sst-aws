import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { IAM } from "@/stacks/IAM";

export default {
  config(_input) {
    return {
      profile: "personal",
      name: "next-js-sst-aws",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site");

      stack.addOutputs({
        SiteUrl: site.url,
      });

      app.stack(IAM);
    });
  },
} satisfies SSTConfig;
