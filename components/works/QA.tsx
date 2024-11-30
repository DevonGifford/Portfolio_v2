import React from "react";
import { motion } from "framer-motion";
import { BsApple } from "react-icons/bs";
import BulletPoint from "./BulletPoint";

const QA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className="flex flex-col gap-1 font-titleFont text-xl font-medium sml:flex-row">
        Quality Engineer
        <span className="mt-1 flex text-sm font-medium text-textGreen">
          @ Cognizant / Apple &ensp;
          <BsApple />
        </span>
      </h3>

      {/* Working Dates */}
      <p className="pt-3">September 2021 - Jan 2023</p>

      {/* INTRODUCTION */}
      <p className="mt-3 flex gap-2 text-base font-light text-textDark">
        <strong>
          Played a pivotal role in ensuring the quality of a widely utilized AI virtual assistant
          through automation testing and NLP processing.
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="Voice Recognition Testing"
          contentText="Conducted linguistic & phonological testing using NLP tools to optimize user experience. Utilized Python for scripting automation tasks."
        />

        <BulletPoint
          headningText="Automation Testing"
          contentText="Created & maintained test automation, and triaged results utilizing in-house NLP tools and frameworks. Implemented automation scripts using Python and Swift"
        />

        <BulletPoint
          headningText="End-to-End Testing"
          contentText="Verified seamless integration and functionality across diverse systems and client domains."
        />

        <BulletPoint
          headningText="Detailed Bug reports"
          contentText="Identified and documented bugs, creating reports to Apple standards and communicating with cross-functional teams."
        />

        <BulletPoint
          headningText="Version Control"
          contentText="Utilized Git and GitHub for version control and collaborative development workflows, ensuring efficient code management and team collaboration."
        />

        <BulletPoint
          headningText="Testing New Products"
          contentText="Played a pivotal role in testing innovative solutions, ensuring successful launches worldwide across multiple domains."
        />

        <BulletPoint
          headningText="Test Execution and Analysis"
          contentText="Conducted various testing methodologies including root testing, integration testing, regression testing, acceptance testing, smoke testing, and performance testing."
        />
      </ul>
    </motion.div>
  );
};

export default QA;
