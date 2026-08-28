/**
 * The Contact section.
 *
 * Paragraphs are arrays of segments rather than plain strings, so styling stays
 * out of the copy. Set `highlight` for the accent green or `emphasis` for
 * italics; plain runs need neither.
 *
 * The address the button opens comes from `siteConfig.email`, not here.
 */

import type { Contact } from "@/lib/content/schema";

export const contact = {
  title: { number: "04", name: "What's Next?" },

  heading: "Let's get in touch",

  paragraphs: [
    [{ text: "My inbox is always open and looking for new opportunities" }],
    [
      {
        text: "Whether you have a question or just want to say hi, I'll do my best to get back to you!",
      },
    ],
  ],

  ctaLabel: "Say Hello",
} satisfies Contact;
