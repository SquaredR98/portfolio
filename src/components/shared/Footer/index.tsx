'use client';

import React from 'react';
import { HiHeart, HiCodeBracket, HiEnvelope } from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MotionDiv, MotionH2, MotionP, MotionH3, MotionH4, MotionLi, MotionLink } from '@/components/shared/MotionTags';
import { SiUpwork } from 'react-icons/si';

const sections = [
	{
		title: 'Quick Links',
		links: [
			{ name: 'Home', href: '#home' },
			{ name: 'About', href: '#about' },
			{ name: 'Services', href: '#services' },
			{ name: 'Projects', href: '#projects' },
			{ name: 'Experience', href: '#experience' },
			{ name: 'Contact', href: '#contact' },
		],
	},
	{
		title: 'Services',
		links: [
			{ name: 'Web Development', href: '#services' },
			{ name: 'Full Stack Solutions', href: '#services' },
			{ name: 'API Development', href: '#services' },
			{ name: 'Database Design', href: '#services' },
			{ name: 'Performance Optimization', href: '#services' },
			{ name: 'Technical Consulting', href: '#services' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ name: 'Portfolio', href: '/portfolio' },
			{ name: 'Resume', href: '/resume' },
			{ name: 'Blog', href: '#', comingSoon: true },
			{ name: 'Case Studies', href: '#', comingSoon: true },
			{ name: 'Downloads', href: '#', comingSoon: true },
			{ name: 'FAQ', href: '#', comingSoon: true },
		],
	},
];

const socialLinks = [
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/raviranjan98',
		icon: FaLinkedin,
		color: 'text-blue-400 hover:text-blue-300',
	},
	{
		name: 'GitHub',
		href: 'https://github.com/SquaredR98',
		icon: FaGithub,
		color: 'text-gray-400 hover:text-gray-300',
	},
	{
		name: 'Email',
		href: 'mailto:mail@ravi-ranjan.in',
		icon: HiEnvelope,
		color: 'text-fuchsia-400 hover:text-fuchsia-300',
	},
	{
		name: 'Portfolio',
		href: '/portfolio',
		icon: SiUpwork,
		color: 'text-cyan-400 hover:text-cyan-300',
	},
];

export default function Footer() {
	return (
		<footer className='bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800'>
			{/* Top gradient line */}
			<MotionDiv
				initial={{ opacity: 0, scaleX: 0 }}
				whileInView={{ opacity: 1, scaleX: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className='h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 origin-left'
			/>
			
			{/* Background gradient overlay */}
			<div className='absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-cyan-500/5 pointer-events-none' />
			
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto border-x border-slate-800 relative'>
				{/* Main Footer Content */}
				<div className='relative overflow-hidden'>
					{/* Decorative background elements */}
					<div className='absolute inset-0 overflow-hidden'>
						<div className='absolute top-10 left-10 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl' />
						<div className='absolute bottom-10 right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl' />
					</div>
					
					<div className='grid md:grid-cols-4 gap-8 py-16 px-2 md:px-6 relative'>
						{/* Brand Section */}
						<div className='md:col-span-1'>
							<MotionDiv
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className='mb-6'
							>
								<MotionH2
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.1 }}
									viewport={{ once: true }}
									className='text-2xl font-bold text-white mb-3'
								>
									Ravi Ranjan
								</MotionH2>
								<MotionP
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									viewport={{ once: true }}
									className='text-slate-400 text-sm leading-relaxed'
								>
									Full Stack Developer crafting
									exceptional digital experiences
									with modern technologies and
									innovative solutions.
								</MotionP>
							</MotionDiv>

							{/* Social Links */}
							<MotionDiv
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<MotionH4
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									viewport={{ once: true }}
									className='text-white font-semibold mb-3'
								>
									Connect With Me
								</MotionH4>
								<div className='flex gap-3'>
									{socialLinks.map(
										(social, index) => (
											<MotionLink
												key={social.name}
												href={social.href}
												target={
													social.href.startsWith(
														'http',
													)
														? '_blank'
														: '_self'
												}
												rel={
													social.href.startsWith(
														'http',
													)
														? 'noopener noreferrer'
														: undefined
												}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
												viewport={{ once: true }}
												whileHover={{ scale: 1.1, y: -2 }}
												whileTap={{ scale: 0.95 }}
												className={`w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center ${social.color} transition-all duration-300 hover:border-slate-600 hover:bg-slate-700 hover:shadow-lg`}
											>
												<social.icon className='w-5 h-5' />
											</MotionLink>
										),
									)}
								</div>
							</MotionDiv>
						</div>

						{/* Footer Sections */}
						{sections.map((section, sectionIndex) => (
							<div key={section.title} className='overflow-hidden'>
								<MotionDiv
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
									viewport={{ once: true }}
									className='mb-6'
								>
									<MotionH3
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
										viewport={{ once: true }}
										className='text-white font-semibold mb-4 flex items-center gap-2'
									>
										{/* Animated gradient bar */}
										<MotionDiv
											initial={{ scaleX: 0 }}
											whileInView={{ scaleX: 1 }}
											transition={{ duration: 0.8, delay: 0.4 + sectionIndex * 0.1 }}
											viewport={{ once: true }}
											className='w-1 h-5 bg-gradient-to-b from-fuchsia-500 to-cyan-500 rounded-full origin-bottom'
										/>
										{section.title}
									</MotionH3>
									<ul className='space-y-2'>
										{section.links.map(
											(link, linkIndex) => (
												<MotionLi
													key={link.name}
													initial={{ opacity: 0, x: -10 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{ duration: 0.6, delay: 0.5 + sectionIndex * 0.1 + linkIndex * 0.05 }}
													viewport={{ once: true }}
												>
													<MotionLink
														href={link.href}
														whileHover={link.comingSoon ? {} : { x: 5 }}
														className={`text-slate-400 transition-all duration-200 text-sm py-1 flex items-center gap-2 ${
															link.comingSoon 
																? 'cursor-not-allowed opacity-60' 
																: 'hover:text-fuchsia-400'
														}`}
													>
														{link.name}
														{link.comingSoon && (
															<span className='text-xs bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-fuchsia-400 px-2 py-1 rounded-full border border-fuchsia-500/30'>
																Coming Soon
															</span>
														)}
													</MotionLink>
												</MotionLi>
											),
										)}
									</ul>
								</MotionDiv>
							</div>
						))}
					</div>
				</div>

				{/* Bottom Bar */}
				<MotionDiv
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					viewport={{ once: true }}
					className='border-t border-slate-800 py-6 px-2 md:px-6 relative'
				>
					{/* Animated gradient line */}
					<MotionDiv
						initial={{ opacity: 0, scaleX: 0 }}
						whileInView={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 1.2, delay: 0.9 }}
						viewport={{ once: true }}
						className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent origin-center'
					/>
					
					<div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
						<MotionDiv
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 1.0 }}
							viewport={{ once: true }}
							className='flex items-center gap-2 text-slate-400 text-sm'
						>
							<span>© 2024 Ravi Ranjan</span>
							<MotionDiv
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 1.1 }}
								viewport={{ once: true }}
								className='w-1 h-1 bg-slate-600 rounded-full'
							/>
							<span>All rights reserved</span>
						</MotionDiv>
						
						<MotionDiv
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 1.0 }}
							viewport={{ once: true }}
							className='flex items-center gap-2 text-slate-400 text-sm'
						>
							<span>Made with</span>
							<MotionDiv
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 0.6, delay: 1.2 }}
								viewport={{ once: true }}
								animate={{ 
									scale: [1, 1.2, 1],
									filter: ['blur(0px)', 'blur(1px)', 'blur(0px)'],
									transition: {
										duration: 2,
										repeat: Infinity,
										repeatDelay: 3,
										ease: 'easeInOut'
									}
								}}
								className='text-red-500'
							>
								<HiHeart className='w-4 h-4' />
							</MotionDiv>
							<span>in India</span>
							<MotionDiv
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 1.3 }}
								viewport={{ once: true }}
								className='w-1 h-1 bg-slate-600 rounded-full'
							/>
							<HiCodeBracket className='w-4 h-4 text-fuchsia-400' />
						</MotionDiv>
					</div>
				</MotionDiv>
			</div>
		</footer>
	);
} 