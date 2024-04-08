import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";

import { ImageProps } from "next/image";
import Image from "next/image";

type Props = {
  image: ImageProps;
  title: string;
  description: string;
  gitLink: string;
  youtubeLink?: string;
  liveLink: string;
  techStackList: string[];
  imageUrl: string;
};

const ProjectCard: React.FC<Props> = ({
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
      <div className="max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10">
        {/* MEDIA QUERY: LARGE SCREENS */}
        <div className="hidden flex-col mdl:flex sml:flex-row gap-6 ml-16">
          {/* Image-div*/}
          <a
            className="w-full h-full justify-center align-middle relative group sml:w-1/2"
            href={liveLink}
            target="_blank"
          >
            <div>
              {/* Actual Image */}
              <Image
                {...image}
                className="w-full h-full object-contain rounded-lg"
                alt=""
              />

              {/* Green overlay */}
              <div className="absolute w-full h-full bg-imageOverlay/50 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300 md:inline-block"></div>
            </div>
          </a>
          {/* Text-div */}
          <div className="w-full z-10 sml:w-1/2 flex flex-col gap-6 sml:justify-between items-end text-right md:-ml-16 ">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold hover:text-textGreen">
              {" "}
              {title}{" "}
            </h3>
            {/* description block */}
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              {description}
            </p>
            {/* list of tech used */}
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen">
              {techStackList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {/* Links to showcase project  🎯TO-DO */}
            <div className="text-2xl flex gap-4">
              {/* GitHub */}
              <a
                className="hover:text-textGreen duration-300"
                href={gitLink}
                target="_blank"
              >
                <RiGithubLine />
              </a>
              {/* YouTube */}
              <a
                className="hover:text-textGreen duration-300"
                href={youtubeLink}
                target="_blank"
              >
                <SlSocialYoutube />
              </a>
              {/* LiveDemo */}
              <a
                className="hover:text-textGreen duration-300"
                href={liveLink}
                target="_blank"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>

        {/* MEDIA QUERY: MOBILE SCREENS */}
        <div
          className="hover:shadow-xl shadow-inner bg-no-repeat bg-cover flex-col rounded-lg mx-4 mdl:hidden"
          style={divStyle}
        >
          <div className="w-fit px-5 z-10 flex flex-col gap-6 mx-3">
            {/* Header section */}
            <p className="font-titleFont text-textGreen text-sm tracking-wide pt-5">
              Featured Project
            </p>
            <h3 className="font-titleFont text-2xl font-bold hover:text-textGreen">
              {" "}
              {title}{" "}
            </h3>

            {/* description block */}
            <p className="text-xs sml:text-base rounded-md bg-black bg-opacity-50 px-2 py-3 -translate-x-2">
              {description}
            </p>

            {/* list of tech used */}
            <ul className="text-xs font-codeFont tracking-wide flex gap-5 text-textGreen">
              {techStackList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Links to showcase project  */}
            <div className="text-2xl flex gap-4 pb-10 items-end text-right">
              <a
                className="hover:text-textGreen duration-300"
                href={gitLink}
                target="_blank"
              >
                <RiGithubLine />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href={youtubeLink}
                target="_blank"
              >
                <SlSocialYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href={youtubeLink}
                target="_blank"
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

export default ProjectCard;
