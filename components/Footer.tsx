"use client";

import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className="inline-flex w-full items-center justify-center gap-4 xl:hidden">
        {/* Github Icon */}
        <a href="https://github.com/DevonGifford" target="_blank" rel="noreferrer">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <SiGithub />
          </span>
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/dbgifford/" target="_blank" rel="noreferrer">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <BsLinkedin />
          </span>
        </a>
        {/* Twitter Icon */}
        <a href="https://twitter.com/devon_the_dev" target="_blank" rel="noreferrer">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <TiSocialTwitter />
          </span>
        </a>
      </div>
      <p className="justify-center py-3 text-center text-xs">
        Built from scratch by{" "}
        <a
          href="https://www.linkedin.com/in/dbgifford/"
          target="_blank"
          className="text-textGreen"
          rel="noreferrer"
        >
          Devon Gifford
        </a>
        <br />
        Inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="text-textGreen"
          rel="noreferrer"
        >
          {" "}
          Brittany Chiang
        </a>
      </p>
    </div>
  );
};

export default Footer;
