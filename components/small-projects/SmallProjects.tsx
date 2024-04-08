import React, { useState } from "react";
import ProjectCard from "./SmallProjectCard";
import { motion } from "framer-motion";

const SmallProjects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl sml:text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 lgl:px-10">
        <ProjectCard
          title="FlipDish"
          description="Frontend Technical Assessment: Implement server-side data fetching to present JSON data as a restaurant menu, including some sneaky twists."
          gitLink="https://github.com/DevonGifford/Menu--TechnicalAssignment"
          liveLink="https://menu-technical-assignment.vercel.app/"
          listItems={["API", "NextJs", "TypeScript", "Vitest"]}
        />

        <ProjectCard
          title="NextLane"
          description="Backend Technical Assessment:  My solution for implementing a client-side caching layer, using JavaScript as requested."
          gitLink="https://github.com/DevonGifford/NextLane"
          liveLink="https://github.com/DevonGifford/NextLane"
          listItems={["Backend", "ttl-cache", "JavaScript"]}
        />

        <ProjectCard
          title="InCard"
          description="Frontend Technical Assessment: Develop a web application that demonstrates authentication functionality using JWT tokens"
          gitLink="https://github.com/DevonGifford/InCard"
          liveLink="https://incard-technical-assaignment-devon-gifford.vercel.app/"
          listItems={["NextJS", "TypeScript", "Jest", "NextAuth"]}
        />

        <ProjectCard
          title="Restful API"
          description="Simple and efficient way to handle HTTP requests and interact with a MongoDB database, following modern and best practices."
          gitLink="https://github.com/DevonGifford/modern-restful-API"
          liveLink="https://github.com/DevonGifford/modern-restful-API"
          listItems={["TypeScript", "Express", "MongoDB"]}
        />

        <ProjectCard
          title="Devotion"
          description="A fullstack web application designed to replicate the seamless functionality of Notion, utilizing real-time database & recursive components"
          gitLink="https://github.com/DevonGifford/Devotion"
          liveLink="https://devotion-portfolioproject.vercel.app/"
          listItems={["NextJs", "TypeScript", "Convex", "Zustand"]}
        />

        <ProjectCard
          title="BulkBasics"
          description="A fullstack e-commerce platform focusing on business logic and functionality, integrating various technologies."
          gitLink="https://github.com/DevonGifford/BulkBasics"
          liveLink="https://bulk-basics.netlify.app/"
          listItems={["Vite", "TypeScript", "Stripe", "Redux"]}
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <ProjectCard
                title="Classic Pong"
                description="Relive retro gaming with this browser-based implementation, featuring realistic ball physics and built with vanilla tooling."
                gitLink="https://github.com/DevonGifford/Single-Player-Pong-Game"
                liveLink="https://devon-pong-game.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS", "Netlify"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <ProjectCard
                title="Ai Toolbox"
                description="A suite of Language Model-based AI tools powered by OpenAI, offered as a SaaS solution. Revolutionize your business with advanced AI capabilities"
                gitLink="https://github.com/DevonGifford/my_Python/tree/main/Mini-Projects"
                liveLink="https://ai-toolbox-five.vercel.app/"
                listItems={["Next", "Stripe", "OpenAI", "Clerk"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <ProjectCard
                title="node-express-mvc-api"
                description="A learning repository covering a range of concepts including JWT's, MongoDB integration, APIs, web servers and user auth"
                gitLink="https://github.com/DevonGifford/node-express-mvc-api"
                liveLink="https://github.com/DevonGifford/node-express-mvc-api"
                listItems={["Node", "Express", "MongoDB", "JavaScript"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <ProjectCard
                title="FaceDetection App"
                description="A Fullstack PERN app - sign up and upload and image to detect one or multiple human faces, built with the help of ZTM."
                gitLink="https://github.com/DevonGifford/AI-Toolbox"
                liveLink="https://devon-facedetection-app.onrender.com/"
                listItems={["React", "Node", "Express", "API"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <ProjectCard
                title="Animated NavBar"
                description="Interactive & responsive website with UI design focus. Utilized CSS keyframes for animations and code efficiency."
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-animated-navigation-bar.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS", "keyframes"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <ProjectCard
                title="Spotify Clone"
                description="A comprehensive Spotify clone that replicates the core functionality, including file upload and authentication"
                gitLink="https://github.com/DevonGifford/Spotify-Clone"
                liveLink="https://devon-fullstack-spotify-clone.vercel.app/"
                listItems={["Stripe", "SupaBase", "PostgreSQL"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              <ProjectCard
                title="Always-On-Top App"
                description="Create floating, resizable windows for any screen or app, staying on top. Ideal for coding with YouTube tutorials. Easy and efficient solution"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-picture-in-picture-app.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS", "Async"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              <ProjectCard
                title="Math Sprint Game"
                description="Interactive quiz web app testing the users basic math skills. Initial research into building my capstone DevReady application."
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-math-sprint-game.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS", "Netlify"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              <ProjectCard
                title="Bookmark Keeper"
                description="A very simple website for saving bookmarks. A learning project exploring dynamic rendering, local storage and vanilla form validation"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-bookmark-app.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS", "Netlify"]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.0 }}
            >
              <ProjectCard
                title="Calculator"
                description="A personal victory, overcoming a fear instilled from highschool Java class. Simple web based calculator app built with vanilla tooling"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-javascript-calculator.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS", "Netlify"]}
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default SmallProjects;
