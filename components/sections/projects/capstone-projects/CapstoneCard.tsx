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
      <ExternalLink
        className="hover:text-textGreen duration-300"
        href={gitLink}
        aria-label={`${title} source code`}
      >
        <RiGithubLine />
      </ExternalLink>
      {youtubeLink && (
        <ExternalLink
          className="hover:text-textGreen duration-300"
          href={youtubeLink}
          aria-label={`${title} demo video`}
        >
          <SlSocialYoutube />
        </ExternalLink>
      )}
      <ExternalLink
        className="hover:text-textGreen duration-300"
        href={liveLink}
        aria-label={`${title} live site`}
      >
        <FiExternalLink />
      </ExternalLink>
    </div>
  );

  return (
    <div className="max-w-containerSmall mx-auto mt-10 flex flex-col items-center justify-between gap-28">
      {/* DESKTOP (sml+) — single block; `reversed` only flips direction / margins / alignment */}
      <div
        className={cn(
          "mdl:flex hidden flex-col",
          isReversed ? "sml:flex-row-reverse mr-10 gap-2" : "sml:flex-row ml-16 gap-6"
        )}
      >
        {/* Image */}
        <ExternalLink
          className="group sml:w-1/2 relative h-full w-full justify-center align-middle"
          href={liveLink}
        >
          <div>
            <Image {...image} className="h-full w-full rounded-lg object-contain" alt={image.alt} />
            <div className="bg-imageOverlay/50 absolute top-0 left-0 h-full w-full rounded-lg duration-300 group-hover:bg-transparent md:inline-block" />
          </div>
        </ExternalLink>

        {/* Text */}
        <div
          className={cn(
            "sml:w-1/2 sml:justify-between z-10 flex w-full flex-col gap-6",
            isReversed ? "md:-mr-20" : "items-end text-right md:-ml-16"
          )}
        >
          <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
          <h3 className="hover:text-textGreen text-2xl font-bold">{title}</h3>

          <p
            className={cn(
              "bg-cardColor rounded-md text-sm md:text-base",
              isReversed ? "px-5 py-5" : "p-2 md:p-6"
            )}
          >
            {description}
          </p>

          <ul
            className={cn(
              "font-titleFont text-textGreen flex gap-2 text-xs tracking-wide md:gap-5 md:text-sm",
              !isReversed && "justify-between"
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
        className="border-textLight/10 bg-cardColor mdl:hidden relative mx-4 flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-lg border bg-cover bg-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Contrast scrim — keeps all text legible over the screenshot */}
        <div className="from-bodyColor via-bodyColor/80 absolute inset-0 bg-gradient-to-t to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 p-5">
          <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
          <h3 className="font-titleFont hover:text-textGreen text-2xl font-bold">{title}</h3>
          <p className="text-textLight sml:text-base text-sm">{description}</p>
          <ul className="font-codeFont text-textGreen flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-wide">
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
