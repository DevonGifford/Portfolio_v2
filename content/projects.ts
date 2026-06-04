/**
 * Projects, in display order.
 *
 * Edit this file to change what the Projects section shows. Shape is enforced
 * two ways: `satisfies` checks it here in the editor, and `lib/content/index.ts`
 * parses it at build time.
 *
 * Screenshots are static imports rather than string paths, so next/image gets
 * the intrinsic dimensions and a missing file breaks the build, not the page.
 */

import type { CapstoneEntry, MiniProjectEntry } from "@/lib/content/schema";

import flatmateFinderBig from "@/public/assets/images/ProjectPictures/big-images/FlatmateFinder_big.png";
import clearScoreBig from "@/public/assets/images/ProjectPictures/big-images/ClearScore_big.png";
import thymiaBig from "@/public/assets/images/ProjectPictures/big-images/Thymia_big.png";
import devReadyBig from "@/public/assets/images/ProjectPictures/big-images/DevReady_big.png";

/** Featured projects — large cards with a screenshot. */
export const capstoneProjects = [
  {
    title: "Flatmate Finder",
    description:
      "A real world personal project designed to streamline the search for a flatmate. Through a simple form, applicants submit their details, allowing existing tenants to review them in a Tinder style swipe interface",
    image: {
      src: flatmateFinderBig,
      alt: "Flatmate Finder Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/flatmate_small.png", // Use string path here
    gitLink: "https://github.com/DevonGifford/FlatmateFinder",
    liveLink: "https://flatmate-finder.vercel.app/",
    techStackList: ["Vite", "TypeScript", "ShadCN", "Firebase", "Vitest"],
    layout: "default",
  },
  {
    title: "ClearScore Ideaboard",
    description:
      "A time-constrained frontend assessment for ClearScore. Developed within 6 to 8 hours, it utilizes modern technologies like Tailwind CSS and ShadCN UI Library for rapid development. Prioritized simplicity, accessibility, and thorough testing.",
    image: {
      src: clearScoreBig,
      alt: "ClearScore Ideaboard Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/clearscore_small.png", // Use string path here
    gitLink: "https://github.com/DevonGifford/ClearScore",
    liveLink: "https://idea-board-murex.vercel.app/",
    // youtubeLink: "https://idea-board-murex.vercel.app/",
    techStackList: ["PostgreSQL", "Supabase", "TypeScript", "Tailwind"],
    layout: "reversed",
  },
  {
    title: "Thymia 2-back game",
    description:
      "A gamified version of the 2-back task, a cognitive test designed to measure working memory. Users are presented with a sequence of letters and must determine if the current letter matches the one presented two trials before.",
    image: {
      src: thymiaBig,
      alt: "Thymia 2-back Game Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/thymia_small.png", // Use string path here
    gitLink: "https://github.com/DevonGifford/Thymia",
    liveLink: "https://n-game-technical-assignment.vercel.app/",
    // youtubeLink: "https://n-game-technical-assignment.vercel.app/",
    techStackList: ["Next14", "Event-Logger", "Tailwind", "TypeScript", "Jest"],
    layout: "default",
  },
  {
    title: "Dev Ready",
    description:
      "An open source fullstack initiative, inspired by ZTM, designed to create an engaging interactive quiz platform for students. The project aims to empower learning through gamification and dynamic features.",
    image: {
      src: devReadyBig,
      alt: "Dev Ready Project Image",
      width: 500,
      height: 300,
    },
    imageUrl: "/assets/images/ProjectPictures/small-images/devready_small.png", // Use string path here
    gitLink: "https://github.com/DevonGifford/DevReady",
    liveLink: "https://ztm-ready-portfolio-project.vercel.app/",
    // youtubeLink: "https://ztm-ready-portfolio-project.vercel.app/",
    techStackList: ["Next14", "TypeScript", "Tailwind", "Jest", "PlayWright"],
    layout: "reversed",
  },
] satisfies CapstoneEntry[];

/** Smaller projects — compact cards, the first few shown before "Show More". */
export const miniProjects = [
  {
    title: "FlipDish",
    description:
      "Frontend Technical Assessment: Implement server-side data fetching to present JSON data as a restaurant menu, including some sneaky twists.",
    gitLink: "https://github.com/DevonGifford/Menu--TechnicalAssignment",
    liveLink: "https://menu-technical-assignment.vercel.app/",
    listItems: ["API", "NextJs", "TypeScript", "Vitest"],
  },
  {
    title: "NextLane",
    description:
      "Backend Technical Assessment: My solution for implementing a client-side caching layer, using JavaScript as requested.",
    gitLink: "https://github.com/DevonGifford/NextLane",
    liveLink: "https://github.com/DevonGifford/NextLane",
    listItems: ["Backend", "ttl-cache", "JavaScript"],
  },
  {
    title: "InCard",
    description:
      "Frontend Technical Assessment: Develop a web application that demonstrates authentication functionality using JWT tokens.",
    gitLink: "https://github.com/DevonGifford/InCard",
    liveLink: "https://incard-technical-assaignment-devon-gifford.vercel.app/",
    listItems: ["NextJS", "TypeScript", "Jest", "NextAuth"],
  },
  {
    title: "Restful API",
    description:
      "Simple and efficient way to handle HTTP requests and interact with a MongoDB database, following modern and best practices.",
    gitLink: "https://github.com/DevonGifford/modern-restful-API",
    liveLink: "https://github.com/DevonGifford/modern-restful-API",
    listItems: ["TypeScript", "Express", "MongoDB"],
  },
  {
    title: "Devotion",
    description:
      "A fullstack web application designed to replicate the seamless functionality of Notion, utilizing real-time database & recursive components.",
    gitLink: "https://github.com/DevonGifford/Devotion",
    liveLink: "https://devotion-portfolioproject.vercel.app/",
    listItems: ["NextJs", "TypeScript", "Convex", "Zustand"],
  },
  {
    title: "BulkBasics",
    description:
      "A fullstack e-commerce platform focusing on business logic and functionality, integrating various technologies.",
    gitLink: "https://github.com/DevonGifford/BulkBasics",
    liveLink: "https://bulk-basics.netlify.app/",
    listItems: ["Vite", "TypeScript", "Stripe", "Redux"],
  },
  {
    title: "Classic Pong",
    description:
      "Relive retro gaming with this browser-based implementation, featuring realistic ball physics and built with vanilla tooling.",
    gitLink: "https://github.com/DevonGifford/Single-Player-Pong-Game",
    liveLink: "https://devon-pong-game.netlify.app/",
    listItems: ["JavaScript", "HTML", "CSS", "Netlify"],
  },
  {
    title: "Ai Toolbox",
    description:
      "A suite of Language Model-based AI tools powered by OpenAI, offered as a SaaS solution. Revolutionize your business with advanced AI capabilities.",
    gitLink: "https://github.com/DevonGifford/my_Python/tree/main/Mini-Projects",
    liveLink: "https://ai-toolbox-five.vercel.app/",
    listItems: ["Next", "Stripe", "OpenAI", "Clerk"],
  },
  {
    title: "node-express-mvc-api",
    description:
      "A learning repository covering a range of concepts including JWT's, MongoDB integration, APIs, web servers and user auth.",
    gitLink: "https://github.com/DevonGifford/node-express-mvc-api",
    liveLink: "https://github.com/DevonGifford/node-express-mvc-api",
    listItems: ["Node", "Express", "MongoDB", "JavaScript"],
  },
  {
    title: "FaceDetection App",
    description:
      "A Fullstack PERN app - sign up and upload an image to detect one or multiple human faces, built with the help of ZTM.",
    gitLink: "https://github.com/DevonGifford/AI-Toolbox",
    liveLink: "https://devon-facedetection-app.onrender.com/",
    listItems: ["React", "Node", "Express", "API"],
  },
  {
    title: "Animated NavBar",
    description:
      "Interactive & responsive website with UI design focus. Utilized CSS keyframes for animations and code efficiency.",
    gitLink: "https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects",
    liveLink: "https://devon-animated-navigation-bar.netlify.app/",
    listItems: ["JavaScript", "HTML", "CSS", "keyframes"],
  },
  {
    title: "Spotify Clone",
    description:
      "A comprehensive Spotify clone that replicates the core functionality, including file upload and authentication.",
    gitLink: "https://github.com/DevonGifford/Spotify-Clone",
    liveLink: "https://devon-fullstack-spotify-clone.vercel.app/",
    listItems: ["Stripe", "SupaBase", "PostgreSQL"],
  },
  {
    title: "Always-On-Top App",
    description:
      "Create floating, resizable windows for any screen or app, staying on top. Ideal for coding with YouTube tutorials. Easy and efficient solution.",
    gitLink: "https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects",
    liveLink: "https://devon-picture-in-picture-app.netlify.app/",
    listItems: ["JavaScript", "HTML", "CSS", "Async"],
  },
  {
    title: "Math Sprint Game",
    description:
      "Interactive quiz web app testing the user's basic math skills. Initial research into building my capstone DevReady application.",
    gitLink: "https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects",
    liveLink: "https://devon-math-sprint-game.netlify.app/",
    listItems: ["JavaScript", "HTML", "CSS", "Netlify"],
  },
  {
    title: "Bookmark Keeper",
    description:
      "A very simple website for saving bookmarks. A learning project exploring dynamic rendering, local storage, and vanilla form validation.",
    gitLink: "https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects",
    liveLink: "https://devon-bookmark-app.netlify.app/",
    listItems: ["JavaScript", "HTML", "CSS", "Netlify"],
  },
  {
    title: "Calculator",
    description:
      "A personal victory, overcoming a fear instilled from high school Java class. Simple web-based calculator app built with vanilla tooling.",
    gitLink: "https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects",
    liveLink: "https://devon-javascript-calculator.netlify.app/",
    listItems: ["JavaScript", "HTML", "CSS", "Netlify"],
  },
] satisfies MiniProjectEntry[];
