import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import {
  profileImgCircle,
  ReactL,
  Next,
  Redux,
  NodeJS,
  Express,
  PostgreSQL,
  MongoDB,
  JavaScriptL,
  TypeScript,
  Python,
  Docker,
  Jest,
  Playwright,
  Tailwind,
  Vite,
} from "@/public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall h-screen mx-auto mdl:px-10 py-96 lgl:py-32 flex flex-col gap-8 justify-center"
    >
      <div className="flex items-center gap-10 pt-20 sml:pt-5">
        <SectionTitle titleNumber="0.1" titleName="About me" />
      </div>

      {/* CONTENT CONTAINER - GRID */}
      <div className="grid grid-cols-6 auto-rows-auto">
        {/* Text Portion */}
        <div className="row-span-2 col-start-1 col-end-5 text-base text-textDark font-medium max-mdl:col-span-full">
          <div className="mdl:w-11/12 text-xs sm:text-sm sml:text-base">
            {/* Floating image for tablets and Mobile devices */}
            <div className="pl-5 py-6 float-right">
              <div className="relative">
                <Image
                  className="mdl:hidden top-0 left-0 rounded-full w-24 sm:w-32 sml:w-40 md:w-48 border-2 border-textGreen"
                  src={profileImgCircle}
                  alt="profilepicture"
                />

                {/* background-blur-effect */}
                <div className=" mdl:hidden absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 sml:w-40 sml:h-40 md:w-48 md:h-48 bg-textGreen/20 rounded-full hover:bg-transparent duration-300 "></div>
              </div>
            </div>
            <p>
              Hello there, I&apos;m a{" "}
              <span className="text-textGreen">fullstack developer</span>.
              Originally from South Africa, holding British citizenship and now
              currently based in Madrid, Spain.
              <br />
              <br />I have 5 years of experience in the tech industry, including
              stints at various start-ups. I specialize in developing responsive
              and accessible web applications using{" "}
              <span className="text-textGreen">JavaScript & React</span>.
              <br />
              <br />
              Recently, I had the incredible opportunity to join a{" "}
              <span className="text-textGreen">leading FAANG</span> company as a
              Quality Engineer, and later promoted to Team Lead. I immersed
              myself in big-tech best practices, with a specific focus on E2E &
              integration testing.
              <br />
              <br />
              Currently <span className="text-textGreen">transitioning</span> my
              career back into web development.
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="row-start-1 row-end-3 col-start-5 col-end-7 grid place-items-center relative group max-mdl:hidden">
          {/* Image container */}
          <div className="absolute w-52 h-52 lgl:w-80 lgl:h-80 -left-6 -top-6 rounded-full">
            {/* Actual Profile Pic */}
            <Image
              className="z-30 rounded-full absolute w-52 h-52 lgl:w-80 lgl:h-80 fill object-cover border-2 border-textGreen"
              src={profileImgCircle}
              alt="Devon Gifford - Profile picture"
            />

            {/* background-blur-effect */}
            <div className="z-30 hidden mdl:inline-block absolute w-52 h-52 lgl:w-80 lgl:h-80 bg-textGreen/20 rounded-full top-0 left-0 group-hover:bg-transparent duration-300 "></div>

            {/* Animated Circle */}
            <div className="z-10 left-6 top-6 hidden absolute mdl:inline-block w-52 h-52 lgl:w-80 lgl:h-80 border-2 border-textGreen rounded-full group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-100"></div>
          </div>
        </div>

        {/* Skill Logo's */}
        <div className="row-start-3 col-span-full pt-5">
          <p className="pb-5 font-codeFont text-textDark font-bold text-center text-sm lg:text-base">
            The Technologies I am most proficient & passionate about:
          </p>

          <ul className="flex flex-row flex-wrap gap-4 ml-3 mt-1 justify-center">
            {/* JavaScriptLogo */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={JavaScriptL}
                alt="JavaScript"
                title="JavaScript"
              />
            </li>
            {/* TypeScript Logo */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={TypeScript}
                alt="TypeScript"
                title="TypeScript"
              />
            </li>
            {/* Python Logo */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-12 max-sml:w-7 hover:contrast-150 hover:animate-pulse"
                src={Python}
                alt="Python"
                title="Python"
              />
            </li>
          </ul>
          <ul className="flex flex-row flex-wrap gap-4 ml-3 mt-5 justify-center">
            {/* React Logo */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-12 max-sml:w-7 hover:contrast-150 hover:animate-pulse"
                src={ReactL}
                alt="React"
                title="React"
              />
            </li>
            {/* Next */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Next}
                alt="NextJS"
                title="NextJS"
              />
            </li>
            {/* Vite */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className=" w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Vite}
                alt="Vite"
                title="Vite"
              />
            </li>
            {/* Tailwind */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className=" w-14 max-sml:w-8 hover:contrast-150 hover:animate-pulse"
                src={Tailwind}
                alt="Tailwind"
                title="Tailwind"
              />
            </li>
            {/* Redux */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Redux}
                alt="Redux"
                title="Redux"
              />
            </li>
          </ul>
          <ul className="flex flex-row flex-wrap gap-4 ml-3 mt-5 justify-center">
            {/* Jest */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className=" w-9 max-sml:w-5 hover:contrast-150 hover:animate-pulse"
                src={Jest}
                alt="Jest"
                title="Jest"
              />
            </li>
            {/* PlayWright */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className=" w-14 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Playwright}
                alt="PlayWright"
                title="PlayWright"
              />
            </li>

            {/* NodeJS */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={NodeJS}
                alt="NodeJS"
                title="NodeJS"
              />
            </li>
            {/* Express */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Express}
                alt="ExpressJS"
                title="ExpressJS"
              />
            </li>
            {/* PostgreSQL */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={PostgreSQL}
                alt="PostgreSQL"
                title="PostgreSQL"
              />
            </li>
            {/* MongoDB */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={MongoDB}
                alt="MongoDB"
                title="MongoDB"
              />
            </li>
            {/* Docker */}
            <li className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300">
              <Image
                className=" w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                src={Docker}
                alt="Docker"
                title="Docker"
              />
            </li>
          </ul>
        </div>
        {/* //TODO Create new skills section   */}
      </div>
    </section>
  );
};

export default About;
