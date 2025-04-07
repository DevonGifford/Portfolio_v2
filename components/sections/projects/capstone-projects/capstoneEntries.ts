import { StaticImageData } from "next/image";

import flatmateFinderBig from "@/public/assets/images/ProjectPictures/big-images/FlatmateFinder_big.png";
import clearScoreBig from "@/public/assets/images/ProjectPictures/big-images/ClearScore_big.png";
import thymiaBig from "@/public/assets/images/ProjectPictures/big-images/Thymia_big.png";
import devReadyBig from "@/public/assets/images/ProjectPictures/big-images/DevReady_big.png";
// import devReadySmall from "@/public/assets/images/ProjectPictures/small-images/devready_small.png";
// import thymiaSmall from "@/public/assets/images/ProjectPictures/small-images/thymia_small.png";
// import flatmateFinderSmall from "@/public/assets/images/ProjectPictures/small-images/flatmate_small.png";
// import clearScoreSmall from "@/public/assets/images/ProjectPictures/small-images/clearscore_small.png";

export type ProjectLayout = "default" | "reversed";

export type CapstoneEntry = {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  imageUrl: string;
  gitLink: string;
  youtubeLink?: string;
  liveLink: string;
  techStackList: string[];
  layout?: ProjectLayout;
};

const capstoneEntries: CapstoneEntry[] = [
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
];

export default capstoneEntries;
