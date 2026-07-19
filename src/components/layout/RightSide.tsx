"use client";

import { motion } from "motion/react";
import { MdOutlineEmail } from "react-icons/md";
import { fadeIn, DURATION } from "@/lib/animation/motion";
import { siteConfig } from "@/content/site.config";

/**
 * Renders the fixed right-edge rail: a rotated mailto link and email icon above a decorative divider.
 *
 * @returns The right side rail.
 */
export default function RightSide() {
  return (
    <motion.div
      {...fadeIn({ duration: DURATION.slow, delay: 1.5 })}
      className="text-textLight flex h-full w-full flex-col items-center justify-end"
    >
      <a href={`mailto:${siteConfig.email}`} className="group flex flex-col items-center">
        <div className="flex h-60 items-center justify-center">
          <p className="group-hover:text-textGreen w-62 rotate-90 cursor-pointer text-sm tracking-widest transition-all duration-300 group-hover:-translate-y-2">
            {siteConfig.email}
          </p>
        </div>
        <span className="bg-hoverColor group-hover:text-textGreen inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl transition-all duration-300 group-hover:-translate-y-2">
          <MdOutlineEmail />
        </span>
      </a>
      <div className="bg-textDark mt-4 h-52 w-0.5"></div>
    </motion.div>
  );
}
