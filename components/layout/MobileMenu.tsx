"use client";

import { forwardRef } from "react";
import { motion } from "motion/react";
import { fadeIn, slideIn, DURATION } from "@/lib/motion";
import { scrollToAnchor } from "@/lib/scroll";
import { outlineButton } from "../common/OutlineButton";
import ExternalLink from "../common/ExternalLink";
import { MdOutlineClose } from "react-icons/md";
import SocialLinks from "../common/SocialLinks";
import NavLinkList from "../common/NavLinkList";
import { siteConfig } from "@/site.config";

type Props = {
  onClose: () => void;
};

const MobileMenu = forwardRef<HTMLDivElement, Props>(function MobileMenu({ onClose }, ref) {
  return (
    <div
      ref={ref}
      onClick={(e) => {
        if (
          ref &&
          typeof ref === "object" &&
          "current" in ref &&
          ref.current instanceof HTMLElement &&
          e.target === ref.current
        ) {
          onClose();
        }
      }}
      className="right-end absolute top-0 flex h-screen w-full flex-col items-end bg-black bg-opacity-50 mdl:hidden"
    >
      <motion.div
        {...slideIn({ axis: "x", duration: 0.1 })}
        className="scrollbar-hide relative flex h-full w-[80%] flex-col items-center bg-cardColor px-4 py-16"
      >
        {/* Close Icon */}
        <MdOutlineClose
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer text-3xl text-textGreen hover:text-textGreen/80"
        />

        {/* Nav Items */}
        <div className="flex w-[80%] flex-col items-center gap-8 text-center text-base">
          <NavLinkList
            onClick={(e) => scrollToAnchor(e, { setActive: true, onNavigate: onClose })}
            isMobile
          />
        </div>

        {/* Resume */}
        <ExternalLink href={siteConfig.resumePath} className="pt-8">
          <motion.button
            {...fadeIn({ duration: DURATION.fast, delay: 0.8, ease: "easeIn" })}
            className={outlineButton("h-10 w-32 text-[13px]")}
          >
            Resume
          </motion.button>
        </ExternalLink>

        {/* Social Icons */}
        <motion.div {...slideIn({ axis: "x", duration: DURATION.fast, delay: 1 })}>
          <div className="flex gap-4 pt-4">
            <SocialLinks iconClassName="border-zinc-700 bg-bodyColor text-zinc-200" />
          </div>
        </motion.div>

        {/* Email */}
        <motion.a
          href={`mailto:${siteConfig.email}`}
          {...slideIn({ axis: "x", duration: DURATION.fast, delay: 1.6 })}
        >
          <p className="mt-4 w-72 pl-4 text-sm tracking-widest hover:text-textGreen">
            {siteConfig.email}
          </p>
        </motion.a>
      </motion.div>
    </div>
  );
});

export default MobileMenu;
