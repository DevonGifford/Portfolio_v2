import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";



const SmallProjects = () => {
  const [showMore, setShowMore] = useState (false);

  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
      </div>
      <div className='grid grid-cols-1 sml:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lgl:px-10'>





        {/* PROJECT 1 */}
        <ProjectCard 
          title="Pomodoro App"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          listItems={["React Native","NodeJS","TypeScript"]} 
        />


        {/* PROJECT 2 */}
        <ProjectCard 
          title="Music Player"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          listItems={["JavaScript","HTML","Sass","API"]} 
        />


        {/* PROJECT 3 */}
        <ProjectCard 
          title="Password Checker"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          listItems={["Python","Hashing","Encryption"]} 
        />


        {/* PROJECT 4 */}
        <ProjectCard 
          title="Quote Generator"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          listItems={["Reactjs","Next-auth","Firebase"]} 
        />


        {/* PROJECT 5 */}
        <ProjectCard 
          title="Animated Navigation"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          listItems={["React","Node","Vercel Deploy"]} 
        />


        {/* PROJECT 6 */}
        <ProjectCard 
          title="Joke Teller"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          listItems={["Reactjs","Heroku","Stripe"]} 
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
                description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
                gitLink="https://github.com/DevonGifford"
                liveLink="https://github.com/DevonGifford"
                listItems={["React","Node","TypeScript"]} 
              />
            </motion.div>
              
            {/* PROJECT 8 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6}}
            >
              <ProjectCard 
                title="Web Scraper Bot"
                description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
                gitLink="https://github.com/DevonGifford"
                liveLink="https://github.com/DevonGifford"
                listItems={["React","Node","TypeScript"]} 
              />
            </motion.div>
              

            {/* PROJECT 9 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9}}
            >
              <ProjectCard 
                title="Robot Rolodex"
                description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
                gitLink="https://github.com/DevonGifford"
                liveLink="https://github.com/DevonGifford"
                listItems={["React","Node","TypeScript"]} 
              />
            </motion.div>
              
            {/* PROJECT 10 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.2}}
            >
              <ProjectCard 
                title="Calculator"
                description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
                gitLink="https://github.com/DevonGifford"
                liveLink="https://github.com/DevonGifford"
                listItems={["React","Node","TypeScript"]} 
              />
            </motion.div>
                          
              
            {/* PROJECT 11 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.5}}
            >
                <ProjectCard 
                  title="MultiPlayer Pong"
                  description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
                  gitLink="https://github.com/DevonGifford"
                  liveLink="https://github.com/DevonGifford"
                  listItems={["React","Node","TypeScript"]} 
                />
            </motion.div>
              
            {/* PROJECT 12 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.8}}
            >
                <ProjectCard 
                  title="Instagram Clone"
                  description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
                  gitLink="https://github.com/DevonGifford"
                  liveLink="https://github.com/DevonGifford"
                  listItems={["React","Node","TypeScript"]} 
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