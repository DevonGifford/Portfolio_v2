"use client";

import { motion } from "framer-motion"; // I assume you meant framer-motion, not "motion/react"
import React from "react";

const Banner = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="mx-auto flex h-full min-h-screen max-w-contentContainer flex-col justify-center gap-4 mdl:px-10 mdl:py-12 lgl:gap-8 xl:px-4"
    >
      {/* Hello World Heading */}
      <motion.h3
        className="font-codeFont text-xs tracking-wide text-textGreen md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        Hello World, my name is
      </motion.h3>

      {/* Name heading & Auto-Typing Array heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="flex flex-col font-titleFont text-3xl font-semibold md:text-4xl lgl:text-6xl"
      >
        Devon Gifford.{" "}
        <span className="mt-2 text-lg text-textDark md:text-2xl lg:text-3xl lgl:mt-4">
          INSERT TYPEWRITER EFFECT HERE LATER
        </span>
      </motion.h1>

      {/* Introductory Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        className="flex flex-col gap-1.5 text-sm font-medium text-textDark sml:text-base"
      >
        <div>
          Self taught software engineer with a strong focus on frontend development. I specialize in
          crafting web and mobile applications using React & TypeScript.
        </div>
        <div>
          Leveraging my background in Marketing and experience in Software Testing at a renowned{" "}
          <em>FAANG</em> company, my approach brings a unique perspective that prioritizes clean and
          reliable code.
        </div>
        <div className="mt-2 italic">Fully committed to the philosophy of lifelong learning.</div>
        <a href="#Projects" onClick={handleScroll} className="mt-2">
          <span className="group relative inline-flex h-7 cursor-pointer overflow-x-hidden text-textGreen">
            Capstone Projects
            {/* Animated underline bar */}
            <span className="absolute bottom-1 left-0 h-[1px] w-full translate-x-[110%] bg-textGreen transition-transform duration-500 group-hover:translate-x-0"></span>
          </span>
        </a>
      </motion.div>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="h-10 w-40 rounded-md border border-textGreen font-titleFont text-xs tracking-wide text-textGreen duration-300 hover:bg-hoverColor sml:h-14 sml:w-52 sml:text-sm"
      >
        <a href="/assets/DevonGifford-FullstackDeveloper-2024.pdf" download>
          Download my latest CV
        </a>
      </motion.button>
    </section>
  );
};

export default Banner;
