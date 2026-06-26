/**
 * Loads, validates, and exports application content.
 *
 * This is the main content entry point.
 * Components import from `@/lib/content`, never from `content/` directly.
 * Add new content exports here so they are validated before use.
 */

import { about as rawAbout } from "@/content/about";
import { banner as rawBanner } from "@/content/banner";
import { contact as rawContact } from "@/content/contact";
import { experience as rawExperience, type JobEntries } from "@/content/experience";
import { capstoneProjects as rawCapstone, miniProjects as rawMini } from "@/content/projects";
import { skillGroups as rawSkillGroups } from "@/content/skills";
import { siteConfig } from "@/content/site.config";

import { assertUnique, parseContent } from "./parseContent";
import {
  aboutSchema,
  bannerSchema,
  capstoneProjectsSchema,
  contactSchema,
  experienceSchema,
  miniProjectsSchema,
  siteConfigSchema,
  skillGroupsSchema,
} from "./schema";

/**
 * Validates and parses each `content/` module before export.
 *
 * This makes invalid content fail fast during development, builds, or tests
 * rather than surfacing later in the UI.
 */
export const experience = parseContent("experience", experienceSchema, rawExperience) as JobEntries;
export const capstoneProjects = parseContent(
  "projects (capstone)",
  capstoneProjectsSchema,
  rawCapstone
);
export const miniProjects = parseContent("projects (mini)", miniProjectsSchema, rawMini);
export const skillGroups = parseContent("skills", skillGroupsSchema, rawSkillGroups);
export const banner = parseContent("banner", bannerSchema, rawBanner);
export const about = parseContent("about", aboutSchema, rawAbout);
export const contact = parseContent("contact", contactSchema, rawContact);

/**
 * Validates `site.config.ts`, discarding the result.
 *
 * Components import `siteConfig` directly instead, so client bundles skip zod
 * (~64 kB) and keep the file's `as const` literal types intact.
 */
parseContent("site.config.ts", siteConfigSchema, siteConfig);
assertUnique("experience", experience, "key");
assertUnique("projects (capstone)", capstoneProjects, "title");
assertUnique("projects (mini)", miniProjects, "title");
assertUnique("skills", skillGroups, "title");

export type {
  About,
  Banner,
  CapstoneEntry,
  Contact,
  JobBullet,
  JobEntry,
  MiniProjectEntry,
  Paragraph,
  ProjectLayout,
  SiteConfig,
  Skill,
  SkillGroup,
  TextSegment,
} from "./schema";
export type { JobEntries, JobTabKey } from "@/content/experience";
