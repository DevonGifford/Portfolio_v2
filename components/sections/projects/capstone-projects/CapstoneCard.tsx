"use client";

import Image, { StaticImageData } from "next/image";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";
import ExternalLink from "@/components/common/ExternalLink";
import { cn } from "@/lib/utils";

interface CapstoneCardProps {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  imageUrl: string;
  gitLink: string;
  youtubeLink?: string;
  liveLink: string;
  techStackList: string[];
  layout?: "default" | "reversed";
}

export default function CapstoneCard({
  title,
  description,
  image,
  imageUrl,
  gitLink,
  youtubeLink,
  liveLink,
  techStackList,
  layout = "default",
}: CapstoneCardProps) {
  const isReversed = layout === "reversed";

  const links = (
    <div className="flex gap-4 text-2xl">
      <ExternalLink className="duration-300 hover:text-textGreen" href={gitLink}>
        <RiGithubLine />
      </ExternalLink>
      {youtubeLink && (
        <ExternalLink className="duration-300 hover:text-textGreen" href={youtubeLink}>
          <SlSocialYoutube />
        </ExternalLink>
      )}
      <ExternalLink className="duration-300 hover:text-textGreen" href={liveLink}>
        <FiExternalLink />
      </ExternalLink>
    </div>
  );

  return (
    <div className="mx-auto mt-10 flex max-w-containerSmall flex-col items-center justify-between gap-28">
      {/* DESKTOP (sml+) — single block; `reversed` only flips direction / margins / alignment */}
      <div
        className={cn(
          "hidden flex-col mdl:flex",
          isReversed ? "mr-10 gap-2 sml:flex-row-reverse" : "ml-16 gap-6 sml:flex-row",
        )}
      >
        {/* Image */}
        <ExternalLink
          className="group relative h-full w-full justify-center align-middle sml:w-1/2"
          href={liveLink}
        >
          <div>
            <Image {...image} className="h-full w-full rounded-lg object-contain" alt={image.alt} />
            <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-imageOverlay/50 duration-300 group-hover:bg-transparent md:inline-block" />
          </div>
        </ExternalLink>

        {/* Text */}
        <div
          className={cn(
            "z-10 flex w-full flex-col gap-6 sml:w-1/2 sml:justify-between",
            isReversed ? "md:-mr-20" : "items-end text-right md:-ml-16",
          )}
        >
          <p className="font-titleFont text-sm tracking-wide text-textGreen">Featured Project</p>
          <h3 className="text-2xl font-bold hover:text-textGreen">{title}</h3>

          <p
            className={cn(
              "rounded-md bg-cardColor text-sm md:text-base",
              isReversed ? "px-5 py-5" : "p-2 md:p-6",
            )}
          >
            {description}
          </p>

          <ul
            className={cn(
              "flex gap-2 font-titleFont text-xs tracking-wide text-textGreen md:gap-5 md:text-sm",
              !isReversed && "justify-between",
            )}
          >
            {techStackList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {links}
        </div>
      </div>

      {/* MOBILE (<mdl) — screenshot background with a bottom-up scrim for contrast */}
      <div
        className="relative mx-4 flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-lg border border-textLight/10 bg-cardColor bg-cover bg-center shadow-lg transition-shadow duration-300 hover:shadow-xl mdl:hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Contrast scrim — keeps all text legible over the screenshot */}
        <div className="absolute inset-0 bg-gradient-to-t from-bodyColor via-bodyColor/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 p-5">
          <p className="font-titleFont text-sm tracking-wide text-textGreen">Featured Project</p>
          <h3 className="font-titleFont text-2xl font-bold hover:text-textGreen">{title}</h3>
          <p className="text-sm text-textLight sml:text-base">{description}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 font-codeFont text-xs tracking-wide text-textGreen">
            {techStackList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {links}
        </div>
      </div>
    </div>
  );
}
