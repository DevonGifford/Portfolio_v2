"use client";

import { motion } from "motion/react";
import { fadeIn, DURATION } from "@/lib/motion";
import BulletPoint from "@/components/common/BulletPoint";

type ExperienceEntryProps = {
  title: string;
  company: string;
  companyIcon?: React.ReactNode;
  dates: string;
  intro: string;
  bullets: {
    heading: string;
    content: string;
  }[];
};

export default function ExperienceEntry({
  title,
  company,
  companyIcon,
  dates,
  intro,
  bullets,
}: ExperienceEntryProps) {
  return (
    <motion.div {...fadeIn({ duration: DURATION.fast, delay: 0.1 })} className="min-h-fit w-full">
      {/* JOB TITLE & COMPANY */}
      <div className="font-titleFont sml:flex-row flex flex-col flex-wrap gap-0.5 text-xl font-medium">
        <h3>{title}</h3>
        <span className="text-textGreen mt-1 ml-4 flex items-center gap-2 text-sm font-medium">
          @ {company}
          {companyIcon}
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-2">{dates}</p>

      {/* INTRODUCTION */}
      <p className="text-textDark mt-3 flex gap-2 text-base font-light">
        <strong>{intro}</strong>
      </p>

      {/* Bullet Points */}
      <div className="min-h-fit">
        <ul className="text-textDark mt-4 flex flex-col gap-3">
          {bullets.map(({ heading, content }) => (
            <BulletPoint key={heading} headingText={heading} contentText={content} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
