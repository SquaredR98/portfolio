import { DiPostgresql } from "react-icons/di";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
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
} from "react-icons/si";
import { IconType } from "react-icons";

export interface ISkillsAndExpertise {
  name: string;
  desc: string;
  skills: ISkill[]
}

export interface ISkill {
  Icon: IconType; 
  title: string;
}

export const skillsAndExpertise: ISkillsAndExpertise[] = [
  {
    name: "FRONTEND DEVELOPMENT",
    desc: "LANDING PAGE, API INTEGRATION",
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
      { Icon: SiNextdotjs, title: "NextJS" },
      { Icon: SiNextdotjs, title: "Next Auth" },
      { Icon: SiNextui, title: "Next UI" },
    ],
  },
  {
    name: "FULLSTACK DEVELOPMENT",
    desc: "UI IMPLEMENTATION, API DESIGN AND DEVELOPMENT, API INTEGRATION",
    skills: [
      { Icon: FaNodeJs, title: "NodeJS" },
      { Icon: SiExpress, title: "Express" },
      { Icon: SiMongodb, title: "MongoDB" },
      { Icon: SiNestjs, title: "NestJS" },
      { Icon: SiNextdotjs, title: "NextJS" },
      { Icon: SiNextui, title: "Next UI" },
      { Icon: SiPrisma, title: "Prisma" },
      { Icon: DiPostgresql, title: "Postgres" },
      { Icon: SiAwslambda, title: "Lambda" },
    ],
  },
  {
    name: "DEVOPS",
    desc: "CI/CD, DEPLOYMENT AUTOMATION",
    skills: [
      { Icon: SiGithubactions, title: "Actions" },
      { Icon: SiCircleci, title: "CI/CD" },
      { Icon: SiAmazonaws, title: "AWS" },
    ],
  },
];
