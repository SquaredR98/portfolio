'use client';

import React from 'react';
import { HiArrowTopRightOnSquare, HiCodeBracket, HiGlobeAlt, HiArrowRight } from 'react-icons/hi2';
import { 
	MotionDiv, 
	MotionH2, 
	MotionLink, 
	MotionP 
} from '../../shared/MotionTags';

const featuredProjects = [
	{
		id: 1,
		title: 'NeoZAP Marketing Website',
		description: 'Led the development of NeoZAP\'s marketing website (NeoFinity product) using Next.js, Tailwind CSS, Framer Motion, and RTK. Replicated Figma designs with pixel precision and integrated server actions for API handling. Added waitlist feature for user onboarding and integrated WordPress CMS via API for dynamic blog management.',
		technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'RTK', 'Server Actions', 'WordPress API'],
		image: '/images/projects/neozap.jpg',
		link: 'https://neofinity.in/neozap',
		github: '#',
		category: 'Marketing Website'
	},
	{
		id: 2,
		title: 'Content Management Dashboard',
		description: 'Architected and developed a full-featured content management dashboard with form logic using react-hook-form, custom UI components, and REST API development using Node.js and PostgreSQL. Designed admin panel for marketing team to manage campaigns without developer dependency.',
		technologies: ['Node.js', 'PostgreSQL', 'React', 'react-hook-form', 'REST API'],
		image: '/images/projects/cms.jpg',
		link: '#',
		github: '#',
		category: 'CMS'
	},
	{
		id: 3,
		title: 'Payment Gateway Integration',
		description: 'Integrated multiple payment gateways (Razorpay, Paytm, Cashfree) into NeoZAP\'s e-commerce flow, enabling smooth checkout and transaction handling with comprehensive error handling and transaction management.',
		technologies: ['Razorpay', 'Paytm', 'Cashfree', 'Node.js', 'React'],
		image: '/images/projects/payments.jpg',
		link: 'https://neofinity.in/neozap',
		github: '#',
		category: 'E-commerce'
	},
	{
		id: 4,
		title: 'Offers Dashboard',
		description: 'Led the end-to-end implementation of the Offers Dashboard, developing optimized REST APIs and dynamic UIs using ReactJS, PrimeReact, and react-hook-form. Built Rewards UI in Next.js for mobile app with SSR and ISR.',
		technologies: ['ReactJS', 'PrimeReact', 'react-hook-form', 'REST API', 'Next.js', 'SSR'],
		image: '/images/projects/dashboard.jpg',
		link: '#',
		github: '#',
		category: 'Dashboard'
	}
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-20 bg-slate-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<MotionDiv
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<MotionH2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Featured{' '}
						<span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
							Projects
						</span>
					</MotionH2>
					<div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
					<MotionP className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
						A showcase of my recent work, demonstrating expertise in various technologies 
						and business solutions that drive real results.
					</MotionP>
				</MotionDiv>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredProjects.map((project, index) => (
						<MotionDiv
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/10"
						>
							{/* Project Image */}
							<div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<HiGlobeAlt className="w-16 h-16 text-slate-600 group-hover:text-fuchsia-500 transition-colors duration-300" />
								</div>
								<div className="absolute top-4 left-4">
									<span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium">
										{project.category}
									</span>
								</div>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-300">
									{project.title}
								</h3>
								<p className="text-slate-400 text-sm leading-relaxed mb-4">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3">
									<a
										href={project.link}
										className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300"
									>
										<HiArrowTopRightOnSquare className="w-4 h-4" />
										Live Demo
									</a>
									<a
										href={project.github}
										className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm font-medium hover:border-slate-500 hover:text-white transition-colors duration-300"
									>
										<HiCodeBracket className="w-4 h-4" />
										Code
									</a>
								</div>
							</div>

							{/* Hover Effect Overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						</MotionDiv>
					))}

					{/* View All Projects Card */}
					<MotionLink
						href='/portfolio'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						viewport={{ once: true }}
						className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/10"
					>
						{/* Card Background */}
						<div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="text-center">
									<div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
										<HiArrowRight className="w-10 h-10 text-white" />
									</div>
									<div className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium inline-block">
										More Projects
									</div>
								</div>
							</div>
						</div>

						{/* Card Content */}
						<div className="p-6 flex flex-col h-full">
							<h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-300">
								View All Projects
							</h3>
							<p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
								Explore my complete portfolio showcasing a diverse range of projects, from web applications to mobile solutions and everything in between.
							</p>

							{/* CTA Button */}
							{/* <Link
								href="/portfolio"
								className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300 group-hover:scale-105"
							>
								Explore Portfolio
								<HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
							</Link> */}
						</div>

						{/* Hover Effect Overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
					</MotionLink>
				</div>
			</div>
		</section>
	);
} 