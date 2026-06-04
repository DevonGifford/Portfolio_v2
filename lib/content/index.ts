/**
 * The single place `content/` is read and validated.
 *
 * Components import from here, never from `content/` directly — everything this
 * module exports has already been parsed. Parsing happens at module scope, so
 * bad content throws during `next dev`, `next build` and the test run rather
 * than rendering something broken.
 *
 * Only `app/page.tsx` (a server component) imports this module; sections receive
 * the parsed data as props. That keeps zod out of the client bundle, where it
 * would cost ~64 kB gzipped to re-download a validation library whose work
 * already finished at build time.
 *
 * `site.config.ts` is still imported directly by components; it joins this
 * boundary when its schema lands.
 */

import { experience as rawExperience, type JobEntries } from "@/content/experience";
import { capstoneProjects as rawCapstone, miniProjects as rawMini } from "@/content/projects";
import { skillGroups as rawSkillGroups } from "@/content/skills";

import { assertUnique, parseContent } from "./parseContent";
import {
  capstoneProjectsSchema,
  experienceSchema,
  miniProjectsSchema,
  skillGroupsSchema,
} from "./schema";

/**
 * Work history, newest first.
 *
 * The parse returns the schema's inferred type, where `key` is a plain string.
 * `content/experience.ts` has already been checked against the narrower
 * `JobEntries` — including its `JobTabKey` union — so restoring that type here
 * asserts nothing the compiler has not seen.
 */
export const experience = parseContent("experience", experienceSchema, rawExperience) as JobEntries;

/** Featured projects — large cards with a screenshot. */
export const capstoneProjects = parseContent(
  "projects (capstone)",
  capstoneProjectsSchema,
  rawCapstone
);

/** Smaller projects — compact cards. */
export const miniProjects = parseContent("projects (mini)", miniProjectsSchema, rawMini);

/** Technology icons shown in the About section. */
export const skillGroups = parseContent("skills", skillGroupsSchema, rawSkillGroups);

assertUnique("experience", experience, "key");
assertUnique("projects (capstone)", capstoneProjects, "title");
assertUnique("projects (mini)", miniProjects, "title");
assertUnique("skills", skillGroups, "title");

export type {
  CapstoneEntry,
  JobBullet,
  JobEntry,
  MiniProjectEntry,
  ProjectLayout,
  Skill,
  SkillGroup,
} from "./schema";
export type { JobEntries, JobTabKey } from "@/content/experience";
