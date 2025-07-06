import React from 'react';
import { HiRocketLaunch } from 'react-icons/hi2';
import { motion } from 'motion/react';
import SectionContainer from '../../shared/SectionContainer';
import SectionHeader from '../../shared/SectionHeader';
import AnimatedContainer from '../../shared/AnimatedContainer';
import TechnologyBadge from '../../shared/TechnologyBadge';
import {
	MotionH3,
	MotionH4,
	MotionUl,
} from '../../shared/MotionTags';
import Image from 'next/image';

const skills = [
	'Full Stack Development',
	'React & Next.js',
	'Node.js & NestJS',
	'PostgreSQL & MongoDB',
	'Payment Integration',
	'Team Leadership',
];

const achievements = [
	{
		text: 'Led end-to-end development of NeoZAP marketing website and e-commerce platform',
		color: 'bg-fuchsia-500',
	},
	{
		text: 'Integrated multiple payment gateways (Razorpay, Paytm, Cashfree) for seamless transactions',
		color: 'bg-cyan-500',
	},
	{
		text: 'Built content management dashboard reducing update turnaround time by 50%',
		color: 'bg-fuchsia-500',
	},
	{
		text: 'Awarded GEM, Best Manager, and Collared Diamond for exceptional performance',
		color: 'bg-cyan-500',
	},
];

const stats = [
	{ value: '4+', label: 'Years Experience', color: 'text-fuchsia-500' },
	{ value: '20+', label: 'Projects Completed', color: 'text-cyan-500' },
	{ value: '5+', label: 'Major Platforms', color: 'text-fuchsia-500' },
	{ value: '3', label: 'Awards Won', color: 'text-cyan-500' },
];

export default function AboutSection() {
	return (
		<SectionContainer id='about' background='slate-950'>
			<SectionHeader
				title='About'
				highlightedWord='Me'
				description=''
				className='border-b border-slate-800 text-left'
			/>

			<div className='flex flex-col lg:flex-row items-start'>
				{/* Left Column - Image and Personal Info */}
				<AnimatedContainer
					variants='slideLeft'
					delay={0.1}
					className='lg:order-2'
				>
					<div className='space-y-8'>
						<div className='relative'>
							<motion.div 
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
								className='w-80 h-80 mx-auto lg:mx-0 p-1 border-b border-slate-800 overflow-hidden'
							>
								<Image
									src='/profile.webp'
									alt='Ravi Ranjan'
									width={1280}
									height={1280}
									className='hover:scale-105 transition-all duration-700'
								/>
							</motion.div>
							<motion.div 
								initial={{ opacity: 0, scale: 0, rotate: -180 }}
								whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className='absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center'
							>
								<HiRocketLaunch className='w-10 h-10 text-white' />
							</motion.div>
						</div>

						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							viewport={{ once: true }}
							className='space-y-2'
						>
							<MotionH3 className='text-2xl font-bold text-white px-2 md:px-6'>
								Ravi Ranjan
							</MotionH3>
							<p className='text-slate-400 text-lg px-2 md:px-6'>
								Full Stack Developer | React |
								Next.js | Node.js | PostgreSQL
							</p>
							<div className='flex flex-wrap gap-2 px-2 md:px-6'>
								{skills.map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
										viewport={{ once: true }}
									>
										<TechnologyBadge
											technology={skill}
											size='md'
										/>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</AnimatedContainer>

				{/* Right Column - Description */}
				<AnimatedContainer
					variants='slideRight'
					delay={0.2}
					className='lg:order-1 md:border-r border-slate-800'
				>
					<div className='space-y-6'>
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							viewport={{ once: true }}
							className='space-y-6'
						>
							<div className='space-y-4 text-slate-300 px-2 md:px-6 pt-6'>
								<motion.p
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true }}
								>
									Full-Stack Developer with
									over four years of
									experience in designing,
									building, and deploying
									scalable web applications
									and platforms. Proficient
									in React, Next.js,
									Node.js, NestJS,
									PostgreSQL, and MongoDB.
								</motion.p>
								<motion.p
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
								>
									Currently working as
									Senior Software Developer
									at Antino Labs, where
									I&apos;ve led the
									development of
									NeoZAP&apos;s marketing
									website, integrated
									multiple payment gateways,
									and architected content
									management systems.
									Demonstrated ability to
									lead full project
									lifecycles, integrate
									third-party APIs, and
									optimize performance
									across frontend and
									backend.
								</motion.p>
								<motion.p
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.6 }}
									viewport={{ once: true }}
								>
									Graduated from Indian
									Institute of Information
									Technology, Dharwad with a
									B.Tech in Computer
									Science. Known for
									delivering under pressure,
									mentoring teams, and
									driving product success.
									Open to remote full-time
									roles or technical
									co-founder opportunities.
								</motion.p>
							</div>
						</motion.div>

						{/* Stats */}
						<div className='grid grid-cols-2 lg:grid-cols-4'>
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.05 }}
									className='text-center p-6 border-y border-slate-800 hover:bg-slate-900/50 transition-colors duration-300'
								>
									<motion.div 
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
										viewport={{ once: true }}
										className={`text-3xl font-bold ${stat.color} mb-2`}
									>
										{stat.value}
									</motion.div>
									<div className='text-slate-400'>
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>

						{/* What I Bring */}
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.8 }}
							viewport={{ once: true }}
							className='space-y-4 px-2 md:px-6 pb-8'
						>
							<MotionH4 className='text-xl font-semibold text-white'>
								What I Bring to the Table:
							</MotionH4>
							<MotionUl className='space-y-2'>
								{achievements.map(
									(achievement, index) => (
										<motion.li
											key={index}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
											viewport={{ once: true }}
											whileHover={{ x: 5 }}
											className='flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 cursor-default'
										>
											<motion.div
												initial={{ scale: 0 }}
												whileInView={{ scale: 1 }}
												transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
												viewport={{ once: true }}
												className={`w-2 h-2 ${achievement.color} rounded-full`}
											></motion.div>
											{achievement.text}
										</motion.li>
									),
								)}
							</MotionUl>
						</motion.div>
					</div>
				</AnimatedContainer>
			</div>
		</SectionContainer>
	);
}
