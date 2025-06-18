import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
	SiNextdotjs,
	SiReact,
	SiNestjs,
	SiNodedotjs,
	SiMongodb,
	SiPostgresql,
	SiTailwindcss,
	SiTypescript,
	SiExpress,
	SiPrisma,
	SiRedux,
} from 'react-icons/si';

const projects = [
	{
		title: 'NeoZAP Marketing Website',
		description:
			"Led the development of NeoZAP's marketing website using Next.js, Tailwind CSS, and Framer Motion. Implemented server actions, payment gateway integrations, and CMS integration.",
		image: '/projects/neozap.webp',
		video: '/projects/neozap.mkv',
		technologies: [
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'React', icon: SiReact },
			{ name: 'Tailwind CSS', icon: SiTailwindcss },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'Redux', icon: SiRedux },
		],
		github: 'https://github.com/SquaredR98/neozap',
		live: 'https://neozap.in',
		category: 'web',
	},
	{
		title: 'NeoZAP Offers Dashboard',
		description:
			'Developed a comprehensive offers management dashboard with REST APIs and dynamic UIs using ReactJS, PrimeReact, and react-hook-form.',
		image: '/projects/offers-dashboard.webp',
		technologies: [
			{ name: 'React', icon: SiReact },
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		github: 'https://github.com/SquaredR98/neozap-offers',
		live: 'https://offers.neozap.in',
		category: 'web',
	},
	{
		title: 'Casha - Digital Payment Platform',
		description:
			'Developed Role-Based Access Control (RBAC) and authentication modules for a Nigerian digital payment platform with a unique community-based (AJO) model.',
		image: '/projects/casha.webp',
		technologies: [
			{ name: 'NestJS', icon: SiNestjs },
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'Prisma', icon: SiPrisma },
		],
		github: 'https://github.com/SquaredR98/casha',
		live: 'https://casha.ng',
		category: 'web',
	},
	{
		title: 'Travel Hangouts',
		description:
			'Led backend architecture for a travel planner platform, implementing scalable APIs and DevOps practices for CI/CD and monitoring.',
		image: '/projects/travel-hangouts.webp',
		technologies: [
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'Express', icon: SiExpress },
			{ name: 'MongoDB', icon: SiMongodb },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		github: 'https://github.com/SquaredR98/travel-hangouts',
		live: 'https://travelhangouts.com',
		category: 'web',
	},
	{
		title: 'Jify - Earned Wage Access',
		description:
			'Integrated user onboarding and KYC workflows using Serverless Framework, AWS Lambda, and DynamoDB, ensuring scalability and compliance.',
		image: '/projects/jify.webp',
		technologies: [
			{ name: 'Serverless', icon: SiNodedotjs },
			{ name: 'AWS Lambda', icon: SiNodedotjs },
			{ name: 'DynamoDB', icon: SiMongodb },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		github: 'https://github.com/SquaredR98/jify',
		live: 'https://jify.in',
		category: 'web',
	},
	{
		title: 'Top Faculty',
		description:
			'Developed core backend features for a LinkedIn-like social media app for educational institutions, including payment processing and notification systems.',
		image: '/projects/top-faculty.webp',
		technologies: [
			{ name: 'NestJS', icon: SiNestjs },
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'Prisma', icon: SiPrisma },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		github: 'https://github.com/SquaredR98/top-faculty',
		live: 'https://topfaculty.com',
		category: 'web',
	},
];

const categories = [
	{ id: 'all', name: 'All Projects' },
	{ id: 'web', name: 'Web Development' },
	{ id: 'mobile', name: 'Mobile Apps' },
	{ id: 'design', name: 'UI/UX Design' },
];

export default function PortfolioSection() {
	const [activeCategory, setActiveCategory] = useState('all');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setHoveredProject] = useState<number | null>(null);

	const filteredProjects =
		activeCategory === 'all'
			? projects
			: projects.filter(
					(project) => project.category === activeCategory,
				);

	return (
		<section id='portfolio' className='py-20 bg-slate-950'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-4xl font-bold text-white mb-4'>
						My Portfolio
					</h2>
					<p className='text-slate-400 max-w-2xl mx-auto'>
						Explore my recent projects and see how I&apos;ve
						helped businesses achieve their goals
						through innovative solutions.
					</p>
				</motion.div>

				<div className='flex justify-center gap-4 mb-12 flex-wrap'>
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() =>
								setActiveCategory(category.id)
							}
							className={`px-6 py-2 rounded-full transition-all duration-300 ${
								activeCategory === category.id
									? 'bg-blue-600 text-white'
									: 'bg-slate-800 text-slate-400 hover:bg-slate-700'
							}`}
						>
							{category.name}
						</button>
					))}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProjects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							viewport={{ once: true }}
							className='bg-slate-900 rounded-lg overflow-hidden group'
							onMouseEnter={() =>
								setHoveredProject(index)
							}
							onMouseLeave={() =>
								setHoveredProject(null)
							}
						>
							<div className='relative h-48 overflow-hidden'>
								{project.video ? (
									<video
										src={project.video}
										autoPlay
										loop
										muted
										playsInline
										className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
									/>
								) : (
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
									/>
								)}
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-white mb-2'>
									{project.title}
								</h3>
								<p className='text-slate-400 mb-4'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.technologies.map(
										(tech) => (
											<span
												key={
													tech.name
												}
												className='px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm flex items-center gap-1'
											>
												<tech.icon className='w-4 h-4' />
												{
													tech.name
												}
											</span>
										),
									)}
								</div>
								<div className='flex gap-4'>
									{project.github && (
										<a
											href={
												project.github
											}
											target='_blank'
											rel='noopener noreferrer'
											className='text-slate-400 hover:text-white transition-colors'
										>
											<FaGithub className='w-5 h-5' />
										</a>
									)}
									{project.live && (
										<a
											href={
												project.live
											}
											target='_blank'
											rel='noopener noreferrer'
											className='text-slate-400 hover:text-white transition-colors'
										>
											<FaExternalLinkAlt className='w-5 h-5' />
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
