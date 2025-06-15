'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
	HiCodeBracket, 
	HiCog, 
	HiChartBar, 
	HiCreditCard,
	HiCloud,
	HiUserGroup
} from 'react-icons/hi2';

const services = [
	{
		icon: HiCodeBracket,
		title: 'Full Stack Development',
		description: 'End-to-end web application development using React, Next.js, Node.js, and modern technologies. From concept to deployment with scalable architecture.',
		features: ['React & Next.js Applications', 'RESTful API Development', 'Database Design & Optimization', 'Performance Optimization'],
		color: 'from-fuchsia-500 to-purple-600'
	},
	{
		icon: HiCreditCard,
		title: 'E-commerce & Payment Solutions',
		description: 'Complete e-commerce platform development with integrated payment gateways including Razorpay, Paytm, Cashfree, and Stripe.',
		features: ['Payment Gateway Integration', 'Shopping Cart & Checkout', 'Order Management', 'Inventory Systems'],
		color: 'from-green-500 to-emerald-600'
	},
	{
		icon: HiCog,
		title: 'Content Management Systems',
		description: 'Custom CMS development and WordPress integration with advanced features for content publishing and management.',
		features: ['Custom CMS Development', 'WordPress API Integration', 'Content Publishing Workflows', 'Admin Dashboard Design'],
		color: 'from-blue-500 to-cyan-600'
	},
	{
		icon: HiChartBar,
		title: 'Analytics & Marketing Integration',
		description: 'Implementation of analytics tools and marketing platforms including Google Analytics, Facebook Pixel, and custom tracking solutions.',
		features: ['Google Analytics Setup', 'Facebook Pixel Integration', 'Custom Event Tracking', 'Funnel Analysis'],
		color: 'from-orange-500 to-red-600'
	},
	{
		icon: HiCloud,
		title: 'DevOps & Cloud Solutions',
		description: 'Cloud infrastructure setup, CI/CD pipelines, and deployment automation using AWS, Docker, and modern DevOps practices.',
		features: ['AWS Infrastructure', 'Docker Containerization', 'CI/CD Pipelines', 'Performance Monitoring'],
		color: 'from-indigo-500 to-purple-600'
	},
	{
		icon: HiUserGroup,
		title: 'Technical Consulting & Mentoring',
		description: 'Technical leadership, team mentoring, and strategic consulting for startups and growing companies.',
		features: ['Technical Architecture Review', 'Team Mentoring', 'Code Reviews', 'Best Practices Implementation'],
		color: 'from-teal-500 to-cyan-600'
	}
];

export default function ServicesSection() {
	return (
		<section id="services" className="py-20 bg-slate-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						My{' '}
						<span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
							Services
						</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto"></div>
					<p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
						Comprehensive solutions that combine technical expertise with strategic business thinking 
						to deliver exceptional results for your organization.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-fuchsia-500 transition-all duration-300 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-fuchsia-500/10"
						>
							{/* Icon */}
							<div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
								<service.icon className="w-8 h-8 text-white" />
							</div>

							{/* Content */}
							<div className="space-y-4">
								<h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">
									{service.title}
								</h3>
								<p className="text-slate-300 leading-relaxed">
									{service.description}
								</p>

								{/* Features */}
								<div>
									<h4 className="text-white font-semibold mb-3">Key Features:</h4>
									<ul className="space-y-2">
										{service.features.map((feature, idx) => (
											<li key={idx} className="text-slate-300 flex items-start gap-3">
												<div className="w-2 h-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
												<span className="text-sm">{feature}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
						<h3 className="text-2xl font-bold text-white mb-4">
							Need a Custom Solution?
						</h3>
						<p className="text-slate-400 mb-6 max-w-2xl mx-auto">
							Don&apos;t see exactly what you need? I specialize in creating custom solutions 
							tailored to your specific business requirements and goals.
						</p>
						<button className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300">
							Let&apos;s Discuss Your Project
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
} 