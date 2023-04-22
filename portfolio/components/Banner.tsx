import React from 'react'
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';



const Banner = () => {
  return (
    <section
      id='home'
      className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    >
    <motion.h3
      className='text-lg font-titleFont tracking-wide text-textGreen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2}}    
    >
        Hello World, my name is
    </motion.h3>
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.2}}
      className='text-3xl lgl:text-5xl font-titleFont font-semibold flex flex-col'
    >
        Devon Gifford.{" "}
        <span
        className='text-2xl text-textDark mt-2 lgl:mt-4'
        >
            <Typewriter
                options={{
                strings: [
                    '    ',
                    'Full-Stack Developer', 
                    'Quality Engineer',
                    'Next.js Developer',
                    'React Native Developer',
                    'Python Enthusiast',
                    'Web Developer',
                    'Future Senior Software Engineer',
                    'Aspiring Principal Engineer',
                ],
                autoStart: true,
                loop: true,
                }}>
            </Typewriter>
        </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4}}
          className='text-base md:min-w-[650px] text-textDark font-medium'
        >
            {" "}
            South African by Birth, British citizen, Based in Madrid, Spain.<br />
            Self taught programmer, with a Bachelors in Business Administration & training in project management, with experience in Software Testing at one of the major <em>FAANG</em> companies.  Eager to contribute to team success through hard work, attention to detail & creative problem solving. <br /> 
            <em>Fully committed to the philosophy of life-long learning.</em> {" "} <br />
            {/* 🎯INSERT REAL LINK HERE LATER🎯 */}
            <a href="https://www.instagram.com/princedevon_za/">
                <span
                className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'
                >
                    Learn More
                    {/* Interactive loading bar */}
                    <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
                </span>
            </a>
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5}}        
          className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hovercolor duration-300'
          >
            Check out my Projects
        </motion.button>
    </section>
  )
}

export default Banner;