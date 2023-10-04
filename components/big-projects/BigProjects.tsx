import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import BigProjectCard from "./BigProjectCard";
import BigProjectCardReversed from "./BigProjectCard-reversed";

const BigProjects: React.FC = () => {
  {
    /* PROJECT 1 */
  }
  //-------------------------------------------------------------
  const imageProps1 = {
    src: "/assets/images/ProjectPictures/Ecommerce.webp",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const imageUrl1 =
    "/assets/images/ProjectPictures/small-images/EcommerceSmall.webp";

  {
    /* PROJECT 2 */
  }
  //-------------------------------------------------------------
  const imageProps2 = {
    src: "/assets/images/ProjectPictures/SpotifyClone.webp",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const imageUrl2 =
    "/assets/images/ProjectPictures/small-images/SpotifyCloneSmall.webp";

  {
    /* PROJECT 3 */
  }
  //-------------------------------------------------------------
  const imageProps3 = {
    src: "/assets/images/ProjectPictures/FaceDetection.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const imageUrl3 =
    "/assets/images/ProjectPictures/small-images/FaceDetectionSmall.png";

  {
    /* PROJECT 4 - ON HOLD */
  }
  //-------------------------------------------------------------
  const imageProps4 = {
    src: "/assets/images/ProjectPictures/Mission-Control.jpg",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const imageUrl4 =
    "/assets/images/ProjectPictures/small-images/Mission-ControlSmall.jpg";

  {
    /* PROJECT 5 */
  }
  //-------------------------------------------------------------
  const imageProps5 = {
    src: "/assets/images/ProjectPictures/Ai-toolbox.png",
    alt: "Image-Description",
    width: 500,
    height: 300,
  };
  const imageUrl5 =
    "/assets/images/ProjectPictures/small-images/Ai-toolboxSmall.png";

  return (
    <div
      id="Projects"
      className="max-w-containerSmall mx-auto min-h-fit py-10  lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle titleName="Capstone Projects" titleNumber="03" />
      <div>
        {/* PROJECT 2 */}
        <BigProjectCard
          image={imageProps5}
          imageUrl={imageUrl5}
          title="AI Toolbox"
          description="A powerful repository of Language Model-based AI tools powered by OpenAI. Seamlessly access natural language processing, sentiment analysis, and text generation from one webpage. Embrace AI with effortless integration, revolutionize data processing, and unlock deeper insights. Stripe integration ensures seamless payment handling"
          gitLink="https://github.com/DevonGifford/LLM-AI-Toolbox/tree/main"
          liveLink="https://ai-toolbox-devongifford.vercel.app/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={[
            "NextJs",
            "Open Ai",
            "Prisma",
            "Stripe",
            "TypeScript",
          ]}
        />

        {/* PROJECT 2 */}
        <BigProjectCardReversed
          image={imageProps2}
          imageUrl={imageUrl2}
          title="Spotify Clone"
          description="Fullstack Spotify clone with core functionality like music streaming, song uploads & premium upgrades powered by Stripe. A comprehensive music experience awaits users. Explore the code and features to witness the passion and expertise behind its creation."
          gitLink="https://github.com/DevonGifford/Fullstack-Spotify-Clone"
          liveLink="https://devon-fullstack-spotify-clone.vercel.app/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["PostgreSQL", "Supabase", "TypeScript", "Tailwind"]}
        />

        {/* PROJECT 3 */}
        <BigProjectCard
          image={imageProps3}
          imageUrl={imageUrl3}
          title="Face detection app"
          description="Fullstack web app utilizing Clarifai's deep learning AI to detect and locate human faces in images. Built entirely by me, including database, frontend, and backend. PERN stack + Clarifai + Tachyons + tsParticles. Seamless user experience for image upload, face detection, and tracking."
          gitLink="https://github.com/DevonGifford/FaceDetectionApp-BackEnd"
          liveLink="https://devon-facedetection-app.onrender.com/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["React", "ExpressJS", "NodeJS", "PostgreSQL"]}
        />

        {/* PROJECT 1 */}
        <BigProjectCardReversed
          image={imageProps1}
          imageUrl={imageUrl1}
          title="E-commerce Website"
          description="Fullstack Ecommerce project exploring diverse tech: TypeScript, Redux, GraphQL, & PWA. Emphasis on business logic, integration, and learning. Minimalistic design, focus on development. Showcasing my journey of honing skills and expertise through tech integration."
          gitLink="https://github.com/DevonGifford/Ecommerce_Showcase"
          liveLink="https://bulk-basics.netlify.app/"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["Vite", "Firebase", "Redux", "Styled Components"]}
        />
        {/* PROJECT 4 */}
        {/* <BigProjectCardReversed 
          image={imageProps4}
          imageUrl={imageUrl4}
          title="NASA Mission Control"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress.
          This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["test","test for Real","NodeJS","TypeScript"]} 
        /> */}
      </div>
    </div>
  );
};

export default BigProjects;
