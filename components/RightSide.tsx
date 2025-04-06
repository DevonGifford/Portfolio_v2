"use client";

import React from "react";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 3 }}
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
};

export default RightSide;
