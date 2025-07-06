'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HiHeart } from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { usePathname } from 'next/navigation';

// Define footer configurations for different pages
const footerConfigs = {
	'/': {
		links: [
			{ name: 'About', href: '#about' },
			{ name: 'Skills', href: '#skills' },
			{ name: 'Services', href: '#services' },
			{ name: 'Projects', href: '#projects' },
			{ name: 'Experience', href: '#experience' },
			{ name: 'Contact', href: '#contact' },
		],
		pages: [
			{ name: 'Portfolio', href: '/portfolio' },
			{ name: 'Resume', href: '/resume' },
		]
	},
	'/portfolio': {
		links: [
			{ name: 'Home', href: '/' },
			{ name: 'Resume', href: '/resume' },
		],
		pages: [
			{ name: 'About', href: '/#about' },
			{ name: 'Skills', href: '/#skills' },
			{ name: 'Services', href: '/#services' },
			{ name: 'Experience', href: '/#experience' },
			{ name: 'Contact', href: '/#contact' },
		]
	},
	'/resume': {
		links: [
			{ name: 'Home', href: '/' },
			{ name: 'Portfolio', href: '/portfolio' },
		],
		pages: [
			{ name: 'About', href: '/#about' },
			{ name: 'Skills', href: '/#skills' },
			{ name: 'Services', href: '/#services' },
			{ name: 'Projects', href: '/#projects' },
			{ name: 'Experience', href: '/#experience' },
			{ name: 'Contact', href: '/#contact' },
		]
	}
};

const socialLinks = [
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/raviranjan98',
		icon: FaLinkedin,
		color: 'hover:text-blue-500'
	},
	{
		name: 'GitHub',
		href: 'https://github.com/SquaredR98',
		icon: FaGithub,
		color: 'hover:text-gray-300'
	},
	{
		name: 'Upwork',
		href: 'https://www.upwork.com/freelancers/~01a1b1b1b1b1b1b1b1',
		icon: SiUpwork,
		color: 'hover:text-green-500'
	}
];

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const pathname = usePathname();
	const currentConfig = footerConfigs[pathname as keyof typeof footerConfigs] || footerConfigs['/'];

	const scrollToSection = (href: string) => {
		if (href.startsWith('#')) {
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			window.location.href = href;
		}
	};

	return (
		<footer className='bg-slate-950 border-t border-slate-800'>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto border-x border-slate-800'>
				<div className='grid md:grid-cols-3 w-full'>
					{/* Column 1: Name and About */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='space-y-4 w-full px-3 md:pl-6 pt-6'
					>
						<h3 className='text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent uppercase'>
							Ravi Ranjan
						</h3>
						<p className='text-slate-400 text-sm leading-relaxed'>
							Full-Stack Developer with over four years of experience in designing, 
							building, and deploying scalable web applications. Passionate about 
							creating innovative solutions that drive business growth and success.
						</p>
					</motion.div>

					{/* Column 2: Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className='space-y-4 md:border-x border-slate-800 px-3 md:px-6 py-6'
					>
						<div className='space-y-4'>
							{/* Quick Links */}
							<div className=''>
								<h4 className='text-white font-semibold mb-2'>
									Pages
								</h4>
								<div className='flex gap-x-6 gap-y-1 flex-wrap'>
									{currentConfig.links.map((link) => (
										<a
											key={link.name}
											href={link.href}
											onClick={(e) => {
												e.preventDefault();
												scrollToSection(link.href);
											}}
											className='text-slate-400 hover:text-white transition-colors text-sm'
										>
											{link.name}
										</a>
									))}
								</div>
							</div>
							
							{/* Pages */}
							<div className=''>
								<h4 className='text-white font-semibold mb-2'>
									Quick Links
								</h4>
								<div className='flex gap-x-6 gap-y-1 flex-wrap'>
									{currentConfig.pages.map((page) => (
										<a
											key={page.name}
											href={page.href}
											className='text-slate-400 hover:text-white transition-colors text-sm'
										>
											{page.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					{/* Column 3: Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className='px-3 md:px-6 pt-6 pb-6 md:pb-0'
					>
						<h4 className='text-white font-semibold mb-4'>
							Connect With Me
						</h4>
						<div className='space-x-3 gap-y-4 flex flex-wrap'>
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className={`flex items-center gap-1 px-2 text-slate-400 ${social.color} transition-colors text-sm border`}
								>
									<social.icon className='w-8 h-8 border-r pr-2' />
									<span className='pl-1'>{social.name}</span>
								</a>
							))}
						</div>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
					className='border-t border-slate-800 py-8 flex flex-col md:flex-row justify-between items-center px-6'
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