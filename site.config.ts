/**
 * Central site config — the first file to edit when you fork this portfolio.
 *
 * Everything here is who you are and how the shell is labelled. The prose for
 * each section lives in `content/`; the colours live in the `@theme` block in
 * `app/globals.css`.
 *
 * Deliberately free of imports so client components can read it without pulling
 * the content layer (and zod with it) into the browser bundle. It is validated
 * against `siteConfigSchema` at build time by `lib/content/index.ts`.
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

  /** Every key needs a matching icon in `components/common/SocialLinks.tsx`. */
  social: {
    github: "https://github.com/DevonGifford",
    linkedin: "https://www.linkedin.com/in/dbgifford/",
    twitter: "https://twitter.com/devon_the_dev",
  },

  resumePath: "/assets/DevonGifford-FullstackDeveloper-2025.pdf",

  seo: {
    title: "Devon Gifford – Portfolio",
    description: "Full-stack developer. Quality engineer. React enjoyer.",
    /** Social preview image. Leave empty to emit no `og:image`. */
    ogImage: "/assets/PortfolioDemoDevon.png",
    url: "https://devongifford.vercel.app",
    favicon: "/favicon.ico",
    canonical: "/",
    lang: "en",
    locale: "en_US",
  },

  /** Nav links, in order. `index` is shown in the accent green before the label. */
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About", index: "01." },
    { id: "experience", label: "Experience", index: "02." },
    { id: "projects", label: "Projects", index: "03." },
    { id: "contact", label: "Contact", index: "04." },
  ],

  /** Headings and button labels used across the shell. */
  labels: {
    resume: "Resume",
    experienceHeading: "Where I have worked",
    capstoneHeading: "Capstone Projects",
    miniProjectsHeading: "Other Noteworthy Projects",
    featuredProject: "Featured Project",
    showMore: "Show More",
    showLess: "Show Less",
  },

  /** Mini projects shown before "Show More". */
  miniProjectPreviewCount: 6,

  footer: {
    builtBy: "Built from scratch by",
    inspiredBy: "Inspired by",
    credit: { name: "Brittany Chiang", href: "https://brittanychiang.com/" },
  },

  theme: {
    /**
     * Card background.
     *
     * Tailwind v4 has no JS config, so the value that actually renders is
     * `--color-cardColor` in `app/globals.css`. This mirrors it for reference;
     * `tests/content/theme.test.ts` fails if the two drift apart.
     */
    cardColor: "#112240",
  },

  /**
   * Opt-in effects, each added by a later release. They are all `false` because
   * nothing reads them yet — flipping one on today does nothing.
   */
  features: {
    /** Cursor-following background glow. */
    spotlight: false,
    /** First-visit loading screen. */
    introLoader: false,
    /** Click-to-rotate portrait. */
    profileRotate: false,
  },
} as const;
