import { ReactNode } from "react";
// import { BsApple } from "react-icons/bs";

export type JobTabKey =
  | "tuvLead"
  | "tuvFullstack"
  | "appleTeamlead"
  | "appleQA"
  | "mashStartup"
  | "cubeStartup"
  | "freelance";

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
    key: "tuvLead",
    label: "TÜV Rheinland",
    sub: "Lead Frontend Developer",
    componentProps: {
      title: "Lead Frontend Developer",
      company: "TÜV Rheinland",
      dates: "Jan 2025 - Present",
      intro:
        "Leading the frontend strategy and architecture for multiple projects at TÜV Rheinland, with a focus on headless CMS integration, team scaling, and optimizing user interfaces for scalability and performance.",
      bullets: [
        {
          heading: "Headless CMS Integration",
          content:
            "Orchestrated the transition to a headless CMS using RESTful and GraphQL API's, enabling flexible content delivery and seamless integration with Next.js and React applications.",
        },
        {
          heading: "Team Leadership & Scaling",
          content:
            "Managed and scaled a frontend team of 10+ engineers, implementing Agile processes, conducting sprint planning, and mentoring developers to improve velocity and code quality.",
        },
        {
          heading: "CI/CD and DevOps Leadership",
          content:
            "Led the integration of CI/CD pipelines using GitLab-CI and Docker, automating deployments to Azure Kubernetees Services & ensuring reliable delivery of features and bug fixes.",
        },
        {
          heading: "UI/UX Enhancements & Performance Optimization",
          content:
            "Worked closely with UX/UI teams to ensure design consistency and implement performance optimizations (lazy loading, code splitting) for a faster, more responsive application.",
        },
        {
          heading: "Cloud Infrastructure and API Management",
          content:
            "Oversaw the integration of cloud-based infrastructure (AWS, Lambda) and API management, enabling real-time data fetching and improved content rendering with minimal latency.",
        },
      ],
    },
  },

  {
    key: "tuvFullstack",
    label: "TÜV Rheinland",
    sub: "Sr Fullstack Developer",
    componentProps: {
      title: "Senior Fullstack Developer",
      company: "TÜV Rheinland",
      dates: "June 2024 - Jan 2025",
      intro:
        "Drove the development of scalable, modern frontend and backend systems at TÜV Rheinland, enhancing architecture with cutting-edge technologies and ensuring long-term maintainability.",
      bullets: [
        {
          heading: "Component Library Development",
          content:
            "Designed and developed a scalable component library using React, TypeScript, and Storybook, enabling reusability and reducing time to market across multiple teams.",
        },
        {
          heading: "Tech Stack Optimization",
          content:
            "Optimized frontend performance by integrating modern frameworks (Next.js, TypeScript) and tools (Vite, Webpack) to improve build times and overall application efficiency.",
        },
        {
          heading: "Cross-Functional Collaboration",
          content:
            "Collaborated closely with backend, UX, and QA teams to ensure seamless integration of APIs and automated testing pipelines (Jest, Cypress) for robust, scalable solutions.",
        },
        {
          heading: "Code Quality and Maintainability",
          content:
            "Established and enforced best practices for code quality and maintainability, implementing ESLint, Prettier, and TypeScript for type safety and consistency across the codebase.",
        },
        {
          heading: "Mentorship and Team Guidance",
          content:
            "Mentored junior developers, conducting regular code reviews and knowledge-sharing sessions to elevate team standards and foster a collaborative learning environment.",
        },
      ],
    },
  },
  {
    key: "appleTeamlead",
    label: "Apple",
    sub: "Team-lead",
    componentProps: {
      title: "Team Lead",
      company: "Apple (Cognizant)",
      // companyIcon: <BsApple />,
      dates: "June 2022 - Jan 2023",
      intro:
        "Promoted to Team Lead, managing multiple teams while continuing engineering duties. Focused on supporting managers, streamlining workflows, and guiding teams to meet project goals.",
      bullets: [
        {
          heading: "Strategic Manager Support",
          content:
            "Collaborated closely with senior management to optimize daily operations, proactively addressing bottlenecks and ensuring seamless team coordination for mission-critical projects.",
        },
        {
          heading: "Cross-Team Task Coordination & Delivery",
          content:
            "Coordinated complex tasks across multiple teams, ensuring timely, high-quality delivery of milestones while adhering to Apple’s strategic goals and standards.",
        },
        {
          heading: "Team Leadership & Performance Optimization",
          content:
            "Provided dynamic leadership and mentorship to engineers, delivering regular performance feedback, and fostering a culture of continuous improvement and high accountability.",
        },
        {
          heading: "Executive Reporting & Decision-Making",
          content:
            "Delivered detailed progress reports to upper management, highlighting risks, achievements, and mitigation strategies, enabling data-driven decision-making at the executive level.",
        },
        {
          heading: "Onboarding & Talent Development",
          content:
            "Facilitated the onboarding of new team members, while providing constructive feedback and professional development opportunities to support team performance & engagement.",
        },
      ],
    },
  },
  {
    key: "appleQA",
    label: "Apple",
    sub: "QA Engineer",
    componentProps: {
      title: "Quality Engineer",
      company: "Apple (Cognizant)",
      // companyIcon: <BsApple />,
      dates: "September 2021 - Jan 2023",
      intro:
        "Full-time in a high-security, lockdown environment at Apple, I worked on a widely recognized AI virtual assistant, implementing advanced automation testing and NLP processing to optimize performance and scalability.",
      bullets: [
        {
          heading: "Automation Engineering",
          content:
            "Designed and maintained automation frameworks in Python and Swift, optimizing NLP workflows for millions of users and ensuring scalable test automation.",
        },
        {
          heading: "System Validation",
          content:
            "Led end-to-end testing, validating AI integration across cloud-based services, edge devices, and third-party APIs while maintaining high availability and fault tolerance.",
        },
        {
          heading: "Defect Management",
          content:
            "Identified, triaged, and documented critical bugs, collaborating with cross-functional teams to resolve issues and enhance platform stability & user experience at scale.",
        },
        {
          heading: "Version Control & CI/CD",
          content:
            "Managed complex Git & GitHub workflows in multi-CI/CD pipeline environment, enabling agile development cycles, ensuring rapid and reliable deployments, and version control practices",
        },
        {
          heading: "Product Lifecycle Testing",
          content:
            "Led testing efforts for AI products, employing methodologies like unit, integration, smoke, pent, regression, and performance testing to ensure seamless production deployment.",
        },
      ],
    },
  },
  {
    key: "mashStartup",
    label: "Mashauri Limited",
    sub: "Frontend Developer",
    componentProps: {
      title: "Frontend Developer",
      company: "Mashauri Limited",
      dates: "June 2019 - February 2020",
      intro:
        "As a Frontend Developer at Mashauri Limited, I contributed to the UI/UX design support for an EdTech startup, designing wireframes and developing landing pages and user forms using JavaScript and React.",
      bullets: [
        {
          heading: "Database Migration & Optimization",
          content:
            "Managed the migration of legacy databases to more efficient, scalable PostgreSQL solutions, ensuring data integrity and optimizing queries for performance across the platform.",
        },
        {
          heading: "Content Management & Site Administration",
          content:
            "Managed content updates and integrations on WordPress and Drupal, ensuring SEO optimization and efficient content workflows for smooth platform operation.",
        },
        {
          heading: "Frontend Development & UI Optimization",
          content:
            "Developed responsive, dynamic user interfaces using React and JavaScript, ensuring a seamless experience for students and educators across web and mobile platforms.",
        },
        {
          heading: "Cross-Functional Collaboration & Problem Solving",
          content:
            "Collaborated with backend and design teams to troubleshoot and resolve issues related to CMS, frontend, and database integrations, ensuring timely delivery of new features.",
        },
      ],
    },
  },
  {
    key: "cubeStartup",
    label: "Out-of-the-Cube",
    sub: "Jr Frontend Developer",
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
            "Developed dynamic, visually appealing portfolio websites for artists, showcasing their unique style and artwork using HTML, CSS, and JavaScript/jQuery.",
        },
        {
          heading: "Content Management with WordPress",
          content:
            "Managed and integrated new pages, articles, and multimedia using WordPress, ensuring a seamless user experience with customized styling through the Theme Editor.",
        },
        {
          heading: "Website UI/UX Enhancements",
          content:
            "I refined the website's aesthetics and usability with CSS and UI enhancements while implementing dynamic JavaScript/jQuery features for enhanced user experience.",
        },
        {
          heading: "Product Management Support",
          content:
            "Assisted in product management, adding new products and converting an Excel database to PostgreSQL to streamline data management processes.",
        },
      ],
    },
  },
  {
    key: "freelance",
    label: "Freelance",
    sub: "Wordpress Developer",
    componentProps: {
      title: "WordPress Developer",
      company: "Freelance",
      dates: "2015 - January 2019",
      intro:
        "As a freelance WordPress developer, I specialized in crafting responsive, user-friendly websites for small to medium-sized enterprises (SMEs) in the hospitality industry, focusing on theme customization, plugin integration, and tailored solutions. Key accomplishments include:",
      bullets: [
        {
          heading: "Customization & Feature Implementation",
          content:
            "Tailored themes and integrated plugins to optimize site performance, ensuring responsive design for seamless navigation across devices.",
        },
        {
          heading: "E-commerce Integration",
          content:
            "Set up e-commerce functionality, including payment gateways and product catalog management.",
        },
        {
          heading: "Branding & Design Alignment",
          content:
            "Customized themes to align with clients' branding, ensuring a cohesive and visually appealing web presence.",
        },
        {
          heading: "Project Management & Ongoing Maintenance",
          content:
            "Managed multiple projects, meeting deadlines while providing regular updates, bug fixes, and client training on website management.",
        },
      ],
    },
  },
];

export default jobEntries;
