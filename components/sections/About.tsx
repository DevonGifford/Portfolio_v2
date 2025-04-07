"use client";

import React from "react";
import Image from "next/image";
import {
  profileImgCircle,
  ReactL,
  Next,
  Redux,
  JavaScriptL,
  TypeScript,
  Python,
  Docker,
  NodeJS,
  Jest,
  Playwright,
  Tailwind,
  Vite,
  Remix,
  Neovim,
  Electron,
} from "@/public/assets";
import SectionTitle from "../common/SectionTitle";

// SkillIcon component
const SkillIcon = ({
  src,
  alt,
  title,
  className = "w-12 max-md:w-6 rounded-full",
}: {
  src: any;
  alt: string;
  title: string;
  className?: string;
}) => (
  <li className="flex items-center transition-all duration-300 hover:-translate-y-2">
    <Image
      className={`${className} hover:animate-pulse hover:contrast-150`}
      src={src}
      alt={alt}
      title={title}
      loading="lazy"
    />
  </li>
);

const skillGroups = [
  {
    title: "Hard Skills",
    skills: [
      { src: TypeScript, alt: "TypeScript", title: "TypeScript" },
      {
        src: JavaScriptL,
        alt: "JavaScript",
        title: "JavaScript",
        className: "rounded-full w-12 max-md:w-6",
      },

      { src: ReactL, alt: "React", title: "React", className: "w-14 max-md:w-7" },
      { src: Next, alt: "NextJS", title: "NextJS" },
      { src: Vite, alt: "Vite", title: "Vite", className: "w-14 max-md:w-6" },
      { src: Jest, alt: "Jest", title: "Jest", className: "w-10 max-md:w-6 rounded-none" },
      {
        src: Playwright,
        alt: "PlayWright",
        title: "PlayWright",
        className: "w-16 md:translate-x-1 max-md:w-6",
      },
      { src: Tailwind, alt: "Tailwind", title: "Tailwind", className: "w-12 max-md:w-8" },
      { src: Docker, alt: "Docker", title: "Docker", className: "w-16 max-md:w-8" },
      { src: Redux, alt: "Redux", title: "Redux", className: "w-10 max-md:w-6 rounded-none" },
      { src: NodeJS, alt: "NodeJS", title: "NodeJS", className: "w-14 max-md:w-6" },
      { src: Python, alt: "Python", title: "Python", className: "w-14 max-md:w-7" },
    ],
  },
  {
    title: "Currently Exploring",
    skills: [
      { src: Remix, alt: "Remix", title: "Remix", className: "w-14 max-md:w-6" },
      { src: Neovim, alt: "Neovim", title: "Neovim", className: "w-14 max-md:w-6" },
      { src: Electron, alt: "Electron", title: "Electron", className: "w-14 max-md:w-6" },
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex h-screen max-w-containerSmall flex-col justify-center gap-8 py-96 mdl:px-10 lgl:py-32"
    >
      <div className="flex items-center gap-10 pt-20 sml:pt-5">
        <SectionTitle titleNumber="0.1" titleName="About me" />
      </div>

      {/* CONTENT CONTAINER - GRID */}
      <div className="grid auto-rows-auto grid-cols-6">
        {/* Text block + mobile profile image */}
        <div className="col-start-1 col-end-5 row-span-2 text-base font-medium text-textDark max-mdl:col-span-full">
          <div className="text-xs sm:text-sm sml:text-base mdl:w-11/12">
            <div className="float-right py-6 pl-5">
              <div className="relative">
                <Image
                  className="left-0 top-0 w-24 rounded-full border-2 border-textGreen sm:w-32 sml:w-40 md:w-48 mdl:hidden"
                  src={profileImgCircle}
                  alt="profilepicture"
                />
                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-textGreen/20 duration-300 hover:bg-transparent sm:h-32 sm:w-32 sml:h-40 sml:w-40 md:h-48 md:w-48 mdl:hidden" />
              </div>
            </div>
            <p>
              Hello there, I&apos;m a <span className="text-textGreen">fullstack developer</span>.
              Originally from South Africa, holding British citizenship and now currently based in
              Madrid, Spain.
              <br />
              <br />I have <span className="text-textGreen">7+ years </span> of experience in the
              tech industry, including stints at various startups. I specialize in developing
              responsive and accessible web applications using{" "}
              <span className="text-textGreen">JavaScript & React</span>.
              <br />
              <br />
              Recently, I had the incredible opportunity to join a{" "}
              <span className="text-textGreen">leading FAANG</span> company as a Quality Engineer,
              and later advanced to the role of Team Lead. Immersing myself in big-tech best
              practices, with a specific focus on{" "}
              <span className="text-textGreen">E2E & integration testing.</span>
              <br />
              <br />
              <em>Currently leading a team and project rewriting a large-scale legacy system.</em>
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="group relative col-start-5 col-end-7 row-start-1 row-end-3 grid place-items-center max-mdl:hidden">
          <div className="absolute -left-6 -top-6 h-52 w-52 rounded-full lgl:h-80 lgl:w-80">
            <Image
              className="fill absolute z-30 h-52 w-52 rounded-full border-2 border-textGreen object-cover lgl:h-80 lgl:w-80"
              src={profileImgCircle}
              alt="Devon Gifford - Profile picture"
            />
            <div className="absolute left-0 top-0 z-30 hidden h-52 w-52 rounded-full bg-textGreen/20 duration-300 group-hover:bg-transparent mdl:inline-block lgl:h-80 lgl:w-80" />
            <div className="absolute left-6 top-6 z-10 hidden h-52 w-52 rounded-full border-2 border-textGreen transition-transform duration-100 group-hover:-translate-x-6 group-hover:-translate-y-6 mdl:inline-block lgl:h-80 lgl:w-80" />
          </div>
        </div>

        {/* Skills Section (Hard Skills + Exploring) */}
        <div className="col-span-full row-start-3 pt-5">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {skillGroups.map(({ title, skills }) => (
              <div key={title}>
                <p className="pb-5 text-center font-codeFont text-sm font-bold text-textDark lg:text-base">
                  {title}:
                </p>
                <ul className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
                  {skills.map(({ src, alt, title, className }) => (
                    <SkillIcon
                      key={title}
                      src={src}
                      alt={alt}
                      title={title}
                      className={className}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
