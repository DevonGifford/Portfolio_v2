"use client";

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import SocialIcon from "../common/SocialIcon";
import ExternalLink from "../common/ExternalLink";

export default function Footer() {
  return (
    <div>
      <div className="inline-flex w-full items-center justify-center gap-4 xl:hidden">
        <SocialIcon
          href="https://github.com/DevonGifford"
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <SiGithub />
        </SocialIcon>

        <SocialIcon
          href="https://www.linkedin.com/in/dbgifford/"
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <BsLinkedin />
        </SocialIcon>

        <SocialIcon
          href="https://twitter.com/devon_the_dev"
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <TiSocialTwitter />
        </SocialIcon>
      </div>
      <p className="justify-center py-3 text-center text-xs">
        Built from scratch by{" "}
        <ExternalLink href="https://www.linkedin.com/in/dbgifford/" className="text-textGreen">
          Devon Gifford
        </ExternalLink>
        <br />
        Inspired by{" "}
        <ExternalLink href="https://brittanychiang.com/" className="text-textGreen">
          {" "}
          Brittany Chiang
        </ExternalLink>
      </p>
    </div>
  );
}
