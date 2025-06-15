import React from 'react';
import { HiRocketLaunch } from 'react-icons/hi2';
import SectionContainer from '../../shared/SectionContainer';
import SectionHeader from '../../shared/SectionHeader';
import AnimatedContainer from '../../shared/AnimatedContainer';
import TechnologyBadge from '../../shared/TechnologyBadge';
import {
	MotionH2,
	MotionH3,
	MotionH4,
	MotionUl,
	MotionLi,
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

export default function AboutSection() {
	return (
		<SectionContainer id='about' background='slate-950'>
			<SectionHeader
				title='About'
				highlightedWord='Me'
				description=''
			/>

			<div className='flex flex-col lg:flex-row gap-12 items-start'>
				{/* Left Column - Image and Personal Info */}
				<AnimatedContainer
					variants='slideLeft'
					delay={0.2}
					className='lg:order-2'
				>
					<div className='space-y-8'>
						<div className='relative'>
							<div className='w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-1'>
								<div className='w-full h-full rounded-full bg-slate-900 flex items-center justify-center'>
									{/* <HiUser className="w-32 h-32 text-slate-400" /> */}
									<Image
										src='/profile.webp'
										alt='Ravi Ranjan'
										width={1280}
										height={1280}
										className='rounded-full'
									/>
								</div>
							</div>
							<div className='absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center'>
								<HiRocketLaunch className='w-10 h-10 text-white' />
							</div>
						</div>

						<div className='space-y-4'>
							<MotionH3 className='text-2xl font-bold text-white'>
								Ravi Ranjan
							</MotionH3>
							<p className='text-slate-400 text-lg'>
								Full Stack Developer | React |
								Next.js | Node.js | PostgreSQL
							</p>
							<div className='flex flex-wrap gap-2'>
								{skills.map((skill) => (
									<TechnologyBadge
										key={skill}
										technology={skill}
										size='md'
									/>
								))}
							</div>
						</div>
					</div>
				</AnimatedContainer>

				{/* Right Column - Description */}
				<AnimatedContainer
					variants='slideRight'
					delay={0.4}
					className='lg:order-1'
				>
					<div className='space-y-6'>
						<div className='space-y-6'>
							<MotionH2 className='text-3xl font-bold text-white'>
								About Me
							</MotionH2>
							<div className='space-y-4 text-slate-300'>
								<p>
									Full-Stack Developer with
									over four years of
									experience in designing,
									building, and deploying
									scalable web applications
									and platforms. Proficient
									in React, Next.js,
									Node.js, NestJS,
									PostgreSQL, and MongoDB.
								</p>
								<p>
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
								</p>
								<p>
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
								</p>
							</div>
						</div>

						{/* Stats */}
						<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
							<div className='text-center p-6 bg-slate-900 rounded-xl border border-slate-800'>
								<div className='text-3xl font-bold text-fuchsia-500 mb-2'>
									4+
								</div>
								<div className='text-slate-400'>
									Years Experience
								</div>
							</div>
							<div className='text-center p-6 bg-slate-900 rounded-xl border border-slate-800'>
								<div className='text-3xl font-bold text-cyan-500 mb-2'>
									20+
								</div>
								<div className='text-slate-400'>
									Projects Completed
								</div>
							</div>
							<div className='text-center p-6 bg-slate-900 rounded-xl border border-slate-800'>
								<div className='text-3xl font-bold text-fuchsia-500 mb-2'>
									5+
								</div>
								<div className='text-slate-400'>
									Major Platforms
								</div>
							</div>
							<div className='text-center p-6 bg-slate-900 rounded-xl border border-slate-800'>
								<div className='text-3xl font-bold text-cyan-500 mb-2'>
									3
								</div>
								<div className='text-slate-400'>
									Awards Won
								</div>
							</div>
						</div>

						{/* What I Bring */}
						<div className='space-y-4'>
							<MotionH4 className='text-xl font-semibold text-white'>
								What I Bring to the Table:
							</MotionH4>
							<MotionUl className='space-y-2'>
								{achievements.map(
									(achievement, index) => (
										<MotionLi
											key={index}
											className='flex items-center gap-3 text-slate-300'
										>
											<div
												className={`w-2 h-2 ${achievement.color} rounded-full`}
											></div>
											{
												achievement.text
											}
										</MotionLi>
									),
								)}
							</MotionUl>
						</div>
					</div>
				</AnimatedContainer>
			</div>
		</SectionContainer>
	);
}
