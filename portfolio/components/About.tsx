import React from 'react'
import SectionTitle from './SectionTitle';
import { BsArrowRightSquare } from "react-icons/Bs";
import { profileImgCircle } from "@/public/assets";
import Image from "next/image";

const About = () => {
  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
      >
        <SectionTitle titleNumber="0.1" titleName="About me" />
        <div className='flex flex-col lgl:flex-row gap-16'>
            {/* Text Portion */}
            <div className='w-full sml:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                    Hello! My name is Devon Gifford and I am a full stack developer with a passion for learning and solving problems.  I have a strong foundation in front and back end development and I am skilled in creating user-friendly and responsiv web applications using React and it's ecosystem.
                    <br /><br />
                    My interest in web development started when I was creating websites for my freelance marketing clients in South Africa.  Since then moving to Europe I had an oppotunity to work in QA for a FAANG company where I learned I wanted to be solving problems.  
                </p>
                <p>
                    Here are the Technologies I am passionate about:
                </p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <BsArrowRightSquare />
                        </span>
                        JavaScript
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <BsArrowRightSquare />
                        </span>
                        TypeScript
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <BsArrowRightSquare />
                        </span>
                        React
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <BsArrowRightSquare />
                        </span>
                        Node
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <BsArrowRightSquare />
                        </span>
                        Python
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'>
                            <BsArrowRightSquare />
                        </span>
                        PostgreSQL
                    </li>
                </ul>
            </div>
             {/* Image Section */}
             <div className='w-full sml:w-1/3 h-80 relative group'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-full'>
                    <div className='w-full h-full relative z-20 flex pl-6 mdl:pl-0'>
                        <Image 
                          className="rounded-full h-full object-cover border-2 border-textGreen"
                          src={profileImgCircle}
                          alt="profilepicture"
                        />
                        {/* background-blur-effect */}
                        <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-full top-0 left-0 group-hover:bg-transparent duration-300'></div>
                    </div>
                </div>
            <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-full group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-200'></div>
            </div>
        </div>
    </section>
  )
}

export default About;

//I need to do something about the photo being warped in moile view
