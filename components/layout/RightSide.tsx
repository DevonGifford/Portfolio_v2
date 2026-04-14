"use client";

import { motion } from "motion/react";
import { fadeIn, DURATION } from "@/lib/motion";

export default function RightSide() {
  return (
    <motion.div
      {...fadeIn({ duration: DURATION.slow, delay: 3 })}
      className="flex h-full w-full flex-col items-center justify-end gap-40 text-textLight"
    >
      <a href="mailto:devongifford@outlook.com">
        <p className="w-62 rotate-90 cursor-pointer text-sm tracking-widest transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
          devongifford@outlook.com
        </p>
      </a>
      <span className="inline-flex h-52 w-[2px] bg-textDark"></span>
    </motion.div>
  );
}
