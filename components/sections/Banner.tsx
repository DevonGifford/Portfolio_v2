"use client";

import { motion } from "motion/react";
import Typewriter from "../common/TypeWriter";
import { fadeIn } from "@/lib/motion";
import { scrollToAnchor } from "@/lib/scroll";
import { outlineButton } from "../common/OutlineButton";
import { siteConfig } from "@/site.config";

export default function Banner() {
  return (
    <section
      id="home"
      className="max-w-contentContainer mdl:px-10 mdl:py-10 lgl:gap-6 mx-auto flex h-full min-h-screen flex-col justify-center gap-4 xl:px-4"
    >
      <motion.h3
        className="font-codeFont text-textGreen text-xs tracking-wide md:text-lg"
        {...fadeIn({ delay: 1 })}
      >
        Hello World, my name is
      </motion.h3>

      <motion.h1
        {...fadeIn({ delay: 1.1 })}
        className="font-titleFont lgl:text-6xl flex flex-col text-3xl font-semibold md:text-4xl"
      >
        {siteConfig.name}.
        <span className="text-textDark lgl:mt-4 mt-2 text-lg md:text-2xl lg:text-3xl">
          <Typewriter words={siteConfig.taglines} />
        </span>
      </motion.h1>

      <motion.div
        {...fadeIn({ delay: 1.2 })}
        className="text-textDark sml:text-base flex flex-col gap-1.5 text-sm font-medium"
      >
        <p>
          Self taught software engineer with a strong focus on frontend development. I specialize in
          crafting web and mobile applications using React & TypeScript.
        </p>
        <p>
          Leveraging my background in Marketing and experience in Software Testing at a renowned{" "}
          <em>FAANG</em> company, my approach brings a unique perspective that prioritizes clean and
          reliable code.
        </p>
        <p className="mt-2 italic">Fully committed to the philosophy of lifelong learning.</p>
        <a href="#projects" onClick={scrollToAnchor} className="mt-2">
          <span className="group text-textGreen relative inline-flex h-7 cursor-pointer overflow-x-hidden">
            Capstone Projects
            <span className="bg-textGreen absolute bottom-1 left-0 h-px w-full translate-x-[110%] transition-transform duration-500 group-hover:translate-x-0" />
          </span>
        </a>
      </motion.div>

      {/* CV Download 'Button' */}
      <motion.div {...fadeIn({ delay: 1.3 })}>
        <a
          href={siteConfig.resumePath}
          download
          className={outlineButton(
            "font-titleFont sml:h-14 sml:w-52 sml:text-sm inline-flex h-10 w-40 items-center justify-center text-xs tracking-wide"
          )}
        >
          Download my latest CV
        </a>
      </motion.div>
    </section>
  );
}
