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

export { httpUrl, text };
