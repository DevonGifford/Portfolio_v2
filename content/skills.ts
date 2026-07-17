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
  // Redux,
  JavaScriptL,
  TypeScript,
  Python,
  Docker,
  // NodeJS,
  Jest,
  Playwright,
  Tailwind,
  Vite,
  // Remix,
  Neovim,
  Electron,
  Figma,
  // Azure,
  Go,
  Kubernetes,
  Linux,
  Lua,
  // PostCSS,
  Redis,
  Storybook,
  Zig,
  Claude,
} from "@/public/assets";

export const skillGroups = [
  {
    title: "Hard Skills",
    layout: "wrap",
    skills: [
      { src: TypeScript, alt: "TypeScript", title: "TypeScript" },
      {
        src: JavaScriptL,
        alt: "JavaScript",
        title: "JavaScript",
        className: "rounded-full w-11 max-md:w-5",
      },
      { src: Python, alt: "Python", title: "Python", className: "w-12 max-md:w-6" },
      { src: Lua, alt: "Lua", title: "Lua", className: "w-12 max-md:w-6" },
      // { src: NodeJS, alt: "NodeJS", title: "NodeJS", className: "w-12 max-md:w-5" },
      { src: ReactL, alt: "React", title: "React", className: "w-12 max-md:w-6" },
      { src: Figma, alt: "Figma", title: "Figma", className: "w-11 max-md:w-6" },
      { src: Next, alt: "NextJS", title: "NextJS" },
      { src: Vite, alt: "Vite", title: "Vite", className: "w-12 max-md:w-5" },
      // { src: Remix, alt: "Remix", title: "Remix", className: "w-12 max-md:w-5" },
      { src: Storybook, alt: "Storybook", title: "Storybook", className: "w-12 max-md:w-6" },
      { src: Tailwind, alt: "Tailwind", title: "Tailwind", className: "w-11 max-md:w-7" },
      { src: Jest, alt: "Jest", title: "Jest", className: "w-9 max-md:w-5 rounded-none" },
      {
        src: Playwright,
        alt: "PlayWright",
        title: "PlayWright",
        className: "w-14 md:translate-x-1 max-md:w-5",
      },
      // { src: PostCSS, alt: "PostCSS", title: "PostCSS", className: "w-12 max-md:w-6" },
      // { src: Redux, alt: "Redux", title: "Redux", className: "w-9 max-md:w-5 rounded-none" },
      { src: Docker, alt: "Docker", title: "Docker", className: "w-16 max-md:w-7" },
      // { src: Azure, alt: "Azure", title: "Azure", className: "w-11 max-md:w-6" },
      { src: Kubernetes, alt: "Kubernetes", title: "Kubernetes", className: "w-12 max-md:w-6" },
      { src: Redis, alt: "Redis", title: "Redis", className: "w-12 max-md:w-6" },
      { src: Neovim, alt: "Neovim", title: "Neovim", className: "w-12 max-md:w-5" },
    ],
  },
  {
    title: "Currently Exploring",
    layout: "compact",
    skills: [
      { src: Go, alt: "Go", title: "Go", className: "w-12 max-md:w-6" },
      { src: Electron, alt: "Electron", title: "Electron", className: "w-12 max-md:w-5" },
      { src: Zig, alt: "Zig", title: "Zig", className: "w-11 max-md:w-6" },
      { src: Linux, alt: "Linux", title: "Linux", className: "w-12 max-md:w-6" },
      { src: Claude, alt: "Claude", title: "Claude", className: "w-12 max-md:w-6" },
    ],
  },
] satisfies SkillGroup[];
