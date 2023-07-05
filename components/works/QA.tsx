import React from 'react'
import { motion } from 'framer-motion';
import { BsApple } from "react-icons/bs";
import BulletPoint from './BulletPoint';


const QA = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className='flex gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row'>
        QA/QE Analyst
        <span className='text-sm mt-1 font-medium text-textGreen flex'>
          @ Cognizant
          &ensp; 
          <BsApple />
        </span>
      </h3>
      
      {/* Working Dates */}
      <p className='pt-3'>September 2021 - December 2022</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      Played a pivotal role in ensuring the quality and robustness of a widely utilized AI virtual assistant, integral to daily operations worldwide, through comprehensive testing methodologies
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <BulletPoint
          headningText='Voice Recognition Testing'
          contentText='Conducted linguistic & phonological testing of voice recognition software, collaborating with cross-functional teams, following Agile methodology to evaluate performance and provide insights for improvements.'
        />

        <BulletPoint
          headningText='Test Execution and Analysis'
          contentText="Executed rigorous testing procedures encompassing functional, regression, and performance testing. Identified and documented defects, contributing to enhancing the software's behaviour and overall system performance"
        />

        <BulletPoint
          headningText='Automated & Manual QA testing'
          contentText='Utilized tailored automation tools and frameworks for voice recognition software testing, leveraging manual techniques for meticulous scrutiny of functionality.'
        />

        <BulletPoint
          headningText='End-to-End Testing'
          contentText='Performed end-to-end testing to verify the seamless integration and functionality of the AI virtual assistant across various components and systems, ensuring a smooth user experience.'
        />

        <BulletPoint
          headningText='Operating Natural Language Processing Tools'
          contentText='Proficiently operated natural language processing tools and incorporated large-scale systems to mitigate defects and optimize software performance.'
        />

        <BulletPoint
          headningText='Testing New Products'
          contentText='Played a vital role in testing new products and features, participating in the entire testing lifecycle from requirement analysis to test planning, execution, and reporting, ensuring the successful launch of innovative solutions.'
        />

        <BulletPoint
          headningText='Utilizing a range of testing methodologies and techniques, including'
          contentText='- Root testing,  Integration testing, Regression testing, Acceptance testing , Smoke testing , Performance Testing'
        />

        <BulletPoint
          headningText='Automation and Functional Verification'
          contentText='Effectively automated and verified software functionality across multiple client domains and international projects using Swift, Python, GitHub, Stack, and internal tools'
        />


      </ul>

    </motion.div>
  )
}

export default QA;