"use client";

import { motion } from "motion/react";
import { fadeIn, DURATION } from "@/lib/animation/motion";
import SocialLinks from "../common/SocialLinks";

/**
 * Renders the fixed left-edge rail: social icons above a decorative divider.
 *
 * @returns The left side rail.
 */
export default function LeftSide() {
  return (
    <div className="text-textLight flex h-full w-full flex-col items-center justify-end gap-4">
      <motion.div
        {...fadeIn({ duration: DURATION.slow, delay: 1.5 })}
        className="flex flex-col gap-4"
      >
        <SocialLinks iconClassName="bg-hoverColor text-textLight" />
      </motion.div>
      <div className="bg-textDark h-32 w-[2px]"></div>
    </div>
  );
}
