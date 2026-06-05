"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { stagger, staggerItem } from "@/lib/motion";
import { siteConfig } from "@/site.config";

/** `as const` gives each entry its own literal type; widen to one shape. */
const navItems: readonly { id: string; label: string; index?: string }[] = siteConfig.nav;

/**
 * Renders animated navigation links for desktop or mobile layouts.
 *
 * @param props - Navigation list options.
 * @param props.onClick - Handler called when a navigation link is clicked.
 * @param props.isMobile - Whether to render the mobile layout and animation direction.
 * @returns An animated navigation link list.
 */
export default function NavLinkList({
  onClick,
  isMobile = false,
}: {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isMobile?: boolean;
}) {
  return (
    <motion.ul
      className={cn("flex", isMobile ? "flex-col gap-12 pt-12" : "gap-7 text-[13px]")}
      variants={stagger(isMobile ? { each: 0.1, delayChildren: 0.1 } : { each: 0.25 })}
      initial="hidden"
      animate="show"
    >
      {navItems.map((item) => (
        <motion.li key={item.id} variants={staggerItem(isMobile ? "x" : "y")}>
          <Link
            href={`#${item.id}`}
            onClick={onClick}
            className="nav-link text-textDark hover:text-textGreen flex cursor-pointer items-center gap-1 font-medium duration-300"
          >
            {item.index && <span className="text-textGreen">{item.index}</span>}
            {item.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
