import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import BigProjectCard from './BigProjectCard';
import { ComingSoon1, ComingSoon2, ComingSoon3, ComingSoon4, } from '@/public/assets';


const BigProjects = () => {
  const [showMore, setShowMore] = useState (false);

  return (
    <div id='Projects' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
      <SectionTitle 
       titleName='Capstone Projects' 
       titleNumber='03' 
      />
      <div>

        {/* PROJECT 1 */}
        <BigProjectCard 
          coverImage='/ComingSoon2'
          title="PROJECT - TITLE v.Card"
          description="v.Card  This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["vCard","React Native","NodeJS","TypeScript"]} 
        />


      </div>
    </div>
    
  )
}

export default BigProjects;