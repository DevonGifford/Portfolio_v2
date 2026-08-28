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
      { text: "fullstack developer", highlight: true },
      {
        text: ". Originally from South Africa, holding British citizenship and now currently based in Madrid, Spain.",
      },
    ],
    [
      { text: "I have " },
      { text: "7+ years", highlight: true },
      {
        text: " of experience in the tech industry, including stints at various startups. I specialize in developing responsive and accessible web applications using ",
      },
      { text: "JavaScript & React", highlight: true },
      { text: "." },
    ],
    [
      { text: "Recently, I had the incredible opportunity to join a " },
      { text: "leading FAANG", highlight: true },
      {
        text: " company as a Quality Engineer, and later advanced to the role of Team Lead. Immersing myself in big-tech best practices, with a specific focus on ",
      },
      { text: "E2E & integration testing.", highlight: true },
    ],
  ],

  closing: "Currently leading a team and project rewriting a large-scale legacy system.",

  portraitAlt: "Devon Gifford - Profile picture",
} satisfies About;
