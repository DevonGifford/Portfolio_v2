"use client";

import React from "react";
import BigProjectCard from "./BigProjectCard";
import BigProjectCardReversed from "./BigProjectCardReversed";
import SectionTitle from "@/components/common/SectionTitle";

const BigProjects: React.FC = () => {
    const devreadyImage = {
        src: "/assets/images/ProjectPictures/big-images/DevReady_big.png",
        alt: "Image-Description",
        width: 500,
        height: 300,
    };
    const devreadyImageSmall =
        "/assets/images/ProjectPictures/small-images/devready_small.png";

    //-------------------------------------------------------------
    const flatmatefinderImage = {
        src: "/assets/images/ProjectPictures/big-images/FlatmateFinder_big.png",
        alt: "Image-Description",
        width: 500,
        height: 300,
    };
    const flatematefinderImageSmall =
        "/assets/images/ProjectPictures/small-images/flatmate_small.png";

    //-------------------------------------------------------------
    const thymiaImage = {
        src: "/assets/images/ProjectPictures/big-images/Thymia_big.png",
        alt: "Image-Description",
        width: 500,
        height: 300,
    };
    const thymiaImageSmall =
        "/assets/images/ProjectPictures/small-images/thymia_small.png";

    //-------------------------------------------------------------
    const clearscoreImage = {
        src: "/assets/images/ProjectPictures/big-images/ClearScore_big.png",
        alt: "Image-Description",
        width: 500,
        height: 300,
    };
    const clearscoreImageSmall =
        "/assets/images/ProjectPictures/small-images/clearscore_small.png";
    //-------------------------------------------------------------

    return (
        <div
            id="Projects"
            className="mx-auto flex min-h-fit max-w-containerSmall flex-col gap-8 py-10 lgl:py-32"
        >
            <SectionTitle titleName="Portfolio Projects" titleNumber="03" />
            <div>
                <BigProjectCard
                    image={flatmatefinderImage}
                    imageUrl={flatematefinderImageSmall}
                    title="Flatmate Finder"
                    description="A real world personal project designed to streamline the search for a flatmate. Through a simple form, applicants submit their details, allowing existing tenants to review them in a Tinder style swipe interface"
                    gitLink="https://github.com/DevonGifford/FlatmateFinder"
                    liveLink="https://flatmate-finder.vercel.app/"
                    youtubeLink="https://github.com/DevonGifford"
                    techStackList={[
                        "Vite",
                        "TypeScript",
                        "ShadCN",
                        "Firebase",
                        "Vitest",
                    ]}
                />

                <BigProjectCardReversed
                    image={clearscoreImage}
                    imageUrl={clearscoreImageSmall}
                    title="ClearScore Ideaboard"
                    description="A time-constrained frontend assessment for ClearScore. Developed within 6 to 8 hours, it utilizes modern technologies like Tailwind CSS and ShadCN UI Library for rapid development. Prioritized simplicity, accessibility, and thorough testing."
                    gitLink="https://github.com/DevonGifford/ClearScore"
                    liveLink="https://idea-board-murex.vercel.app/"
                    youtubeLink="https://idea-board-murex.vercel.app/"
                    techStackList={[
                        "PostgreSQL",
                        "Supabase",
                        "TypeScript",
                        "Tailwind",
                    ]}
                />

                <BigProjectCard
                    image={thymiaImage}
                    imageUrl={thymiaImageSmall}
                    title="Thymia 2-back game"
                    description="A gamified version of the 2-back task, a cognitive test designed to measure working memory. Users are presented with a sequence of letters and must determine if the current letter matches the one presented two trials before."
                    gitLink="https://github.com/DevonGifford/Thymia"
                    liveLink="https://n-game-technical-assignment.vercel.app/"
                    youtubeLink="https://n-game-technical-assignment.vercel.app/"
                    techStackList={[
                        "Next14",
                        "Event-Logger",
                        "Tailwind",
                        "TypeScript",
                        "Jest",
                    ]}
                />

                <BigProjectCardReversed
                    image={devreadyImage}
                    imageUrl={devreadyImageSmall}
                    title="Dev Ready"
                    description="An open source fullstack initiative, inspired by ZTM, designed to create an engaging interactive quiz platform for students. The project aims to empower learning through gamification and dynamic features."
                    gitLink="https://github.com/DevonGifford/DevReady"
                    liveLink="https://ztm-ready-portfolio-project.vercel.app/"
                    youtubeLink="https://ztm-ready-portfolio-project.vercel.app/"
                    techStackList={[
                        "Next14",
                        "TypeScript",
                        "Tailwind",
                        "Jest",
                        "PlayWright",
                    ]}
                />
            </div>
        </div>
    );
};

export default BigProjects;
