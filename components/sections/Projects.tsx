"use client";

import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import capstoneEntries from "./projects/capstone-projects/capstoneEntries";
import CapstoneCard from "./projects/capstone-projects/CapstoneCard";
import miniProjectsEntries, { MiniProjectEntry } from "./projects/mini-projects/miniProjectEntries";
import MiniCard from "./projects/mini-projects/MiniCard";

const Projects = () => {
  const [showMore, setShowMore] = useState(false); // For toggling "Show More" in Mini Projects

  return (
    <section id="Projects">
      <div className="mx-auto flex min-h-fit max-w-containerSmall flex-col gap-8 py-10 lgl:py-32">
        {/* Section for Capstone Projects */}
        <SectionTitle titleName="Capstone Projects" titleNumber="03" />
        <div className="ml-auto flex w-full flex-col justify-items-end gap-14">
          {capstoneEntries.map((project) => (
            <CapstoneCard key={project.title} {...project} />
          ))}
        </div>
      </div>

      {/* Section for Mini Projects */}
      <div className="mx-auto max-w-contentContainer px-4 py-12 pb-24">
        <div className="flex w-full flex-col items-center">
          <h2 className="font-titleFont text-2xl font-semibold sml:text-3xl">
            Other Noteworthy Projects
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lgl:px-10">
          {miniProjectsEntries
            .slice(0, showMore ? undefined : 6)
            .map((project: MiniProjectEntry, i) => (
              <MiniCard key={i} {...project} />
            ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          {showMore ? (
            <button
              onClick={() => setShowMore(false)}
              className="Text-[13px] h-12 w-36 rounded-md border border-textGreen text-textGreen duration-300 hover:bg-hoverColor"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setShowMore(true)}
              className="Text-[13px] h-12 w-36 rounded-md border border-textGreen text-textGreen duration-300 hover:bg-hoverColor"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
