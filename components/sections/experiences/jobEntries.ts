import { ReactNode } from "react";
import { BsApple } from "react-icons/bs";

export type JobTabKey = "teamLead" | "qa" | "internship" | "startup" | "freelance";

export type JobEntry = {
  key: JobTabKey;
  label: string;
  sub?: string;
  componentProps: {
    title: string;
    company: string;
    companyIcon?: ReactNode;
    dates: string;
    intro: string;
    bullets: {
      heading: string;
      content: string;
    }[];
  };
};

const jobEntries: JobEntry[] = [
  {
    key: "teamLead",
    label: "Cognizant",
    sub: "Team-lead",
    componentProps: {
      title: "Team Lead",
      company: "Cognizant / Apple",
      // companyIcon: <BsApple />,
      dates: "June 2022 - Jan 2023",
      intro:
        "Promoted to a team lead position, along with and on top of my Engineering responsibilities. My role involved actively supporting managers and overseeing the operations of multiple teams.",
      bullets: [
        {
          heading: "Assisting and supporting managers",
          content:
            "Collaborating closely with managers to provide seamless assistance and support in their day-to-day responsibilities, ensuring efficient workflow and effective team coordination.",
        },
        {
          heading: "Coordinating and reviewing tasks",
          content:
            "Taking charge of task coordination and reviewing processes across multiple teams, ensuring that high quality standards were met while adhering to deadlines. This involved meticulous monitoring of progress and providing guidance to team members to ensure successful project completion.",
        },
        {
          heading: "Providing clear instructions and guidance",
          content:
            "Offering comprehensive instructions and guidance to the team, effectively communicating new tasks, objectives, and performance expectations. This ensured that team members had the necessary direction and resources to accomplish their roles effectively.",
        },
        {
          heading: "Reporting progress to management",
          content:
            "Regularly updating management on project progress, highlighting achievements, addressing challenges, and reporting any issues encountered. This facilitated informed decision-making and proactive problem-solving.",
        },
        {
          heading: "Facilitating onboarding and performance feedback",
          content:
            "Assisting in the smooth onboarding process for new team members, ensuring a seamless transition and supporting their integration into the team. Additionally, providing constructive performance feedback to both management and team members, recognizing accomplishments and identifying areas for improvement.",
        },
      ],
    },
  },
  {
    key: "qa",
    label: "Cognizant",
    sub: "QA Engineer",
    componentProps: {
      title: "Quality Engineer",
      company: "Cognizant / Apple",
      // companyIcon: <BsApple />,
      dates: "September 2021 - Jan 2023",
      intro:
        "Played a pivotal role in ensuring the quality of a widely utilized AI virtual assistant through automation testing and NLP processing.",
      bullets: [
        {
          heading: "Voice Recognition Testing",
          content:
            "Conducted linguistic & phonological testing using NLP tools to optimize user experience. Utilized Python for scripting automation tasks.",
        },
        {
          heading: "Automation Testing",
          content:
            "Created & maintained test automation, and triaged results utilizing in-house NLP tools and frameworks. Implemented automation scripts using Python and Swift",
        },
        {
          heading: "End-to-End Testing",
          content:
            "Verified seamless integration and functionality across diverse systems and client domains.",
        },
        {
          heading: "Detailed Bug reports",
          content:
            "Identified and documented bugs, creating reports to Apple standards and communicating with cross-functional teams.",
        },
        {
          heading: "Version Control",
          content:
            "Utilized Git and GitHub for version control and collaborative development workflows, ensuring efficient code management and team collaboration.",
        },
        {
          heading: "Testing New Products",
          content:
            "Played a pivotal role in testing innovative solutions, ensuring successful launches worldwide across multiple domains.",
        },
        {
          heading: "Test Execution and Analysis",
          content:
            "Conducted various testing methodologies including root testing, integration testing, regression testing, acceptance testing, smoke testing, and performance testing.",
        },
      ],
    },
  },
  {
    key: "internship",
    label: "Mashauri Limited",
    sub: "FE Developer",
    componentProps: {
      title: "Frontend Developer",
      company: "Mashauri Limited",
      dates: "June 2019 - February 2020",
      intro:
        "As a Frontend Developer at Mashauri Limited, I contributed to the UI/UX design support for an EdTech startup, designing wireframes and developing landing pages and user forms using JavaScript and React.",
      bullets: [
        {
          heading: "Website Maintenance and Assistance",
          content:
            "Actively participated in maintaining and updating the company's website to ensure a seamless user experience and up-to-date content. Conducted general bug fixes to improve website functionality.",
        },
        {
          heading: "Student Technical Support",
          content:
            "Provided timely technical support to students, assisting them in navigating the platform and resolving any technical issues they encountered.",
        },
        {
          heading: "Lead Generation with Web Scraping",
          content:
            "Utilized Python with Beautiful Soup for web scraping to identify potential sales leads, contributing to company growth and revenue generation.",
        },
        {
          heading: "Database Management",
          content:
            "Assisted in managing and maintaining student and client databases, ensuring data integrity and efficient storage with PostgreSQL.",
        },
        {
          heading: "Automated Email Landing Pages",
          content:
            "Designed and implemented email marketing landing pages to enhance customer engagement and drive conversions.",
        },
        {
          heading: "Convention Assistance",
          content:
            "Participated in organizing and supporting Mashauri’s presence at the IE Business School convention, promoting the platform and engaging with potential users.",
        },
      ],
    },
  },
  {
    key: "startup",
    label: "Out-of-the-Cube",
    sub: "JR FE Developer",
    componentProps: {
      title: "Jr Frontend Developer",
      company: "Out-of-the-Cube",
      dates: "October 2018 - June 2019",
      intro:
        "In my role supporting the growth of an art auction start-up, I utilized HTML/CSS, JavaScript/jQuery, and a content management system (CMS) to enhance the websites functionality and user experience.",
      bullets: [
        {
          heading: "HTML/CSS and JavaScript",
          content:
            "Utilizing HTML/CSS designs and JavaScript/jQuery, I specialized in crafting dynamic and visually appealing portfolio websites for individual artists. This bespoke approach ensured each artist's unique style and artworks were effectively showcased.",
        },
        {
          heading: "Content Management with WordPress",
          content:
            "Managed website content using WordPress, integrating new pages, articles, and multimedia seamlessly. Utilized the Theme Editor for impactful styling changes, ensuring a cohesive user experience.",
        },
        {
          heading: "Website UI/UX Enhancements",
          content:
            "I refined the website's aesthetics and usability with CSS and UI enhancements while implementing dynamic JavaScript/jQuery features for enhanced user experience.",
        },
        {
          heading: "Product Management Support",
          content:
            "Played a role in product management by adding new products to the website and maintaining accurate inventory records. Converted an Excel database to a PostgreSQL database to streamline data management processes.",
        },
      ],
    },
  },
  {
    key: "freelance",
    label: "Freelance",
    componentProps: {
      title: "WordPress Developer",
      company: "Freelance",
      dates: "2015 - January 2019",
      intro:
        "As a frontend-focused web developer specializing in WordPress, Ive crafted responsive, user-friendly websites through adept theme customization and plugin integration. Some of my key accomplishments in this role include:",
      bullets: [
        {
          heading: "Customization and Feature Implementation",
          content:
            "Tailoring themes, integrating plugins, and implementing requested features to optimize website performance and meet client needs.",
        },
        {
          heading: "Responsive Design",
          content:
            "Ensuring seamless navigation and accessibility across devices by adhering to responsive design principles.",
        },
        {
          heading: "E-commerce Functionality",
          content:
            "Setting up and configuring e-commerce functionality for guesthouses, including payment gateways integration and product catalogue creation.",
        },
        {
          heading: "Maintenance and Support",
          content:
            "Conducting regular updates, bug fixes, and backups to ensure website integrity and security. Additionally, providing ongoing client support and training on website management.",
        },
        {
          heading: "Branding and Design Alignment",
          content:
            "Customizing themes to align with clients' branding guidelines and design preferences for a visually cohesive online presence.",
        },
        {
          heading: "Performance Optimization",
          content:
            "Offering expert advice and implementing industry best practices to enhance website performance, loading speed, and overall user experience.",
        },
        {
          heading: "Project Management",
          content:
            "Successfully managing multiple projects simultaneously, setting and meeting deadlines, and maintaining open communication with clients throughout the process.",
        },
      ],
    },
  },
];

export default jobEntries;
