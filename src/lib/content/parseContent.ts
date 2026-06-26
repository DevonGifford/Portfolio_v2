/**
 * Hand-rolled formatting for readable Zod content errors.
 *
 * `z.prettifyError` reports generic paths like `index 2`; this replaces them
 * with clearer labels such as `experience entry "appleQA" has an invalid "componentProps.dates"`.
 */

import type { ZodType, z } from "zod";

/** Fields consulted, in order, to name the entry an issue belongs to. */
const NAME_KEYS = ["key", "id", "title", "name", "company"] as const;

/**
 * Safely reads a nested value from an object using a property path.
 *
 * @returns The value at the path, or `undefined` if the path cannot be resolved.
 */
function valueAt(root: unknown, path: readonly PropertyKey[]): unknown {
  let node = root;

  for (const segment of path) {
    if (node === null || typeof node !== "object") return undefined;

    node = (node as Record<PropertyKey, unknown>)[segment];
  }

  return node;
}

/**
 * Builds a readable label for an array entry.
 *
 * @returns The first matching value from `NAME_KEYS`, the entry index as a fallback, or `""` for a non-list.
 * @example `[2, "componentProps", "dates"]` -> ` entry "appleQA"`
 */
function describeEntry(root: unknown, path: readonly PropertyKey[]): string {
  const index = path[0];

  if (typeof index !== "number") return "";

  const entry = valueAt(root, [index]);

  if (entry !== null && typeof entry === "object") {
    for (const nameKey of NAME_KEYS) {
      const value = (entry as Record<string, unknown>)[nameKey];

      if (typeof value === "string" && value.length > 0) return ` entry "${value}"`;
    }
  }

  return ` entry #${index}`;
}

/**
 * Converts a Zod issue path into a readable field path.
 *
 * @returns The field path without the leading array index, if present.
 * @example `[2, "componentProps", "bullets", 0, "heading"]` -> `componentProps.bullets.0.heading`.
 */
function describeField(path: readonly PropertyKey[]): string {
  const fields = typeof path[0] === "number" ? path.slice(1) : path;

  return fields.map(String).join(".");
}

/**
 * Parses one content module, throwing a readable error listing every problem.
 *
 * @param section - Name shown in the error, e.g. `"experience"`.
 * @param schema - The schema the module must satisfy.
 * @param data - The raw, unvalidated module export.
 * @returns The parsed, typed data.
 */
export function parseContent<T extends ZodType>(
  section: string,
  schema: T,
  data: unknown
): z.infer<T> {
  const result = schema.safeParse(data);

  if (result.success) return result.data;

  const problems = result.error.issues.map((issue) => {
    const where = `${section}${describeEntry(data, issue.path)}`;
    const field = describeField(issue.path);

    if (!field) return `  - ${where}: ${issue.message}`;

    return valueAt(data, issue.path) === undefined
      ? `  - ${where} is missing "${field}"`
      : `  - ${where} has an invalid "${field}": ${issue.message}`;
  });

  // Leading newlines keep this legible in Next's build log and greppable in CI.
  throw new Error(`\n\nInvalid content in "${section}":\n${problems.join("\n")}\n`);
}

/**
 * Throws if two entries share a value for `field` — the one check a schema
 * can't express per-entry, and what React keys and the Experience tabs rely on.
 *
 * @param section - Name shown in the error, e.g. `"experience"`.
 * @param items - The parsed entries.
 * @param field - The field that must be unique across them.
 */
export function assertUnique<T extends object>(
  section: string,
  items: readonly T[],
  field: keyof T & string
): void {
  const seen = new Map<unknown, number>();

  for (const [index, item] of items.entries()) {
    const value = item[field];
    const first = seen.get(value);

    if (first !== undefined) {
      throw new Error(
        `\n\nInvalid content in "${section}": duplicate "${field}" value ${JSON.stringify(value)} ` +
          `(entries #${first} and #${index}). Each entry needs a unique "${field}".\n`
      );
    }

    seen.set(value, index);
  }
}
