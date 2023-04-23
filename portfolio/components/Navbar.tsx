import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { SiGithub } from "react-icons/Si";
import { BsLinkedin } from "react-icons/Bs";
import { TiSocialTwitter } from "react-icons/Ti";
import { TiSocialInstagram } from "react-icons/Ti";

const Navbar = () => {
  const ref = useRef<string | any>("")
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/,"");
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView ({
      behavior:"smooth",
    });

    //Updating the class name of the clicked link
    const links = document.querySelectorAll(".nav-link")
    links.forEach((link)=>{
      link.classList.remove("active")
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick (e:any){
    if(e.target.contains(ref.current)){
      //do something with myRef
      setShowMenu(false);
    }
  }
  
    return ( 
        <div className="w-full shadow-navbarShadow h-20 lg:h-[10vh] sticky top-0 z-50 bg-bodyColor px-4">
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5}}
                >
                    <Image className="w-14 rounded-full" src={logo} alt="logo" />
                </motion.div>
                <div className="hidden mdl:inline-flex items-center gap-7">
                    <ul className="flex text-[13] gap-7">
                        {/* HOME */}
                        <Link 
                            href="#home"
                            onClick={handleScroll}
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                            <motion.li
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5}}
                            >Home</motion.li>
                        </Link>
                        {/* ABOUT */}
                        <Link 
                            href="#about"
                            onClick={handleScroll}
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                          <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                          >
                            <span className="text-textGreen">01.</span>
                            About
                          </motion.li>
                        </Link>
                        {/* EXPERIENCE */}
                        <Link 
                            href="#Experience"
                            onClick={handleScroll}
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                          <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <span className="text-textGreen">02.</span>
                            Experience
                          </motion.li>
                        </Link>
                        {/* PROJECTS */}
                        <Link 
                            href="#Projects"
                            onClick={handleScroll}
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                          <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                          >
                            <span className="text-textGreen">03.</span>
                            Projects
                          </motion.li>
                        </Link>
                        {/* CONTACT */}
                        <Link 
                            href="#contact"
                            onClick={handleScroll}
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                          <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                          >
                            <span className="text-textGreen">04.</span>
                            Contact
                          </motion.li>
                        </Link>
                    </ul>
                    {/* RESUME BUTTON */}
                    <a href="/assets/DevonCV.pdf" target="_blank">
                        <motion.button
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 , delay: 1.25 }}
                        className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                        >
                            Resume
                        </motion.button>
                    </a>
                </div>
                {/* Small Icon Section*/}
                <div 
                  onClick={() => setShowMenu(true)}
                  className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transiton-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-0 transiton-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transiton-all ease-in-out duration-300"></span>
                </div>

                {/* Menu for mobile view */}
                {showMenu && (
                    <div 
                      ref={(node) => (ref.current = node)} 
                      onClick={handleClick}
                      className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
                      >
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x:0, opacity: 1 }}
                          transition={{ 
                            duration: 0.1, 
                          }}
                          className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
                          >
                            <MdOutlineClose  
                              onClick={() => setShowMenu(false)}
                              className="text-3xl text-textGreen cursor-pointer hover:text-textGreen/80 absolute top-4 right-4"/>
                              <div className="flex flex-col text-base gap-7">
                                
                                {/* List of Section Mobile View */}
                                <ul className="flex flex-col text-base gap-7 items-left">
                                  <Link 
                                    href="#home"
                                    onClick={handleScroll}
                                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                  >
                                    <motion.li
                                      initial={{ x: 20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ 
                                        duration: 0.2, 
                                        delay: 0.1, 
                                        ease: "easeIn" ,
                                      }}
                                    >Home</motion.li>
                                  </Link>
                                  {/* ABOUT */}
                                  <Link 
                                      href="#about"
                                      onClick={handleScroll}
                                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                  >
                                    <motion.li
                                      initial={{ x: 20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ 
                                        duration: 0.2, 
                                        delay: 0.2, 
                                        ease: "easeIn" ,
                                      }}
                                    >
                                      <span className="text-textGreen">01.</span>
                                      About
                                    </motion.li>
                                  </Link>
                                  {/* EXPERIENCE */}
                                  <Link 
                                      href="#Experience"
                                      onClick={handleScroll}
                                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                  >
                                    <motion.li
                                      initial={{ x: 20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ 
                                        duration: 0.2, 
                                        delay: 0.3, 
                                        ease: "easeIn" ,
                                      }}
                                    >
                                      <span className="text-textGreen">02.</span>
                                      Experience
                                    </motion.li>
                                  </Link>
                                  {/* PROJECTS */}
                                  <Link 
                                      href="#Projects"
                                      onClick={handleScroll}
                                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                  >
                                    <motion.li
                                      initial={{ x: 20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ 
                                        duration: 0.2, 
                                        delay: 0.4, 
                                        ease: "easeIn" ,
                                      }}
                                    >
                                      <span className="text-textGreen">03.</span>
                                      Projects
                                    </motion.li>
                                  </Link>
                                  {/* CONTACT */}
                                  <Link 
                                      href="#contact"
                                      onClick={handleScroll}
                                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                  >
                                    <motion.li
                                      initial={{ x: 20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ 
                                        duration: 0.2, 
                                        delay: 0.5, 
                                        ease: "easeIn" ,
                                      }}
                                    >
                                      <span className="text-textGreen">04.</span>
                                      Contact
                                    </motion.li>
                                  </Link>
                                </ul>
                                {/* RESUME BUTTON */}
                                <a 
                                  href="/assets/DevonCV.pdf" 
                                  target="_blank"
                                  className="pt-2"
                                >
                                    <motion.button
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.2 , delay: 0.8, ease: "easeIn" }}
                                      className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                                    >
                                        Resume
                                    </motion.button>
                                </a>
                                {/* ICONS for Mobile view */}
                                <div className="flex gap-4 pt-2">
                                {/* Github Icon */}
                                <motion.a
                                  initial={{ x: 20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ 
                                    duration: 0.2, 
                                    delay: 1, 
                                    ease: "easeIn" ,
                                  }}
                                  
                                  href="https://github.com/DevonGifford" 
                                  target='_blank'
                                  >
                                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                        <SiGithub />
                                    </span>
                                </motion.a>
                                
                                {/* LinkedIn Icon */}
                                <motion.a
                                  initial={{ x: 20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ 
                                    duration: 0.2, 
                                    delay: 1.2, 
                                    ease: "easeIn" ,
                                  }}
                                  href="https://www.linkedin.com/in/dbgifford/" target='_blank'>
                                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                    <BsLinkedin />
                                    </span>
                                </motion.a>

                                {/* Twitter Icon */}
                                <motion.a
                                  initial={{ x: 20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ 
                                    duration: 0.2, 
                                    delay: 1.4, 
                                    ease: "easeIn" ,
                                  }}
                                  href="https://twitter.com/devon_gifford" target='_blank'>
                                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                    <TiSocialTwitter />
                                    </span>
                                </motion.a>

                                {/* Instagram Icon */}
                                <motion.a
                                  initial={{ x: 20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ 
                                    duration: 0.2, 
                                    delay: 1.6, 
                                    ease: "easeIn" ,
                                  }}
                                  href="https://www.instagram.com/princedevon_za/" target='_blank'>
                                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                                    <TiSocialInstagram />
                                    </span>
                                </motion.a>
                                </div>


                                {/* Email for Mobile View */}
                                <motion.a 
                                  href="mailto:devongifford@outlook.com"
                                  initial={{ x: 20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ 
                                    duration: 0.2, 
                                    delay: 2, 
                                    ease: "easeIn" ,
                                  }}
                                  >
                                <p 
                                  className='text-sm w-72 tracking-widest hover:text-textGreen mt-4'
                                >devongifford@outlook.com
                                </p>
                                </motion.a>
                              </div>
                        </motion.div>
                    </div>
                  )}
            </div>
        </div>
    );
};

export default Navbar;