"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeIn, slideIn } from "@/lib/motion";
import { scrollToAnchor } from "@/lib/scroll";
import { outlineButton } from "@/components/common/OutlineButton";
import { siteConfig } from "@/site.config";
import { logo } from "@/public/assets";
import NavLinkList from "@/components/common/NavLinkList";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="bg-bodyColor shadow-navbarShadow sticky top-0 z-50 w-full px-4">
      <div className="max-w-container font-titleFont mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div {...fadeIn()}>
          <a href="#home" className="hover:animate-spin" aria-label="Home">
            <Image
              src={logo}
              alt="logo"
              className="sml:w-12 mt-2 w-10 rounded-full hover:animate-spin"
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="mdl:inline-flex hidden items-center gap-7">
          <NavLinkList
            onClick={(e) =>
              scrollToAnchor(e, { setActive: true, onNavigate: () => setShowMenu(false) })
            }
          />
          <motion.a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            {...slideIn({ offset: -10, delay: 0.6 })}
            className={outlineButton("px-4 py-2 text-[13px]")}
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          ref={hamburgerRef}
          type="button"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
          aria-expanded={showMenu}
          aria-controls="mobile-menu"
          className="group text-textGreen mdl:hidden flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl"
        >
          <span className="bg-textGreen inline-flex h-[2px] w-full transition-all duration-300 ease-in-out group-hover:translate-x-2" />
          <span className="bg-textGreen inline-flex h-[2px] w-full transition-all duration-300 ease-in-out" />
          <span className="bg-textGreen inline-flex h-[2px] w-full transition-all duration-300 ease-in-out group-hover:translate-x-3" />
        </button>

        {/* Mobile Menu */}
        {showMenu && (
          <MobileMenu
            ref={menuRef}
            onClose={() => {
              setShowMenu(false);
              hamburgerRef.current?.focus();
            }}
          />
        )}
      </div>
    </header>
  );
}
