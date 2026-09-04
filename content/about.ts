/**
 * The About section's prose.
 *
 * Paragraphs are arrays of segments rather than plain strings, so styling stays
 * out of the copy. Set `highlight` for the accent green or `emphasis` for
 * italics; plain runs need neither. Watch the leading and trailing spaces —
 * segments are concatenated exactly as written.
 *
 * The skill icons live in `content/skills.ts`.
 */

import type { About } from "@/lib/content/schema";

export const about = {
  title: { number: "01", name: "About me" },

  paragraphs: [
    [
      { text: "Hello there, I'm a " },
      { text: "full-stack developer", highlight: true },
      {
        text: ". Originally from South Africa, a British citizen, and currently based in Madrid, Spain.",
      },
    ],
    [
      { text: "I have " },
      { text: "8+ years", highlight: true },
      {
        text: " of experience in the tech industry, including stints across startups, big tech and enterprise platforms. I specialise in frontend development using ",
      },
      { text: "React & TypeScript", highlight: true },
      { text: "." },
    ],
    [
      { text: "My career has taken me from quality engineering at a " },
      { text: "major FAANG", highlight: true },
      {
        text: " company to building large-scale enterprise web applications. Along the way, I've had the privilege of leading engineering teams, ",
      },
      { text: "modernising legacy systems", highlight: true },
      {
        text: ", and working across a wide range of tech stacks and cloud environments.",
      },
    ],
  ],

  closing: "Outside of work, I tinker with Linux, homelabs and AI tooling.",

  portraitAlt: "Devon Gifford - Profile picture",
} satisfies About;
