import React, { useState } from 'react'
import ProjectCard from './SmallProjectCard';
import { motion } from "framer-motion";



const SmallProjects = () => {
  const [showMore, setShowMore] = useState (false);

  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-2xl sml:text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-10 lgl:px-10'>


        {/* PROJECT 1  */}
        <ProjectCard 
          title="Python Converters"
          description="Python Converters: JPEG to PNG, JSON to CSV, XML to JSON, and more! Simplifying data transformation and file handling"
          gitLink="https://github.com/DevonGifford/my_Python/tree/main/Mini-Projects"
          liveLink="https://github.com/DevonGifford/my_Python/tree/main/Mini-Projects"
          listItems={["Python","JSON","XML","JPEG","PDF"]} 
        />


        {/* PROJECT 2  */}
        <ProjectCard 
          title="Classic Pong"
          description="Classic Pong: Relive retro gaming with this browser-based implementation. Engaging gameplay, responsive design, and realistic ball physics"
          gitLink="https://github.com/DevonGifford/Single-Player-Pong-Game"
          liveLink="https://devon-pong-game.netlify.app/"
          listItems={["JavaScript","HTML","CSS", "Netlify"]} 
        />


        {/* PROJECT 3 */}
        <ProjectCard 
          title="Web Scrapers"
          description="Built movie info & hacker news scrapers with Beautiful Soup library. Extracted valuable data efficiently"
          gitLink="https://github.com/DevonGifford/my_Python/tree/main/Mini-Projects"
          liveLink="https://github.com/DevonGifford/my_Python/tree/main/Mini-Projects"
          listItems={["Python","BeautifulSoup4","Requests"]} 
        />


        {/* PROJECT 4 */}
        <ProjectCard 
          title="Twitter Quote Generator"
          description="Utilized API for fetching and tweeting inspiring quotes. Upgraded from 2D array to dynamic API integration."
          gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
          liveLink="https://devon-quote-generator.netlify.app/"
          listItems={["JavaScript","API's","HTML","CSS"]} 
        />


        {/* PROJECT 5 */}
        <ProjectCard 
          title="Animated NavBar"
          description="Interactive & responsive website with UI design focus. Utilized CSS @keyframes for animations and maintained code efficiency."
          gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
          liveLink="https://devon-animated-navigation-bar.netlify.app/"
          listItems={["JavaScript","HTML","CSS", "keyframes"]} 
        />


        {/* PROJECT 6 */}
        <ProjectCard 
          title="Whatsapp chatbot"
          description="Chatbot enthusiast building various bots (general, WhatsApp, Telegram) using Python with pywhatkit, wechaty, and typing libraries"
          gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
          liveLink="https://github.com/DevonGifford/my_Python/tree/main/Mini-Projects"
          listItems={["Python","pywhatkit","wechaty", "typing"]} 
        />

        

        {
          showMore && (
            <>
            
            {/* PROJECT 7 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3}}
            >
              <ProjectCard 
                title="Custom Countdwon"
                description="countdown app with localStorage to remember countdowns and animated background using .mp4 format. Fun and functional!"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-countdown-app.netlify.app/"
                listItems={["LocalStorage","JavaScript","Netlify"]} 
              />
            </motion.div>
              
            {/* PROJECT 8 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6}}
            >
              <ProjectCard 
                title="Video Player"
                description="Created a JavaScript video player with essential controls: play, pause, volume, mute, playback speed, and fullscreen. Excited for future possibilities"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-javascript-videoplayer.netlify.app/"
                listItems={["PlayBack Controls","JavaScript","Netlify"]} 
              />
            </motion.div>
              

            {/* PROJECT 9 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9}}
            >
              <ProjectCard 
                title="Always-On-Top App"
                description="Create floating, resizable windows for any screen or app, staying on top. Ideal for coding with YouTube tutorials. Easy and efficient solution"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-picture-in-picture-app.netlify.app/"
                listItems={["JavaScript","HTML","CSS","Async"]} 
              />
            </motion.div>
              
            {/* PROJECT 10 🎯 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.2}}
            >
              <ProjectCard 
                title="Calculator"
                description="A personal victory over past challenges. Simple yet powerful, offering potential for future enhancements and personalized themes"
                gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                liveLink="https://devon-javascript-calculator.netlify.app/"
                listItems={["JavaScript","HTML","CSS"]} 
              />
            </motion.div>
                          
              
            {/* PROJECT 11 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.5}}
            >
                <ProjectCard 
                  title="Bookmark Keeper"
                  description="Simple website for saving bookmarks. Explored dynamic rendering, local storage, and form validation"
                  gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                  liveLink="https://devon-bookmark-app.netlify.app/"
                  listItems={["JavaScript","HTML","CSS"]} 
                />
            </motion.div>
              
            {/* PROJECT 12 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.8}}
            >
                <ProjectCard 
                  title="Math Sprint Game"
                  description="TInteractive web app testing math skills. Unique page management approach for better organization. Aspiring to create advanced games for technical interview preparation"
                  gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                  liveLink="https://devon-math-sprint-game.netlify.app/"
                  listItems={["JavaScript","HTML","CSS"]} 
              />
            </motion.div>
              
            </>
          )}

      </div>
      <div className='mt-12 flex items-center justify-center'>
        {showMore ? (
          <button 
            onClick={() => setShowMore(false)}
            className='w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
            Show Less
          </button>
        ) : (
          <button 
            onClick={() => setShowMore(true)}
            className='w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
            Show More
          </button>          
        )}
      </div>
    </div>
    
  )
}

export default SmallProjects;