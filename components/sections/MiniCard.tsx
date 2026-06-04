"use client";

import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import ExternalLink from "@/components/common/ExternalLink";

interface MiniProjectCardProps {
  title: string;
  description: string;
  gitLink: string;
  liveLink: string;
  listItems: string[];
}

export default function MiniProjectCard({
  title,
  description,
  gitLink,
  liveLink,
  listItems,
}: MiniProjectCardProps) {
  return (
    <div className="group bg-cardColor flex h-72 w-full max-w-[320px] min-w-[280px] flex-col justify-center gap-6 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2">
      {/* Icon-Links */}
      <div className="flex items-center justify-between">
        {/* GITHUB LINK */}
        <ExternalLink href={gitLink} aria-label={`${title} source code`}>
          <RiGithubLine className="hover:text-textGreen text-2xl" />
        </ExternalLink>

        {/* LIVE LINK */}
        <ExternalLink href={liveLink} aria-label={`${title} live site`}>
          <FiExternalLink className="hover:text-textGreen text-2xl" />
        </ExternalLink>
      </div>

      {/* Text Portion  */}
      <div>
        {/* TITLE */}
        <ExternalLink href={liveLink}>
          <h2 className="font-titleFont group-hover:text-textGreen text-xl font-semibold tracking-wide">
            {title}
          </h2>
        </ExternalLink>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm">{description}</p>
      </div>

      {/* TECH STACK */}
      <ul className="text-textDark mdl:text-sm flex flex-wrap items-center justify-between gap-2 text-xs">
        {listItems.map((item) => (
          <li className="hover:text-textGreen" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
