import React from 'react';
import { SiGithub } from "react-icons/Si";
import { BsLinkedin } from "react-icons/Bs";
import { TiSocialTwitter } from "react-icons/Ti";
import { TiSocialInstagram } from "react-icons/Ti";


const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            {/* Github Icon */}
            <a href="" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <SiGithub />
                </span>
            </a>
            {/* LinkedIn Icon */}
            <a href="" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <BsLinkedin />
                </span>
            </a>
            {/* Twitter Icon */}
            <a href="" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TiSocialTwitter />
                </span>
            </a>
            {/* Instagram Icon */}
            <a href="" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TiSocialInstagram />
                </span>
            </a>                                    
        </div>
        <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  );
};

export default LeftSide;