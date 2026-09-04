/**
 * Zod schemas for everything under `content/`.
 *
 * Content is checked with `satisfies` at edit time and validated again at runtime
 * for things TypeScript can't catch, like empty strings, bad URLs, or duplicate keys.
 *
 * Avoid `.default()` and `.transform()` here because they break `satisfies`.
 */

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { z } from "zod";

/** Non-empty display text. Rejects the empty string, which `z.string()` allows. */
const text = z.string().min(1);

const httpUrl = z.url({ protocol: /^https?$/ });

/**
 * Validates a static Next.js image import without stripping its metadata.
 * Keeps the full `StaticImageData` object intact, including dimensions and blur data.
 */
export const staticImage = z.custom<StaticImageData>(
  (value): value is StaticImageData =>
    typeof value === "object" &&
    value !== null &&
    typeof (value as StaticImageData).src === "string",
  { error: 'must be a static image import, e.g. import img from "@/public/assets/images/..."' }
);

/** An opaque React node. Unvalidatable by design — used only for optional icon slots. */
const reactNode = z.custom<ReactNode>(() => true);

/**
 * A styled segment of paragraph text.
 * Prose is split into segments so styling stays out of the copy.
 */
export const textSegmentSchema = z.object({
  text: text,
  highlight: z.boolean().optional(),
  emphasis: z.boolean().optional(),
});

/** A paragraph: an ordered list of segments, rendered as one `<p>`. */
export const paragraphSchema = z.array(textSegmentSchema).min(1);

/** A numbered section heading, e.g. `01. About me`. */
export const sectionTitleSchema = z.object({
  number: text,
  name: text,
});

export type TextSegment = z.infer<typeof textSegmentSchema>;
export type Paragraph = z.infer<typeof paragraphSchema>;
export type SectionTitle = z.infer<typeof sectionTitleSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Experience                                  */
/* -------------------------------------------------------------------------- */

/** One achievement under a job entry. */
export const jobBulletSchema = z.object({
  heading: text,
  content: text,
});

/** One job in the work history. */
export const jobEntrySchema = z.object({
  key: text,
  label: text,
  sub: text.optional(),
  componentProps: z.object({
    title: text,
    company: text,
    companyIcon: reactNode.optional(),
    dates: text,
    intro: text,
    bullets: z.array(jobBulletSchema).min(1),
  }),
});

export type JobBullet = z.infer<typeof jobBulletSchema>;
export type JobEntry = z.infer<typeof jobEntrySchema>;
export const experienceSchema = z.array(jobEntrySchema).min(1, "needs at least one entry");

/* -------------------------------------------------------------------------- */
/*                                  Projects                                   */
/* -------------------------------------------------------------------------- */

/** Which side the screenshot sits on. Alternate them down the page. */
export const projectLayoutSchema = z.enum(["default", "reversed"]);

export const capstoneEntrySchema = z.object({
  /** Project name. Doubles as the React key, so it must be unique. */
  title: text,
  description: text,
  image: z.object({
    src: staticImage,
    alt: text,
    width: z.number().int().positive(),
    height: z.number().int().positive(),
  }),
  imageUrl: text,
  gitLink: httpUrl,
  youtubeLink: httpUrl.optional(),
  liveLink: httpUrl,
  techStackList: z.array(text).min(1),
  layout: projectLayoutSchema.optional(),
});

export const miniProjectEntrySchema = z.object({
  /** Project name. Doubles as the React key, so it must be unique. */
  title: text,
  description: text,
  gitLink: httpUrl,
  liveLink: httpUrl,
  listItems: z.array(text).min(1),
});

export type ProjectLayout = z.infer<typeof projectLayoutSchema>;
export type CapstoneEntry = z.infer<typeof capstoneEntrySchema>;
export type MiniProjectEntry = z.infer<typeof miniProjectEntrySchema>;

/** Featured projects, in display order. */
export const capstoneProjectsSchema = z
  .array(capstoneEntrySchema)
  .min(1, "needs at least one project");

/** Smaller projects, in display order. */
export const miniProjectsSchema = z
  .array(miniProjectEntrySchema)
  .min(1, "needs at least one project");

/* -------------------------------------------------------------------------- */
/*                                   Skills                                    */
/* -------------------------------------------------------------------------- */

export const skillSchema = z.object({
  src: staticImage,
  alt: text,
  title: text,
  className: text.optional(),
});

export const skillGroupSchema = z.object({
  title: text,
  skills: z.array(skillSchema).min(1),
  layout: z.enum(["wrap", "compact"]),
});

export type Skill = z.infer<typeof skillSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
/** All skill groups, in display order. */
export const skillGroupsSchema = z.array(skillGroupSchema).min(1, "needs at least one group");

/* -------------------------------------------------------------------------- */
/*                                Section prose                                */
/* -------------------------------------------------------------------------- */

/** The Banner hero section. */
export const bannerSchema = z.object({
  greeting: text,
  paragraphs: z.array(paragraphSchema).min(1),
  closing: text,
  cta: z.object({
    label: text,
    href: text.startsWith("#", "must be an on-page anchor, e.g. #projects"),
  }),
  resumeLabel: text,
});

/** The About section's prose and portrait. */
export const aboutSchema = z.object({
  title: sectionTitleSchema,
  paragraphs: z.array(paragraphSchema).min(1),
  closing: text,
  portraitAlt: text,
});

/** The Contact section. */
export const contactSchema = z.object({
  title: sectionTitleSchema,
  heading: text,
  paragraphs: z.array(paragraphSchema).min(1),
  ctaLabel: text,
});

export type Banner = z.infer<typeof bannerSchema>;
export type About = z.infer<typeof aboutSchema>;
export type Contact = z.infer<typeof contactSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Site config                                 */
/* -------------------------------------------------------------------------- */

export const siteConfigSchema = z.object({
  name: text,
  role: text,
  taglines: z.array(text).min(1),
  email: z.email(),
  social: z.record(z.string(), httpUrl),
  resumePath: text.startsWith("/", "must be a public path starting with /"),
  seo: z.object({
    title: text,
    description: text,
    ogImage: z.string(),
    url: httpUrl,
    favicon: text,
    canonical: text,
    lang: text,
    locale: text,
  }),
  nav: z
    .array(
      z.object({
        id: text,
        label: text,
        index: text.optional(),
      })
    )
    .min(1),
  labels: z.object({
    resume: text,
    experienceHeading: text,
    capstoneHeading: text,
    miniProjectsHeading: text,
    featuredProject: text,
    showMore: text,
    showLess: text,
  }),
  miniProjectPreviewCount: z.number().int().positive(),
  footer: z.object({
    builtBy: text,
    inspiredBy: text,
    credit: z.object({ name: text, href: httpUrl }),
  }),
  features: z.object({
    spotlight: z.boolean(),
    introLoader: z.boolean(),
    profileRotate: z.boolean(),
  }),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export { httpUrl, text };
