"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { logo } from "@/public/assets";
import NavLinkList from "@/components/common/NavLinkList";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowMenu(false);

    const href = e.currentTarget.href;
    const id = href.split("#")[1];
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: "smooth" });

    document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-bodyColor px-4 shadow-navbarShadow">
      <div className="mx-auto flex max-w-container items-center justify-between py-4 font-titleFont">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="hover:animate-spin">
            <Image
              src={logo}
              alt="logo"
              className="mt-2 w-10 rounded-full hover:animate-spin sml:w-12"
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 mdl:inline-flex">
          <NavLinkList onClick={handleScroll} />
          <a href="/assets/DevonGifford-FullstackDeveloper-2025.pdf" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="rounded-md border border-textGreen px-4 py-2 text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
            >
              Resume
            </motion.button>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div
          onClick={() => setShowMenu(true)}
          className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-textGreen mdl:hidden"
        >
          <span className="inline-flex h-[2px] w-full bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-2" />
          <span className="inline-flex h-[2px] w-full bg-textGreen transition-all duration-300 ease-in-out" />
          <span className="inline-flex h-[2px] w-full bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-3" />
        </div>

        {/* Mobile Menu */}
        {showMenu && <MobileMenu ref={menuRef} onClose={() => setShowMenu(false)} />}
      </div>
    </header>
  );
}
