import React from 'react'
import { motion } from 'framer-motion';
import BulletPoint from './BulletPoint';


const Internship = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className='flex gap-1 font-medium text-xl font-titleFont flex-col flex-wrap sml:flex-row'>
        Web Assistant | Fullstack
        <span className='text-sm mt-1 font-medium text-textGreen'>
          @ Mashauri Limited 
        </span>
      </h3>
      
      {/* Working Dates */}
      <p className='pt-3'>June 2019 - October 2019</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      I have experience working as a Full Stack Developer at Mashauri Limited, an entrepreneurial school providing B2B and B2C services, including courses and materials for students. In this role, I played a crucial part in various areas:
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>

        <BulletPoint
          headningText='Website Maintenance and Assistance'
          contentText="I actively assisted in the maintenance and upkeep of the company's website, ensuring a seamless user experience and up-to-date content."
        />
        
        <BulletPoint
          headningText='Web Scraping with Beautiful Soup'
          contentText='Using the Python library Beautiful Soup, I performed web scraping tasks to gather relevant data and extract valuable insights, contributing to informed decision-making and business strategies.'
        />
        
        <BulletPoint
          headningText='Lead Generation and Capture'
          contentText="I successfully implemented lead generation strategies, helping to identify and capture potential sales leads, thus contributing to the company's growth and revenue generation."
        />
        
        <BulletPoint
          headningText='Database Management and Maintenance'
          contentText='I played a key role in managing and maintaining databases, ensuring data integrity, efficient storage, and retrieval of information.'
        />
        
        <BulletPoint
          headningText='Automated Email Marketing Campaigns'
          contentText='I utilized my skills to design and implement automated email marketing campaigns, enhancing customer engagement, nurturing leads, and driving conversions.'
        />
        
        <BulletPoint
          headningText='Convention Assistance hosted by IE Business School'
          contentText='I played a significant role in supporting a high-profile convention sponsored by the European Union and hosted by IE Business School. During the event, I provided valuable assistance by actively participating in various tasks such as setup, coordination, and ensuring a seamless experience for all attendees.'
        />


      </ul>

    </motion.div>
  )
}

export default Internship;