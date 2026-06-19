/**
 * Zod schemas for everything under `content/`, plus the types inferred from them.
 *
 * Content modules type themselves against these with `satisfies`, which catches
 * shape errors in the editor before a file is saved. `lib/content/index.ts` then
 * parses the same data at runtime, catching what types cannot: empty strings,
 * malformed URLs, duplicate keys, an image that is secretly a string.
 *
 * ---
 *
 * **Rule: no `.default()` and no `.transform()` in a content schema.**
 *
 * Both make a schema's input type differ from its output type. `z.infer` then
 * resolves to the *output* type, and `satisfies Foo[]` over in `content/` starts
 * rejecting content that is perfectly valid. If a field needs a fallback,
 * express it at the render site (`entry.tabLabel ?? entry.company`) instead.
 */

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { z } from "zod";

/** Non-empty display text. Rejects the empty string, which `z.string()` allows. */
const text = z.string().min(1);

/** An absolute `http(s)` URL. */
const httpUrl = z.url({ protocol: /^https?$/ });

/**
 * A static image import — `import img from "@/public/assets/..."`.
 *
 * Not a string path: static imports hand next/image the intrinsic dimensions and
 * a blur placeholder, and a missing file breaks the build rather than the page.
 * `z.custom` passes the object through by identity, so fields Next may add to
 * `StaticImageData` later are not silently stripped the way `z.object` would.
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
 * One run of text inside a paragraph.
 *
 * Prose is split into segments so styling stays out of the copy: set
 * `highlight` for the brand green, `emphasis` for italics, or neither for
 * plain text. `components/common/RichText.tsx` renders them.
 */
export const textSegmentSchema = z.object({
  /** The words themselves. Mind the leading and trailing spaces between runs. */
  text: text,
  /** Render in the accent green. */
  highlight: z.boolean().optional(),
  /** Render italic. */
  emphasis: z.boolean().optional(),
});

/** A paragraph: an ordered list of segments, rendered as one `<p>`. */
export const paragraphSchema = z.array(textSegmentSchema).min(1);

/** A numbered section heading, e.g. `01. About me`. */
export const sectionTitleSchema = z.object({
  /** Two-digit number shown in the accent green, e.g. `"01"`. */
  number: text,
  /** The heading itself, e.g. `"About me"`. */
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
  /** Bold lead-in, rendered before the colon. */
  heading: text,
  /** The achievement itself. */
  content: text,
});

/** One job in the work history. */
export const jobEntrySchema = z.object({
  /** Stable id, used as the tab key and the React key. Must be unique. */
  key: text,
  /** Sidebar tab label — usually the employer. */
  label: text,
  /** Optional second line under the tab label — usually the role. */
  sub: text.optional(),
  /** The fields rendered in the entry panel. */
  componentProps: z.object({
    /** Job title, e.g. "Lead Frontend Developer". */
    title: text,
    /** Employer, e.g. "TÜV Rheinland". */
    company: text,
    /** Optional icon rendered beside the company name. */
    companyIcon: reactNode.optional(),
    /** Free-form date range, e.g. "Jan 2025 - Present". */
    dates: text,
    /** One-paragraph summary shown above the bullets. */
    intro: text,
    /** Achievements, rendered in order. */
    bullets: z.array(jobBulletSchema).min(1),
  }),
});

export type JobBullet = z.infer<typeof jobBulletSchema>;
export type JobEntry = z.infer<typeof jobEntrySchema>;

/** The full work history, newest first. */
export const experienceSchema = z.array(jobEntrySchema).min(1, "needs at least one entry");

/* -------------------------------------------------------------------------- */
/*                                  Projects                                   */
/* -------------------------------------------------------------------------- */

/** Which side the screenshot sits on. Alternate them down the page. */
export const projectLayoutSchema = z.enum(["default", "reversed"]);

/** A featured project, rendered as a large card with a screenshot. */
export const capstoneEntrySchema = z.object({
  /** Project name. Doubles as the React key, so it must be unique. */
  title: text,
  /** One-paragraph pitch shown over the screenshot. */
  description: text,
  /** The desktop screenshot. */
  image: z.object({
    /** Statically imported image. */
    src: staticImage,
    /** Alt text. Describe the screenshot, not the project. */
    alt: text,
    /** Intrinsic width in pixels. */
    width: z.number().int().positive(),
    /** Intrinsic height in pixels. */
    height: z.number().int().positive(),
  }),
  /** Public path to the smaller image used as the mobile background. */
  imageUrl: text,
  /** Repository URL. */
  gitLink: httpUrl,
  /** Optional demo video URL. */
  youtubeLink: httpUrl.optional(),
  /** Deployed site URL. */
  liveLink: httpUrl,
  /** Technologies listed under the card. */
  techStackList: z.array(text).min(1),
  /** Defaults to `"default"` at the render site when omitted. */
  layout: projectLayoutSchema.optional(),
});

/** A smaller project, rendered as a compact card with no screenshot. */
export const miniProjectEntrySchema = z.object({
  /** Project name. Doubles as the React key, so it must be unique. */
  title: text,
  /** Two-or-three-sentence summary. */
  description: text,
  /** Repository URL. */
  gitLink: httpUrl,
  /** Deployed site URL. */
  liveLink: httpUrl,
  /** Technologies listed under the card. */
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

/** One technology icon. */
export const skillSchema = z.object({
  /** Statically imported logo. */
  src: staticImage,
  /** Alt text — the technology name. */
  alt: text,
  /** Tooltip text, shown on hover. */
  title: text,
  /** Optional per-icon sizing override, when a logo's aspect ratio needs it. */
  className: text.optional(),
});

/** A titled row of skill icons. */
export const skillGroupSchema = z.object({
  /** Heading above the row, e.g. "Hard Skills". Doubles as the React key. */
  title: text,
  /** The icons in this row, in display order. */
  skills: z.array(skillSchema).min(1),
});

export type Skill = z.infer<typeof skillSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;

/** All skill groups, in display order. */
export const skillGroupsSchema = z.array(skillGroupSchema).min(1, "needs at least one group");

/* -------------------------------------------------------------------------- */
/*                                Section prose                                */
/* -------------------------------------------------------------------------- */

/** The hero section. */
export const bannerSchema = z.object({
  /** Small line above the name, e.g. "Hello World, my name is". */
  greeting: text,
  /** Intro paragraphs, rendered in order. */
  paragraphs: z.array(paragraphSchema).min(1),
  /** Closing line, rendered italic under the paragraphs. */
  closing: text,
  /** The on-page link under the intro. */
  cta: z.object({
    /** Link text. */
    label: text,
    /** Anchor target, e.g. `"#projects"`. */
    href: text.startsWith("#", "must be an on-page anchor, e.g. #projects"),
  }),
  /** Label on the CV download button. */
  resumeLabel: text,
});

/** The About section's prose and portrait. */
export const aboutSchema = z.object({
  /** Numbered heading. */
  title: sectionTitleSchema,
  /** Bio paragraphs, rendered in order. */
  paragraphs: z.array(paragraphSchema).min(1),
  /** Closing line, rendered italic under the bio. */
  closing: text,
  /** Alt text for the portrait. */
  portraitAlt: text,
});

/** The Contact section. */
export const contactSchema = z.object({
  /** Numbered heading. */
  title: sectionTitleSchema,
  /** Large heading under the section title. */
  heading: text,
  /** Body paragraphs, rendered in order. */
  paragraphs: z.array(paragraphSchema).min(1),
  /** Label on the mailto button. */
  ctaLabel: text,
});

export type Banner = z.infer<typeof bannerSchema>;
export type About = z.infer<typeof aboutSchema>;
export type Contact = z.infer<typeof contactSchema>;

/* -------------------------------------------------------------------------- */
/*                                 Site config                                 */
/* -------------------------------------------------------------------------- */

/** `site.config.ts` — identity, SEO, shell copy and feature flags. */
export const siteConfigSchema = z.object({
  /** Your name, shown in the hero and the structured-data block. */
  name: text,
  /** Your role, used for SEO structured data. */
  role: text,
  /** Rotating strings for the hero typewriter. */
  taglines: z.array(text).min(1),
  /** Contact address, used by the Contact and RightSide mailto links. */
  email: z.email(),
  /** Profile URLs. Every key needs a matching icon in `SocialLinks`. */
  social: z.record(z.string(), httpUrl),
  /** Public path to the CV, e.g. `/assets/cv.pdf`. */
  resumePath: text.startsWith("/", "must be a public path starting with /"),
  seo: z.object({
    /** Browser tab and Open Graph title. */
    title: text,
    /** Meta description. */
    description: text,
    /** Public path to the social preview image; empty to emit none. */
    ogImage: z.string(),
    /** Canonical origin, e.g. `https://example.com`. */
    url: httpUrl,
    /** Public path to the favicon. */
    favicon: text,
    /** Canonical path, usually `"/"`. */
    canonical: text,
    /** Document language, e.g. `"en"`. */
    lang: text,
    /** Open Graph locale, e.g. `"en_US"`. */
    locale: text,
  }),
  /** Nav links, in order. `index` is shown before the label when present. */
  nav: z
    .array(
      z.object({
        /** Target section id, matching the `id` on that `<section>`. */
        id: text,
        /** Link text. */
        label: text,
        /** Numbering shown before the label, e.g. `"01."`. */
        index: text.optional(),
      })
    )
    .min(1),
  /** Headings and button labels used across the shell. */
  labels: z.object({
    /** Header and mobile-menu CV link. */
    resume: text,
    /** Experience section heading. */
    experienceHeading: text,
    /** Capstone projects heading. */
    capstoneHeading: text,
    /** Mini projects heading. */
    miniProjectsHeading: text,
    /** Badge above each capstone card. */
    featuredProject: text,
    /** Expand the mini project list. */
    showMore: text,
    /** Collapse the mini project list. */
    showLess: text,
  }),
  /** Mini projects shown before "Show More". */
  miniProjectPreviewCount: z.number().int().positive(),
  /** Footer attribution. */
  footer: z.object({
    /** Text before your name. */
    builtBy: text,
    /** Text before the credit link. */
    inspiredBy: text,
    /** Who to credit. */
    credit: z.object({ name: text, href: httpUrl }),
  }),
  /** Opt-in effects. Each is consumed by the release that adds it. */
  features: z.object({
    /** Cursor-following background glow. */
    spotlight: z.boolean(),
    /** First-visit loading screen. */
    introLoader: z.boolean(),
    /** Click-to-rotate portrait. */
    profileRotate: z.boolean(),
  }),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export { httpUrl, text };
