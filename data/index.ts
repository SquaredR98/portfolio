import { DiPostgresql } from "react-icons/di";
import {
  FaReact,
  FaSass,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaBitbucket,
  FaLinux,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeScss } from "react-icons/bs";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiGatsby,
  SiMui,
  SiNextdotjs,
  SiNextui,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiPrisma,
  SiAwslambda,
  SiGithubactions,
  SiCircleci,
  SiAmazonaws,
  SiCplusplus,
  SiThealgorithms,
  SiNginx,
  SiJenkins,
  SiAmazonec2,
  SiServerless,
  SiMysql,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { IconType } from "react-icons";
import { FcAndroidOs, FcGoogle } from 'react-icons/fc';
import { RiBracesLine } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { GrDatabase } from 'react-icons/gr';

export interface ISkillsAndExpertise {
  name: string;
  desc: string;
  skills: ISkill[];
}

export interface ISkill {
  Icon: IconType;
  title: string;
  color?: string;
}

export const skillsAndExpertise: ISkillsAndExpertise[] = [
  {
    name: "Core Skills",
    desc: "DSA, VCS, OS",
    skills: [
      { Icon: SiCplusplus, title: "C/C++", },
      { Icon: IoLogoJavascript, title: "JavaScript", },
      { Icon: SiTypescript, title: "TypeScript", },
      { Icon: FaGit, title: "Git" },
      { Icon: FaGithub, title: "Github" },
      { Icon: FaBitbucket, title: "Bitbucket" },
      { Icon: SiThealgorithms, title: "Algorithms" },
      { Icon: GrDatabase, title: "Data Str." },
      { Icon: FaLinux, title: "Linux" },
      { Icon: FcGoogle, title: "Googling" },
      { Icon: RiBracesLine, title: "OOPS" },
    ],
  },
  {
    name: "Frontend Development",
    desc: "LANDING PAGE, API INTEGRATION, FIGMA TO REACT",
    skills: [
      { Icon: BsFiletypeHtml, title: "HTML" },
      { Icon: BsFiletypeCss, title: "CSS" },
      { Icon: SiJavascript, title: "JavsScript" },
      { Icon: FaReact, title: "React" },
      { Icon: SiTailwindcss, title: "Tailwind CSS" },
      { Icon: SiRedux, title: "Redux" },
      { Icon: SiGatsby, title: "Gatsby" },
      { Icon: SiMui, title: "Material UI" },
      { Icon: BsFiletypeScss, title: "SCSS" },
      { Icon: FaSass, title: "SASS" },
      { Icon: SiNextui, title: "Next UI" },
    ],
  },
  {
    name: "Fullstack Development",
    desc: "UI IMPLEMENTATION, API DESIGN AND DEVELOPMENT, API INTEGRATION",
    skills: [
      { Icon: FaNodeJs, title: "NodeJS" },
      { Icon: SiExpress, title: "Express" },
      { Icon: SiMongodb, title: "MongoDB" },
      { Icon: SiNestjs, title: "NestJS" },
      { Icon: SiNextdotjs, title: "NextJS" },
      { Icon: SiPrisma, title: "Prisma" },
      { Icon: SiServerless, title: "Serverless" },
      { Icon: RiBracesLine, title: "TypeORM" },
      { Icon: DiPostgresql, title: "Postgres" },
      { Icon: SiAwslambda, title: "Lambda" },
      { Icon: SiFirebase, title: "Firebase" },
    ],
  },
  {
    name: "DevOps Engineer",
    desc: "CI/CD, DEPLOYMENT AUTOMATION",
    skills: [
      { Icon: SiJenkins, title: "Jenkins" },
      { Icon: FaDocker, title: "Docker" },
      { Icon: SiGithubactions, title: "Actions" },
      { Icon: SiAmazonec2, title: "AWS EC2" },
      { Icon: SiCircleci, title: "CI/CD" },
      { Icon: SiNginx, title: "Nginx" },
      { Icon: SiAmazonaws, title: "AWS S3" },
    ],
  },
];

export interface IExperience {
  company: string;
  duration: string;
  designation: string;
  skills: ISkill[];
  responsibilities: string[];
  image: string;
}

export const experiences: IExperience[] = [
  {
    company: "Antino Labs Pvt. Ltd.",
    duration: "April, 2022 - Current",
    designation: "Software Developer",
    skills: [
      { Icon: FaNodeJs, title: "NodeJS" },
      { Icon: SiExpress, title: "Express" },
      { Icon: SiMongodb, title: "MongoDB" },
      { Icon: SiNestjs, title: "NestJS" },
      { Icon: FaDocker, title: "Docker" },
      { Icon: SiPrisma, title: "Prisma" },
      { Icon: DiPostgresql, title: "Postgres" },
      { Icon: SiAwslambda, title: "Lambda" },
      { Icon: SiNginx, title: "Nginx" },
      { Icon: SiJenkins, title: "Jenkins" },
      { Icon: SiServerless, title: "Serverless" },
      { Icon: RiBracesLine, title: "TypeORM" },
    ],
    responsibilities: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including INeuron, Devlabs Alliance, Casha, Travel Hangouts, Top Faculty, and more",
      "Work alongside creative people to lead research, development and architecture of technical solutions to fulfill business requirements.",
      "Collaborate with designers, project managers and other engineers to transform creative concepts into production realities for clients and stakeholders.",
      "Lead multiple projects and provide training and mentorship to the new joinees in order to help them grow and learn quickly."
    ],
    image: ""
  },
  {
    company: "Startoon Labs",
    duration: "April, 2021 - March, 2022",
    designation: "Software Developer",
    skills: [
      { Icon: FaNodeJs, title: "NodeJS" },
      { Icon: SiExpress, title: "Express" },
      { Icon: SiMongodb, title: "MongoDB" },
      { Icon: SiMongodb, title: "Mongoose" },
      { Icon: SiMysql, title: "MySQL" },
      { Icon: SiAmazonec2, title: "AWS EC2" },
      { Icon: FcAndroidOs, title: "Android" },
    ],
    responsibilities: [
      "Developed a product management and inventory management system for the internal processes of the company using NodeJS, MongoDB, Express, and EJS for the templating of the Frontend UI.",
      "Developed an invoicing tool to easily generate invoices for the products sold reducing the effort made on invoicing manually by 60% using HTML, JS, and Excel parsing.",
      "As a sole engineer in the team I was responsible for the complete software lifecycle from requirement gathering to deployment of the new product features.",
      "Regular maintenance of the company website and feature updates using php, javascript, mysql.",
      "Developed a dashboard for the company which is being used for the product usage and sales analysis using NodeJS, MongoDB, Aggregation and EJS for the templating of the frontend."
    ],
    image: ""
  },
];
