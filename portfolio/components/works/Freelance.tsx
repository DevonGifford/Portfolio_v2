import React from 'react'
import { motion } from 'framer-motion';
import { BsArrowRightShort } from "react-icons/Bs";


const Freelance = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
        JOB TITLE FREELANCE
        <span className='text-sm mt-1 font-medium text-textGreen'>
          @ Company 
        </span>
      </h3>
      
      {/* Working Dates */}
      <p>Date to Date</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      INTRODUCTION STUFF - Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi quasi eaque enim autem.
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi quasi eaque enim autem.
        </li>

        <li className='text-base flex gap-2'>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi quasi eaque enim autem.
        </li>

        <li className='text-base flex gap-2 '>
          <span className='text-textGreen mt-1'> 
            <BsArrowRightShort />
          </span> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi quasi eaque enim autem.
        </li>

      </ul>

    </motion.div>
  )
}

export default Freelance;