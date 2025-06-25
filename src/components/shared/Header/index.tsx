'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiBars3, HiXMark, HiArrowDownTray } from 'react-icons/hi2';
import Button from '../Button';
import { MotionLink } from '../MotionTags';
import { usePathname } from 'next/navigation';

// Define header configurations for different pages
const headerConfigs = {
	'/': {
		logo: {
			title: 'Ravi Ranjan',
			subtitle: null,
			layout: 'horizontal'
		},
		navItems: [
			{ name: 'Services', href: '#services' },
			{ name: 'Projects', href: '#projects' },
			{ name: 'Contact', href: '#contact' },
		],
		resumeButton: {
			text: 'Resume',
			href: '/resume',
			icon: null,
			action: 'link'
		}
	},
	'/portfolio': {
		logo: {
			title: 'My Portfolio',
			subtitle: null,
			layout: 'horizontal'
		},
		navItems: [
			{ name: 'Home', href: '/' },
			{ name: 'Resume', href: '/resume' },
		],
		resumeButton: {
			text: 'Resume',
			href: '/resume',
			icon: null,
			action: 'link'
		}
	},
	'/resume': {
		logo: {
			title: 'My Experiences',
			subtitle: null,
			layout: 'horizontal'
		},
		navItems: [
			{ name: 'Home', href: '/' },
			{ name: 'Portfolio', href: '/portfolio' },
		],
		resumeButton: {
			text: 'Resume',
			href: null,
			icon: HiArrowDownTray,
			action: 'download'
		}
	}
};

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);
	const pathname = usePathname();
	
	// Get current page configuration
	const currentConfig = headerConfigs[pathname as keyof typeof headerConfigs] || headerConfigs['/'];

	// Check if website should be visible (for home page)
	useEffect(() => {
		const checkWebsiteVisibility = () => {
			if (typeof window !== 'undefined') {
				const websiteVisible = localStorage.getItem('websiteVisible') === 'true';
				setIsVisible(websiteVisible);
				setIsInitialized(true);
			}
		};

		checkWebsiteVisibility();

		// Listen for storage changes
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === 'websiteVisible') {
				setIsVisible(e.newValue === 'true');
			}
		};

		// Also listen for custom events from the same window
		const handleCustomStorageChange = () => {
			const websiteVisible = localStorage.getItem('websiteVisible') === 'true';
			setIsVisible(websiteVisible);
		};

		window.addEventListener('storage', handleStorageChange);
		window.addEventListener('localStorageChange', handleCustomStorageChange);
		
		return () => {
			window.removeEventListener('storage', handleStorageChange);
			window.removeEventListener('localStorageChange', handleCustomStorageChange);
		};
	}, []);

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

	const handleResumeAction = () => {
		if (currentConfig.resumeButton.action === 'download') {
			// TODO: Implement PDF download functionality
			console.log('Download PDF clicked');
		} else if (currentConfig.resumeButton.href) {
			window.location.href = currentConfig.resumeButton.href;
		}
		setIsMobileMenuOpen(false);
	};

	// Don't render header on home page if website is not visible and we've initialized
	if (pathname === '/' && isInitialized && !isVisible) {
		return null;
	}

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
						<div className={`flex ${currentConfig.logo.layout === 'vertical' ? 'flex-col' : 'flex-row'} items-center`}>
							<h1 className="text-4xl font-medium tracking-wide bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
								{currentConfig.logo.title}
							</h1>
							{currentConfig.logo.subtitle && (
								<span className={`text-sm text-slate-400 ${currentConfig.logo.layout === 'vertical' ? 'mt-1' : 'ml-2'}`}>
									{currentConfig.logo.subtitle}
								</span>
							)}
						</div>
					</MotionLink>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{currentConfig.navItems.map((item, index) => (
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
								type={currentConfig.resumeButton.action === 'download' ? 'BUTTON' : 'LINK'}
								variant="PRIMARY"
								href={currentConfig.resumeButton.href || undefined}
								onClick={currentConfig.resumeButton.action === 'download' ? handleResumeAction : undefined}
								className="px-4 py-1 text-sm w-28 lg:text-xl font-normal rounded text-white flex items-center justify-center gap-1"
							>
								{currentConfig.resumeButton.icon && <currentConfig.resumeButton.icon className="w-4 h-4" />}
								{currentConfig.resumeButton.text}
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
							{currentConfig.navItems.map((item) => (
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
									type={currentConfig.resumeButton.action === 'download' ? 'BUTTON' : 'LINK'}
									variant="PRIMARY"
									href={currentConfig.resumeButton.href || undefined}
									onClick={currentConfig.resumeButton.action === 'download' ? handleResumeAction : undefined}
									className="w-full py-3 text-sm font-semibold flex items-center justify-center gap-2"
								>
									{currentConfig.resumeButton.icon && <currentConfig.resumeButton.icon className="w-4 h-4" />}
									{currentConfig.resumeButton.text}
								</Button>
								{pathname !== '/portfolio' && (
									<Button
										type="LINK"
										variant="SECONDARY"
										href='/portfolio'
										className="w-full py-3 text-sm font-semibold"
									>
										Portfolio
									</Button>
								)}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
} 