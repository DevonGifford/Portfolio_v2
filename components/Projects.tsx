// import React from 'react'
// import SectionTitle from './SectionTitle';
// import Image from "next/image";
// import { ComingSoon1, ComingSoon2, ComingSoon3, ComingSoon4, Ecommerce, SpotifyClone, } from '@/public/assets';
// import { RiGithubLine } from "react-icons/ri";
// import { FiExternalLink } from "react-icons/fi";
// import { SlSocialYoutube } from "react-icons/sl";


// const Projects = () => {
//   return (
//     <section id='Projects' className='max-w-containerSmall min-h-fit mx-auto py-10 pt-64 lgl:py-32 flex flex-col gap-8'>
//     <SectionTitle 
//       titleName='Capstone Projects' 
//       titleNumber='03' 
//     />

//     {/* PROJECT 1*/}
//       {/* PROJECT Container.... */}
//       <div 
//         className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>
        
//         {/* BIG SCREENS - media querey */}
//         <div className='hidden flex-col mdl:flex sml:flex-row gap-6'>
//           {/* Image-div*/}
//           <a
//             className='w-full h-full justify-center align-middle relative group sml:w-1/2' 
//             href="https://github.com/DevonGifford" 
//             target='_blank'
//           >
//             <div>
//                 {/* Actual Image */}
//                 <Image className="w-full h-full object-contain rounded-lg"  
//                 src={Ecommerce}
//                 alt="Project1" 
//                 />
//                 {/* Green overlay */}
//                 <div className='absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300 md:inline-block'></div>
//             </div>
//           </a>
//           {/* Text-div */}
//           <div 
//           className='w-full z-10 sml:w-1/2 flex flex-col gap-6 sml:justify-between items-end text-right md:-ml-16 '>
//             <p className='font-codeFont text-textGreen text-sm tracking-wide'>Featured Project</p>
//             {/* heading block - clickable link 🎯 TO-DO */}
//             <a href="">
//               <h3 className='text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE </h3>
//             </a>
//             {/* description block */}
//             <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
//               This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
//             </p>
//             {/* list of tech used */}
//             <ul className='text-xs md:text-sm font-codeFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen'>
//               <li>NextJS</li>
//               <li>API</li>
//               <li>NodeJS</li>
//               <li>Stripe</li>
//               <li>Vercel</li>
//             </ul>
//             {/* Links to showcase project  🎯TO-DO */}
//             <div className='text-2xl flex gap-6'>
//                 {/* GitHub */}
//                 <a 
//                   className='hover:text-textGreen duration-300' 
//                   href="https://github.com/DevonGifford" 
//                   target='_blank'>
//                     <RiGithubLine />
//                 </a>
//                 {/* YouTube */}
//                 <a 
//                   className='hover:text-textGreen duration-300' 
//                   href="https://github.com/DevonGifford" 
//                   target='_blank'>
//                     <SlSocialYoutube />
//                 </a>
//                 {/* LiveDemo */}
//                 <a 
//                   className='hover:text-textGreen duration-300' 
//                   href="https://github.com/DevonGifford" 
//                   target='_blank'>
//                     <FiExternalLink />
//                 </a>
//               </div>
//           </div>
//         </div>

//         {/* MOBILE SCREENS - media querey  */}
//         <div className='bg-no1 hover:shadow-xl shadow-inner bg-no-repeat bg-cover bg-center bg-fixed flex-col rounded-lg mdl:hidden sml:mx-5'>
//           <div 
//           className='w-fit sml:px-5 z-10 flex flex-col gap-6 mx-3'>
//             <p className='font-codeFont text-textGreen text-sm tracking-wide pt-5'>Featured Project</p>
//             {/* heading block - clickable link 🎯TO-DO*/}
//             <a href="">  
//               <h3 className='font-titleFont text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE </h3>
//             </a>
//             {/* description block */}
//             <p className='text-xs sml:text-base rounded-md'>
//               This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
//             </p>
//             {/* list of tech used */}
//             <ul className='text-xs font-codeFont tracking-wide flex gap-5 text-textGreen'>
//               <li>NextJS</li>
//               <li>API</li>
//               <li>NodeJS</li>
//               <li>Stripe</li>
//               <li>Vercel Deployment</li>
//             </ul>
//             {/* Links to showcase project  🎯TO-DO */}
//             <div className='text-2xl flex gap-4 pb-10 items-end text-right'>
//                 {/* GitHub */}
//                 <a 
//                   className='hover:text-textGreen duration-300' 
//                   href="https://github.com/DevonGifford" 
//                   target='_blank'>
//                     <RiGithubLine />
//                 </a>
//                 {/* YouTube */}
//                 <a 
//                   className='hover:text-textGreen duration-300' 
//                   href="https://github.com/DevonGifford" 
//                   target='_blank'>
//                     <SlSocialYoutube />
//                 </a>
//                 {/* LiveDemo */}
//                 <a 
//                   className='hover:text-textGreen duration-300' 
//                   href="https://github.com/DevonGifford" 
//                   target='_blank'>
//                     <FiExternalLink />
//                 </a>
//             </div>
//           </div>
//         </div>

//       </div>

//     {/* PROJECT 2 - REVERSED*/}
//       {/* PROJECT Container.... */}
//       <div 
//         className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>
        
//         {/* BIG SCREENS  - media querey  */}
//           <div className='hidden flex-col mdl:flex sml:flex-row-reverse gap-6'>
//           {/* Image-div*/}
//               <a
//                 className='w-full h-full justify-center align-middle relative group sml:w-1/2' 
//                 href="https://github.com/DevonGifford" 
//                 target='_blank'
//               >
//                   <div>
//                       {/* Actual Image */}
//                       <Image className="w-full h-full object-contain rounded-lg"  
//                       src={ComingSoon1}
//                       alt="Project1" 
//                       />
//                       {/* Green overlay */}
//                       <div className='absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
//                   </div>
//               </a>
//               {/* Text-side */}
//               <div 
//               className='w-full z-10 sml:w-1/2 flex flex-col gap-6 sml:justify-between md:-mr-16'>
//                   <p className='font-codeFont text-textGreen text-sm tracking-wide'>Featured Project</p>
//                   {/* heading block - clickable link 🎯 TO-DO */}                  
//                   <a href="">
//                     <h3 className='text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE 2 </h3>
//                   </a>
//                   {/* description block */}
//                   <p className='bg-[#112240] text-sm md:text-base px-5 py-5 rounded-md'>
//                       This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
//                   </p>
//                   {/* list of tech used */}
//                   <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textGreen'>
//                       <li>NextJS</li>
//                       <li>API</li>
//                       <li>NodeJS</li>
//                       <li>Stripe</li>
//                       <li>Vercel Deployment</li>
//                   </ul>
//                   {/* Image-Links to showcase project🎯TO-DO */}
//                   <div className='text-2xl flex gap-6'>
//                       {/* GitHub */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <RiGithubLine />
//                       </a>
//                       {/* YouTube */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <SlSocialYoutube />
//                       </a>
//                       {/* LiveDemo */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <FiExternalLink />
//                       </a>
//                   </div>
//               </div>
//           </div>

//         {/* MOBILE SCREENS  - media querey  */}
//           <div className='bg-no2 hover:shadow-xl shadow-inner bg-no-repeat bg-cover bg-center bg-fixed flex-col rounded-lg mdl:hidden sml:mx-5'>
//               <div 
//                 className='w-fit sml:px-5 z-10 flex flex-col gap-6 mx-3'>
//                 <p className='font-codeFont text-textGreen text-sm tracking-wide pt-5'>Featured Project</p>
//                 {/* heading block - clickable link 🎯 TO-DO */}
//                 <a href="">
//                   <h3 className='font-titleFont text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE 2 small </h3>
//                 </a>
//                 {/* description block */}
//                 <p className='text-xs sml:text-base rounded-md'>
//                   This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
//                 </p>
//                 {/* list of tech used */}
//                 <ul className='text-xs font-codeFont tracking-wide flex gap-5 text-textGreen'>
//                   <li>NextJS</li>
//                   <li>API</li>
//                   <li>NodeJS</li>
//                   <li>Stripe</li>
//                   <li>Vercel Deployment</li>
//                 </ul>
//                 {/* Links to showcase project  🎯TO-DO */}
//                 <div className='text-2xl flex gap-4 pb-10 items-end text-right'>
//                     {/* GitHub */}
//                     <a 
//                       className='hover:text-textGreen duration-300' 
//                       href="https://github.com/DevonGifford" 
//                       target='_blank'>
//                         <RiGithubLine />
//                     </a>
//                     {/* YouTube */}
//                     <a 
//                       className='hover:text-textGreen duration-300' 
//                       href="https://github.com/DevonGifford" 
//                       target='_blank'>
//                         <SlSocialYoutube />
//                     </a>
//                     {/* LiveDemo */}
//                     <a 
//                       className='hover:text-textGreen duration-300' 
//                       href="https://github.com/DevonGifford" 
//                       target='_blank'>
//                         <FiExternalLink />
//                     </a>
//                   </div>
//           </div>
//           </div>

//       </div>

//     {/* PROJECT 3 */}
//       {/* PROJECT Container.... */}
//       <div 
//         className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>
          
//         {/* BIG SCREENS - media querey */}  
//           <div className='hidden flex-col mdl:flex sml:flex-row gap-6'>
//           {/* Image-side*/}
//               <a
//                 className='w-full h-full justify-center align-middle relative group sml:w-1/2' 
//                 href="https://github.com/DevonGifford" target='_blank'
//               >
//                   <div>
//                       <Image className="w-full h-full object-contain rounded-lg"  
//                       src={ComingSoon3}
//                       alt="Project1" 
//                       />
//                       <div className='absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300 md:inline-block'></div>
//                   </div>
//               </a>
//               {/* Text-side */}
//               <div 
//               className='w-full z-10 sml:w-1/2 flex flex-col gap-6 sml:justify-between items-end text-right md:-ml-16 '>
//                   <p className='font-codeFont text-textGreen text-sm tracking-wide'>Featured Project</p>
//                   {/* heading block - clickable link 🎯 TO-DO */}
//                   <a href="">
//                     <h3 className='text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE 3 </h3>
//                   </a>
//                   {/* description block */}
//                   <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
//                       This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
//                   </p>
//                   {/* list of tech used */}
//                   <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGreen'>
//                       <li>NextJS</li>
//                       <li>API</li>
//                       <li>NodeJS</li>
//                       <li>Stripe</li>
//                       <li>Vercel Deployment</li>
//                   </ul>
//                   {/* Image-Links to showcase project🎯TO-DO */}
//                   <div className='text-2xl flex gap-6'>
//                       {/* GitHub */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <RiGithubLine />
//                       </a>
//                       {/* YouTube */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <SlSocialYoutube />
//                       </a>
//                       {/* LiveDemo */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <FiExternalLink />
//                       </a>
//                   </div>
//               </div>
//           </div>

//         {/* MOBILE SCREENS  - media querey */}
//           <div className='bg-no3 hover:shadow-xl shadow-inner bg-no-repeat bg-cover bg-center bg-fixed flex-col rounded-lg mdl:hidden sml:mx-5'>
//           <div 
//             className='w-fit sml:px-5 z-10 flex flex-col gap-6 mx-3'>
//               <p className='font-codeFont text-textGreen text-sm tracking-wide pt-5'>Featured Project</p>
//               {/* heading block - clickable link 🎯 TO-DO */}
//               <a href="">
//                 <h3 className='font-titleFont text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE 3 </h3>
//               </a>
//               {/* description block */}
//               <p className='text-xs sml:text-base rounded-md'>
//                 This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
//               </p>
//               {/* list of tech used */}
//               <ul className='text-xs font-codeFont tracking-wide flex gap-5 text-textGreen'>
//                 <li>NextJS</li>
//                 <li>API</li>
//                 <li>NodeJS</li>
//                 <li>Stripe</li>
//                 <li>Vercel Deployment</li>
//               </ul>
//               {/* Links to showcase project  🎯TO-DO */}
//               <div className='text-2xl flex gap-4 pb-10 items-end text-right'>
//                   {/* GitHub */}
//                   <a 
//                     className='hover:text-textGreen duration-300' 
//                     href="https://github.com/DevonGifford" 
//                     target='_blank'>
//                       <RiGithubLine />
//                   </a>
//                   {/* YouTube */}
//                   <a 
//                     className='hover:text-textGreen duration-300' 
//                     href="https://github.com/DevonGifford" 
//                     target='_blank'>
//                       <SlSocialYoutube />
//                   </a>
//                   {/* LiveDemo */}
//                   <a 
//                     className='hover:text-textGreen duration-300' 
//                     href="https://github.com/DevonGifford" 
//                     target='_blank'>
//                       <FiExternalLink />
//                   </a>
//                 </div>
//             </div>
//           </div>

//       </div>

//     {/* PROJECT 4  - REVERSE */}
//       {/* PROJECT Container.... */}
//       <div 
//         className='max-w-containerSmall mx-auto flex flex-col items-center justify-between gap-28 mt-10'>

//         {/* BIG SCREENS  - media querey  */}
//           <div className='hidden flex-col mdl:flex sml:flex-row-reverse gap-6'>
              
//               {/* Image-side*/}
//               <a
//                 className='w-full h-full justify-center align-middle relative group sml:w-1/2' 
//                 href="https://github.com/DevonGifford" target='_blank'
//               >
//                   <div>
//                       <Image className="w-full h-full object-contain rounded-lg"  
//                       src={ComingSoon4}
//                       alt="Project1" 
//                       />
//                       <div className='absolute w-full h-full bg-textGreen/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
//                   </div>
//               </a>
              
//               {/* Text-side */}
//               <div 
//                 className='w-full z-10 sml:w-1/2 flex flex-col gap-6 sml:justify-between md:-mr-16'>
//                   <p className='font-codeFont text-textGreen text-sm tracking-wide'>Featured Project</p>
//                   {/* heading block - clickable link 🎯 TO-DO */}
//                   <a href="">
//                     <h3 className='text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE 4 big </h3>
//                   </a>
//                   {/* description block */}
//                   <p className='bg-[#112240] text-sm md:text-base px-5 py-5 rounded-md'>
//                       This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
//                   </p>
//                   {/* list of tech used */}
//                   <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textGreen'>
//                       <li>NextJS</li>
//                       <li>API</li>
//                       <li>NodeJS</li>
//                       <li>Stripe</li>
//                       <li>Vercel Deployment</li>
//                   </ul>
//                   {/* Image-Links to showcase project🎯TO-DO */}
//                   <div className='text-2xl flex gap-6'>
//                       {/* GitHub */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <RiGithubLine />
//                       </a>
//                       {/* YouTube */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <SlSocialYoutube />
//                       </a>
//                       {/* LiveDemo */}
//                       <a 
//                         className='hover:text-textGreen duration-300' 
//                         href="https://github.com/DevonGifford" 
//                         target='_blank'>
//                           <FiExternalLink />
//                       </a>
//                   </div>
//               </div>

//           </div>
                
//         {/* MOBILE SCREENS  - media querey  */}
//           <div className='bg-no4 hover:shadow-xl shadow-inner bg-no-repeat bg-cover bg-center bg-fixed flex-col rounded-lg mdl:hidden sml:mx-5'>
//             <div 
//               className='w-fit sml:px-5 z-10 flex flex-col gap-6 mx-3'>
//               <p className='font-codeFont text-textGreen text-sm tracking-wide pt-5'>Featured Project</p>
//               {/* heading block - clickable link 🎯 TO-DO */}
//               <a href="">
//                 <h3 className='font-titleFont text-2xl font-bold hover:text-textGreen'> PROJECT - TITLE 4 small </h3>
//               </a>
//               {/* description block */}
//               <p className='text-xs sml:text-base rounded-md'>
//                 This is where I will give brief description of the project and what it does, I will aslo use this <span className='text-textGreen'>hightlighting</span>  to emphasize the key aspects and the <span className='text-textGreen'>most important tech</span> I used in this project.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi porro aperiam rerum nam! Velit.
//               </p>
//               {/* list of tech used */}
//               <ul className='text-xs font-codeFont tracking-wide flex gap-5 text-textGreen'>
//                 <li>NextJS</li>
//                 <li>API</li>
//                 <li>NodeJS</li>
//                 <li>Stripe</li>
//                 <li>Vercel Deployment</li>
//               </ul>
//               {/* Links to showcase project  🎯TO-DO */}
//               <div className='text-2xl flex gap-4 pb-10 items-end text-right'>
//                   {/* GitHub */}
//                   <a 
//                     className='hover:text-textGreen duration-300' 
//                     href="https://github.com/DevonGifford" 
//                     target='_blank'>
//                       <RiGithubLine />
//                   </a>
//                   {/* YouTube */}
//                   <a 
//                     className='hover:text-textGreen duration-300' 
//                     href="https://github.com/DevonGifford" 
//                     target='_blank'>
//                       <SlSocialYoutube />
//                   </a>
//                   {/* LiveDemo */}
//                   <a 
//                     className='hover:text-textGreen duration-300' 
//                     href="https://github.com/DevonGifford" 
//                     target='_blank'>
//                       <FiExternalLink />
//                   </a>
//                 </div>
//         </div>
//           </div>

//       </div>


//     </section>
//   )
// }

// export default Projects;

// //Need to create a way for them to fall onto eachother when entering mobile view 
// // I want to fix the fact that they stop overlapping when looking at a half-desktop screen