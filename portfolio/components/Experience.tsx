import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import TeamLead from './works/TeamLead';
import QA from './works/QA';
import Internship from './works/Internship';
import StartUp from './works/StartUp';
import Freelance from './works/Freelance';

const Experience = () => {
    const [workTeamLead, setWorkTeamLead] = useState(true);
    const [workQA, setWorkQA] = useState(false);
    const [workInternship, setWorkInternship] = useState(false);
    const [workStartUp, setWorkStartUp] = useState(false);
    const [workFreelance, setWorkFreelance] = useState(false);

    const handleTeamLead = () => {
        setWorkTeamLead(true);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(false);
        setWorkFreelance(false);
    };

    const handleQA = () => {
        setWorkTeamLead(false);
        setWorkQA(true);
        setWorkInternship(false);
        setWorkStartUp(false);
        setWorkFreelance(false);
    };

    const handleInternship = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(true);
        setWorkStartUp(false);
        setWorkFreelance(false);
    };

    const handleStartUp = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(true);
        setWorkFreelance(false);
    };

    const handleFreelance = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(false);
        setWorkFreelance(true);
    };



  return (
    <section
      id='Experience'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
      >
        <SectionTitle 
          titleName='Where I have worked' 
          titleNumber='02' 
        />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-80 flex flex-col'>
                {/* TeamLead */}
                <li
                  onClick={handleTeamLead} 
                  className ={`${
                    workTeamLead 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                   Cognizant 
                   <br /><em>(Team-lead)</em> 
                </li>

                {/* QA */}
                <li 
                  onClick={handleQA}
                  className ={`${
                    workQA 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                   Cognizant 
                </li>

                {/* Internship */}
                <li 
                  onClick={handleInternship}
                  className ={`${
                    workInternship 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                   IE Business School
                   <br /><em>(Internship)</em>  
                </li>

                {/* StartUp */}
                <li 
                  onClick={handleStartUp}
                  className ={`${
                    workStartUp 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                   Out-of-the-Cube
                   <br /><em>(Start-up)</em>  
                </li>

                {/* Freelance */}
                <li 
                  onClick={handleFreelance}
                  className ={`${
                    workFreelance 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                   Freelance 
                </li>
            </ul>
            {workTeamLead && <TeamLead />}
            {workQA && <QA />}
            {workInternship && <Internship />}
            {workStartUp && <StartUp />}
            {workFreelance && <Freelance />}
        </div>
    </section>
  )
}

export default Experience;

// I need to create a media querey that will turn the bar horizontally for mobile viewing...