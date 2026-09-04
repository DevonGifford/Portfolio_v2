/**
 * Work history, newest first.
 *
 * Edit this file to change what the Experience section says. Shape is enforced
 * two ways: `satisfies` checks it here in the editor, and `lib/content/index.ts`
 * parses it at build time.
 */

// import { BsApple } from "react-icons/bs";
import type { JobEntry } from "@/lib/content/schema";

/**
 * The `key` of every entry below.
 *
 * Declared by hand rather than derived so a typo in a `key` is a compile error,
 * and so `Experience.tsx` can type its default tab. Add a key here when you add
 * an entry.
 */
export type JobTabKey =
  | "tuvLead"
  | "tuvFullstack"
  | "appleTeamlead"
  | "appleQA"
  | "mashStartup"
  | "cubeStartup"
  | "freelance";

/** The shape this file declares — `key` narrowed to the union above. */
export type JobEntries = (JobEntry & { key: JobTabKey })[];

export const experience = [
  {
    key: "tuvLead",
    label: "TÜV Rheinland",
    sub: "Lead Developer",
    componentProps: {
      title: "Lead Frontend Developer",
      company: "TÜV Rheinland",
      dates: "Jan 2025 - Present",
      intro:
        "Led the greenfield rebuild and production launch of TÜV Rheinland's enterprise web platform, replacing a 20-year SSG monolith with a reusable headless Next.js architecture powering international web applications.",
      bullets: [
        {
          heading: "Architecture & Development",
          content:
            "Owned frontend architecture while remaining hands-on across FirstSpirit CMS, Redis caching, content validation & Storybook components, delivering requirements into production.",
        },
        {
          heading: "Team Leadership & Scaling",
          content:
            "Led 10+ engineers across internal and external teams, hiring and onboarding developers while coordinating agency support across frontend, backend and DevOps workstreams.",
        },
        {
          heading: "Code Quality & Maintainability",
          content:
            "Established TypeScript, ESLint, Prettier, Husky and unit, integration and E2E testing standards, alongside review gates, branching conventions and technical documentation.",
        },
        {
          heading: "CI/CD & Cloud Delivery",
          content:
            "Built multi-stage GitLab CI/CD and Docker workflows for automated delivery across Azure, Kubernetes and Akamai, supporting migration from the legacy on-prem platform.",
        },
        {
          heading: "AI-Assisted Development",
          content:
            "Modernised day-to-day engineering through AI-assisted development, introducing agent-based workflows across implementation, debugging, code review & developer productivity.",
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
        "Joined TÜV Rheinland's enterprise legacy web-platform team, stabilising the existing system and delivering critical changes while defining the React, TypeScript and engineering foundations for its complete replacement.",
      bullets: [
        {
          heading: "Legacy Platform & Stabilisation",
          content:
            "Kept the legacy CMS/SSG platform operational through critical fixes, dependency cleanup and the Webtrekk → FullStory migration while evaluating its replacement.",
        },
        {
          heading: "React & TypeScript Modernisation",
          content:
            "Spearheaded the shift to React, TypeScript and Next.js, presenting and defending the replacement architecture across technical, project and senior stakeholder groups.",
        },
        {
          heading: "Component Library Development",
          content:
            "Started the React / TypeScript / Storybook component library, later scaling to hundreds of reusable components and distributed as a shared package across TÜV applications.",
        },
        {
          heading: "Engineering Practices & Collaboration",
          content:
            "Introduced modern Git, CI/CD and Agile practices while supporting project leadership with technical planning, architecture decisions, resourcing and cross-team delivery.",
        },
        {
          heading: "Mentorship & Technical Guidance",
          content:
            "Mentored developers through code review, implementation guidance and knowledge sharing, helping establish consistent frontend patterns across internal and external teams.",
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
      dates: "Jan 2022 - Jan 2023",
      intro:
        "Promoted into team leadership while remaining hands-on in Quality Engineering, co-leading multiple teams across concurrent testing and delivery workstreams and driving project outcomes.",
      bullets: [
        {
          heading: "Cross-Team Delivery",
          content:
            "Coordinated delivery across multiple teams, clearing blockers, managing priorities and maintaining quality standards across concurrent testing workstreams.",
        },
        {
          heading: "Manager & Stakeholder Support",
          content:
            "Supported senior management with technical context, delivery risks, resourcing concerns and day-to-day coordination across active projects.",
        },
        {
          heading: "Team Leadership",
          content:
            "Provided regular guidance and performance feedback, helping engineers & testers improve quality, delivery and consistency across Agile sprints.",
        },
        {
          heading: "Onboarding & Development",
          content:
            "Led onboarding for new team members, helping them become productive across specialised in-house tooling, workflows and quality processes.",
        },
        {
          heading: "Reporting & Coordination",
          content:
            "Communicated progress, dependencies and delivery risks between engineers, team leads and management across parallel projects.",
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
            "Worked on a widely used AI/ML virtual assistant, supporting automated testing, NLP training and large-scale regression workflows within Apple's secure engineering environment.",
        },
        {
          heading: "AI/ML Training & Evaluation",
          content:
            "Supported NLP model training and evaluation across language and dialect datasets, automating repeatable test runs and identifying behavioural regressions.",
        },
        {
          heading: "Version Control & CI/CD",
          content:
            "Worked within large-scale Git, GitHub & multi-pipeline CI/CD workflows, supporting automated validation and reliable test execution across distributed engineering teams.",
        },
        {
          heading: "System Validation",
          content:
            "Performed E2E, integration and API testing across connected services, devices and third-party integrations, tracing failures across system boundaries.",
        },
        {
          heading: "Defect Triage",
          content:
            "Triaged complex failures and regressions, producing detailed defect reports with reproducible steps, technical evidence and diagnostic context for engineering teams.",
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
          heading: "React Frontend Development",
          content:
            "Built and maintained React & JavaScript interfaces across B2B/B2C flows, authentication and responsive UI, alongside parallel WordPress and Moodle applications.",
        },
        {
          heading: "Moodle Integration",
          content:
            "Customised the open-source Moodle LMS using PHP & CSS, creating a consistent experience across the wider platform.",
        },
        {
          heading: "Data Automation",
          content:
            "Automated recurring CRUD and data-management tasks with Python & MySQL, replacing repetitive administrative work with reusable scripts.",
        },
        {
          heading: "Database Migration & Optimization",
          content:
            "Supported migration of legacy data to PostgreSQL, validating data integrity and improving database structure and query performance.",
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
          heading: "Frontend Development",
          content:
            "Developed responsive interfaces using jQuery, Bootstrap & Sass, including reusable templates for artist storefronts, exhibitions and marketplace content.",
        },
        {
          heading: "CMS Integration",
          content:
            "Integrated CMS-managed content into dynamic frontend views, supporting artist profiles, artwork, editorial content and commercial listings.",
        },
        {
          heading: "UI/UX Enhancements",
          content:
            "I refined the website's aesthetics and usability with CSS and UI enhancements while implementing dynamic JavaScript/jQuery features for enhanced user experience.",
        },
        {
          heading: "Product & Data Support",
          content:
            "Supported catalogue management and operational data tasks, including product updates and migration of structured data from Excel to PostgreSQL.",
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
        "Built and maintained WordPress sites for hospitality clients, combining frontend customisation, third-party integrations and ongoing technical support.",
      bullets: [
        {
          heading: "WordPress Development",
          content:
            "Configured and customised WordPress themes and plugins, adapting layouts, functionality and responsive behaviour to individual client requirements.",
        },
        {
          heading: "Booking & Platform Integrations",
          content:
            "Integrated Booking.com, NightsBridge and other reservation platforms, connecting customer-facing websites with external booking and hospitality workflows.",
        },
        {
          heading: "Frontend & Brand Implementation",
          content:
            "Refined responsive layouts and branding using HTML, CSS and WordPress theme tooling, creating consistent experiences across desktop and mobile.",
        },
        {
          heading: "Client Support",
          content:
            "Handled promotions, content updates, bug fixes and ongoing site administration for small businesses without dedicated technical staff.",
        },
      ],
    },
  },
] satisfies JobEntries;
