"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { logo } from "@/public/assets";
import { MdOutlineClose } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    //Updating the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      //do something with myRef
      setShowMenu(false);
    }
  }

  return (
    <div className="h-18 sticky top-0 z-50 w-full bg-bodyColor px-4 shadow-navbarShadow lg:h-[06vh]">
      <div className="mx-auto flex h-full max-w-container items-center justify-between py-1 font-titleFont">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a className="hover:animate-spin" href="#home">
            <Image
              className="mt-2 w-12 rounded-full hover:animate-spin sml:w-16"
              src={logo}
              alt="logo"
            />
          </a>
        </motion.div>
        <div className="hidden items-center gap-7 mdl:inline-flex">
          <ul className="flex gap-7 text-[13]">
            {/* HOME */}
            <Link
              href="#home"
              onClick={handleScroll}
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Home
              </motion.li>
            </Link>
            {/* ABOUT */}
            <Link
              href="#about"
              onClick={handleScroll}
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <span className="text-textGreen">01.</span>
                About
              </motion.li>
            </Link>
            {/* EXPERIENCE */}
            <Link
              href="#Experience"
              onClick={handleScroll}
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-textGreen">02.</span>
                Experience
              </motion.li>
            </Link>
            {/* Projects */}
            <Link
              href="#Projects"
              onClick={handleScroll}
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <span className="text-textGreen">03.</span>
                Projects
              </motion.li>
            </Link>
            {/* CONTACT */}
            <Link
              href="#contact"
              onClick={handleScroll}
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <span className="text-textGreen">04.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          {/* RESUME BUTTON */}
          <a href="/assets/DevonGifford-FullstackDeveloper-2024.pdf" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="rounded-md border border-textGreen px-4 py-2 text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon Section*/}
        <div
          onClick={() => setShowMenu(true)}
          className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-textGreen mdl:hidden"
        >
          <span className="transiton-all inline-flex h-[2px] w-full transform bg-textGreen duration-300 ease-in-out group-hover:translate-x-2"></span>
          <span className="transiton-all inline-flex h-[2px] w-full transform bg-textGreen duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="transiton-all inline-flex h-[2px] w-full transform bg-textGreen duration-300 ease-in-out group-hover:translate-x-3"></span>
        </div>

        {/* Menu for mobile view */}
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="right-end absolute top-0 flex h-screen w-full flex-col items-end bg-black bg-opacity-50 mdl:hidden"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.1,
              }}
              className="scrollbar-hide relative flex h-full w-[80%] flex-col items-center bg-[#112240] px-4 py-16"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="absolute right-4 top-4 cursor-pointer text-3xl text-textGreen hover:text-textGreen/80"
              />

              {/* ITEMS CONTAINER */}
              <div className="flex w-[80%] flex-col items-center gap-8 text-center text-base">
                {/* List of Section Mobile View */}
                <ul className="items-left flex flex-col gap-12 pt-12 text-base">
                  {/* HOME */}
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeIn",
                      }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  {/* ABOUT */}
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen"> 01. </span>
                      About
                    </motion.li>
                  </Link>
                  {/* EXPERIENCE */}
                  <Link
                    href="#Experience"
                    onClick={handleScroll}
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">02. </span>
                      Experience
                    </motion.li>
                  </Link>
                  {/* projects */}
                  <Link
                    href="#Projects"
                    onClick={handleScroll}
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">03. </span>
                      Projects
                    </motion.li>
                  </Link>
                  {/* CONTACT */}
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.5,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">04. </span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                {/* RESUME BUTTON */}
                <a
                  href="/assets/DevonGifford-FullstackDeveloper-2024.pdf"
                  target="_blank"
                  className="pt-8"
                >
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
                {/* ICONS for Mobile view */}
                <div className="flex gap-4 pt-4">
                  {/* Github Icon */}
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 1,
                      ease: "easeIn",
                    }}
                    href="https://github.com/DevonGifford"
                    target="_blank"
                  >
                    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
                      <SiGithub />
                    </span>
                  </motion.a>

                  {/* LinkedIn Icon */}
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 1.2,
                      ease: "easeIn",
                    }}
                    href="https://www.linkedin.com/in/dbgifford/"
                    target="_blank"
                  >
                    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
                      <BsLinkedin />
                    </span>
                  </motion.a>

                  {/* Twitter Icon */}
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 1.4,
                      ease: "easeIn",
                    }}
                    href="https://twitter.com/devon_the_dev"
                    target="_blank"
                  >
                    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-700 bg-bodyColor text-xl text-zinc-200 transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
                      <TiSocialTwitter />
                    </span>
                  </motion.a>
                </div>

                {/* Email for Mobile View */}
                <motion.a
                  href="mailto:devongifford@outlook.com"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: 1.6,
                    ease: "easeIn",
                  }}
                >
                  <p className="mt-4 w-72 pl-4 text-sm tracking-widest hover:text-textGreen">
                    devongifford@outlook.com
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
