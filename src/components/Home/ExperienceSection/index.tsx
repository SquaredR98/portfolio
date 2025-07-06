'use client';

import React from 'react';
import { HiCalendar, HiMapPin, HiStar, HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';
import { useEntryState } from '@/components/EntryPage/EntryStateContext';
import { MotionDiv, MotionH2, MotionP, MotionH3, MotionH4, MotionLi, MotionSpan } from '@/components/shared/MotionTags';

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
		<section
			id='experience'
			className='bg-slate-900 border-y border-slate-800'
		>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto border-x border-slate-800'>
				<MotionDiv
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='pt-8'
				>
					<MotionH2 
						initial={{ opacity: 0, y: 10, scale: 0.95 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className='text-4xl md:text-5xl font-bold text-white mb-4 pl-2 md:pl-6'
					>
						Recent{' '}
						<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
							Experience
						</span>
					</MotionH2>
					<MotionDiv 
						initial={{ opacity: 0, scaleX: 0 }}
						whileInView={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className='w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 ml-2 md:ml-6 origin-left'
					></MotionDiv>
					<MotionP 
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className='text-slate-400 text-lg mt-6 border-y border-slate-800 py-4 px-2 md:px-6'
					>
						My most recent role showcasing current
						expertise and achievements. View my complete
						professional journey for a comprehensive
						overview.
					</MotionP>
				</MotionDiv>

				<div className='mx-auto'>
					<div className='bg-slate-800 overflow-hidden'>
						{/* Header */}
						<div className='flex flex-col md:flex-row md:items-start justify-between mb-6 px-2 md:px-6 pt-4 md:pt-8'>
							<MotionDiv 
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								viewport={{ once: true }}
								className='mb-4 md:mb-0'
							>
								<MotionH3 
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									viewport={{ once: true }}
									className='text-2xl font-bold text-white mb-2'
								>
									{experiences[0].title}
								</MotionH3>
								<MotionP 
									initial={{ opacity: 0, y: 5 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.3 }}
									viewport={{ once: true }}
									className='text-fuchsia-400 font-medium text-lg'
								>
									{experiences[0].company}
								</MotionP>
							</MotionDiv>
							<MotionDiv 
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
								className='text-left md:text-right'
							>
								<MotionDiv 
									initial={{ opacity: 0, y: 5 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.3 }}
									viewport={{ once: true }}
									className='flex items-center gap-1 text-slate-400 text-sm mb-1'
								>
									<HiCalendar className='w-4 h-4' />
									{experiences[0].period}
								</MotionDiv>
								<MotionDiv 
									initial={{ opacity: 0, y: 5 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									viewport={{ once: true }}
									className='flex items-center gap-1 text-slate-400 text-sm'
								>
									<HiMapPin className='w-4 h-4' />
									{experiences[0].location}
								</MotionDiv>
							</MotionDiv>
						</div>

						{/* Description */}
						<MotionP 
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
							className='text-slate-300 text-lg leading-relaxed mb-6 px-2 md:px-8'
						>
							{experiences[0].description}
						</MotionP>

						{/* Achievements */}
						<div className='mb-6 px-2 md:px-8'>
							<MotionH4 
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className='text-white font-semibold mb-4 flex items-center gap-2'
							>
								<HiStar className='w-5 h-5 text-fuchsia-500' />
								Key Achievements
							</MotionH4>
							<ul className='space-y-3'>
								{experiences[0].achievements.map(
									(achievement, idx) => (
										<MotionLi
											key={idx}
											initial={{ opacity: 0, scale: 0.95 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.6, delay: 0.5 + idx * 0.05 }}
											viewport={{ once: true }}
											className='text-slate-300 flex items-start gap-3 group'
										>
											<MotionDiv 
												initial={{ opacity: 0, scale: 0 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.6, delay: 0.6 + idx * 0.05 }}
												viewport={{ once: true }}
												className='w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-fuchsia-500 transition-colors'
											></MotionDiv>
											{achievement}
										</MotionLi>
									),
								)}
							</ul>
						</div>

						{/* Technologies */}
						<div className='mb-8 px-2 md:px-8'>
							<MotionH4 
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true }}
								className='text-white font-semibold mb-3'
							>
								Technologies & Skills
							</MotionH4>
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
								].map((tech, idx) => (
									<MotionSpan
										key={tech}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6, delay: 0.7 + idx * 0.03 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.05 }}
										className='px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 hover:text-white transition-all cursor-default'
									>
										{tech}
									</MotionSpan>
								))}
							</div>
						</div>

						{/* CTA to Resume */}
						<MotionDiv 
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							viewport={{ once: true }}
							className='border-t border-slate-700 pt-6'
						>
							<div className='text-center'>
								<MotionH4 
									initial={{ opacity: 0, y: 5 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.9 }}
									viewport={{ once: true }}
									className='text-white font-semibold mb-3'
								>
									Want to see my complete
									professional journey?
								</MotionH4>
								<MotionP 
									initial={{ opacity: 0, y: 5 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 1.0 }}
									viewport={{ once: true }}
									className='text-slate-400 mb-6'
								>
									Explore my full resume
									with detailed experience,
									education, and
									achievements.
								</MotionP>
								<MotionDiv
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 1.1 }}
									viewport={{ once: true }}
								>
									<Link
										href='/resume'
										className='inline-flex w-full items-center justify-center gap-2 py-3 bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 text-white font-semibold hover:from-fuchsia-500/50 hover:to-cyan-500/50 hover:scale-[1.02] ease-in-out transition-all duration-300 group'
									>
										View Full Resume
										<HiArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
									</Link>
								</MotionDiv>
							</div>
						</MotionDiv>
					</div>
				</div>

				{/* Call to Action */}
				<MotionDiv
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					viewport={{ once: true }}
					className='text-center mt-16 hidden'
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
				</MotionDiv>
			</div>
		</section>
	);
}
