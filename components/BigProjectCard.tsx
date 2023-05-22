import React, { useState , useEffect } from 'react'
import Image from "next/image";
import { ComingSoon1, ComingSoon2, ComingSoon3, ComingSoon4, } from '@/public/assets';
import { RiGithubLine } from "react-icons/Ri";
import { FiExternalLink } from "react-icons/Fi";
import { SlSocialYoutube } from "react-icons/Sl";


interface Props {
    coverImage:string;
    title:string;
    description:string;
    gitLink:string;
    youtubeLink:string;
    liveLink:string;
    techStackList:string[];
  }

const ProjectCard = ({ coverImage, title, description, gitLink, youtubeLink, liveLink, techStackList }:Props) => {
  return (
    <div>
      
      {/* PROJECT Container.... */}
      <div 
        className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>
        
        {/* Small Container... BIG SCREENS */}
        <div className='hidden flex-col mdl:flex sml:flex-row gap-6'>
          {/* Image-div*/}
          <a
            className='w-full h-full justify-center align-middle relative group sml:w-1/2' 
            href="https://github.com/DevonGifford" 
            target='_blank'
          >
            <div>
                {/* Actual Image */}
                <Image className="w-full h-full object-contain rounded-lg"  
                src={ {coverImage} }                          
                alt="Project1" 
                />
                {/* Green overlay */}
                <div className='absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300 md:inline-block'></div>
            </div>
          </a>
          {/* Text-div */}
          <div 
          className='w-full z-10 sml:w-1/2 flex flex-col gap-6 sml:justify-between items-end text-right md:-ml-16 '>
            <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
            <h3 className='text-2xl font-bold hover:text-textGreen'> {title} </h3>
            {/* description block */}
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              {description}
            </p>
            {/* list of tech used */}
            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen'>
              {techStackList.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
            {/* Links to showcase project  🎯TO-DO */}
            <div className='text-2xl flex gap-4'>
                {/* GitHub */}
                <a 
                  className='hover:text-textGreen duration-300' 
                  href="https://github.com/DevonGifford" 
                  target='_blank'>
                    <RiGithubLine />
                </a>
                {/* YouTube */}
                <a 
                  className='hover:text-textGreen duration-300' 
                  href="https://github.com/DevonGifford" 
                  target='_blank'>
                    <SlSocialYoutube />
                </a>
                {/* LiveDemo */}
                <a 
                  className='hover:text-textGreen duration-300' 
                  href="https://github.com/DevonGifford" 
                  target='_blank'>
                    <FiExternalLink />
                </a>
              </div>
          </div>
        </div>

        {/* Small Container... MOBILE SCREENS */}
        <div className='bg-no1 hover:shadow-xl shadow-inner bg-no-repeat bg-cover bg-center bg-fixed flex-col rounded-lg mdl:hidden mx-5'>
          <div 
          className='w-fit px-5 z-10 flex flex-col gap-6 mx-3'>
            <p className='font-titleFont text-textGreen text-sm tracking-wide pt-5'>Featured Project</p>
            <h3 className='font-titleFont text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE </h3>
            {/* description block */}
            <p className='text-xs sml:text-base rounded-md'>
              This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
            </p>
            {/* list of tech used */}
            <ul className='text-xs font-codeFont tracking-wide flex gap-5 text-textGreen'>
              <li>NextJS</li>
              <li>API</li>
              <li>NodeJS</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            {/* Links to showcase project  🎯TO-DO */}
            <div className='text-2xl flex gap-4 pb-10 items-end text-right'>
                {/* GitHub */}
                <a 
                  className='hover:text-textGreen duration-300' 
                  href="https://github.com/DevonGifford" 
                  target='_blank'>
                    <RiGithubLine />
                </a>
                {/* YouTube */}
                <a 
                  className='hover:text-textGreen duration-300' 
                  href="https://github.com/DevonGifford" 
                  target='_blank'>
                    <SlSocialYoutube />
                </a>
                {/* LiveDemo */}
                <a 
                  className='hover:text-textGreen duration-300' 
                  href="https://github.com/DevonGifford" 
                  target='_blank'>
                    <FiExternalLink />
                </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProjectCard;


//NEED TO FIX THE LINK FOR GITHUB ON THE SMALL PROJECTS - EVERYTHING GOES TO LIVE DEMO