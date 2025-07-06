'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
	HiCodeBracket,
	HiCog,
	HiChartBar,
	HiCreditCard,
	HiCloud,
	HiUserGroup,
} from 'react-icons/hi2';
import { MotionButton, MotionDiv } from '@/components/shared/MotionTags';
import { FaHandPointRight } from 'react-icons/fa';

const services = [
	{
		icon: HiCodeBracket,
		title: 'Full Stack Development',
		description:
			'End-to-end web application development using React, Next.js, Node.js, and modern technologies. From concept to deployment with scalable architecture.',
		features: [
			'React & Next.js Applications',
			'RESTful API Development',
			'Database Design & Optimization',
			'Performance Optimization',
		],
		color: 'from-fuchsia-500 to-purple-600',
	},
	{
		icon: HiCreditCard,
		title: 'E-commerce & Payment Solutions',
		description:
			'Complete e-commerce platform development with integrated payment gateways including Razorpay, Paytm, Cashfree, and Stripe.',
		features: [
			'Payment Gateway Integration',
			'Shopping Cart & Checkout',
			'Order Management',
			'Inventory Systems',
		],
		color: 'from-green-500 to-emerald-600',
	},
	{
		icon: HiCog,
		title: 'Content Management Systems',
		description:
			'Custom CMS development and WordPress integration with advanced features for content publishing and management.',
		features: [
			'Custom CMS Development',
			'WordPress API Integration',
			'Content Publishing Workflows',
			'Admin Dashboard Design',
		],
		color: 'from-blue-500 to-cyan-600',
	},
	{
		icon: HiChartBar,
		title: 'Analytics & Marketing Integration',
		description:
			'Implementation of analytics tools and marketing platforms including Google Analytics, Facebook Pixel, and custom tracking solutions.',
		features: [
			'Google Analytics Setup',
			'Facebook Pixel Integration',
			'Custom Event Tracking',
			'Funnel Analysis',
		],
		color: 'from-orange-500 to-red-600',
	},
	{
		icon: HiCloud,
		title: 'DevOps & Cloud Solutions',
		description:
			'Cloud infrastructure setup, CI/CD pipelines, and deployment automation using AWS, Docker, and modern DevOps practices.',
		features: [
			'AWS Infrastructure',
			'Docker Containerization',
			'CI/CD Pipelines',
			'Performance Monitoring',
		],
		color: 'from-indigo-500 to-purple-600',
	},
	{
		icon: HiUserGroup,
		title: 'Technical Consulting & Mentoring',
		description:
			'Technical leadership, team mentoring, and strategic consulting for startups and growing companies.',
		features: [
			'Technical Architecture Review',
			'Team Mentoring',
			'Code Reviews',
			'Best Practices Implementation',
		],
		color: 'from-teal-500 to-cyan-600',
	},
];

export default function ServicesSection() {
	return (
		<section id='services' className=' bg-slate-950'>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto border-x border-slate-800'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className=' pt-8'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-4 px-2 md:px-6'>
						My{' '}
						<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
							Services
						</span>
					</h2>
					<div className='w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 ml-2 md:ml-6'></div>
					<p className='text-slate-400 text-lg mt-6 mx-auto border-y py-4 px-2 md:px-6 border-slate-800'>
						Comprehensive solutions that combine
						technical expertise with strategic business
						thinking to deliver exceptional results for
						your organization.
					</p>
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3'>
					{services.map((service, index) => {
						// Calculate border classes to avoid double borders
						const getBorderClasses = (idx: number) => {
							const totalServices = services.length;
							let classes = 'border-slate-800';

							// Bottom borders - avoid on last row for each breakpoint
							const isInLastRowLg =
								idx >=
								Math.floor(
									(totalServices - 1) / 3,
								) *
									3; // Last row in 3-col
							const isInLastRowMd =
								idx >=
								Math.floor(
									(totalServices - 1) / 2,
								) *
									2; // Last row in 2-col
							const isLastItem =
								idx === totalServices - 1; // Last item in 1-col

							// Apply bottom borders conditionally
							if (!isLastItem)
								classes += ' border-b';
							if (!isInLastRowMd)
								classes += ' md:border-b';
							if (!isInLastRowLg)
								classes += ' lg:border-b';

							// Right borders - avoid on right edge for each breakpoint
							const isRightEdgeLg =
								(idx + 1) % 3 === 0; // 3rd, 6th items
							const isRightEdgeMd =
								(idx + 1) % 2 === 0; // 2nd, 4th, 6th items

							// Apply right borders conditionally
							if (
								!isRightEdgeMd &&
								idx < totalServices - 1
							)
								classes += ' md:border-r';
							if (
								!isRightEdgeLg &&
								idx < totalServices - 1
							)
								classes += ' lg:border-r';

							return classes;
						};

						return (
							<div
								key={service.title}
								className={`${getBorderClasses(index)}`}
							>
								<motion.div
									initial={{
										opacity: 0,
										scale: 0,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
									}}
									transition={{
										duration: 0.6,
										delay: index * 0.1,
									}}
									viewport={{ once: true }}
									className={`group p-2 py-6 md:p-6 bg-slate-800/50 transition-all duration-300 hover:bg-slate-800/70 h-full`}
								>
									{/* Icon */}
									<div
										className={`p-4 bg-gradient-to-r ${service.color} mb-6 w-fit `}
									>
										<service.icon className='w-8 h-8 text-white group-hover:scale-150 transition-transform duration-300' />
									</div>

									{/* Content */}
									<div className='space-y-4'>
										<h3 className='text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors'>
											{
												service.title
											}
										</h3>
										<p className='text-slate-300 leading-relaxed'>
											{
												service.description
											}
										</p>

										{/* Features */}
										<div>
											<h4 className='text-white font-semibold mb-3'>
												Key
												Features:
											</h4>
											<ul className='space-y-2'>
												{service.features.map(
													(
														feature,
														idx,
													) => (
														<li
															key={
																idx
															}
															className='text-slate-300 flex items-start gap-3'
														>
															<div className='w-2 h-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mt-2 flex-shrink-0'></div>
															<span className='text-sm'>
																{
																	feature
																}
															</span>
														</li>
													),
												)}
											</ul>
										</div>
									</div>
								</motion.div>
							</div>
						);
					})}
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					viewport={{ once: true }}
					className='text-center'
				>
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<MotionDiv className='p-8 border-slate-800'>
							<h3 className='text-2xl font-bold text-white mb-4'>
								Need a Custom Solution?
							</h3>
							<p className='text-slate-400 max-w-2xl mx-auto'>
								Don&apos;t see exactly what you
								need? I specialize in creating
								custom solutions tailored to
								your specific business
								requirements and goals.
							</p>
						</MotionDiv>
						<MotionButton className='px-8 py-3 flex items-center gap-2 justify-center bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 text-white text-xl font-semibold cursor-pointer'>
							<FaHandPointRight className='animate-pulse' />
							Let&apos;s Discuss Your Project
						</MotionButton>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
