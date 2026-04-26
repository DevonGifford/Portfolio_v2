"use client";

import { motion } from "motion/react";
import { fadeIn, DURATION } from "@/lib/motion";
import { siteConfig } from "@/site.config";

export default function RightSide() {
  return (
    <motion.div
      {...fadeIn({ duration: DURATION.slow, delay: 1.5 })}
      className="flex h-full w-full flex-col items-center justify-end gap-40 text-textLight"
    >
      <a href={`mailto:${siteConfig.email}`}>
        <p className="w-62 rotate-90 cursor-pointer text-sm tracking-widest transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
          {siteConfig.email}
        </p>
      </a>
      <span className="inline-flex h-52 w-[2px] bg-textDark"></span>
    </motion.div>
  );
}
