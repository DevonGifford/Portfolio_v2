import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  headningText: string,
  contentText: string
}

const BulletPoint = ({ headningText, contentText }: Props) => {
  return (
    <li className='text-base gap-2'>

      {/* HEADING SECTION */}
      <div className='text-textGreen flex flex-row'> 
        <BsArrowRightShort />
        &ensp;
        <span className='leading-tight'>
          {headningText}: 
        </span>
      </div> 


      {/* CONTENT */}
      <em>{contentText}</em>
    </li>
  )
}

export default BulletPoint