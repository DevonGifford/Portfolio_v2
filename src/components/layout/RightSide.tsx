"use client";

import { motion } from "motion/react";
import { fadeIn, DURATION } from "@/lib/animation/motion";
import { siteConfig } from "@/content/site.config";

/**
 * Renders the fixed right-edge rail: a rotated mailto link above a decorative divider.
 *
 * @returns The right side rail.
 */
export default function RightSide() {
  return (
    <motion.div
      {...fadeIn({ duration: DURATION.slow, delay: 1.5 })}
      className="text-textLight flex h-full w-full flex-col items-center justify-end gap-40"
    >
      <a href={`mailto:${siteConfig.email}`}>
        <p className="hover:text-textGreen w-62 rotate-90 cursor-pointer text-sm tracking-widest transition-all duration-300 hover:-translate-y-2">
          {siteConfig.email}
        </p>
      </a>
      <div className="bg-textDark h-52 w-[2px]"></div>
    </motion.div>
  );
}
