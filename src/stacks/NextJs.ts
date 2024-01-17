import { NextjsSite, StackContext } from "sst/constructs";

export function NextJs({ stack }: StackContext) {
  const site = new NextjsSite(stack, "NextJsSstAws-NextJsStack");

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
