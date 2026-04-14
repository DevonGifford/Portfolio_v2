"use client";

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { motion } from "motion/react";
import { fadeIn, DURATION } from "@/lib/motion";
import SocialIcon from "../common/SocialIcon";

export default function LeftSide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-4 text-textLight">
      <motion.div {...fadeIn({ duration: DURATION.slow, delay: 3 })} className="flex flex-col gap-4">
        <SocialIcon
          href="https://github.com/DevonGifford"
          externalClassName="bg-hoverColor text-textLight"
        >
          <SiGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/dbgifford/"
          externalClassName="bg-hoverColor text-textLight"
        >
          <BsLinkedin />
        </SocialIcon>
        <SocialIcon
          href="https://twitter.com/devon_the_dev"
          externalClassName="bg-hoverColor text-textLight"
        >
          <TiSocialTwitter />
        </SocialIcon>
      </motion.div>
      <div className="h-32 w-[2px] bg-textDark"></div>
    </div>
  );
}
