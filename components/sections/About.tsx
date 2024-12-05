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
                {/* Text Portion */}
                <div className="col-start-1 col-end-5 row-span-2 text-base font-medium text-textDark max-mdl:col-span-full">
                    <div className="text-xs sm:text-sm sml:text-base mdl:w-11/12">
                        {/* Floating image for tablets and Mobile devices */}
                        <div className="float-right py-6 pl-5">
                            <div className="relative">
                                <Image
                                    className="left-0 top-0 w-24 rounded-full border-2 border-textGreen sm:w-32 sml:w-40 md:w-48 mdl:hidden"
                                    src={profileImgCircle}
                                    alt="profilepicture"
                                />

                                {/* background-blur-effect */}
                                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-textGreen/20 duration-300 hover:bg-transparent sm:h-32 sm:w-32 sml:h-40 sml:w-40 md:h-48 md:w-48 mdl:hidden"></div>
                            </div>
                        </div>
                        <p>
                            Hello there, I&apos;m a{" "}
                            <span className="text-textGreen">
                                fullstack developer
                            </span>
                            . Originally from South Africa, holding British
                            citizenship and now currently based in Madrid,
                            Spain.
                            <br />
                            <br />I have{" "}
                            <span className="text-textGreen">5 years </span> of
                            experience in the tech industry, including stints at
                            various startups. I specialize in developing
                            responsive and accessible web applications using{" "}
                            <span className="text-textGreen">
                                JavaScript & React
                            </span>
                            .
                            <br />
                            <br />
                            Recently, I had the incredible opportunity to join a{" "}
                            <span className="text-textGreen">
                                leading FAANG
                            </span>{" "}
                            company as a Quality Engineer, and later advanced to
                            the role of Team Lead. Immersing myself in big-tech
                            best practices, with a specific focus on{" "}
                            <span className="text-textGreen">
                                E2E & integration testing.
                            </span>
                            <br />
                            <br />
                            <em>
                                Currently, I am transitioning my career back
                                into web development.
                            </em>
                            <br />
                            <br />
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="group relative col-start-5 col-end-7 row-start-1 row-end-3 grid place-items-center max-mdl:hidden">
                    {/* Image container */}
                    <div className="absolute -left-6 -top-6 h-52 w-52 rounded-full lgl:h-80 lgl:w-80">
                        {/* Actual Profile Pic */}
                        <Image
                            className="fill absolute z-30 h-52 w-52 rounded-full border-2 border-textGreen object-cover lgl:h-80 lgl:w-80"
                            src={profileImgCircle}
                            alt="Devon Gifford - Profile picture"
                        />

                        {/* background-blur-effect */}
                        <div className="absolute left-0 top-0 z-30 hidden h-52 w-52 rounded-full bg-textGreen/20 duration-300 group-hover:bg-transparent mdl:inline-block lgl:h-80 lgl:w-80"></div>

                        {/* Animated Circle */}
                        <div className="absolute left-6 top-6 z-10 hidden h-52 w-52 rounded-full border-2 border-textGreen transition-transform duration-100 group-hover:-translate-x-6 group-hover:-translate-y-6 mdl:inline-block lgl:h-80 lgl:w-80"></div>
                    </div>
                </div>

                {/* Skill Logo's */}
                <div className="col-start-1 col-end-4 row-start-3 pt-5">
                    <p className="pb-5 text-center font-codeFont text-sm font-bold text-textDark lg:text-base">
                        Hard Skills:{" "}
                    </p>
                    <div className="flex flex-col gap-3">
                        <ul className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
                            {/* TypeScript Logo */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 rounded-full hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={TypeScript}
                                    alt="TypeScript"
                                    title="TypeScript"
                                />
                            </li>

                            {/* Next */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 rounded-full hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={Next}
                                    alt="NextJS"
                                    title="NextJS"
                                />
                            </li>

                            {/* Jest */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-11 hover:animate-pulse hover:contrast-150 max-md:w-5 md:translate-x-3"
                                    src={Jest}
                                    alt="Jest"
                                    title="Jest"
                                />
                            </li>

                            {/* PlayWright */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-16 hover:animate-pulse hover:contrast-150 max-md:w-6 md:translate-x-2"
                                    src={Playwright}
                                    alt="PlayWright"
                                    title="PlayWright"
                                />
                            </li>
                        </ul>
                        <ul className="flex flex-row flex-wrap justify-center gap-4 md:gap-10">
                            {/* React Logo */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 rounded-full hover:animate-pulse hover:contrast-150 max-md:w-7 md:ml-0.5"
                                    src={ReactL}
                                    alt="React"
                                    title="React"
                                />
                            </li>

                            {/* Tailwind */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 -translate-x-0.5 hover:animate-pulse hover:contrast-150 max-md:w-8"
                                    src={Tailwind}
                                    alt="Tailwind"
                                    title="Tailwind"
                                />
                            </li>

                            {/* Docker */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-16 hover:animate-pulse hover:contrast-150 max-md:w-8"
                                    src={Docker}
                                    alt="Docker"
                                    title="Docker"
                                />
                            </li>
                            {/* Redux */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-10 hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={Redux}
                                    alt="Redux"
                                    title="Redux"
                                />
                            </li>
                        </ul>
                        <ul className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
                            {/* JavaScriptLogo */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 rounded-full hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={JavaScriptL}
                                    alt="JavaScript"
                                    title="JavaScript"
                                />
                            </li>

                            {/* Vite */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={Vite}
                                    alt="Vite"
                                    title="Vite"
                                />
                            </li>

                            {/* NodeJS */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-14 hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={NodeJS}
                                    alt="NodeJS"
                                    title="NodeJS"
                                />
                            </li>

                            {/* Python Logo */}
                            <li className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 rounded-full hover:animate-pulse hover:contrast-150 max-md:w-7"
                                    src={Python}
                                    alt="Python"
                                    title="Python"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                {/* new skills section   */}
                <div className="col-start-5 col-end-7 row-start-3 pt-5 md:col-start-4 md:col-end-7 xl:col-end-6">
                    <p className="pb-5 text-center font-codeFont text-sm font-bold text-textDark lg:text-base">
                        <span className="hidden md:inline-block">
                            Currently
                        </span>{" "}
                        Exploring:
                    </p>

                    <div className="flex flex-col gap-6 pt-1.5">
                        <ul className="flex flex-row flex-wrap items-center justify-center gap-5 md:gap-10">
                            {/* Remix Logo */}
                            <li className="flex items-center transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 rounded-full hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={Remix}
                                    alt="Remix"
                                    title="Remix"
                                />
                            </li>
                        </ul>
                        {/* Neovim Logo */}
                        <ul className="flex flex-row flex-wrap items-center justify-center gap-5 md:gap-10">
                            <li className="flex items-center p-1 transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 rounded-full hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={Neovim}
                                    alt="Neovim"
                                    title="Neovim"
                                />
                            </li>
                        </ul>
                        {/* Electron  Logo */}
                        <ul className="flex flex-row flex-wrap items-center justify-center gap-5 md:gap-10">
                            <li className="flex items-center transition-all duration-300 hover:-translate-y-2">
                                <Image
                                    className="w-12 rounded-full hover:animate-pulse hover:contrast-150 max-md:w-6"
                                    src={Electron}
                                    alt="Electron"
                                    title="Electron"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
