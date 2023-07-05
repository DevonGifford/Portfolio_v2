import React, { useState } from 'react'
import SectionTitle from '../SectionTitle';
import BigProjectCard from './BigProjectCard';
import BigProjectCardReversed from './BigProjectCard-reversed'

const BigProjects: React.FC = () => {


  {/* PROJECT 1 */}
  //-------------------------------------------------------------
  const imageProps1 = {
    src: '/assets/images/ProjectPictures/Ecommerce.webp',
    alt: 'Image-Description',
    width: 500,
    height: 300,
  };
  const imageUrl1 = '/assets/images/ProjectPictures/small-images/EcommerceSmall.webp';

  {/* PROJECT 2 */}
  //-------------------------------------------------------------
  const imageProps2 = {
    src: '/assets/images/ProjectPictures/SpotifyClone.webp',
    alt: 'Image-Description',
    width: 500,
    height: 300,
  };
  const imageUrl2 = '/assets/images/ProjectPictures/small-images/SpotifyCloneSmall.webp';

  {/* PROJECT 3 */}
  //-------------------------------------------------------------
  const imageProps3 = {
    src: '/assets/images/ProjectPictures/FaceDetection.png',
    alt: 'Image-Description',
    width: 500,
    height: 300,
  };
  const imageUrl3 = '/assets/images/ProjectPictures/small-images/FaceDetectionSmall.png';

  {/* PROJECT 4 */}
  //-------------------------------------------------------------
  const imageProps4 = {
    src: '/assets/images/ProjectPictures/Mission-Control.jpg',
    alt: 'Image-Description',
    width: 500,
    height: 300,
  };
  const imageUrl4 = '/assets/images/ProjectPictures/small-images/Mission-ControlSmall.jpg';

  return (
    <div id='Projects' className='max-w-containerSmall mx-auto min-h-fit py-10  lgl:py-32 flex flex-col gap-8'>
      <SectionTitle 
       titleName='Capstone Projects' 
       titleNumber='03' 
      />
      <div>

        {/* PROJECT 1 */}
        <BigProjectCard 
          image={imageProps1}
          imageUrl={imageUrl1}
          title="E-commerce Website"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress.
          This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["test","test for Real","NodeJS","TypeScript"]} 
        />

        {/* PROJECT 2 */}
        <BigProjectCardReversed 
          image={imageProps2}
          imageUrl={imageUrl2}
          title="Spotify Clone"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress
          This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["test","test for Real","NodeJS","TypeScript"]} 
        />

        {/* PROJECT 3 */}
        <BigProjectCard 
          image={imageProps3}
          imageUrl={imageUrl3}
          title="Face detection app"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress.
          This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["test","test for Real","NodeJS","TypeScript"]} 
        />

        {/* PROJECT 4 */}
        <BigProjectCardReversed 
          image={imageProps4}
          imageUrl={imageUrl4}
          title="NASA Mission Control"
          description="This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress.
          This will be a simple sentance that describes what the goal of this project is, as well as mentioning anything noteworthy.  Please remember this is a work in progress"
          gitLink="https://github.com/DevonGifford"
          liveLink="https://github.com/DevonGifford"
          youtubeLink="https://github.com/DevonGifford"
          techStackList={["test","test for Real","NodeJS","TypeScript"]} 
        />

      </div>
    </div>
    
  )
}

export default BigProjects;
