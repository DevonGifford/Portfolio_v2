"use client";

import React from "react";
import { motion } from "framer-motion";
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

const ExperienceEntry = ({
  title,
  company,
  companyIcon,
  dates,
  intro,
  bullets,
}: ExperienceEntryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="min-h-fit w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-col flex-wrap gap-0.5 font-titleFont text-xl font-medium sml:flex-row">
        <h3>{title}</h3>
        <span className="mt-1 flex items-center gap-2 text-sm font-medium text-textGreen">
          @ {company}
          {companyIcon}
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-2">{dates}</p>

      {/* INTRODUCTION */}
      <p className="mt-3 flex gap-2 text-base font-light text-textDark">
        <strong>{intro}</strong>
      </p>

      {/* Bullet Points */}
      <div className="min-h-fit">
        <ul className="mt-4 flex flex-col gap-3 text-textDark">
          {bullets.map(({ heading, content }, i) => (
            <BulletPoint key={i} headningText={heading} contentText={content} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceEntry;
