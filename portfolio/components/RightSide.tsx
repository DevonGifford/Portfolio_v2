import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
        <a href="mailto:devongifford@outlook.com">
            <p 
            className='text-sm rotate-90 w-72 tracking-wide text-textGreen '
            >send me an email
            </p>
        </a>
    </div>
  )
}

export default RightSide;