"use client";

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import SocialIcon from "./SocialIcon";

export default function SocialIconList({ className }: { className?: string }) {
  const baseClass = "border-zinc-700 bg-bodyColor text-zinc-200";

  return (
    <div className={`flex gap-4 ${className}`}>
      <SocialIcon href="https://github.com/DevonGifford" externalClassName={baseClass}>
        <SiGithub />
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com/in/dbgifford/" externalClassName={baseClass}>
        <BsLinkedin />
      </SocialIcon>
      <SocialIcon href="https://twitter.com/devon_the_dev" externalClassName={baseClass}>
        <TiSocialTwitter />
      </SocialIcon>
    </div>
  );
}
