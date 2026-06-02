import { z } from "zod";

import { assertUnique, parseContent } from "@/lib/content/parseContent";
import { experienceSchema, jobEntrySchema } from "@/lib/content/schema";

/** A valid entry to mutate per-case, so each test states only what it breaks. */
function validEntry() {
  return {
    key: "tuvLead",
    label: "TÜV Rheinland",
    sub: "Lead Frontend Developer",
    componentProps: {
      title: "Lead Frontend Developer",
      company: "TÜV Rheinland",
      dates: "Jan 2025 - Present",
      intro: "Leading the frontend strategy.",
      bullets: [{ heading: "CI/CD", content: "Led the integration of CI/CD pipelines." }],
    },
  };
}

describe("parseContent()", () => {
  it("returns the data unchanged when it is valid", () => {
    const entries = [validEntry()];

    expect(parseContent("experience", experienceSchema, entries)).toEqual(entries);
  });

  it("names the section, the entry and the missing field", () => {
    const entry = validEntry();
    // @ts-expect-error deliberately breaking the content to assert the message
    delete entry.componentProps.dates;

    expect(() => parseContent("experience", experienceSchema, [entry])).toThrow(
      /experience entry "tuvLead" is missing "componentProps\.dates"/
    );
  });

  it("names an invalid field rather than calling it missing", () => {
    const entry = validEntry();
    entry.componentProps.dates = "";

    expect(() => parseContent("experience", experienceSchema, [entry])).toThrow(
      /experience entry "tuvLead" has an invalid "componentProps\.dates"/
    );
  });

  it("reaches into nested arrays with a usable path", () => {
    const entry = validEntry();
    entry.componentProps.bullets[0].heading = "";

    expect(() => parseContent("experience", experienceSchema, [entry])).toThrow(
      /componentProps\.bullets\.0\.heading/
    );
  });

  it("falls back to the index when an entry has no nameable field", () => {
    expect(() => parseContent("experience", experienceSchema, [{}])).toThrow(/entry #0/);
  });

  it("reports every problem at once, not just the first", () => {
    const broken = { key: "x", label: "X", componentProps: {} };

    try {
      parseContent("experience", experienceSchema, [broken]);
      expect.unreachable("should have thrown");
    } catch (error) {
      const message = (error as Error).message;

      expect(message).toMatch(/componentProps\.title/);
      expect(message).toMatch(/componentProps\.company/);
      expect(message).toMatch(/componentProps\.dates/);
    }
  });

  it("rejects an empty content list", () => {
    expect(() => parseContent("experience", experienceSchema, [])).toThrow(
      /needs at least one entry/
    );
  });

  it("names the section on a non-list schema", () => {
    expect(() => parseContent("site", z.object({ name: z.string() }), {})).toThrow(
      /Invalid content in "site"/
    );
  });
});

describe("assertUnique()", () => {
  it("passes when every value is distinct", () => {
    expect(() => assertUnique("experience", [{ key: "a" }, { key: "b" }], "key")).not.toThrow();
  });

  it("names the duplicated value and both entry indexes", () => {
    expect(() =>
      assertUnique("experience", [{ key: "a" }, { key: "b" }, { key: "a" }], "key")
    ).toThrow(/duplicate "key" value "a" \(entries #0 and #2\)/);
  });
});

describe("the real content parses", () => {
  it("validates every entry in content/experience.ts", async () => {
    const { experience } = await import("@/content/experience");

    expect(() => experienceSchema.parse(experience)).not.toThrow();
    expect(experience.every((entry) => jobEntrySchema.safeParse(entry).success)).toBe(true);
  });
});
