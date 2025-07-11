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
		<section id='projects' className='bg-slate-900'>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto border-x border-slate-800'>
				<MotionDiv
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
					className=''
				>
					<MotionH2 className='text-4xl md:text-5xl font-bold text-white px-2 md:px-6 pt-8'>
						Featured{' '}
						<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
							Projects
						</span>
					</MotionH2>
					<div className='w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 ml-2 md:ml-6'></div>
					<MotionP className='text-slate-400 text-lg mt-6 border-y py-4 px-2 md:px-6 border-slate-800'>
						A showcase of my recent work, demonstrating
						expertise in various technologies and
						business solutions that drive real results.
					</MotionP>
				</MotionDiv>

				<div className='grid md:grid-cols-2 lg:grid-cols-3'>
					{featuredProjects.map((project, index) => {
						// Calculate border classes to avoid double borders
						const getBorderClasses = (idx: number) => {
							const totalItems = featuredProjects.length + 1; // 5 total items (4 projects + 1 "View All")
							let classes = 'border-slate-800';
							
							// Bottom borders - need to use border-b-0 to override
							// lg (3-col): Items 3,4 are in last row → no bottom border
							// md (2-col): Only item 4 is in last row → no bottom border
							// sm (1-col): Only item 4 is last → no bottom border
							const isInLastRowLg = idx >= 3; // Items 3,4 are in last row for lg
							const isInLastRowMd = idx >= 4; // Only item 4 is in last row for md
							const isLastItem = idx === 4; // Only item 4 is last for mobile
							
							// Apply bottom borders with proper overrides
							if (!isLastItem) {
								classes += ' border-b';
								if (isInLastRowMd) classes += ' md:border-b-0';
								if (isInLastRowLg) classes += ' lg:border-b-0';
							}
							
							// Right borders - avoid on right edge for each breakpoint
							const isRightEdgeLg = (idx + 1) % 3 === 0; // Items 2,5 (but we only have items 0-4)
							const isRightEdgeMd = (idx + 1) % 2 === 0; // Items 1,3 (2nd, 4th positions)
							
							// Apply right borders conditionally  
							if (!isRightEdgeMd && idx < totalItems - 1) classes += ' md:border-r';
							if (!isRightEdgeLg && idx < totalItems - 1) classes += ' lg:border-r';
							
							return classes;
						};
						
						return (
							<div
								key={project.id}
								className={`group relative bg-slate-900 overflow-hidden hover:border-slate-700 transition-all duration-300 ${getBorderClasses(index)}`}
							>
								{/* Project Image */}
								<MotionDiv
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.4, delay: index * 0.05 }}
									viewport={{ once: true }}
									className='relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden'
								>
									<div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
									<div className='absolute inset-0 flex items-center justify-center'>
										<HiGlobeAlt className='w-16 h-16 text-slate-600 group-hover:text-fuchsia-500 transition-colors duration-300' />
									</div>
									<div className='absolute top-4 left-4'>
										<span className='px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium'>
											{
												project.category
											}
										</span>
									</div>
								</MotionDiv>

								{/* Project Content */}
								<MotionDiv
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
									viewport={{ once: true }}
									className='p-2 md:p-6'
								>
									<h3 className='text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-300'>
										{project.title}
									</h3>
									<p className='text-slate-400 text-sm leading-relaxed mb-4'>
										{
											project.description
										}
									</p>

									{/* Technologies */}
									<div className='flex flex-wrap gap-2 mb-24'>
										{project.technologies.map(
											(tech, techIndex) => (
												<MotionDiv
													key={tech}
													initial={{ opacity: 0, scale: 0.8 }}
													whileInView={{ opacity: 1, scale: 1 }}
													transition={{ 
														duration: 0.3, 
														delay: index * 0.05 + 0.2 + techIndex * 0.03
													}}
													viewport={{ once: true }}
													className='px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs'
												>
													{tech}
												</MotionDiv>
											),
										)}
									</div>

									{/* Action Buttons */}
									<MotionDiv
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: index * 0.05 + 0.3 }}
										viewport={{ once: true }}
										className='grid grid-cols-2 absolute bottom-8 left-0 w-full border-y border-slate-800'
									>
										<a
											href={
												project.link
											}
											className='flex w-full items-center gap-2 px-4 py-2 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:text-transparent hover:bg-clip-text text-lg font-medium transition-all duration-300'
										>
											<HiArrowTopRightOnSquare className='hover:text-fuchsia-500 text-white' />
											Live Demo
										</a>
										<a
											href={
												project.github
											}
											className='flex w-full items-center gap-2 px-4 py-2 border-l border-slate-800 text-slate-300 text-lg font-medium hover:text-white transition-colors duration-300'
										>
											<HiCodeBracket className='' />
											Code
										</a>
									</MotionDiv>
								</MotionDiv>

								{/* Hover Effect Overlay */}
								<div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
							</div>
						);
					})}

					{/* View All Projects Card */}
					<MotionLink
						href='/portfolio'
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02 }}
						className='group relative bg-slate-900 overflow-hidden border-slate-800 md:border-r lg:border-r hover:border-slate-700 transition-all duration-300'
					>
						{/* Card Background */}
						<div className='relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden'>
							<div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='text-center'>
									<div className='w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
										<HiArrowRight className='w-10 h-10 text-white' />
									</div>
									<div className='px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium inline-block'>
										More Projects
									</div>
								</div>
							</div>
						</div>

						{/* Card Content */}
						<div className='p-6 flex flex-col h-full'>
							<h3 className='text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-300'>
								View All Projects
							</h3>
							<p className='text-slate-400 text-sm leading-relaxed mb-6 flex-grow'>
								Explore my complete portfolio
								showcasing a diverse range of
								projects, from web applications
								to mobile solutions and
								everything in between.
							</p>
						</div>

						{/* Hover Effect Overlay */}
						<div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
					</MotionLink>
				</div>
			</div>
		</section>
	);
} 