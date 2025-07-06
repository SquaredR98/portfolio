'use client';

import React from 'react';
import { HiEnvelope, HiMapPin, HiGlobeAlt, HiArrowRight, HiCodeBracket } from 'react-icons/hi2';
import { useEntryState } from '../../EntryPage/EntryStateContext';
import { MotionDiv, MotionH2, MotionP, MotionH3, MotionH4, MotionLi, MotionButton, MotionLink } from '@/components/shared/MotionTags';

const contactInfo = [
	{
		icon: HiMapPin,
		title: 'Location',
		value: 'Remote / India',
		link: '#',
		color: 'text-green-500'
	},
	{
		icon: HiGlobeAlt,
		title: 'LinkedIn',
		value: '@raviranjan98',
		link: 'https://linkedin.com/in/raviranjan98',
		color: 'text-blue-500'
	},
	{
		icon: HiCodeBracket,
		title: 'GitHub',
		value: '@SquaredR98',
		link: 'https://github.com/SquaredR98',
		color: 'text-purple-500'
	}
];

const services = [
	{ name: 'Business Strategy & Consulting', color: 'bg-fuchsia-500' },
	{ name: 'Custom Software Development', color: 'bg-cyan-500' },
	{ name: 'Digital Transformation', color: 'bg-fuchsia-500' },
	{ name: 'Process Optimization', color: 'bg-cyan-500' }
];

export default function ContactSection() {
	const { setContactFormVisible } = useEntryState();

	return (
		<section id='contact' className='bg-slate-950'>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto overflow-hidden border-x border-slate-800'>
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
						Get In{' '}
						<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
							Touch
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
						Ready to start your next project? Let&apos;s
						discuss how I can help bring your vision to
						life and create something amazing together.
					</MotionP>
				</MotionDiv>

				<div className='grid lg:grid-cols-2 items-start'>
					{/* Contact Information */}
					<div className='overflow-hidden'>
						<MotionDiv 
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className='px-2 md:px-6 py-8'
						>
							<MotionH3 
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true }}
								className='text-2xl font-bold text-white mb-4'
							>
								Let&apos;s Start a Conversation
							</MotionH3>
							<MotionP 
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className='text-slate-400 text-lg leading-relaxed'
							>
								I&apos;m always excited to hear
								about new projects and
								opportunities. Whether you have
								a specific project in mind or
								just want to explore
								possibilities, I&apos;d love to
								connect with you.
							</MotionP>
						</MotionDiv>

						<div className='grid md:grid-cols-2 overflow-hidden'>
							{contactInfo.map((contact, index) => {
								const isLast =
									index ===
									contactInfo.length - 1;
								const isFirst = index === 0;
								const isSecond = index === 1;
								return (
									<MotionDiv
										key={contact.title}
										initial={{ opacity: 0, y: 15 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
										viewport={{ once: true }}
										className={`group border-t border-slate-700 transition-all duration-300 hover:bg-slate-800/70 overflow-hidden ${isLast ? 'border-b md:border-r' : ''} ${isFirst ? 'md:border-r' : ''} ${isSecond ? 'md:border-b' : ''}`}
									>
										<MotionLink
											href={contact.link}
											target={
												contact.link.startsWith(
													'http',
												)
													? '_blank'
													: '_self'
											}
											rel={
												contact.link.startsWith(
													'http',
												)
													? 'noopener noreferrer'
													: undefined
											}
											whileHover={{ scale: 1.02 }}
											className='block p-2 md:p-6 h-full'
										>
											<div className='flex items-start gap-4'>
												<MotionDiv
													initial={{ opacity: 0, scale: 0.8 }}
													whileInView={{ opacity: 1, scale: 1 }}
													transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
													viewport={{ once: true }}
													className={`p-3 rounded-lg bg-slate-700 group-hover:bg-slate-600 transition-colors ${contact.color}`}
												>
													<contact.icon className='w-6 h-6' />
												</MotionDiv>
												<div className='flex-1'>
													<MotionH3 
														initial={{ opacity: 0, y: 5 }}
														whileInView={{ opacity: 1, y: 0 }}
														transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
														viewport={{ once: true }}
														className='text-white font-semibold mb-1'
													>
														{contact.title}
													</MotionH3>
													<MotionP 
														initial={{ opacity: 0, y: 5 }}
														whileInView={{ opacity: 1, y: 0 }}
														transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
														viewport={{ once: true }}
														className='text-slate-400 text-sm'
													>
														{contact.value}
													</MotionP>
												</div>
											</div>
										</MotionLink>
									</MotionDiv>
								);
							})}
						</div>

						<MotionDiv 
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							viewport={{ once: true }}
							className='p-2 md:p-6 border-t border-slate-800'
						>
							<MotionH4 
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								viewport={{ once: true }}
								className='text-white font-semibold mb-3'
							>
								What I Offer
							</MotionH4>
							<ul className='space-y-2 text-slate-400'>
								{services.map((service, idx) => (
									<MotionLi
										key={service.name}
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6, delay: 0.9 + idx * 0.05 }}
										viewport={{ once: true }}
										className='flex items-center gap-2 group hover:text-slate-300 transition-colors'
									>
										<MotionDiv 
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.6, delay: 1.0 + idx * 0.05 }}
											viewport={{ once: true }}
											className={`w-2 h-2 ${service.color} rounded-full group-hover:scale-110 transition-transform`}
										></MotionDiv>
										{service.name}
									</MotionLi>
								))}
							</ul>
						</MotionDiv>
					</div>

					{/* Contact Form CTA */}
					<div className='space-y-8 h-full overflow-hidden'>
						<div className='bg-gradient-to-br flex flex-col justify-between py-8 border border-r-0 border-t-0 border-slate-800 h-full'>
							<MotionDiv 
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className='text-center mb-8'
							>
								<MotionH3 
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.5 }}
									viewport={{ once: true }}
									className='text-2xl font-bold text-white mb-4'
								>
									Ready to Get Started?
								</MotionH3>
								<MotionP 
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.6 }}
									viewport={{ once: true }}
									className='text-slate-400'
								>
									Let&apos;s discuss your
									project and see how I can
									help bring your vision to
									life.
								</MotionP>
							</MotionDiv>

							<div className=''>
								<MotionDiv 
									initial={{ opacity: 0, y: 15 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.7 }}
									viewport={{ once: true }}
									className='border-t border-slate-800 pt-6'
								>
									<MotionH4 
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.8 }}
										viewport={{ once: true }}
										className='text-white font-semibold px-6 mb-3 flex items-center gap-2'
									>
										<HiEnvelope className='w-5 h-5 text-fuchsia-500' />
										Send Me a Message
									</MotionH4>
									<MotionP 
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.9 }}
										viewport={{ once: true }}
										className='text-slate-400 px-6 text-sm mb-4'
									>
										Have a project in
										mind? Send me a
										detailed message and
										I&apos;ll get back
										to you within 24
										hours.
									</MotionP>
									<MotionButton
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6, delay: 1.0 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										onClick={() =>
											setContactFormVisible(
												true,
											)
										}
										className='w-full px-6 py-3 border-y border-slate-800 text-white cursor-pointer font-semibold  transition-all duration-300 flex items-center justify-center gap-2 group'
									>
										Send Message
										<HiArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
									</MotionButton>
								</MotionDiv>

								<MotionDiv 
									initial={{ opacity: 0, y: 15 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.8 }}
									viewport={{ once: true }}
									className='pt-6'
								>
									<MotionH4 
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 0.9 }}
										viewport={{ once: true }}
										className='text-white px-6 font-semibold mb-3 flex items-center gap-2'
									>
										<HiGlobeAlt className='w-5  h-5 text-cyan-500' />
										Schedule a Meeting
									</MotionH4>
									<MotionP 
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 1.0 }}
										viewport={{ once: true }}
										className='text-slate-400 px-6 text-sm mb-4'
									>
										Prefer to talk?
										Schedule a Google
										Meet to discuss your
										project in detail.
									</MotionP>
									<MotionButton
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6, delay: 1.1 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										onClick={() =>
											setContactFormVisible(
												true,
											)
										}
										className='w-full px-6 py-3 border-y border-slate-800 text-slate-300 font-semibold cursor-pointer hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group'
									>
										Schedule Meeting
										<HiArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
									</MotionButton>
								</MotionDiv>
							</div>

							<MotionDiv 
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.2 }}
								viewport={{ once: true }}
								className='mt-8 pt-6 border-t border-slate-800'
							>
								<p className='text-slate-400 text-sm text-center'>
									I typically respond within
									24 hours during business
									days.
								</p>
							</MotionDiv>
						</div>
					</div>
				</div>
			</div>
			<div className='h-16 border-x border-t border-slate-800 w-11/12 lg:w-9/12 max-w-7xl mx-auto'></div>
		</section>
	);
} 