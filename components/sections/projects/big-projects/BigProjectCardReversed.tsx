"use client";

import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";

import Image, { ImageProps } from "next/image";

type Props = {
  image: ImageProps;
  title: string;
  description: string;
  gitLink: string;
  youtubeLink: string;
  liveLink: string;
  techStackList: string[];
  imageUrl: string;
};

const ProjectCardReversed: React.FC<Props> = ({
  image,
  title,
  description,
  gitLink,
  youtubeLink,
  liveLink,
  techStackList,
  imageUrl,
}) => {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div>
      <div className="mt-10 flex max-w-containerSmall flex-col items-center justify-between gap-28">
        {/* MEDIA QUEREY: LARGE SCREENS */}
        <div className="mr-10 hidden flex-col gap-2 sml:flex-row-reverse mdl:flex">
          {/* Image-div*/}

          <a
            className="group relative h-full w-full justify-center align-middle sml:w-1/2"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              {/* Actual Image */}
              <Image {...image} className="h-full w-full rounded-lg object-contain" alt="" />

              {/* Green overlay */}
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-imageOverlay/50 duration-300 group-hover:bg-transparent md:inline-block"></div>
            </div>
          </a>

          {/* Text-div */}
          <div className="z-10 flex w-full flex-col gap-6 sml:w-1/2 sml:justify-between md:-mr-20">
            {/* heading section */}
            <p className="font-titleFont text-sm tracking-wide text-textGreen">Featured Project</p>
            <h3 className="text-2xl font-bold hover:text-textGreen">{title}</h3>

            {/* description block */}
            <p className="rounded-md bg-[#112240] px-5 py-5 text-sm md:text-base">{description}</p>

            {/* list of tech used */}
            <ul className="flex gap-2 font-titleFont text-xs tracking-wide text-textGreen md:gap-5 md:text-sm">
              {techStackList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Links to showcase project  🎯TO-DO */}
            <div className="flex gap-4 text-2xl">
              {/* GitHub */}
              <a
                className="duration-300 hover:text-textGreen"
                href={gitLink}
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubLine />
              </a>
              {/* YouTube */}
              <a
                className="duration-300 hover:text-textGreen"
                href={youtubeLink}
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialYoutube />
              </a>
              {/* LiveDemo */}
              <a
                className="duration-300 hover:text-textGreen"
                href={liveLink}
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>

        {/* MEDIA QUEREY: MOBILE SCREENS */}
        <div
          className="mx-4 flex-col rounded-lg bg-cover bg-no-repeat shadow-inner hover:shadow-xl mdl:hidden"
          style={divStyle}
        >
          <div className="z-10 mx-3 flex w-fit flex-col gap-6 px-5">
            {/* Header section */}
            <p className="pt-5 font-titleFont text-sm tracking-wide text-textGreen">
              Featured Project
            </p>
            <h3 className="font-titleFont text-2xl font-bold hover:text-textGreen"> {title} </h3>

            {/* description block */}
            <p className="-translate-x-2 rounded-md bg-black bg-opacity-50 px-2 py-3 text-xs sml:text-base">
              {description}
            </p>

            {/* list of tech used */}
            <ul className="flex gap-5 font-codeFont text-xs tracking-wide text-textGreen">
              {techStackList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Links to showcase project  🎯TO-DO */}
            <div className="flex items-end gap-4 pb-10 text-right text-2xl">
              {/* GitHub */}
              <a
                className="duration-300 hover:text-textGreen"
                href={gitLink}
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubLine />
              </a>
              {/* YouTube */}
              <a
                className="duration-300 hover:text-textGreen"
                href={youtubeLink}
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialYoutube />
              </a>
              {/* LiveDemo */}
              <a
                className="duration-300 hover:text-textGreen"
                href={youtubeLink}
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardReversed;
