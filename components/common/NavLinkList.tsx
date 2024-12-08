"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About", index: "01." },
  { id: "Experience", label: "Experience", index: "02." },
  { id: "Projects", label: "Projects", index: "03." },
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
    <ul className={`flex ${isMobile ? "flex-col gap-12 pt-12" : "gap-7 text-[13px]"}`}>
      {navItems.map((item, i) => (
        <motion.li
          key={item.id}
          initial={{ [isMobile ? "x" : "y"]: 20, opacity: 0 }}
          animate={{ [isMobile ? "x" : "y"]: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: isMobile ? 0.1 + i * 0.1 : i * 0.25 }}
        >
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
    </ul>
  );
}
