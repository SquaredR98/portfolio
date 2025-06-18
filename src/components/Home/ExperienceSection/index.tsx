'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HiCalendar, HiMapPin, HiStar, HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';
import { useEntryState } from '@/components/EntryPage/EntryStateContext';

const experiences = [
	{
		title: 'Senior Software Developer',
		company: 'Antino Labs',
		location: 'Gurugram, Haryana',
		period: 'September 2024 - Present',
		description:
			"Leading end-to-end implementation of Offers Dashboard, building Rewards UI in Next.js for NeoZAP's mobile app, and implementing Spin the Wheel feature using react-custom-roulette. Developing optimized REST APIs and dynamic UIs using ReactJS, PrimeReact, and react-hook-form.",
		achievements: [
			'Led the end-to-end implementation of the Offers Dashboard',
			"Built the Rewards UI in Next.js for NeoZAP's mobile app with SSR and ISR",
			'Implemented the Spin the Wheel feature using react-custom-roulette',
			'Customized library behavior and eliminated visual glitches for enhanced UX',
		],
	},
	{
		title: 'Software Developer',
		company: 'Antino Labs',
		location: 'Gurugram, Haryana',
		period: 'May 2023 - August 2024',
		description:
			"Led development of NeoZAP's marketing website, integrated multiple payment gateways, and architected content management dashboard. Collaborated with marketing team for analytics integration and contributed to INeuron LMS platform.",
		achievements: [
			"Led the development of NeoZAP's marketing website using Next.js, Tailwind CSS, Framer Motion, and RTK",
			'Integrated multiple payment gateways (Razorpay, Paytm, Cashfree) into e-commerce flow',
			'Architected and developed a full-featured content management dashboard',
			'Integrated Google Analytics, GTAG, and Facebook Pixel for campaign insights',
			'Awarded GEM, Best Manager of the Month, and Collared Diamond',
		],
	},
	{
		title: 'Associate Software Developer',
		company: 'Antino Labs',
		location: 'Gurugram, Haryana',
		period: 'April 2022 - May 2023',
		description:
			'Developed RBAC and authentication modules, built feature testing simulator, and led backend architecture for various platforms. Mentored new team members and contributed to multiple projects including Casha, Travel Hangouts, and Jify.',
		achievements: [
			'Developed Role-Based Access Control (RBAC) for Casha platform using NestJS and PostgreSQL',
			'Built a feature testing simulator, reducing QA time by 80%',
			'Led backend architecture for Travel Hangouts platform',
			'Contributed to Jify Earned Wage Access platform using Serverless Framework',
			'Awarded Best Manager, GEM, and Collared Diamond',
		],
	},
];

export default function ExperienceSection() {
	const { setContactFormVisible } = useEntryState();
	return (
		<section id='experience' className='py-20 bg-slate-900'>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
						Recent{' '}
						<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
							Experience
						</span>
					</h2>
					<div className='w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto'></div>
					<p className='text-slate-400 text-lg mt-6 max-w-2xl mx-auto'>
						My most recent role showcasing current
						expertise and achievements. View my complete
						professional journey for a comprehensive
						overview.
					</p>
				</motion.div>

				<div className='mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className='bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/10'
					>
						{/* Header */}
						<div className='flex flex-col md:flex-row md:items-start justify-between mb-6'>
							<div className='mb-4 md:mb-0'>
								<h3 className='text-2xl font-bold text-white mb-2'>
									{experiences[0].title}
								</h3>
								<p className='text-fuchsia-400 font-medium text-lg'>
									{experiences[0].company}
								</p>
							</div>
							<div className='text-left md:text-right'>
								<div className='flex items-center gap-1 text-slate-400 text-sm mb-1'>
									<HiCalendar className='w-4 h-4' />
									{experiences[0].period}
								</div>
								<div className='flex items-center gap-1 text-slate-400 text-sm'>
									<HiMapPin className='w-4 h-4' />
									{experiences[0].location}
								</div>
							</div>
						</div>

						{/* Description */}
						<p className='text-slate-300 text-lg leading-relaxed mb-6'>
							{experiences[0].description}
						</p>

						{/* Achievements */}
						<div className='mb-6'>
							<h4 className='text-white font-semibold mb-4 flex items-center gap-2'>
								<HiStar className='w-5 h-5 text-fuchsia-500' />
								Key Achievements
							</h4>
							<ul className='space-y-3'>
								{experiences[0].achievements.map(
									(achievement, idx) => (
										<li
											key={idx}
											className='text-slate-300 flex items-start gap-3'
										>
											<div className='w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0'></div>
											{achievement}
										</li>
									),
								)}
							</ul>
						</div>

						{/* Technologies */}
						<div className='mb-8'>
							<h4 className='text-white font-semibold mb-3'>
								Technologies & Skills
							</h4>
							<div className='flex flex-wrap gap-3'>
								{[
									'ReactJS',
									'PrimeReact',
									'react-hook-form',
									'Next.js',
									'SSR',
									'Node.js',
									'Redux Toolkit',
									'Sequelize',
									'PostgreSQL',
								].map((tech) => (
									<span
										key={tech}
										className='px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm'
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* CTA to Resume */}
						<div className='border-t border-slate-700 pt-6'>
							<div className='text-center'>
								<h4 className='text-white font-semibold mb-3'>
									Want to see my complete
									professional journey?
								</h4>
								<p className='text-slate-400 mb-6'>
									Explore my full resume
									with detailed experience,
									education, and
									achievements.
								</p>
								<Link
									href='/resume'
									className='inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300'
								>
									View Full Resume
									<HiArrowRight className='w-4 h-4' />
								</Link>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					viewport={{ once: true }}
					className='text-center mt-16'
				>
					<div className='bg-slate-800 rounded-xl p-8 border border-slate-700'>
						<h3 className='text-2xl font-bold text-white mb-4'>
							Ready to Work Together?
						</h3>
						<p className='text-slate-400 mb-6 max-w-2xl mx-auto'>
							Let&apos;s discuss how my experience
							and expertise can help bring your
							vision to life and drive your business
							forward.
						</p>
						<button
							onClick={() =>
								setContactFormVisible(true)
							}
							className='px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300'
						>
							Let&apos;s Start a Project
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
