/**
 * The single place `content/` is read and validated.
 *
 * Components import from here, never from `content/` directly — everything this
 * module exports has already been parsed. Parsing happens at module scope, so
 * bad content throws during `next dev`, `next build` and the test run rather
 * than rendering something broken.
 *
 * `site.config.ts` is still imported directly by components; it joins this
 * boundary when its schema lands.
 */

import { experience as rawExperience, type JobEntries } from "@/content/experience";

import { assertUnique, parseContent } from "./parseContent";
import { experienceSchema } from "./schema";

/**
 * Work history, newest first.
 *
 * The parse returns the schema's inferred type, where `key` is a plain string.
 * `content/experience.ts` has already been checked against the narrower
 * `JobEntries` — including its `JobTabKey` union — so restoring that type here
 * asserts nothing the compiler has not seen.
 */
export const experience = parseContent("experience", experienceSchema, rawExperience) as JobEntries;

assertUnique("experience", experience, "key");

export type { JobBullet, JobEntry } from "./schema";
export type { JobEntries, JobTabKey } from "@/content/experience";
