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
          title="Thymia Technical Assessment"
          description="Gamified version of the 2-back task, which measures working memory, with Cypress end-to-end testing."
          gitLink="https://github.com/DevonGifford/nGame--TechnicalAssignment"
          liveLink="https://n-game-technical-assignment.vercel.app/"
          listItems={["NextJS", "TypeScript", "Jest", "Cypress"]}
        />

        <ProjectCard
          title="BulkBasics"
          description="A fullstack e-commerce platform emphasizing business logic and functionality for seamless user experience."
          gitLink="https://github.com/DevonGifford/BulkBasics"
          liveLink="https://bulk-basics.netlify.app/"
          listItems={["Vite", "TypeScript", "Stripe", "GraphQL"]}
        />
        <ProjectCard
          title="NextLane"
          description="This repository serves as the solution for the backend developer technical assessment to implement a client-side caching layer using JavaScript."
          gitLink="https://github.com/DevonGifford/NextLane"
          liveLink="https://github.com/DevonGifford/NextLane"
          listItems={["Backend", "tl-cache", "JavaScript", "typing"]}
        />

        <ProjectCard
          title="FlipDish Technical Assessment"
          description="Frontend Technical Assessment: Simple web app to handle API fetch and present JSON data as a restaurant menu"
          gitLink="https://github.com/DevonGifford/Menu--TechnicalAssignment"
          liveLink="https://menu-technical-assignment.vercel.app/"
          listItems={["API", "Vite", "TypeScript", "Tailwind", "Vitest"]}
        />

        <ProjectCard
          title="Modern Restful API"
          description="Utilized API for fetching and tweeting inspiring quotes. Upgraded from 2D array to dynamic API integration."
          gitLink="https://github.com/DevonGifford/modern-restful-API"
          liveLink="https://github.com/DevonGifford/modern-restful-API"
          listItems={["TypeScript", "Express", "MongoDB", "NodeJs"]}
        />

        <ProjectCard
          title="Classic Pong"
          description="Classic Pong: Relive retro gaming with this browser-based implementation. Engaging gameplay, responsive design, and realistic ball physics"
          gitLink="https://github.com/DevonGifford/Single-Player-Pong-Game"
          liveLink="https://devon-pong-game.netlify.app/"
          listItems={["JavaScript", "HTML", "CSS", "Netlify"]}
        />

        {showMore && (
          <>
            {/* PROJECT 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <ProjectCard
                title="ClearScore Technical Assessment"
                description="An idea board that allows a user to create new ideas, edit existing ideas or delete them. This app uses local and session storage combined"
                gitLink="https://github.com/DevonGifford/ClearScore--TechnicalAssignment"
                liveLink="https://idea-board-murex.vercel.app/"
                listItems={["Vite", "TypeScript", "Vitest", "LocalStorage"]}
              />
            </motion.div>

            {/* PROJECT 4 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <ProjectCard
                title="Ai Toolbox"
                description="Introducing a suite of Language Model-based AI tools powered by OpenAI, offered as a SaaS solution. Revolutionize your business with advanced AI capabilities"
                gitLink="https://github.com/DevonGifford/my_Python/tree/main/Mini-Projects"
                liveLink="https://ai-toolbox-five.vercel.app/"
                listItems={["Next", "Stripe", "OpenAI", "Clerk"]}
              />
            </motion.div>

            {/* PROJECT 5 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <ProjectCard
                title="Animated NavBar"
                description="Interactive & responsive website with UI design focus. Utilized CSS @keyframes for animations and maintained code efficiency."
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-animated-navigation-bar.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS", "keyframes"]}
              />
            </motion.div>

            {/* PROJECT 6 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <ProjectCard
                title="Fullstack FaceDetection App"
                description="A Fullstack PERN app - sign up and upload and image to detect one or multiple human faces."
                gitLink="https://github.com/DevonGifford/AI-Toolbox"
                liveLink="https://devon-facedetection-app.onrender.com/"
                listItems={["React", "Node", "Express", "API"]}
              />
            </motion.div>

            {/* PROJECT 7 */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <ProjectCard
                title="node-express-mvc-api"
                description="A learning repository covering foundational to advanced concepts including JWT, MongoDB integration, APIs, web server setup, and user authentication"
                gitLink="https://github.com/DevonGifford/node-express-mvc-api"
                liveLink="https://github.com/DevonGifford/node-express-mvc-api"
                listItems={["Node", "Express", "MongoDB", "JavaScript"]}
              />
            </motion.div>

            {/* PROJECT 8 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <ProjectCard
                title="Video Player"
                description="Created a JavaScript video player with essential controls: play, pause, volume, mute, playback speed, and fullscreen. Excited for future possibilities"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-javascript-videoplayer.netlify.app/"
                listItems={["PlayBack Controls", "JavaScript", "Netlify"]}
              />
            </motion.div>

            {/* PROJECT 9 */}
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

            {/* PROJECT 10 🎯 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              <ProjectCard
                title="Calculator"
                description="A personal victory over past challenges. Simple yet powerful, offering potential for future enhancements and personalized themes"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-javascript-calculator.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS"]}
              />
            </motion.div>

            {/* PROJECT 11 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              <ProjectCard
                title="Bookmark Keeper"
                description="Simple website for saving bookmarks. Explored dynamic rendering, local storage, and form validation"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-bookmark-app.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS"]}
              />
            </motion.div>

            {/* PROJECT 12 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.0 }}
            >
              <ProjectCard
                title="Math Sprint Game"
                description="TInteractive web app testing math skills. Unique page management approach for better organization. Aspiring to create advanced games for technical interview preparation"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-math-sprint-game.netlify.app/"
                listItems={["JavaScript", "HTML", "CSS"]}
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
