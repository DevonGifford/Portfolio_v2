import { readFileSync } from "node:fs";
import path from "node:path";

import { siteConfig } from "@/content/site.config";

/**
 * Tailwind v4 has no JS config, so `app/globals.css` is the only place a colour
 * actually takes effect. `siteConfig.theme` mirrors one value for reference,
 * which is a duplication — this test is what stops the two drifting apart.
 */
describe("siteConfig.theme mirrors the Tailwind tokens", () => {
  const css = readFileSync(path.join(process.cwd(), "app", "globals.css"), "utf8");

  /** Reads a custom property out of the `@theme` block. */
  function token(name: string) {
    return new RegExp(`--${name}:\\s*([^;]+);`).exec(css)?.[1].trim();
  }

  it("cardColor matches --color-cardColor", () => {
    expect(token("color-cardColor")?.toLowerCase()).toBe(siteConfig.theme.cardColor.toLowerCase());
  });

  it("the token it mirrors actually exists", () => {
    expect(token("color-cardColor")).toBeDefined();
  });
});
