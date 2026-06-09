"use client";

import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import OutlineButton from "../common/OutlineButton";
import ProjectsCapstone from "./ProjectsCapstone";
import ProjectsMini from "./ProjectsMini";
import type { CapstoneEntry, MiniProjectEntry } from "@/lib/content";
import { siteConfig } from "@/site.config";

/**
 * @param props.capstone - Parsed featured projects.
 * @param props.mini - Parsed smaller projects.
 */
export default function Projects({
  capstone,
  mini,
}: {
  capstone: CapstoneEntry[];
  mini: MiniProjectEntry[];
}) {
  const [showMore, setShowMore] = useState(false); // For toggling "Show More" in Mini Projects

  return (
    <section id="projects">
      <div className="max-w-containerSmall lgl:py-32 mx-auto flex min-h-fit flex-col gap-8 py-10">
        {/* Section for Capstone Projects */}
        <SectionTitle titleName={siteConfig.labels.capstoneHeading} titleNumber="03" />
        <div className="ml-auto flex w-full flex-col justify-items-end gap-14">
          {capstone.map((project) => (
            <ProjectsCapstone key={project.title} {...project} />
          ))}
        </div>
      </div>

      {/* Section for Mini Projects */}
      <div className="max-w-contentContainer mx-auto px-4 py-12 pb-24">
        <div className="flex w-full flex-col items-center">
          <h2 className="font-titleFont sml:text-3xl text-2xl font-semibold">
            {siteConfig.labels.miniProjectsHeading}
          </h2>
        </div>

        <div className="lgl:px-10 mt-10 flex flex-wrap items-center justify-center gap-6">
          {mini
            .slice(0, showMore ? undefined : siteConfig.miniProjectPreviewCount)
            .map((project: MiniProjectEntry) => (
              <ProjectsMini key={project.title} {...project} />
            ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          {showMore ? (
            <OutlineButton onClick={() => setShowMore(false)} className="h-12 w-36">
              {siteConfig.labels.showLess}
            </OutlineButton>
          ) : (
            <OutlineButton onClick={() => setShowMore(true)} className="h-12 w-36">
              {siteConfig.labels.showMore}
            </OutlineButton>
          )}
        </div>
      </div>
    </section>
  );
}
