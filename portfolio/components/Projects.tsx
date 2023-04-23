import React from 'react'
import SectionTitle from './SectionTitle';
import Image from "next/image";
import { ComingSoon1, ComingSoon2, ComingSoon3, ComingSoon4, } from '@/public/assets';
import { RiGithubLine } from "react-icons/Ri";
import { FiExternalLink } from "react-icons/Fi";
import { SlSocialYoutube } from "react-icons/Sl";


const Projects = () => {
  return (
    <section id='Projects' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
    <SectionTitle 
      titleName='Capstone Projects' 
      titleNumber='03' 
    />

        {/* PROJECT - container */}
        <div 
          className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>
            <div className='flex flex-col lgl:flex-row gap-6'>
            {/* Image-side*/}
                <a
                  className='w-full xl:w-1/2 h-full relative group' 
                  href="https://github.com/DevonGifford" target='_blank'
                >
                    <div>
                        <Image className="w-full h-full object-contain rounded-lg"  
                        src={ComingSoon2}
                        alt="Project1" 
                        />
                        <div className='hidden mdl:inline-block absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent  duration-300 '></div>
                    </div>
                </a>
                {/* Text-side */}
                <div 
                className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold'> PROJECT - TITLE </h3>
                    {/* description block */}
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                        This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
                    </p>
                    {/* list of tech used */}
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen'>
                        <li>NextJS</li>
                        <li>API</li>
                        <li>NodeJS</li>
                        <li>Stripe</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    {/* Image-Links to showcase project🎯TO-DO */}
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

        </div>

      {/* PROJECT 2 - REVERSE*/}
        <div 
          className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>
            <div className='flex flex-col lgl:flex-row-reverse gap-6'>
            {/* Image-side*/}
                <a
                  className='w-full xl:w-1/2 h-full relative group' 
                  href="https://github.com/DevonGifford" target='_blank'
                >
                    <div>
                        <Image className="w-full h-full object-contain rounded-lg"  
                        src={ComingSoon1}
                        alt="Project1" 
                        />
                        <div className='hidden mdl:inline-block absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300 '></div>
                    </div>
                </a>
                {/* Text-side */}
                <div 
                className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:-mr-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold'> PROJECT - TITLE </h3>
                    {/* description block */}
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                        This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
                    </p>
                    {/* list of tech used */}
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textGreen'>
                        <li>NextJS</li>
                        <li>API</li>
                        <li>NodeJS</li>
                        <li>Stripe</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    {/* Image-Links to showcase project🎯TO-DO */}
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

        </div>

      {/* PROJECT 3 */}
        <div 
          className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>
            <div className='flex flex-col lgl:flex-row gap-6'>
            {/* Image-side*/}
                <a
                  className='w-full xl:w-1/2 h-full relative group' 
                  href="https://github.com/DevonGifford" target='_blank'
                >
                    <div>
                        <Image className="w-full h-full object-contain rounded-lg"  
                        src={ComingSoon3}
                        alt="Project1" 
                        />
                        <div className='hidden mdl:inline-block absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent  duration-300 '></div>
                    </div>
                </a>
                {/* Text-side */}
                <div 
                className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold'> PROJECT - TITLE </h3>
                    {/* description block */}
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                        This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
                    </p>
                    {/* list of tech used */}
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen'>
                        <li>NextJS</li>
                        <li>API</li>
                        <li>NodeJS</li>
                        <li>Stripe</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    {/* Image-Links to showcase project🎯TO-DO */}
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

        </div>

      {/* PROJECT 4  - REVERSE */}
        <div 
          className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>
            <div className='flex flex-col lgl:flex-row-reverse gap-6'>
            {/* Image-side*/}
                <a
                  className='w-full xl:w-1/2 h-full relative group' 
                  href="https://github.com/DevonGifford" target='_blank'
                >
                    <div>
                        <Image className="w-full h-full object-contain rounded-lg"  
                        src={ComingSoon4}
                        alt="Project1" 
                        />
                        <div className='hidden mdl:inline-block absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300 '></div>
                    </div>
                </a>
                {/* Text-side */}
                <div 
                className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between xl:-mr-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                    <h3 className='text-2xl font-bold'> PROJECT - TITLE </h3>
                    {/* description block */}
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                        This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
                    </p>
                    {/* list of tech used */}
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textGreen'>
                        <li>NextJS</li>
                        <li>API</li>
                        <li>NodeJS</li>
                        <li>Stripe</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    {/* Image-Links to showcase project🎯TO-DO */}
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

        </div>


    </section>
  )
}

export default Projects;

//Need to create a way for them to fall onto eachother when entering mobile view 

// I want to fix the fact that they stop overlapping when looking at a half-desktop screen