import { existsSync } from "node:fs";
import path from "node:path";

import { capstoneProjects, experience, miniProjects, skillGroups } from "@/lib/content";
import { siteConfig } from "@/content/site.config";

/** Source-agnostic guards: these hold whatever the content happens to say. */

function isHttpUrl(value: string) {
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

describe("content is not accidentally empty", () => {
  it("has job entries, capstone projects, mini projects and skills", () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(capstoneProjects.length).toBeGreaterThan(0);
    expect(miniProjects.length).toBeGreaterThan(0);
    expect(skillGroups.length).toBeGreaterThan(0);
  });

  it("gives every job entry a title, company, dates, intro and at least one bullet", () => {
    for (const { key, componentProps } of experience) {
      expect(componentProps.title, key).not.toBe("");
      expect(componentProps.company, key).not.toBe("");
      expect(componentProps.dates, key).not.toBe("");
      expect(componentProps.intro, key).not.toBe("");
      expect(componentProps.bullets.length, key).toBeGreaterThan(0);
    }
  });
});

describe("entries are uniquely identifiable", () => {
  it("has unique job entry keys", () => {
    const keys = experience.map((entry) => entry.key);

    expect(new Set(keys).size).toBe(keys.length);
  });

  it("has unique capstone and mini project titles", () => {
    const capstoneTitles = capstoneProjects.map((project) => project.title);
    const miniTitles = miniProjects.map((project) => project.title);

    expect(new Set(capstoneTitles).size).toBe(capstoneTitles.length);
    expect(new Set(miniTitles).size).toBe(miniTitles.length);
  });
});

describe("every external link is a valid http(s) URL", () => {
  it("covers capstone repo and live links", () => {
    for (const project of capstoneProjects) {
      expect(isHttpUrl(project.gitLink), `${project.title} gitLink`).toBe(true);
      expect(isHttpUrl(project.liveLink), `${project.title} liveLink`).toBe(true);
    }
  });

  it("covers mini project repo and live links", () => {
    for (const project of miniProjects) {
      expect(isHttpUrl(project.gitLink), `${project.title} gitLink`).toBe(true);
      expect(isHttpUrl(project.liveLink), `${project.title} liveLink`).toBe(true);
    }
  });

  it("covers every social URL", () => {
    for (const [network, url] of Object.entries(siteConfig.social)) {
      expect(isHttpUrl(url), network).toBe(true);
    }
  });

  it("covers the canonical site URL", () => {
    expect(isHttpUrl(siteConfig.seo.url)).toBe(true);
  });
});

describe("siteConfig points at things that exist", () => {
  it("has a plausible email address", () => {
    expect(siteConfig.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("resolves resumePath to a real file under public/", () => {
    const resume = path.join(process.cwd(), "public", siteConfig.resumePath);

    expect(existsSync(resume), siteConfig.resumePath).toBe(true);
  });

  it("resolves the favicon to a real file under public/", () => {
    const favicon = path.join(process.cwd(), "public", siteConfig.seo.favicon);

    expect(existsSync(favicon), siteConfig.seo.favicon).toBe(true);
  });

  it("resolves ogImage to a real file under public/ when one is set", () => {
    // An empty ogImage is intentional — layout.tsx then emits no `og:image` at all.
    if (!siteConfig.seo.ogImage) return;

    const ogImage = path.join(process.cwd(), "public", siteConfig.seo.ogImage);

    expect(existsSync(ogImage), siteConfig.seo.ogImage).toBe(true);
  });

  it("has at least one tagline for the typewriter", () => {
    expect(siteConfig.taglines.length).toBeGreaterThan(0);
  });
});

describe("capstone mobile backgrounds point at things that exist", () => {
  // `image.src` is a static import, so the build catches a bad path. `imageUrl` is a
  // plain string read into a CSS `url()` by ProjectsCapstone, so nothing else would.
  it("resolves every capstone imageUrl to a real file under public/", () => {
    for (const project of capstoneProjects) {
      const image = path.join(process.cwd(), "public", project.imageUrl);

      expect(existsSync(image), `${project.title}: ${project.imageUrl}`).toBe(true);
    }
  });
});
