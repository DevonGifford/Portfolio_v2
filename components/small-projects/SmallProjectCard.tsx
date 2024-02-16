import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  title: string;
  description: string;
  gitLink: string;
  liveLink: string;
  listItems: string[];
}

const ProjectCard = ({
  title,
  description,
  gitLink,
  liveLink,
  listItems,
}: Props) => {
  return (
    <div className="w-full max-w-[320px] min-w-[280px] h-72 rounded-lg bg-[#112240] p-6 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      {/* Icon-Links */}
      <div className="flex justify-between items-center">
        {/* GITHUB LINK */}
        <a href={gitLink} target="_blank">
          <RiGithubLine className="text-2xl hover:text-textGreen" />
        </a>

        {/* LIVE LINK */}
        <a href={liveLink} target="_blank">
          <FiExternalLink className="text-2xl hover:text-textGreen" />
        </a>
      </div>

      {/* Text Portion  */}
      <div>
        {/* TITLE */}
        <a href={liveLink} target="_blank">
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
        </a>

        {/* DESCRIPTION */}
        <p className="text-sm mt-3">{description}</p>
      </div>

      {/* TECH STACK */}
      <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
        {listItems.map((item, i) => (
          <li className="hover:text-textGreen" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;

//NEED TO FIX THE LINK FOR GITHUB ON THE SMALL PROJECTS - EVERYTHING GOES TO LIVE DEMO
