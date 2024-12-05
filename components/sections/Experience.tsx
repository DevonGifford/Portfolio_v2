"use client";

import React, { useState } from "react";
import TeamLead from "./works/TeamLead";
import QA from "./works/QA";
import Internship from "./works/Internship";
import StartUp from "./works/StartUp";
import Freelance from "./works/Freelance";
import SectionTitle from "../common/SectionTitle";

const Experience = () => {
    const [workTeamLead, setWorkTeamLead] = useState(true);
    const [workQA, setWorkQA] = useState(false);
    const [workInternship, setWorkInternship] = useState(false);
    const [workStartUp, setWorkStartUp] = useState(false);
    const [workFreelance, setWorkFreelance] = useState(false);

    const handleTeamLead = () => {
        setWorkTeamLead(true);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(false);
        setWorkFreelance(false);
    };

    const handleQA = () => {
        setWorkTeamLead(false);
        setWorkQA(true);
        setWorkInternship(false);
        setWorkStartUp(false);
        setWorkFreelance(false);
    };

    const handleInternship = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(true);
        setWorkStartUp(false);
        setWorkFreelance(false);
    };

    const handleStartUp = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(true);
        setWorkFreelance(false);
    };

    const handleFreelance = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(false);
        setWorkFreelance(true);
    };

    return (
        <section
            id="Experience"
            className="mx-auto flex min-h-screen max-w-containerSmall flex-col justify-center gap-5 py-96 lgl:py-32"
        >
            <SectionTitle titleName="Where I have worked" titleNumber="02" />
            {/* CONTAINER DIV */}
            <div className="mt-5 flex h-fit w-full flex-col gap-4 sml:flex-row">
                {/*  SIDE BAR */}
                <div className="flex h-[fit-content] w-[fit-content] sml:flex-col">
                    <ul className="max-sml:no-scrollbar flex whitespace-nowrap max-sml:w-6/12 max-sml:overflow-x-scroll sml:h-auto sml:flex-col">
                        {/* TeamLead */}
                        <li
                            onClick={handleTeamLead}
                            className={`${
                                workTeamLead
                                    ? "border-l-textGreen text-textGreen"
                                    : ": border-l-hoverColor text-textDark"
                            } cursor-pointer border-l-2 border-l-textGreen bg-transparent px-8 py-3 text-xs font-medium text-textDark duration-300 hover:bg-[#112240] md:text-sm`}
                        >
                            Cognizant
                            <br />
                            <em>Team-lead</em>
                        </li>

                        {/* QA */}
                        <li
                            onClick={handleQA}
                            className={`${
                                workQA
                                    ? "border-l-textGreen text-textGreen"
                                    : ": border-l-hoverColor text-textDark"
                            } cursor-pointer border-l-2 border-l-textGreen bg-transparent px-8 py-3 text-xs font-medium text-textDark duration-300 hover:bg-[#112240] md:text-sm`}
                        >
                            Cognizant
                        </li>

                        {/* Internship */}
                        <li
                            onClick={handleInternship}
                            className={`${
                                workInternship
                                    ? "border-l-textGreen text-textGreen"
                                    : ": border-l-hoverColor text-textDark"
                            } cursor-pointer border-l-2 border-l-textGreen bg-transparent px-8 py-3 text-xs font-medium text-textDark duration-300 hover:bg-[#112240] md:text-sm`}
                        >
                            Mashauri Limited
                            <br />
                            <em>Start-up</em>
                        </li>

                        {/* StartUp */}
                        <li
                            onClick={handleStartUp}
                            className={`${
                                workStartUp
                                    ? "border-l-textGreen text-textGreen"
                                    : ": border-l-hoverColor text-textDark"
                            } cursor-pointer border-l-2 border-l-textGreen bg-transparent px-8 py-3 text-xs font-medium text-textDark duration-300 hover:bg-[#112240] md:text-sm`}
                        >
                            Out-of-the-Cube
                            <br />
                            <em>Start-up</em>
                        </li>

                        {/* Freelance */}
                        <li
                            onClick={handleFreelance}
                            className={`${
                                workFreelance
                                    ? "border-l-textGreen text-textGreen"
                                    : ": border-l-hoverColor text-textDark"
                            } cursor-pointer border-l-2 border-l-textGreen bg-transparent px-8 py-3 text-xs font-medium text-textDark duration-300 hover:bg-[#112240] md:text-sm`}
                        >
                            Freelance
                        </li>
                    </ul>
                </div>

                {/* Work information */}
                {workTeamLead && <TeamLead />}
                {workQA && <QA />}
                {workInternship && <Internship />}
                {workStartUp && <StartUp />}
                {workFreelance && <Freelance />}
            </div>
        </section>
    );
};

export default Experience;

// I need to create a media querey that will turn the bar horizontally for mobile viewing...
