"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeIn, slideIn } from "@/lib/motion";
import { scrollToAnchor } from "@/lib/scroll";
import { outlineButton } from "@/components/common/OutlineButton";
import ExternalLink from "@/components/common/ExternalLink";
import { siteConfig } from "@/site.config";
import { logo } from "@/public/assets";
import NavLinkList from "@/components/common/NavLinkList";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-bodyColor px-4 shadow-navbarShadow">
      <div className="mx-auto flex max-w-container items-center justify-between py-4 font-titleFont">
        {/* Logo */}
        <motion.div {...fadeIn()}>
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
          <NavLinkList
            onClick={(e) => scrollToAnchor(e, { setActive: true, onNavigate: () => setShowMenu(false) })}
          />
          <ExternalLink href={siteConfig.resumePath}>
            <motion.button
              {...slideIn({ offset: -10, delay: 1.25 })}
              className={outlineButton("px-4 py-2 text-[13px]")}
            >
              Resume
            </motion.button>
          </ExternalLink>
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
