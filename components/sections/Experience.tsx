"use client";

import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import ExperienceEntry from "./experiences/ExperienceEntry";
import jobEntries, { JobTabKey } from "./experiences/jobEntries";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<JobTabKey>("teamLead");
  const activeEntry = jobEntries.find((entry) => entry.key === activeTab)!;

  return (
    <section
      id="experience"
      className="mx-auto flex min-h-screen max-w-containerSmall flex-col justify-center gap-5 py-96 lgl:py-32"
    >
      <SectionTitle titleName="Where I have worked" titleNumber="02" />

      <div className="mt-5 flex h-fit w-full flex-col gap-4 sml:flex-row">
        {/* Sidebar */}
        <div className="flex h-[fit-content] w-[fit-content] sml:flex-col">
          <ul className="max-sml:no-scrollbar flex whitespace-nowrap max-sml:w-6/12 max-sml:overflow-x-scroll sml:h-auto sml:flex-col">
            {jobEntries.map(({ key, label, sub }) => (
              <li
                key={key}
                onClick={() => setActiveTab(key)}
                className={`cursor-pointer border-l-2 bg-transparent px-8 py-3 text-xs font-medium duration-300 hover:bg-[#112240] md:text-sm ${
                  activeTab === key
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                }`}
              >
                <strong>{label}</strong>
                {sub && (
                  <>
                    <br />
                    <em className="text-sm">{sub}</em>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Active Experience Entry */}
        <div className="w-full">
          <ExperienceEntry {...activeEntry.componentProps} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
