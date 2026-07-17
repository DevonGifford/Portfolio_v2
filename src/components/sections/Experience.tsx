"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import SectionTitle from "../common/SectionTitle";
import ExperienceEntry from "./ExperienceEntry";
import type { JobEntries } from "@/lib/content";
import { siteConfig } from "@/content/site.config";

export default function Experience({ jobs }: { jobs: JobEntries }) {
  // Defaults to the first entry rather than a hardcoded key, so reordering
  // content/experience.ts cannot leave the section pointing at nothing. The
  // content schema guarantees at least one entry.
  const [activeTab, setActiveTab] = useState(jobs[0].key);
  const activeEntry = jobs.find((entry) => entry.key === activeTab) ?? jobs[0];
  const tablistRef = useRef<HTMLDivElement>(null);

  /**
   * Arrow-key navigation for the tablist.
   *
   * Both axes are handled because the tabs are a horizontal strip below `sml`
   * and a vertical column above it. Selection follows focus, which is the
   * expected behaviour when switching panels is cheap.
   */
  function selectByKeyboard(event: React.KeyboardEvent<HTMLDivElement>) {
    const current = jobs.findIndex((entry) => entry.key === activeTab);
    const last = jobs.length - 1;

    const next = {
      ArrowDown: current === last ? 0 : current + 1,
      ArrowRight: current === last ? 0 : current + 1,
      ArrowUp: current === 0 ? last : current - 1,
      ArrowLeft: current === 0 ? last : current - 1,
      Home: 0,
      End: last,
    }[event.key];

    if (next === undefined) return;

    event.preventDefault();
    setActiveTab(jobs[next].key);
    tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <section
      id="experience"
      className="max-w-containerSmall lgl:py-32 mx-auto flex min-h-screen flex-col justify-center gap-5 py-80"
    >
      <SectionTitle titleName={siteConfig.labels.experienceHeading} titleNumber="02" />

      <div className="sml:flex-row mt-5 flex h-fit w-full flex-col gap-4">
        {/* Sidebar */}
        <div className="sml:flex-col flex h-fit w-fit">
          <div
            ref={tablistRef}
            role="tablist"
            aria-label={siteConfig.labels.experienceHeading}
            onKeyDown={selectByKeyboard}
            className="max-sml:no-scrollbar max-sml:w-6/12 max-sml:overflow-x-scroll sml:h-auto sml:flex-col flex whitespace-nowrap"
          >
            {jobs.map(({ key, label, sub }) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`tab-${key}`}
                aria-selected={activeTab === key}
                aria-controls={`panel-${key}`}
                // Roving tabindex: one stop for the whole tablist, then arrow keys.
                tabIndex={activeTab === key ? 0 : -1}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "hover:bg-cardColor focus-visible:outline-textGreen cursor-pointer border-l-2 bg-transparent px-8 py-3 text-left text-xs font-medium duration-300 focus-visible:outline-2 md:text-sm",
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
              </button>
            ))}
          </div>
        </div>

        {/* Active Experience Entry */}
        <div
          role="tabpanel"
          id={`panel-${activeEntry.key}`}
          aria-labelledby={`tab-${activeEntry.key}`}
          // Focusable so keyboard users can scroll the panel after switching tabs.
          tabIndex={0}
          className="w-full"
        >
          <ExperienceEntry {...activeEntry.componentProps} />
        </div>
      </div>
    </section>
  );
}
