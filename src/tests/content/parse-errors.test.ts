import { z } from "zod";

import { assertUnique, parseContent } from "@/lib/content/parseContent";
import {
  capstoneProjectsSchema,
  experienceSchema,
  jobEntrySchema,
  miniProjectsSchema,
  skillGroupsSchema,
  skillSchema,
} from "@/lib/content/schema";

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

  it("names the exact broken bullet point, not just the entry", () => {
    const entry = validEntry();
    entry.componentProps.bullets[0].heading = "";

    expect(() => parseContent("experience", experienceSchema, [entry])).toThrow(
      /componentProps\.bullets\.0\.heading/
    );
  });

  it("names the index when an entry has no nameable field", () => {
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

  it("labels the error correctly for single-item content, like site.config", () => {
    expect(() => parseContent("site", z.object({ name: z.string() }), {})).toThrow(
      /Invalid content in "site"/
    );
  });

  it("rejects an empty content list", () => {
    expect(() => parseContent("experience", experienceSchema, [])).toThrow(
      /needs at least one entry/
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

  it("validates every entry in content/projects.ts", async () => {
    const { capstoneProjects, miniProjects } = await import("@/content/projects");

    expect(() => capstoneProjectsSchema.parse(capstoneProjects)).not.toThrow();
    expect(() => miniProjectsSchema.parse(miniProjects)).not.toThrow();
  });

  it("validates every group in content/skills.ts", async () => {
    const { skillGroups } = await import("@/content/skills");

    expect(() => skillGroupsSchema.parse(skillGroups)).not.toThrow();
  });
});

describe("the image guard", () => {
  it("rejects a string path where a static import is required", () => {
    expect(
      skillSchema.safeParse({ src: "/assets/react.png", alt: "React", title: "React" }).success
    ).toBe(false);
  });

  it("accepts a StaticImageData-shaped object", () => {
    const src = { src: "/assets/react.png", width: 100, height: 100 };

    expect(skillSchema.safeParse({ src, alt: "React", title: "React" }).success).toBe(true);
  });

  it("says what a bad image should have been", () => {
    expect(() =>
      parseContent("skills", skillGroupsSchema, [
        {
          title: "Hard Skills",
          layout: "wrap",
          skills: [{ src: "/nope.png", alt: "A", title: "A" }],
        },
      ])
    ).toThrow(/must be a static image import/);
  });
});
