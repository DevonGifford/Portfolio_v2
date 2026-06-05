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
        text: "Self taught software engineer with a strong focus on frontend development. I specialize in crafting web and mobile applications using React & TypeScript.",
      },
    ],
    [
      {
        text: "Leveraging my background in Marketing and experience in Software Testing at a renowned ",
      },
      { text: "FAANG", emphasis: true },
      {
        text: " company, my approach brings a unique perspective that prioritizes clean and reliable code.",
      },
    ],
  ],

  closing: "Fully committed to the philosophy of lifelong learning.",

  cta: { label: "Capstone Projects", href: "#projects" },

  resumeLabel: "Download my latest CV",
} satisfies Banner;
