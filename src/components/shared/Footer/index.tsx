'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HiHeart } from 'react-icons/hi2';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-slate-950 border-t border-slate-800'>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto py-12'>
				<div className='grid md:grid-cols-2 gap-8'>
					{/* Brand */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='space-y-4'
					>
						<h3 className='text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
							Ravi Ranjan
						</h3>
						<p className='text-slate-400 text-sm leading-relaxed'>
							Professional consultant and developer
							passionate about creating innovative
							solutions that drive business growth
							and success.
						</p>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className='space-y-4 flex flex-col lg:items-end'
					>
						<h4 className='text-white font-semibold'>
							Quick Links
						</h4>
						<ul className='space-y-2'>
							<li>
								<a
									href='#about'
									className='text-slate-400 hover:text-white transition-colors text-sm'
								>
									About
								</a>
							</li>
							<li>
								<a
									href='#skills'
									className='text-slate-400 hover:text-white transition-colors text-sm'
								>
									Skills
								</a>
							</li>
							<li>
								<a
									href='#projects'
									className='text-slate-400 hover:text-white transition-colors text-sm'
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href='#experience'
									className='text-slate-400 hover:text-white transition-colors text-sm'
								>
									Experience
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-slate-400 hover:text-white transition-colors text-sm'
								>
									Contact
								</a>
							</li>
						</ul>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
					className='border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'
				>
					<div className='text-slate-400 text-sm mb-4 md:mb-0'>
						© {currentYear} Ravi Ranjan. All rights
						reserved.
					</div>
					<div className='flex items-center gap-2 text-slate-400 text-sm'>
						<span>Made with</span>
						<HiHeart className='w-4 h-4 text-red-500' />
						<span>for amazing projects</span>
					</div>
				</motion.div>
			</div>
		</footer>
	);
} 