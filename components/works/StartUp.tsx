import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint";

const StartUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-col flex-wrap gap-1 font-titleFont text-xl font-medium sml:flex-row">
        <h3>Jr Frontend Developer | StartUp</h3>
        <span className="mt-1 flex text-sm font-medium text-textGreen">@ Out-of-the-Cube</span>
      </div>

      {/* Working Dates */}
      <p className="pt-3">January 2019 - June 2019</p>

      {/* INTRODUCTION */}
      <p className="mt-3 flex gap-2 text-base font-light text-textDark">
        <strong>
          In my role supporting the growth of an art auction start-up, I utilized HTML/CSS,
          JavaScript/jQuery, and a content management system (CMS) to enhance the websites
          functionality and user experience.
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="HTML/CSS and JavaScript"
          contentText="Utilizing HTML/CSS designs and JavaScript/jQuery, I specialized in crafting dynamic and visually appealing portfolio websites for individual artists. This bespoke approach ensured each artist's unique style and artworks were effectively showcased."
        />

        <BulletPoint
          headningText="Content Management with WordPress"
          contentText="Managed website content using WordPress, integrating new pages, articles, and multimedia seamlessly. Utilized the Theme Editor for impactful styling changes, ensuring a cohesive user experience."
        />

        <BulletPoint
          headningText="Website UI/UX Enhancements"
          contentText="I refined the website's aesthetics and usability with CSS and UI enhancements while implementing dynamic JavaScript/jQuery features for enhanced user experience."
        />

        <BulletPoint
          headningText="Product Management Support"
          contentText="Played a role in product management by adding new products to the website and maintaining accurate inventory records. Converted an Excel database to a PostgreSQL database to streamline data management processes."
        />
      </ul>
    </motion.div>
  );
};

export default StartUp;
