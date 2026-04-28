/**
 * Central site config.
 *
 * Provides a single source of truth for personal details used throughout
 * the website, including identity, contact details, social links, and SEO
 * metadata.
 */
export const siteConfig = {
  name: "Devon Gifford",
  role: "Full-Stack Developer",
  taglines: [
    "Full-Stack Developer",
    "React Specialist",
    "Python Enthusiast",
    "Next.js Developer",
    "Web Developer",
    "ex-FAANG",
    "Senior Developer",
    "Aspiring Principal Engineer",
    "Quality Engineer",
  ],

  email: "devongifford@outlook.com",

  social: {
    github: "https://github.com/DevonGifford",
    linkedin: "https://www.linkedin.com/in/dbgifford/",
    twitter: "https://twitter.com/devon_the_dev",
  },

  resumePath: "/assets/DevonGifford-FullstackDeveloper-2025.pdf",

  seo: {
    title: "Devon Gifford – Portfolio",
    description: "Full-stack developer. Quality engineer. React enjoyer.",
    ogImage: "",
    url: "https://devongifford.vercel.app",
  },
} as const;
