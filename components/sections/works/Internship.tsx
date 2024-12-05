import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "@/components/common/BulletPoint";

const Internship = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="w-full"
        >
            {/* JOB TITLE & COMPANY */}
            <h3 className="flex flex-col flex-wrap gap-1 font-titleFont text-xl font-medium sml:flex-row">
                Frontend Developer
                <span className="mt-1 text-sm font-medium text-textGreen">
                    @ Mashauri Limited
                </span>
            </h3>

            {/* Working Dates */}
            <p className="pt-3">June 2019 - October 2019</p>

            {/* INTRODUCTION */}
            <p className="mt-3 flex gap-2 text-base font-light text-textDark">
                <strong>
                    As a Frontend Developer at Mashauri Limited, I contributed
                    to the UI/UX design support for an EdTech startup, designing
                    wireframes and developing landing pages and user forms using
                    JavaScript and React.
                </strong>
            </p>

            {/* Bullet Points */}
            <ul className="mt-4 flex flex-col gap-3 text-textDark">
                <BulletPoint
                    headningText="Website Maintenance and Assistance"
                    contentText="Actively participated in maintaining and updating the company's website to ensure a seamless user experience and up-to-date content. Conducted general bug fixes to improve website functionality."
                />

                <BulletPoint
                    headningText="Student Technical Support"
                    contentText="Provided technical support to students, addressing inquiries and resolving issues to ensure a smooth learning and user experience."
                />

                <BulletPoint
                    headningText="Lead Generation with Web Scraping"
                    contentText="Utilized Python with Beautiful Soup for web scraping to identify potential sales leads, contributing to company growth and revenue generation."
                />

                <BulletPoint
                    headningText="Database Management"
                    contentText="Assisted in managing and maintaining student and client databases, ensuring data integrity and efficient storage with PostgreSQL."
                />

                <BulletPoint
                    headningText="Automated Email Landing Pages"
                    contentText="Designed and implemented email marketing landing pages to enhance customer engagement and drive conversions."
                />

                <BulletPoint
                    headningText="Convention Assistance"
                    contentText="Supported a high-profile convention hosted by IE Business School, providing valuable assistance in setup, coordination, and ensuring a seamless experience for all attendees."
                />
            </ul>
        </motion.div>
    );
};

export default Internship;
