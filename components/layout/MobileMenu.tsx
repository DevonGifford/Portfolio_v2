"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import SocialIconList from "../common/SocialIconList";
import NavLinkList from "../common/NavLinkList";

type Props = {
  onClose: () => void;
};

const MobileMenu = forwardRef<HTMLDivElement, Props>(({ onClose }, ref) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    const id = e.currentTarget.href.split("#")[1];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

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
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="scrollbar-hide relative flex h-full w-[80%] flex-col items-center bg-[#112240] px-4 py-16"
      >
        {/* Close Icon */}
        <MdOutlineClose
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer text-3xl text-textGreen hover:text-textGreen/80"
        />

        {/* Nav Items */}
        <div className="flex w-[80%] flex-col items-center gap-8 text-center text-base">
          <NavLinkList onClick={handleScroll} isMobile />
        </div>

        {/* Resume */}
        <a href="/assets/DevonGifford-FullstackDeveloper-2024.pdf" target="_blank" className="pt-8">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.8,
              ease: "easeIn",
            }}
            className="h-10 w-32 rounded-md border border-textGreen text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
          >
            Resume
          </motion.button>
        </a>

        {/* Social Icons */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 1 }}
        >
          <SocialIconList className="pt-4" />
        </motion.div>

        {/* Email */}
        <motion.a
          href="mailto:devongifford@outlook.com"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.6 }}
        >
          <p className="mt-4 w-72 pl-4 text-sm tracking-widest hover:text-textGreen">
            devongifford@outlook.com
          </p>
        </motion.a>
      </motion.div>
    </div>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
