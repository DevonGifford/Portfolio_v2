import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint";

const Freelance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-wrap gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row">
        <h3>Wordpress Developer</h3>
        <span className="text-base mt-1 font-medium text-textGreen flex">
          @ Freelance
        </span>
      </div>

      {/* Working Dates */}
      <p className="pt-3">2015 - January 2019</p>

      {/* INTRODUCTION */}
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
          As a frontend-focused web developer specializing in WordPress, Ive
          crafted responsive, user-friendly websites through adept theme
          customization and plugin integration.
          <br />
          Some of my key accomplishments in this role include:
        </strong>
      </p>

      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        <BulletPoint
          headningText="Customization and Feature Implementation"
          contentText="Tailoring themes, integrating plugins, and implementing requested features to optimize website performance and meet client needs."
        />

        <BulletPoint
          headningText="Responsive Design"
          contentText="Ensuring seamless navigation and accessibility across devices by adhering to responsive design principles."
        />

        <BulletPoint
          headningText="E-commerce Functionality"
          contentText="Setting up and configuring e-commerce functionality for guesthouses, including payment gateways integration and product catalogue creation."
        />

        <BulletPoint
          headningText="Maintenance and Support"
          contentText="Conducting regular updates, bug fixes, and backups to ensure website integrity and security. Additionally, providing ongoing client support and training on website management."
        />

        <BulletPoint
          headningText="Branding and Design Alignment"
          contentText="Customizing themes to align with clients' branding guidelines and design preferences for a visually cohesive online presence."
        />

        <BulletPoint
          headningText="Performance Optimization"
          contentText="Offering expert advice and implementing industry best practices to enhance website performance, loading speed, and overall user experience."
        />

        <BulletPoint
          headningText="Project Management"
          contentText="Successfully managing multiple projects simultaneously, setting and meeting deadlines, and maintaining open communication with clients throughout the process."
        />
      </ul>
    </motion.div>
  );
};

export default Freelance;
