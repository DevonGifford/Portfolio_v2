"use client";

import SocialLinks from "../common/SocialLinks";
import ExternalLink from "../common/ExternalLink";
import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <div>
      <div className="inline-flex w-full items-center justify-center gap-4 xl:hidden">
        <SocialLinks iconClassName="bg-bodyColor text-zinc-200 border-zinc-700" />
      </div>
      <p className="justify-center py-3 text-center text-xs">
        {siteConfig.footer.builtBy}{" "}
        <ExternalLink href={siteConfig.social.linkedin} className="text-textGreen">
          {siteConfig.name}
        </ExternalLink>
        <br />
        {siteConfig.footer.inspiredBy}{" "}
        <ExternalLink href={siteConfig.footer.credit.href} className="text-textGreen">
          {" "}
          {siteConfig.footer.credit.name}
        </ExternalLink>
      </p>
    </div>
  );
}
