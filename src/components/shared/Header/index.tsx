'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import Button from '../Button';
import { MotionLink } from '../MotionTags';

const navItems = [
	{ name: 'Services', href: '#services' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll effect for navbar transparency
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		if (href.startsWith('#')) {
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			// Handle page navigation
			window.location.href = href;
		}
		setIsMobileMenuOpen(false);
	};


	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				isScrolled || isMobileMenuOpen
					? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' 
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto w-11/12 lg:w-9/12">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<MotionLink
						href="/"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="flex items-center"
					>
						<h1 className="text-4xl font-medium tracking-wide bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
							Ravi Ranjan
						</h1>
					</MotionLink>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item, index) => (
							<motion.button
								key={item.name}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 + index * 0.1 }}
								onClick={() => scrollToSection(item.href)}
								className={`transition-colors duration-200 cursor-pointer font-medium ${
									isScrolled 
										? 'text-slate-300 hover:text-white' 
										: 'text-white/80 hover:text-white'
								}`}
							>
								{item.name}
							</motion.button>
						))}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.8 }}
							className="flex gap-2"
						>
							<Button
								type="LINK"
								variant="PRIMARY"
								href='/resume'
								className="px-4 py-1 text-sm w-28 lg:text-xl font-normal rounded text-white"
							>
								Resume
							</Button>
						</motion.div>
					</nav>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className={`transition-colors ${
								isScrolled 
									? 'text-slate-300 hover:text-white' 
									: 'text-white/80 hover:text-white'
							}`}
						>
							{isMobileMenuOpen ? (
								<HiXMark className="w-6 h-6" />
							) : (
								<HiBars3 className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: '100vh' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-800"
					>
						<div className="px-4 py-6 space-y-4">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="block w-full text-left text-slate-300 hover:text-white transition-colors duration-200 font-medium py-2"
								>
									{item.name}
								</button>
							))}
							<div className="pt-4 space-y-2">
								<Button
									type="LINK"
									variant="PRIMARY"
									href='/resume'
									className="w-full py-3 text-sm font-semibold"
								>
									Resume
								</Button>
								<Button
									type="LINK"
									variant="SECONDARY"
									href='/portfolio'
									className="w-full py-3 text-sm font-semibold"
								>
									Portfolio
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
} 