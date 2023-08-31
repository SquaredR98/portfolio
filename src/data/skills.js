import React from "react";

// FE Logos
import { AiOutlineDatabase, AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoTailwindCss,
  BiLogoJquery,
  BiLogoDocker,
  BiLogoAws,
  BiLogoJava,
  BiLogoPython,
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaNodeJs, FaObjectUngroup, FaReact } from "react-icons/fa";
import {
  SiAzuredevops,
  SiBabel,
  SiCplusplus,
  SiExpress,
  SiGatsby,
  SiGithubactions,
  SiKubernetes,
  SiMongoose,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiThealgorithms,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

import { IoLogoJavascript } from 'react-icons/io';

const skillsClassName = "text-2xl border-r border-slate-400 pr-2 mr-2";

const skills = [
  {
    title: "Programming",
    skills: [
      {
        name: "JavaScript",
        icon: <IoLogoJavascript className={skillsClassName} />,
      },
      { name: "Java", icon: <BiLogoJava className={skillsClassName} /> },
      { name: "C/C++", icon: <SiCplusplus className={skillsClassName} /> },
      { name: "Python", icon: <BiLogoPython className={skillsClassName} /> },
      {
        name: "Data Structures",
        icon: <AiOutlineDatabase className={skillsClassName} />,
      },
      { name: "Algorithms", icon: <SiThealgorithms className={skillsClassName} /> },
      { name: "OOPS", icon: <FaObjectUngroup className={skillsClassName} /> },
      { name: "Gatsby", icon: <SiGatsby className={skillsClassName} /> },
      { name: "NextJS", icon: <SiNextdotjs className={skillsClassName} /> },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: "CSS", icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: "ReactJS", icon: <FaReact className={skillsClassName} /> },
      { name: "Redux", icon: <SiRedux className={skillsClassName} /> },
      {
        name: "Tailwind CSS",
        icon: <BiLogoTailwindCss className={skillsClassName} />,
      },
      {
        name: "Responsive Web Design",
        icon: <CgWebsite className={skillsClassName} />,
      },
      { name: "jQuery", icon: <BiLogoJquery className={skillsClassName} /> },
      { name: "Gatsby", icon: <AiOutlineHtml5 className={skillsClassName} /> },
      { name: "NextJS", icon: <AiOutlineHtml5 className={skillsClassName} /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "NodeJS", icon: <FaNodeJs className={skillsClassName} /> },
      { name: "Express", icon: <SiExpress className={skillsClassName} /> },
      { name: "NestJS", icon: <SiNestjs className={skillsClassName} /> },
      { name: "Webpack", icon: <SiWebpack className={skillsClassName} /> },
      { name: "Babel", icon: <SiBabel className={skillsClassName} /> },
      { name: "MongoDB", icon: <BiLogoMongodb className={skillsClassName} /> },
      { name: "Mongoose", icon: <SiMongoose className={skillsClassName} /> },
      { name: "PostgresSQL", icon: <BiLogoPostgresql className={skillsClassName} /> },
      { name: "TypeORM", icon: <SiMysql className={skillsClassName} /> },
      { name: "Prisma", icon: <SiPrisma className={skillsClassName} /> },
      {
        name: "Typescript",
        icon: <SiTypescript className={skillsClassName} />,
      },
    ],
  },
  {
    title: "Dev Ops Skills",
    skills: [
      {
        name: "Continuous Integration",
        icon: <SiAzuredevops className={skillsClassName} />,
      },
      { name: "Docker", icon: <BiLogoDocker className={skillsClassName} /> },
      { name: "AWS EC2", icon: <BiLogoAws className={skillsClassName} /> },
      { name: "AWS S3", icon: <BiLogoAws className={skillsClassName} /> },
      {
        name: "Github Actions",
        icon: <SiGithubactions className={skillsClassName} />,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className={skillsClassName} />,
      },
      {
        name: "Continuous Delivery",
        icon: <SiAzuredevops className={skillsClassName} />,
      },
    ],
  },
];

export default skills;
