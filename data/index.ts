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
  FaLinkedinIn,
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
import { FaXTwitter } from 'react-icons/fa6'

export interface ISkillsAndExpertise {
  name: string;
  desc: string;
  skills: ISkill[];
}

export interface ISkill {
  Icon: IconType;
  title: string;
  textColor?: string;
}

export const skillsAndExpertise: ISkillsAndExpertise[] = [
  {
    name: "Core Skills",
    desc: "DSA, VCS, OS",
    skills: [
      { Icon: SiCplusplus, title: "C/C++", textColor: 'text-blue-500' },
      { Icon: IoLogoJavascript, title: "JavaScript", textColor: 'text-yellow-500' },
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

export interface IProjects {
  title: string;
  website: string;
  about: string[];
  techsUsed: string[];
  github?: string;
  image?: string;
  logo?: string;
}

export const projectDetails: IProjects[] = [
  {
    title: 'Foodaholix Landing Page',
    website: 'www.foodaholix.com',
    logo: 'https://foodaholix.com/static/header-logo-26b922ef5c7cfe80b7b01b82dd223f11.webp',
    about: [
      "A static landing page with the blog without CMS. Logical rendering for static blog layout creation has been used",
      "I worked on translating the legacy HTML & CSS code to the updated React and Gatsby.",
      "Initially the styling was done with Styled Components but later on translated to tailwindCSS by me for better UI.",
      "The project has been developed using the following technologies"
    ],
    techsUsed: [
      "ReactJS", "GatsbyJS", "Styled Components", "TailwindCSS",
    ],
    image: "/foodaholix.png"
  },
  {
    title: 'Personal Portfolio',
    website: 'www.ravi-ranjan.in',
    logo: 'https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png',
    about: [
      "My personal portfolio website developed using React and NextJS",
      "To showcase my skills, experience and expertise with contact form for prospective clients to get connected.",
      "Next UI has been used to create styling and framer motion for creating animations",
      "The project has been developed using the following technologies"
    ],
    techsUsed: [
      "ReactJS", "NextJS", "Tailwind CSS", "Next UI"
    ],
    image: "/portfolio.png",
    github: "https://github.com/SquaredR98/portfolio"
  }
]

export interface ISocialLinks {
  Icon: IconType,
  link: string
}

export const socialLinks: ISocialLinks[] = [
  {
    Icon: FaGithub,
    link: 'https://github.com/SquaredR98'
  },
  {
    Icon: FaLinkedinIn,
    link: 'https://www.linkedin.com/in/raviranjan98'
  },
  {
    Icon: FaXTwitter,
    link: ''
  }
]