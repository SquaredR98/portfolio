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
import Image from 'next/image';
import Link from 'next/link';
import { HiLockClosed, HiShieldCheck } from 'react-icons/hi2';

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

// NDA Graphics Component
function NDAGraphics() {
	return (
		<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700">
			<div className="text-center p-8">
				<div className="flex justify-center mb-4">
					<div className="relative">
						<HiShieldCheck className="w-16 h-16 text-slate-400" />
						<HiLockClosed className="w-8 h-8 text-slate-500 absolute -top-2 -right-2" />
					</div>
				</div>
				<h3 className="text-lg font-semibold text-slate-300 mb-2">
					NDA Protected
				</h3>
				<p className="text-sm text-slate-500 max-w-48">
					Project details are confidential due to non-disclosure agreement
				</p>
				<div className="mt-4 flex justify-center">
					<div className="flex space-x-1">
						<div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse"></div>
						<div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
						<div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function PortfolioPage() {
	return (
		<main className='min-h-screen bg-slate-950 pt-16 relative overflow-hidden'>
			{/* Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"></div>
			<div className="absolute inset-0 bg-gradient-to-tl from-slate-950 via-cyan-950/10 to-slate-950"></div>
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-full blur-3xl"></div>
			
			{/* Content */}
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-x-hidden'>
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
							<div className='lg:w-1/2 w-full'>
								<div className='relative h-64 lg:h-96 rounded-lg overflow-hidden group'>
									{/* Gradient Border Container */}
									<div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-fuchsia-500/20 rounded-lg p-0.5 group-hover:p-1 transition-all duration-300">
										<div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden relative">
											{project.video ? (
												<video
													src={
														project.video
													}
													autoPlay
													loop
													muted
													playsInline
													className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
												/>
											) : project.image ? (
												<Image
													src={
														project.image
													}
													width={800}
													height={600}
													alt={
														project.title
													}
													className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
												/>
											) : (
												<NDAGraphics />
											)}
											
											{/* Hover Overlay */}
											{project.video || project.image ? (
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
													<div className="absolute bottom-4 left-4 right-4">
														<div className="flex items-center gap-2 text-white text-sm">
															{project.video ? (
																<>
																	<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
																	<span>Video Demo</span>
																</>
															) : (
																<>
																	<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
																	<span>Project Screenshot</span>
																</>
															)}
														</div>
													</div>
												</div>
											) : null}
										</div>
									</div>
								</div>
							</div>
							<div className='lg:w-1/2 w-full'>
								<div className='bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-slate-800/50'>
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
													className='px-3 py-1 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-full text-sm flex items-center gap-1 border border-slate-700/50'
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
	);
}
