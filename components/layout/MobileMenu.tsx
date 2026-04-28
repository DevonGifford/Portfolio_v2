"use client";

import { forwardRef, useEffect, useRef } from "react";
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
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>('a[href], button, [tabindex]:not([tabindex="-1"])')
      );

    getFocusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();

        return;
      }

      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

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
      className="right-end bg-opacity-50 mdl:hidden absolute top-0 flex h-screen w-full flex-col items-end bg-black"
    >
      <motion.div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        {...slideIn({ axis: "x", duration: 0.1 })}
        className="scrollbar-hide bg-cardColor relative flex h-full w-[80%] flex-col items-center px-4 py-16"
      >
        {/* Close Icon */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="text-textGreen hover:text-textGreen/80 absolute top-4 right-4 cursor-pointer text-3xl"
        >
          <MdOutlineClose />
        </button>

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
          <p className="hover:text-textGreen mt-4 w-72 pl-4 text-sm tracking-widest">
            {siteConfig.email}
          </p>
        </motion.a>
      </motion.div>
    </div>
  );
});

export default MobileMenu;
