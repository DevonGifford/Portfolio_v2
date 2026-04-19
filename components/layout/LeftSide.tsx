"use client";

import { motion } from "motion/react";
import { fadeIn, DURATION } from "@/lib/motion";
import SocialLinks from "../common/SocialLinks";

export default function LeftSide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-4 text-textLight">
      <motion.div
        {...fadeIn({ duration: DURATION.slow, delay: 3 })}
        className="flex flex-col gap-4"
      >
        <SocialLinks iconClassName="bg-hoverColor text-textLight" />
      </motion.div>
      <div className="h-32 w-[2px] bg-textDark"></div>
    </div>
  );
}
