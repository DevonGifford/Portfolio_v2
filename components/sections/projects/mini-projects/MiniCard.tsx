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
    <div className="group flex h-72 w-full min-w-[280px] max-w-[320px] flex-col justify-center gap-6 rounded-lg bg-cardColor p-6 transition-transform duration-300 hover:-translate-y-2">
      {/* Icon-Links */}
      <div className="flex items-center justify-between">
        {/* GITHUB LINK */}
        <ExternalLink href={gitLink}>
          <RiGithubLine className="text-2xl hover:text-textGreen" />
        </ExternalLink>

        {/* LIVE LINK */}
        <ExternalLink href={liveLink}>
          <FiExternalLink className="text-2xl hover:text-textGreen" />
        </ExternalLink>
      </div>

      {/* Text Portion  */}
      <div>
        {/* TITLE */}
        <ExternalLink href={liveLink}>
          <h2 className="font-titleFont text-xl font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
        </ExternalLink>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm">{description}</p>
      </div>

      {/* TECH STACK */}
      <ul className="flex flex-wrap items-center justify-between gap-2 text-xs text-textDark mdl:text-sm">
        {listItems.map((item) => (
          <li className="hover:text-textGreen" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
