'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HiEnvelope, HiMapPin, HiGlobeAlt, HiArrowRight, HiCodeBracket } from 'react-icons/hi2';
import { useEntryState } from '../../EntryPage/EntryStateContext';
import { MotionLink } from '@/components/shared/MotionTags';

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

export default function ContactSection() {
	const { setContactFormVisible } = useEntryState();

	return (
		<section id='contact' className='py-20 bg-slate-950'>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto overflow-hidden'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
						Get In{' '}
						<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
							Touch
						</span>
					</h2>
					<div className='w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto'></div>
					<p className='text-slate-400 text-lg mt-6 max-w-2xl mx-auto'>
						Ready to start your next project? Let&apos;s
						discuss how I can help bring your vision to
						life and create something amazing together.
					</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className='space-y-8'
					>
						<div>
							<h3 className='text-2xl font-bold text-white mb-4'>
								Let&apos;s Start a Conversation
							</h3>
							<p className='text-slate-400 text-lg leading-relaxed'>
								I&apos;m always excited to hear
								about new projects and
								opportunities. Whether you have
								a specific project in mind or
								just want to explore
								possibilities, I&apos;d love to
								connect with you.
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-6'>
							{contactInfo.map((contact, index) => (
								<MotionLink
									key={contact.title}
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
									initial={{
										opacity: 0,
										y: 30,
									}}
									whileInView={{
										opacity: 1,
										y: 0,
									}}
									transition={{
										duration: 0.6,
										delay: index * 0.1,
									}}
									viewport={{ once: true }}
									className='group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-fuchsia-500 transition-all duration-300 hover:bg-slate-800/70'
								>
									<div className='flex items-start gap-4'>
										<div
											className={`p-3 rounded-lg bg-slate-700 group-hover:bg-slate-600 transition-colors ${contact.color}`}
										>
											<contact.icon className='w-6 h-6' />
										</div>
										<div className='flex-1'>
											<h3 className='text-white font-semibold mb-1'>
												{
													contact.title
												}
											</h3>
											<p className='text-slate-400 text-sm'>
												{
													contact.value
												}
											</p>
										</div>
									</div>
								</MotionLink>
							))}
						</div>

						<div className='bg-slate-900 rounded-xl p-6 border border-slate-800'>
							<h4 className='text-white font-semibold mb-3'>
								What I Offer
							</h4>
							<ul className='space-y-2 text-slate-400'>
								<li className='flex items-center gap-2'>
									<div className='w-2 h-2 bg-fuchsia-500 rounded-full'></div>
									Business Strategy &
									Consulting
								</li>
								<li className='flex items-center gap-2'>
									<div className='w-2 h-2 bg-cyan-500 rounded-full'></div>
									Custom Software
									Development
								</li>
								<li className='flex items-center gap-2'>
									<div className='w-2 h-2 bg-fuchsia-500 rounded-full'></div>
									Digital Transformation
								</li>
								<li className='flex items-center gap-2'>
									<div className='w-2 h-2 bg-cyan-500 rounded-full'></div>
									Process Optimization
								</li>
							</ul>
						</div>
					</motion.div>

					{/* Contact Form CTA */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className='space-y-8'
					>
						<div className='bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700'>
							<div className='text-center mb-8'>
								<h3 className='text-2xl font-bold text-white mb-4'>
									Ready to Get Started?
								</h3>
								<p className='text-slate-400'>
									Let&apos;s discuss your
									project and see how I can
									help bring your vision to
									life.
								</p>
							</div>

							<div className='space-y-6'>
								<div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
									<h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
										<HiEnvelope className='w-5 h-5 text-fuchsia-500' />
										Send Me a Message
									</h4>
									<p className='text-slate-400 text-sm mb-4'>
										Have a project in
										mind? Send me a
										detailed message and
										I&apos;ll get back
										to you within 24
										hours.
									</p>
									<button
										onClick={() =>
											setContactFormVisible(
												true,
											)
										}
										className='w-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300 flex items-center justify-center gap-2'
									>
										Send Message
										<HiArrowRight className='w-4 h-4' />
									</button>
								</div>

								<div className='bg-slate-800 rounded-xl p-6 border border-slate-700'>
									<h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
										<HiGlobeAlt className='w-5 h-5 text-cyan-500' />
										Schedule a Meeting
									</h4>
									<p className='text-slate-400 text-sm mb-4'>
										Prefer to talk?
										Schedule a Google
										Meet to discuss your
										project in detail.
									</p>
									<button
										onClick={() =>
											setContactFormVisible(
												true,
											)
										}
										className='w-full px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-slate-500 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2'
									>
										Schedule Meeting
										<HiArrowRight className='w-4 h-4' />
									</button>
								</div>
							</div>

							<div className='mt-8 pt-6 border-t border-slate-700'>
								<p className='text-slate-400 text-sm text-center'>
									I typically respond within
									24 hours during business
									days.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 