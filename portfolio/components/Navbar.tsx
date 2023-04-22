import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return ( 
        <div className="w-full shadow-navbarShadow h-20 lg:h-[10vh] stick top-0 z-50 bg-bodyColor px-4">
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
                            href="#about"
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
                            href="#about"
                            className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        >
                          <motion.li
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                          >
                            <span className="text-textGreen">03.</span>
                            Project
                          </motion.li>
                        </Link>
                        {/* CONTACT */}
                        <Link 
                            href="#contact"
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
                <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transiton-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-0 transiton-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transiton-all ease-in-out duration-300"></span>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;