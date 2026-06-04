/**
 * Technology icons shown in the About section.
 *
 * Logos are static imports from the `@/public/assets` barrel, so next/image gets
 * the intrinsic size and a missing file breaks the build, not the page.
 *
 * `className` is an optional per-icon sizing override — some logos are wide,
 * some square. Omit it and the default sizing applies.
 */

import type { SkillGroup } from "@/lib/content/schema";
import {
  ReactL,
  Next,
  Redux,
  JavaScriptL,
  TypeScript,
  Python,
  Docker,
  NodeJS,
  Jest,
  Playwright,
  Tailwind,
  Vite,
  Remix,
  Neovim,
  Electron,
} from "@/public/assets";

export const skillGroups = [
  {
    title: "Hard Skills",
    skills: [
      { src: TypeScript, alt: "TypeScript", title: "TypeScript" },
      {
        src: JavaScriptL,
        alt: "JavaScript",
        title: "JavaScript",
        className: "rounded-full w-12 max-md:w-6",
      },
      { src: ReactL, alt: "React", title: "React", className: "w-14 max-md:w-7" },
      { src: Next, alt: "NextJS", title: "NextJS" },
      { src: Vite, alt: "Vite", title: "Vite", className: "w-14 max-md:w-6" },
      { src: Jest, alt: "Jest", title: "Jest", className: "w-10 max-md:w-6 rounded-none" },
      {
        src: Playwright,
        alt: "PlayWright",
        title: "PlayWright",
        className: "w-16 md:translate-x-1 max-md:w-6",
      },
      { src: Tailwind, alt: "Tailwind", title: "Tailwind", className: "w-12 max-md:w-8" },
      { src: Docker, alt: "Docker", title: "Docker", className: "w-16 max-md:w-8" },
      { src: Redux, alt: "Redux", title: "Redux", className: "w-10 max-md:w-6 rounded-none" },
      { src: NodeJS, alt: "NodeJS", title: "NodeJS", className: "w-14 max-md:w-6" },
      { src: Python, alt: "Python", title: "Python", className: "w-14 max-md:w-7" },
    ],
  },
  {
    title: "Currently Exploring",
    skills: [
      { src: Remix, alt: "Remix", title: "Remix", className: "w-14 max-md:w-6" },
      { src: Neovim, alt: "Neovim", title: "Neovim", className: "w-14 max-md:w-6" },
      { src: Electron, alt: "Electron", title: "Electron", className: "w-14 max-md:w-6" },
    ],
  },
] satisfies SkillGroup[];
