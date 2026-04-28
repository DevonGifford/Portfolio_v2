"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "../common/SectionTitle";
import ExperienceEntry from "./experiences/ExperienceEntry";
import jobEntries, { JobTabKey } from "./experiences/jobEntries";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<JobTabKey>("tuvLead");
  const activeEntry = jobEntries.find((entry) => entry.key === activeTab)!;

  return (
    <section
      id="experience"
      className="max-w-containerSmall lgl:py-32 mx-auto flex min-h-screen flex-col justify-center gap-5 py-96"
    >
      <SectionTitle titleName="Where I have worked" titleNumber="02" />

      <div className="sml:flex-row mt-5 flex h-fit w-full flex-col gap-4">
        {/* Sidebar */}
        <div className="sml:flex-col flex h-fit w-fit">
          <ul className="max-sml:no-scrollbar max-sml:w-6/12 max-sml:overflow-x-scroll sml:h-auto sml:flex-col flex whitespace-nowrap">
            {jobEntries.map(({ key, label, sub }) => (
              <li
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "hover:bg-cardColor cursor-pointer border-l-2 bg-transparent px-8 py-3 text-xs font-medium duration-300 md:text-sm",
                  activeTab === key
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                )}
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
}
