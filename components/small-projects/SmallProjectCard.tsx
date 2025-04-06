"use client";

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

const ProjectCard = ({ title, description, gitLink, liveLink, listItems }: Props) => {
  return (
    <div className="group flex h-72 w-full min-w-[280px] max-w-[320px] flex-col justify-center gap-6 rounded-lg bg-[#112240] p-6 transition-transform duration-300 hover:-translate-y-2">
      {/* Icon-Links */}
      <div className="flex items-center justify-between">
        {/* GITHUB LINK */}
        <a href={gitLink} target="_blank" rel="noreferrer">
          <RiGithubLine className="text-2xl hover:text-textGreen" />
        </a>

        {/* LIVE LINK */}
        <a href={liveLink} target="_blank" rel="noreferrer">
          <FiExternalLink className="text-2xl hover:text-textGreen" />
        </a>
      </div>

      {/* Text Portion  */}
      <div>
        {/* TITLE */}
        <a href={liveLink} target="_blank" rel="noreferrer">
          <h2 className="font-titleFont text-xl font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
        </a>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm">{description}</p>
      </div>

      {/* TECH STACK */}
      <ul className="flex flex-wrap items-center justify-between gap-2 text-xs text-textDark mdl:text-sm">
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
