"use client";

import { cn } from "@/lib/utils";
import ExternalLink from "@/components/common/ExternalLink";

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  hoverColor?: string;
  externalClassName?: string;
}

export default function SocialIcon({
  href,
  children,
  hoverColor = "hover:text-textGreen",
  externalClassName = "",
}: SocialIconProps) {
  return (
    <ExternalLink href={href}>
      <span
        className={cn(
          "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl transition-all duration-300 hover:-translate-y-2",
          hoverColor,
          externalClassName,
        )}
      >
        {children}
      </span>
    </ExternalLink>
  );
}
