import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import BigProjectCard from "./BigProjectCard";
import BigProjectCardReversed from "./BigProjectCard-reversed";

const BigProjects: React.FC = () => {
  {
    /* PROJECT 1 */
  }
  //-------------------------------------------------------------
  const DevotionImage = {
    src: "/assets/images/ProjectPictures/Devotion.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const DevotionImageSmall =
    "/assets/images/ProjectPictures/small-images/EcommerceSmall.webp";

  {
    /* PROJECT 2 */
  }
  //-------------------------------------------------------------
  const spotifyImageProps = {
    src: "/assets/images/ProjectPictures/SpotifyClone.webp",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const spotifyImageSmall =
    "/assets/images/ProjectPictures/small-images/SpotifyCloneSmall.webp";

  {
    /* PROJECT 3 */
  }
  //-------------------------------------------------------------
  const devreadyImage = {
    src: "/assets/images/ProjectPictures/DevReady.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const devreadyImageSmall =
    "/assets/images/ProjectPictures/small-images/FaceDetectionSmall.png";

  {
    /* PROJECT 4 - ON HOLD */
  }
  //-------------------------------------------------------------
  const incardImage = {
    src: "/assets/images/ProjectPictures/InCard.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const incardImageSmall =
    "/assets/images/ProjectPictures/small-images/Mission-ControlSmall.jpg";

  {
    /* PROJECT 5 */
  }
  //-------------------------------------------------------------
  const flatmatefinderImage = {
    src: "/assets/images/ProjectPictures/FlatmateFinder.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const flatematefinderImageSmall =
    "/assets/images/ProjectPictures/small-images/Ai-toolboxSmall.png";

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
          gitLink="https://github.com/DevonGifford/Fullstack-Spotify-Clone"
          liveLink="https://devon-fullstack-spotify-clone.vercel.app/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["Next14", "TypeScript", "Tailwind", "Jest", "PlayWright"]}
        />

        <BigProjectCard
          image={incardImage}
          imageUrl={incardImageSmall}
          title="InCard Tech Test"
          description="Frontend Technical Assessment for inCard, tasked with crafting a user friendly authentication system.  This project incorporates both SSR & CSR pages, replicating inCard's current authentication styling."
          gitLink="https://github.com/DevonGifford/FaceDetectionApp-BackEnd"
          liveLink="https://devon-facedetection-app.onrender.com/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["Next13", "TypeScript", "Zod", "NextAuth", "Jest"]}
        />

        <BigProjectCardReversed
          image={DevotionImage}
          imageUrl={DevotionImageSmall}
          title="E-commerce Website"
          description="Emulating Notion.io with real-time databases and recursive components, Devotion serves as both a proof of concept and a learning experience. It mirrors Notion's features and pushes the boundaries of cloud-based note-taking."
          gitLink="https://github.com/DevonGifford/Ecommerce_Showcase"
          liveLink="https://bulk-basics.netlify.app/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["Next14", "Convex", "Zustand", "TypeScript", "Clerk"]}
        />

        <BigProjectCard
          image={spotifyImageProps}
          imageUrl={spotifyImageSmall}
          title="Spotify Clone"
          description="Fullstack Spotify clone with core functionality like music streaming, song uploads & premium upgrades powered by Stripe. A comprehensive music experience awaits users. Explore the code and features to witness the passion and expertise behind its creation."
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
