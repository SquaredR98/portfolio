'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiMysql,
	SiCplusplus,
	SiPython,
	SiReact,
	SiNextdotjs,
	SiGatsby,
	SiTailwindcss,
	SiRedux,
	SiNodedotjs,
	SiExpress,
	SiNestjs,
	SiMongodb,
	SiPostgresql,

	SiGit,
	SiGithub,
	SiDocker,
	SiJenkins,
	SiServerless,
	SiWordpress,
	SiStripe,
	SiGoogleanalytics,
	SiFacebook,
} from 'react-icons/si';
import { FaDatabase, FaKey, FaCreditCard, FaAws } from 'react-icons/fa';
import { MdApi } from 'react-icons/md';

// Skill data with React Icons and brand colors
const skillCategories = [
	{
		title: 'Languages',
		skills: [
			{ name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
			{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
			{ name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
			{ name: 'CSS3', icon: SiCss3, color: '#1572B6' },
			{ name: 'SQL', icon: SiMysql, color: '#4479A1' },
			{ name: 'C++', icon: SiCplusplus, color: '#00599C' },
			{ name: 'Python', icon: SiPython, color: '#3776AB' },
		],
	},
	{
		title: 'Frontend',
		skills: [
			{ name: 'React', icon: SiReact, color: '#61DAFB' },
			{ name: 'Next.js', icon: SiNextdotjs, color: '#E879F9' },
			{ name: 'Gatsby', icon: SiGatsby, color: '#663399' },
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
			{ name: 'Redux', icon: SiRedux, color: '#764ABC' },
			{ name: 'PrimeReact', icon: SiReact, color: '#61DAFB' },
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
			{ name: 'Express.js', icon: SiExpress, color: '#06B6D4' },
			{ name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
			{ name: 'REST API', icon: MdApi, color: '#FF6B35' },
			{ name: 'Mongoose', icon: SiMongodb, color: '#47A248' },
			{ name: 'TypeORM', icon: FaDatabase, color: '#FE0803' },
			{ name: 'NextAuth', icon: FaKey, color: '#E879F9' },
		],
	},
	{
		title: 'Database',
		skills: [
			{ name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
			{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
			{ name: 'DynamoDB', icon: FaAws, color: '#FF9900' },
		],
	},
	{
		title: 'Tools & DevOps',
		skills: [
			{ name: 'Git', icon: SiGit, color: '#F05032' },
			{ name: 'GitHub', icon: SiGithub, color: '#E879F9' },
			{ name: 'Docker', icon: SiDocker, color: '#2496ED' },
			{ name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
			{ name: 'AWS', icon: FaAws, color: '#FF9900' },
			{ name: 'Serverless', icon: SiServerless, color: '#FD5750' },
		],
	},
	{
		title: 'Integrations',
		skills: [
			{ name: 'WordPress', icon: SiWordpress, color: '#21759B' },
			{ name: 'Razorpay', icon: FaCreditCard, color: '#3395FF' },
			{ name: 'Paytm', icon: FaCreditCard, color: '#00BAF2' },
			{ name: 'Cashfree', icon: FaCreditCard, color: '#004CFF' },
			{ name: 'Stripe', icon: SiStripe, color: '#635BFF' },
			{ name: 'Google Analytics', icon: SiGoogleanalytics, color: '#E37400' },
			{ name: 'Facebook Pixel', icon: SiFacebook, color: '#1877F2' },
		],
	},
];

export default function SkillsSection() {
	return (
		<section id='skills' className='bg-slate-900 border-b border-slate-800'>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto border-x border-slate-800'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center py-8'
				>
					<h2 className='text-4xl font-bold text-white mb-4'>
						Skills & Technologies
					</h2>
					<p className='text-slate-400 text-lg max-w-2xl mx-auto'>
						Comprehensive expertise across modern web
						technologies and development tools
					</p>
				</motion.div>

				{/* Skills Scroller */}
				<div className='relative overflow-hidden pb-12'>
					{/* First row - Left to Right */}
					<div className='relative border-y border-slate-800'>
						<div className='flex animate-scroll-left'>
							{skillCategories.map(
								(category, categoryIndex) => (
									<div
										key={categoryIndex}
										className='flex-shrink-0 mx-8 border-x border-slate-800'
									>
										<div className='text-center'>
											<h3 className='text-xl font-bold text-white my-2'>
												{
													category.title
												}
											</h3>
											<div className='flex'>
												{category.skills.map(
													(
														skill,
														skillIndex,
													) => {
														const IconComponent =
															skill.icon;
														return (
															<div
																key={
																	skillIndex
																}
																className='flex flex-col items-center group'
															>
																<div
																	className='w-16 h-16 bg-slate-800 p-3 border border-slate-700 transition-all duration-300 flex items-center justify-center'
																	style={
																		{
																			'--hover-color':
																				skill.color,
																		} as React.CSSProperties
																	}
																	onMouseEnter={(
																		e,
																	) => {
																		const target =
																			e.currentTarget;
																		target.style.borderColor =
																			skill.color;
																	}}
																	onMouseLeave={(
																		e,
																	) => {
																		const target =
																			e.currentTarget;
																		target.style.borderColor =
																			'#374151'; // slate-700
																	}}
																>
																	<IconComponent
																		className='w-10 h-10 text-slate-300 group-hover:scale-110 transition-all duration-300'
																		style={{
																			color: 'inherit',
																		}}
																		onMouseEnter={(
																			e,
																		) => {
																			(
																				e.currentTarget as unknown as HTMLElement
																			).style.color =
																				skill.color;
																		}}
																		onMouseLeave={(
																			e,
																		) => {
																			(
																				e.currentTarget as unknown as HTMLElement
																			).style.color =
																				'#D1D5DB'; // slate-300
																		}}
																	/>
																</div>
																{/* <span className='text-slate-400 text-sm font-medium group-hover:text-fuchsia-400 transition-colors'>
																	{
																		skill.name
																	}
																</span> */}
															</div>
														);
													},
												)}
											</div>
										</div>
									</div>
								),
							)}
						</div>
					</div>

					{/* Second row - Right to Left */}
					<div className='relative border-y border-slate-800 mt-12'>
						<div className='flex animate-scroll-right'>
							{skillCategories
								.slice()
								.reverse()
								.map(
									(
										category,
										categoryIndex,
									) => (
										<div
											key={
												categoryIndex
											}
											className='flex-shrink-0 mx-8 border-x border-slate-800'
										>
											<div className='text-center'>
												<h3 className='text-xl font-bold text-white my-2'>
													{
														category.title
													}
												</h3>
												<div className='flex'>
													{category.skills.map(
														(
															skill,
															skillIndex,
														) => {
															const IconComponent =
																skill.icon;
															return (
																<div
																	key={
																		skillIndex
																	}
																	className='flex flex-col items-center group'
																>
																	<div
																		className='w-16 h-16 bg-slate-800 p-3 border border-slate-700 transition-all duration-300 flex items-center justify-center'
																		style={
																			{
																				'--hover-color':
																					skill.color,
																			} as React.CSSProperties
																		}
																		onMouseEnter={(
																			e,
																		) => {
																			const target =
																				e.currentTarget;
																			target.style.borderColor =
																				skill.color;
																		}}
																		onMouseLeave={(
																			e,
																		) => {
																			const target =
																				e.currentTarget;
																			target.style.borderColor =
																				'#374151'; // slate-700
																		}}
																	>
																		<IconComponent
																			className='w-10 h-10 text-slate-300 group-hover:scale-110 transition-all duration-300'
																			style={{
																				color: 'inherit',
																			}}
																			onMouseEnter={(
																				e,
																			) => {
																				(
																					e.currentTarget as unknown as HTMLElement
																				).style.color =
																					skill.color;
																			}}
																			onMouseLeave={(
																				e,
																			) => {
																				(
																					e.currentTarget as unknown as HTMLElement
																				).style.color =
																					'#D1D5DB'; // slate-300
																			}}
																		/>
																	</div>
																	{/* <span className='text-slate-400 text-sm font-medium group-hover:text-cyan-400 transition-colors'>
																	{
																		skill.name
																	}
																</span> */}
																</div>
															);
														},
													)}
												</div>
											</div>
										</div>
									),
								)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
