import React from 'react'
import { motion } from 'framer-motion';
import { BsApple } from "react-icons/bs";
import BulletPoint from './BulletPoint';


const TeamLead = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full min-h-fit'    
    >
      {/* JOB TITLE & COMPANY */}
      <div className='flex flex-wrap gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row'>
        <h3>
          Locale/Team Lead - English Variant Locales
        </h3>
        <span className='text-sm mt-1 font-medium text-textGreen flex'>
          @ Cognizant
          &ensp; 
          <BsApple />
        </span>
      </div>
      
      {/* Working Dates */}
      <p className='pt-3'>June 2022 - December 2022</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
        Promoted to a taem lead position, along with and ontop of my QA/QE responsibilities.  My role involved actively supporting managers and overseeing the operations of multiple teams. 
        <br/>
        Key responsibilities included:
      </strong></p>

      {/* Bullet Points */}
      <div className='min-h-fit'>
        <ul className='mt-4 flex flex-col gap-3 text-textDark'>

          <BulletPoint 
            headningText='Assisting and supporting managers'
            contentText='Collaborating closely with managers to provide seamless assistance and support in their day-to-day responsibilities, ensuring efficient workflow and effective team coordination.'
          />

          <BulletPoint 
            headningText='Coordinating and reviewing tasks'
            contentText='Taking charge of task coordination and reviewing processes across multiple teams, ensuring that high quality standards were met while adhering to deadlines. This involved meticulous monitoring of progress and providing guidance to team members to ensure successful project completion.'
          />

          <BulletPoint
            headningText='Providing clear instructions and guidance'
            contentText='Offering comprehensive instructions and guidance to the team, effectively communicating new tasks, objectives, and performance expectations. This ensured that team members had the necessary direction and resources to accomplish their roles effectively.'
          />

          <BulletPoint
            headningText='Reporting progress to management'
            contentText='Regularly updating management on project progress, highlighting achievements, addressing challenges, and reporting any issues encountered. This facilitated informed decision-making and proactive problem-solving.'
          />

          <BulletPoint
            headningText='Facilitating onboarding and performance feedback'
            contentText='Assisting in the smooth onboarding process for new team members, ensuring a seamless transition and supporting their integration into the team. Additionally, providing constructive performance feedback to both management and team members, recognizing accomplishments and identifying areas for improvement.'
          />

        </ul>

      </div>

    </motion.div>
  )
}

export default TeamLead;