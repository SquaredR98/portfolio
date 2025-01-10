import { BsFiletypeCss, BsFiletypeHtml, BsFiletypeScss } from 'react-icons/bs';
import { DiPostgresql } from 'react-icons/di';
import { FaReact, FaSass } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';
import { RiBracesLine } from 'react-icons/ri';
import {
	SiJavascript,
	SiTailwindcss,
	SiRedux,
	SiGatsby,
	SiMui,
	SiNextui,
	SiAwslambda,
	SiExpress,
	SiFirebase,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiPrisma,
	SiServerless,
} from 'react-icons/si';

const services = [
	{
		title: 'Front End Development',
		description:
			'Frontend development focuses on creating user interfaces and experiences for websites and web apps. This includes responsive design for mobile and desktop, UI/UX design for intuitive user journeys, and SPA (Single Page Application) development with frameworks like React or Angular for seamless experiences. HTML/CSS development brings designs to life, while JavaScript adds interactivity and functionality. Conversion optimization ensures pages are tailored to maximize leads and sales.',
		skills: [
			{ Icon: BsFiletypeHtml, title: 'HTML' },
			{ Icon: BsFiletypeCss, title: 'CSS' },
			{ Icon: SiJavascript, title: 'JavsScript' },
			{ Icon: FaReact, title: 'React' },
			{ Icon: SiTailwindcss, title: 'Tailwind CSS' },
			{ Icon: SiRedux, title: 'Redux' },
			{ Icon: SiGatsby, title: 'Gatsby' },
			{ Icon: SiMui, title: 'Material UI' },
			{ Icon: BsFiletypeScss, title: 'SCSS' },
			{ Icon: FaSass, title: 'SASS' },
			{ Icon: SiNextui, title: 'Next UI' },
		],
	},
	{
		title: 'Full Stack Development',
		description:
			'Backend and full-stack development provide end-to-end solutions for web applications. Services include API development for data exchange, secure database design (MySQL, MongoDB), and server-side logic using Node.js, PHP, or Python. Secure authentication (OAuth, JWT) is implemented, with scalable architectures using microservices or serverless functions. Full-stack services cover custom web app creation, e-commerce platforms with integrated payments, and real-time features like chat. Progressive Web Apps (PWAs) are also developed for responsive, mobile-friendly experiences using MEAN/MERN stacks (MongoDB, Express, Angular/React, Node.js).',
		skills: [
			{ Icon: FaNodeJs, title: 'NodeJS' },
			{ Icon: SiExpress, title: 'Express' },
			{ Icon: SiMongodb, title: 'MongoDB' },
			{ Icon: SiNestjs, title: 'NestJS' },
			{ Icon: SiNextdotjs, title: 'NextJS' },
			{ Icon: SiPrisma, title: 'Prisma' },
			{ Icon: SiServerless, title: 'Serverless' },
			{ Icon: RiBracesLine, title: 'TypeORM' },
			{ Icon: DiPostgresql, title: 'Postgres' },
			{ Icon: SiAwslambda, title: 'Lambda' },
			{ Icon: SiFirebase, title: 'Firebase' },
		],
	},
];
