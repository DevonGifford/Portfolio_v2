"use client";

import { motion } from "motion/react";
import Typewriter from "../common/TypeWriter";
import { fadeIn } from "@/lib/animation/motion";
import { scrollToAnchor } from "@/lib/utils/scroll";
import { outlineButton } from "../common/OutlineButton";
import { siteConfig } from "@/content/site.config";
import RichText from "../common/RichText";
import type { Banner as BannerCopy } from "@/lib/content";

/**
 * @param props.copy - Parsed hero copy.
 */
export default function Banner({ copy }: { copy: BannerCopy }) {
  return (
    <section
      id="home"
      className="max-w-contentContainer mdl:px-10 mdl:py-10 lgl:gap-6 mx-auto flex h-full min-h-screen flex-col justify-center gap-4 xl:px-4"
    >
      <motion.h3
        className="font-codeFont text-textGreen text-xs tracking-wide md:text-lg"
        {...fadeIn({ delay: 1 })}
      >
        {copy.greeting}
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
        {copy.paragraphs.map((paragraph, index) => (
          <p key={index}>
            <RichText paragraph={paragraph} />
          </p>
        ))}
        <p className="mt-2 italic">{copy.closing}</p>
        <a href={copy.cta.href} onClick={scrollToAnchor} className="mt-2">
          <span className="group text-textGreen relative inline-flex h-7 cursor-pointer overflow-x-hidden">
            {copy.cta.label}
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
          {copy.resumeLabel}
        </a>
      </motion.div>
    </section>
  );
}
