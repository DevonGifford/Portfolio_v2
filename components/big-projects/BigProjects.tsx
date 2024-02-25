import React from "react";
import SectionTitle from "../SectionTitle";
import BigProjectCard from "./BigProjectCard";
import BigProjectCardReversed from "./BigProjectCard-reversed";

const BigProjects: React.FC = () => {
  //-------------------------------------------------------------
  const DevotionImage = {
    src: "/assets/images/ProjectPictures/big-images/Devotion.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const DevotionImageSmall =
    "/assets/images/ProjectPictures/small-images/devotion_small.png";

  //-------------------------------------------------------------
  const spotifyImageProps = {
    src: "/assets/images/ProjectPictures/big-images/SpotifyClone.webp",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const spotifyImageSmall =
    "/assets/images/ProjectPictures/small-images/spotify_small.webp";

  //-------------------------------------------------------------
  const devreadyImage = {
    src: "/assets/images/ProjectPictures/big-images/DevReady.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const devreadyImageSmall =
    "/assets/images/ProjectPictures/small-images/devready_small.png";

  //-------------------------------------------------------------
  const incardImage = {
    src: "/assets/images/ProjectPictures/big-images/InCard.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const incardImageSmall =
    "/assets/images/ProjectPictures/small-images/incard_small.png";

  //-------------------------------------------------------------
  const flatmatefinderImage = {
    src: "/assets/images/ProjectPictures/big-images/FlatmateFinder.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const flatematefinderImageSmall =
    "/assets/images/ProjectPictures/small-images/flatmate_small.png";
  //-------------------------------------------------------------

  return (
    <div
      id="Projects"
      className="max-w-containerSmall mx-auto min-h-fit py-10  lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle titleName="Capstone Projects" titleNumber="03" />
      <div>
        <BigProjectCard
          image={flatmatefinderImage}
          imageUrl={flatematefinderImageSmall}
          title="Flatmate Finder"
          description="A real world personal project designed to streamline the search for a flatmate. Through a simple form, applicants submit their details, allowing existing tenants to review them in a Tinder style swipe interface"
          gitLink="https://github.com/DevonGifford/FlatmateFinder"
          liveLink="https://flatmate-finder.vercel.app/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["Vite", "TypeScript", "ShadCN", "Firebase", "Vitest"]}
        />

        <BigProjectCardReversed
          image={devreadyImage}
          imageUrl={devreadyImageSmall}
          title="Dev Ready"
          description="An open source fullstack initiative, inspired by ZTM, designed to create an engaging interactive quiz platform for students. The project aims to empower learning through gamification and dynamic features."
          gitLink="https://github.com/DevonGifford/DevReady"
          liveLink="https://ztm-ready-portfolio-project.vercel.app/"
          youtubeLink="https://ztm-ready-portfolio-project.vercel.app/"
          techStackList={[
            "Next14",
            "TypeScript",
            "Tailwind",
            "Jest",
            "PlayWright",
          ]}
        />

        <BigProjectCard
          image={incardImage}
          imageUrl={incardImageSmall}
          title="InCard Tech Test"
          description="Frontend Technical Assessment for inCard, tasked with crafting a user friendly authentication system.  This project incorporates both SSR & CSR pages, replicating inCard's current authentication styling."
          gitLink="https://github.com/DevonGifford/InCard"
          liveLink="https://incard-technical-assaignment-devon-gifford.vercel.app/"
          youtubeLink="https://incard-technical-assaignment-devon-gifford.vercel.app/"
          techStackList={["Next13", "TypeScript", "Zod", "NextAuth", "Jest"]}
        />

        <BigProjectCardReversed
          image={DevotionImage}
          imageUrl={DevotionImageSmall}
          title="Devotion"
          description="Emulating Notion.io with real-time databases and recursive components, Devotion serves as both a proof of concept and a learning experience. It mirrors Notion's features and pushes the boundaries of cloud-based note-taking."
          gitLink="https://github.com/DevonGifford/Devotion"
          liveLink="https://devotion-portfolioproject.vercel.app/"
          youtubeLink="https://devotion-portfolioproject.vercel.app/"
          techStackList={["Next14", "Convex", "Zustand", "TypeScript", "Clerk"]}
        />

        <BigProjectCard
          image={spotifyImageProps}
          imageUrl={spotifyImageSmall}
          title="Spotify Clone"
          description="Fullstack Spotify clone with core functionality like music streaming, song uploads & premium upgrades powered by Stripe. A comprehensive music experience aimed to  emulate Spotify styles."
          gitLink="https://github.com/DevonGifford/Fullstack-Spotify-Clone"
          liveLink="https://devon-fullstack-spotify-clone.vercel.app/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["PostgreSQL", "Supabase", "TypeScript", "Tailwind"]}
        />
      </div>
    </div>
  );
};

export default BigProjects;
