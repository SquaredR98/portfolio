import { Metadata } from 'next';
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
	SiGatsby,
	SiPhp,
	SiMysql,
} from 'react-icons/si';
import Header from '@/components/shared/Header';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Portfolio - Ravi Ranjan',
	description:
		'Explore my professional projects and side projects showcasing my expertise in web development, full-stack applications, and technical consulting.',
};

const projects = [
	{
		title: 'NeoZAP Marketing Website',
		description:
			"Led the development of NeoZAP's marketing website using Next.js, Tailwind CSS, and Framer Motion. Implemented server actions, payment gateway integrations, and CMS integration.",
		longDescription: `Key achievements:
• Implemented server actions for API handling and added a waitlist feature for user onboarding
• Integrated multiple payment gateways (Razorpay, Paytm, Cashfree) into e-commerce flow
• Architected and developed a full-featured content management dashboard
• Integrated Google Analytics, GTAG, and Facebook Pixel for marketing insights
• Integrated WordPress CMS via API for dynamic blog management with SSR and ISR`,
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
		role: 'Lead Developer',
		company: 'Antino Labs',
		period: 'May 2023 - Present',
	},
	{
		title: 'NeoZAP Offers Dashboard',
		description:
			'Developed a comprehensive offers management dashboard with REST APIs and dynamic UIs using ReactJS, PrimeReact, and react-hook-form.',
		longDescription: `Key achievements:
• Led the end-to-end implementation of the Offers Dashboard
• Developed optimized REST APIs and dynamic UIs
• Implemented the Spin the Wheel feature using react-custom-roulette
• Customized library behavior and eliminated visual glitches
• Enhanced user experience through intuitive interface design`,
		image: '/projects/offers-dashboard.webp',
		technologies: [
			{ name: 'React', icon: SiReact },
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		// github: 'https://github.com/SquaredR98/neozap-offers',
		// live: 'https://offers.neozap.in',
		category: 'web',
		role: 'Senior Developer',
		company: 'Antino Labs',
		period: 'September 2024 - Present',
	},
	{
		title: 'Foodaholix',
		description:
			'A restaurant rating app landing page built using React, Gatsby, and Tailwind CSS.',
		longDescription: `Key features:
• Built responsive landing page
• Implemented static blog generation
• Created intuitive user interface
• Optimized for performance
• Integrated with restaurant APIs`,
		image: '/projects/foodaholix.png',
		technologies: [
			{ name: 'React', icon: SiReact },
			{ name: 'Gatsby', icon: SiGatsby },
			{ name: 'Tailwind CSS', icon: SiTailwindcss },
			{ name: 'JavaScript', icon: SiTypescript },
		],
		github: 'https://github.com/SquaredR98/foodaholix',
		live: 'https://foodaholix.com',
		category: 'web',
		role: 'Full Stack Developer',
		company: 'Side Project',
		period: '2023',
	},
	{
		title: 'Salarywala',
		description:
			'Landing page for a HR platform built using Next.js, React, and Tailwind CSS.',
		longDescription: `Key features:
• Designed and implemented landing page
• Created responsive UI components
• Optimized for performance
• Integrated with HR APIs
• Implemented modern design patterns`,
		image: '/projects/salarywala.png',
		technologies: [
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'React', icon: SiReact },
			{ name: 'Tailwind CSS', icon: SiTailwindcss },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		github: 'https://github.com/SquaredR98/salarywala',
		live: 'https://salarywala.com',
		category: 'web',
		role: 'Frontend Developer',
		company: 'Side Project',
		period: '2023',
	},
	{
		title: 'Moodle LMS',
		description:
			'Managed and maintained the LMS by deploying it on Hostinger VPS.',
		longDescription: `Key achievements:
• Deployed and maintained LMS on Hostinger VPS
• Implemented module locking during exams
• Added new features using PHP and MySQL
• Improved platform performance
• Helped acquire new clients`,
		image: '/projects/moodle.png',
		technologies: [
			{ name: 'PHP', icon: SiPhp },
			{ name: 'MySQL', icon: SiMysql },
			{ name: 'Linux', icon: SiNodedotjs },
			{ name: 'Apache', icon: SiNodedotjs },
		],
		category: 'web',
		role: 'Full Stack Developer',
		company: 'Side Project',
		period: '2022',
	},
	{
		title: 'Casha - Digital Payment Platform',
		description:
			'Developed Role-Based Access Control (RBAC) and authentication modules for a Nigerian digital payment platform with a unique community-based (AJO) model.',
		longDescription: `Key achievements:
• Developed comprehensive RBAC system for secure access control
• Implemented authentication modules for the AJO model
• Built feature testing simulator reducing QA time by 80%
• Resolved critical production-blocking bugs
• Ensured platform security and compliance`,
		image: '/projects/casha.webp',
		technologies: [
			{ name: 'NestJS', icon: SiNestjs },
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'Prisma', icon: SiPrisma },
		],
		category: 'web',
		role: 'Associate Developer',
		company: 'Antino Labs',
		period: 'April 2022 - May 2023',
	},
	{
		title: 'Travel Hangouts',
		description:
			'Led backend architecture for a travel planner platform, implementing scalable APIs and DevOps practices for CI/CD and monitoring.',
		longDescription: `Key achievements:
• Led backend architecture and team collaboration
• Implemented scalable API development
• Set up DevOps practices for CI/CD
• Implemented monitoring and logging
• Ensured platform reliability and performance`,
		image: '/projects/travel-hangouts.webp',
		technologies: [
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'Express', icon: SiExpress },
			{ name: 'MongoDB', icon: SiMongodb },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		live: 'https://travelhangouts.com',
		category: 'web',
		role: 'Backend Lead',
		company: 'Antino Labs',
		period: 'April 2022 - May 2023',
	},
	{
		title: 'Jify - Earned Wage Access',
		description:
			'Integrated user onboarding and KYC workflows using Serverless Framework, AWS Lambda, and DynamoDB, ensuring scalability and compliance.',
		longDescription: `Key achievements:
• Integrated user onboarding workflows
• Implemented KYC verification system
• Set up serverless architecture
• Ensured compliance with regulations
• Optimized for scalability`,
		image: '/projects/jify.webp',
		technologies: [
			{ name: 'Serverless', icon: SiNodedotjs },
			{ name: 'AWS Lambda', icon: SiNodedotjs },
			{ name: 'DynamoDB', icon: SiMongodb },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		live: 'https://jify.in',
		category: 'web',
		role: 'Backend Developer',
		company: 'Antino Labs',
		period: 'April 2022 - May 2023',
	},
	{
		title: 'Top Faculty',
		description:
			'Developed core backend features for a LinkedIn-like social media app for educational institutions, including payment processing and notification systems.',
		longDescription: `Key achievements:
• Developed payment processing system
• Implemented notification systems
• Built scalable APIs using NestJS
• Integrated with PostgreSQL and Prisma
• Ensured platform reliability`,
		image: '/projects/top-faculty.webp',
		technologies: [
			{ name: 'NestJS', icon: SiNestjs },
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'Prisma', icon: SiPrisma },
			{ name: 'TypeScript', icon: SiTypescript },
		],
		category: 'web',
		role: 'Backend Developer',
		company: 'Antino Labs',
		period: 'April 2022 - May 2023',
	},
];

export default function PortfolioPage() {
	return (
		<>
			<Header />
			<main className='min-h-screen bg-slate-950'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
					<div className='text-center mb-16'>
						<h1 className='text-5xl font-bold text-white mb-4'>
							My Portfolio
						</h1>
						<p className='text-slate-400 max-w-2xl mx-auto'>
							Explore my professional journey
							through these projects. Each one
							represents a unique challenge and
							solution in web development and
							technical consulting.
						</p>
					</div>

					<div className='space-y-20'>
						{projects.map((project, index) => (
							<div
								key={project.title}
								className={`flex flex-col ${
									index % 2 === 0
										? 'lg:flex-row'
										: 'lg:flex-row-reverse'
								} gap-8 items-start`}
							>
								<div className='lg:w-1/2'>
									<div className='relative h-64 lg:h-96 rounded-lg overflow-hidden'>
										{project.video ? (
											<video
												src={
													project.video
												}
												autoPlay
												loop
												muted
												playsInline
												className='w-full h-full object-contain'
											/>
										) : (
											<Image
												src={
													project.image
												}
												width={800}
												height={600}
												alt={
													project.title
												}
												className='w-full h-full object-contain'
											/>
										)}
									</div>
								</div>
								<div className='lg:w-1/2'>
									<div className='bg-slate-900 p-8 rounded-lg'>
										<div className='flex items-center gap-4 mb-4'>
											<h2 className='text-2xl font-bold text-white'>
												{
													project.title
												}
											</h2>
											<span className='px-3 py-1 bg-blue-600 text-white rounded-full text-sm'>
												{
													project.role
												}
											</span>
										</div>
										<div className='text-slate-400 mb-4'>
											<p className='mb-2'>
												{
													project.company
												}{' '}
												•{' '}
												{
													project.period
												}
											</p>
											<p className='mb-4'>
												{
													project.description
												}
											</p>
											<div className='prose prose-invert'>
												<pre className='whitespace-pre-wrap text-sm'>
													{
														project.longDescription
													}
												</pre>
											</div>
										</div>
										<div className='flex flex-wrap gap-2 mb-6'>
											{project.technologies.map(
												(
													tech,
												) => (
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
												<Link
													href={
														project.github
													}
													target='_blank'
													rel='noopener noreferrer'
													className='text-slate-400 hover:text-white transition-colors'
												>
													<FaGithub className='w-6 h-6' />
												</Link>
											)}
											{project.live && (
												<Link
													href={
														project.live
													}
													target='_blank'
													rel='noopener noreferrer'
													className='text-slate-400 hover:text-white transition-colors'
												>
													<FaExternalLinkAlt className='w-6 h-6' />
												</Link>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
