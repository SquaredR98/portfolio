import React from 'react';

// FE Logos
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoTailwindCss, BiLogoJquery } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

const skillsClassName = 'text-2xl border-r border-slate-400 pr-2 mr-2'

const skills = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: 'CSS', icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: 'ReactJS', icon: <FaReact className={skillsClassName} /> },
      { name: 'Redux', icon: <SiRedux className={skillsClassName} /> },
      { name: 'Tailwind CSS', icon: <BiLogoTailwindCss className={skillsClassName} /> },
      { name: 'Responsive Web Design', icon: <CgWebsite className={skillsClassName} /> },
      { name: 'jQuery', icon: <BiLogoJquery className={skillsClassName} /> },
      { name: 'HTML', icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: 'HTML', icon: <AiOutlineHtml5 className={skillsClassName} /> },
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: 'CSS', icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: 'ReactJS', icon: <FaReact className={skillsClassName} /> },
      { name: 'Redux', icon: <SiRedux className={skillsClassName} /> },
      { name: 'Tailwind CSS', icon: <BiLogoTailwindCss className={skillsClassName} /> },
      { name: 'Responsive Web Design', icon: <CgWebsite className={skillsClassName} /> },
      { name: 'jQuery', icon: <BiLogoJquery className={skillsClassName} /> },
      { name: 'HTML', icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: 'HTML', icon: <AiOutlineHtml5 className={skillsClassName} /> },
    ]
  }
]

export default skills;