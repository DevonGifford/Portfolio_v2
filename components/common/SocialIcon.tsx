"use client";

import React from "react";

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  hoverColor?: string;
  externalClassName?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  children,
  hoverColor = "hover:text-textGreen",
  externalClassName = "",
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <span
        className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl transition-all duration-300 hover:-translate-y-2 ${hoverColor} ${externalClassName}`}
      >
        {children}
      </span>
    </a>
  );
};

export default SocialIcon;
