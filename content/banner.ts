/**
 * The hero section.
 *
 * Paragraphs are arrays of segments rather than plain strings, so styling stays
 * out of the copy. Set `highlight` for the accent green or `emphasis` for
 * italics; plain runs need neither. Watch the leading and trailing spaces —
 * segments are concatenated exactly as written.
 *
 * Your name and the rotating taglines come from `site.config.ts`, not here.
 */

import type { Banner } from "@/lib/content/schema";

export const banner = {
  greeting: "Hello World, my name is",

  paragraphs: [
    [
      {
        text: "Self-taught software engineer with a strong focus on frontend development. I specialise in building modern web applications using ",
      },
      { text: "React, TypeScript & Next.js.", emphasis: true },
    ],
    [
      {
        text: "Drawing on my background in quality engineering, architecture and technical leadership, I bring a unique perspective that prioritises ",
      },
      { text: "clean, reliable software ", emphasis: true },
      { text: "and thoughtful use of AI." },
    ],
  ],

  closing: "Fully committed to the philosophy of lifelong learning.",

  cta: { label: "Capstone Projects", href: "#projects" },

  resumeLabel: "Download my latest CV",
} satisfies Banner;
