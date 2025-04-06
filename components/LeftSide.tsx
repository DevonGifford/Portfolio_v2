"use client";

import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-4 text-textLight">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 3 }}
        className="flex flex-col gap-4"
      >
        {/* Github Icon */}
        <a href="https://github.com/DevonGifford" target="_blank" rel="noreferrer">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <SiGithub />
          </span>
        </a>
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/dbgifford/" target="_blank" rel="noreferrer">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <BsLinkedin />
          </span>
        </a>
        {/* Twitter Icon */}
        <a href="https://twitter.com/devon_the_dev" target="_blank" rel="noreferrer">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <TiSocialTwitter />
          </span>
        </a>
      </motion.div>
      <div className="h-32 w-[2px] bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
