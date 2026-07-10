"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import ExternalLink from "@/components/common/ExternalLink";

interface SocialMediaIconProps {
  href: string;
  children: ReactNode;
  label: string;
  hoverColor?: string;
  externalClassName?: string;
}

/**
 * Renders a themed social link icon.
 *
 * @param props.href - Destination URL, opened in a new tab.
 * @param props.children - The icon glyph to render inside the link.
 * @param props.label - Accessible name; the icon itself has no visible text.
 * @param props.hoverColor - Tailwind class applied on hover, e.g. "hover:text-textGreen".
 * @param props.externalClassName - Extra classes merged onto the icon's wrapper span.
 * @returns An icon wrapped in an external link.
 */
export default function SocialMediaIcon({
  href,
  children,
  label,
  hoverColor = "hover:text-textGreen",
  externalClassName = "",
}: SocialMediaIconProps) {
  return (
    <ExternalLink href={href} aria-label={label}>
      <span
        className={cn(
          "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl transition-all duration-300 hover:-translate-y-2",
          hoverColor,
          externalClassName
        )}
      >
        {children}
      </span>
    </ExternalLink>
  );
}
