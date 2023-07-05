import React from 'react'
import { motion } from 'framer-motion';
import BulletPoint from './BulletPoint';


const Freelance = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <div className='flex flex-wrap gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row'>
        <h3>Web developer | Wordpress</h3>
        <span className='text-sm mt-1 font-medium text-textGreen flex'>@ Freelance</span>
      </div>
      
      {/* Working Dates */}
      <p className='pt-3'>Mach 2016 - January 2019</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      As a web developer with a focus on WordPress, I have successfully designed and developed responsive and user-friendly websites, leveraging my expertise in customizing themes and integrating plugins.
      <br /> 
      Some of my key accomplishments in this role include:      
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>

        <BulletPoint
          headningText='Customization and Feature Implementation'
          contentText="Tailored themes, integrated plugins, and implemented requested features and functionality to enhance website performance and meet clients' specific requirements."
        />
        
        <BulletPoint
          headningText='Responsive Design'
          contentText='Ensured optimal user experience across devices by implementing responsive design principles, allowing seamless navigation and accessibility.'
        />

        <BulletPoint
          headningText='E-commerce Functionality'
          contentText='Configured and set up e-commerce functionality for guesthouses, including integrating payment gateways and creating product catalogs, enabling clients to sell their products online.'
        />
        
        <BulletPoint
          headningText='Maintenance and Support'
          contentText='Conducted regular updates, bug fixes, and backups to ensure website integrity and security. Provided ongoing support to clients, offering training on website management and empowering them to make content updates independently.'
        />

        <BulletPoint
          headningText='Branding and Design Alignment'
          contentText="Customized themes and templates to align with clients' branding guidelines and design preferences, creating visually appealing and cohesive online presence."
        />

        <BulletPoint
          headningText='Performance Optimization'
          contentText='Offered expert advice, recommendations, and industry best practices to optimize website performance, loading speed, and overall user experience.'
        />

        <BulletPoint
          headningText='Project Management'
          contentText='Managed multiple projects concurrently, setting timelines, and delivering projects within agreed-upon deadlines. Maintained open communication with clients, providing regular updates, gathering feedback, and addressing any concerns or questions.'
        />


      </ul>

    </motion.div>
  )
}

export default Freelance;