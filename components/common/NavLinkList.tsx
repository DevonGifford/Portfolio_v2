"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { stagger, staggerItem } from "@/lib/motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About", index: "01." },
  { id: "experience", label: "Experience", index: "02." },
  { id: "projects", label: "Projects", index: "03." },
  { id: "contact", label: "Contact", index: "04." },
];

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
            className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
          >
            {item.index && <span className="text-textGreen">{item.index}</span>}
            {item.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
