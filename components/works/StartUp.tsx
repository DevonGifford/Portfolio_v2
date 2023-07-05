import React from 'react'
import { motion } from 'framer-motion';
import BulletPoint from './BulletPoint';


const StartUp = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <div className='flex flex-wrap gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row'>
        <h3>Web Assistant | Art Auction</h3>
        <span className='text-sm mt-1 font-medium text-textGreen flex'>@ Start-up</span>
      </div>
      
      {/* Working Dates */}
      <p className='pt-3'>January 2019 - June 2019</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      By utilizing technical skills in SQL database management, Python scripting, and content management with WordPress, I actively supported the growth and success of the art auction start-up. Collaborating closely with the team, I ensured seamless data migration, enhanced website content, and facilitated efficient product management.      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <BulletPoint
          headningText='Managed database operations, including data migration from Excel to SQL database'
          contentText="I successfully designed and executed a seamless data migration process, utilizing 'openpyxl' library to extract data from Excel sheets, mapping and ensuring accurate representation in the SQL database while maintaining data integrity and minimizing downtime through thorough verification."
        />

        <BulletPoint
          headningText='Content Management and Website Enhancement'
          contentText="I efficiently managed website content, including the addition of new pages, articles, images, and multimedia elements, utilizing the powerful features of WordPress. By leveraging the Theme Editor, I made impactful styling and CSS changes, resulting in an appealing and user-friendly website interface. Additionally, I played a pivotal role in product management, contributing to the addition of new products and ensuring accurate inventory management with up-to-date stock levels."
        />

      </ul>

    </motion.div>
  )
}

export default StartUp;