'use client';

import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useEntryState } from './EntryStateContext';
import Video from './Video';
import MobileTitle from './MobileTitle';
import DesktopTitle from './DesktopTitle';
import SubTitle from './SubTitle';
import HeroSectionButtons from './Buttons';
import { HiSparkles, HiStar } from 'react-icons/hi2';

const firaSans = Fira_Sans_Extra_Condensed({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

// Floating particle component
const FloatingParticle = ({ delay = 0, duration = 8, className = '' }) => {
	const [isVisible, setIsVisible] = useState(false);
	
	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), delay * 1000);
		return () => clearTimeout(timer);
	}, [delay]);

	if (!isVisible) return null;

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
			animate={{ 
				opacity: [0, 1, 0.5, 1, 0],
				scale: [0, 1, 1.2, 0.8, 0],
				x: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
				y: [0, Math.random() * 200 - 100, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
				rotate: [0, 180, 360, 540, 720]
			}}
			transition={{
				duration,
				repeat: Infinity,
				ease: "easeInOut"
			}}
			className={`absolute pointer-events-none ${className}`}
		>
			<HiSparkles className='w-3 h-3 text-fuchsia-400/40' />
		</motion.div>
	);
};

// Glowing orb component
const GlowingOrb = ({ delay = 0, className = '' }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ 
				opacity: [0, 0.6, 0.3, 0.8, 0],
				scale: [0, 1, 1.5, 1, 0],
			}}
			transition={{
				duration: 6,
				delay,
				repeat: Infinity,
				ease: "easeInOut"
			}}
			className={`absolute pointer-events-none rounded-full blur-xl ${className}`}
		>
			<div className="w-32 h-32 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 rounded-full" />
		</motion.div>
	);
};

// Constellation effect
const ConstellationDot = ({ delay = 0, className = '' }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ 
				opacity: [0, 1, 0.5, 1, 0],
				scale: [0, 1, 0.8, 1, 0],
			}}
			transition={{
				duration: 4,
				delay,
				repeat: Infinity,
				ease: "easeInOut"
			}}
			className={`absolute pointer-events-none ${className}`}
		>
			<HiStar className='w-2 h-2 text-cyan-400/60' />
		</motion.div>
	);
};

export default function EntryPage() {
	const { setContactFormVisible, setWebsiteVisible, websiteVisible } = useEntryState();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoaded(true), 100);
		return () => clearTimeout(timer);
	}, []);

	const handleContactClick = () => {
		setContactFormVisible(true);
	};

	const handleEnterClick = () => {
		setWebsiteVisible(true);
	};

	return (
		<div className='relative w-full h-screen flex items-center justify-center border-b border-slate-800 overflow-hidden pt-12'>
			<Video />
			
			{/* Enhanced background overlay */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2 }}
				className='absolute inset-0 bg-gradient-to-br from-black/50 via-black/70 to-black/50'
			/>
			
			{/* Animated background patterns */}
			<motion.div
				className='absolute inset-0 opacity-20'
				animate={{
					background: [
						'radial-gradient(circle at 20% 30%, #D8003E 0%, transparent 40%)',
						'radial-gradient(circle at 80% 70%, #0348BE 0%, transparent 40%)',
						'radial-gradient(circle at 60% 20%, #D8003E 0%, transparent 40%)',
						'radial-gradient(circle at 30% 80%, #0348BE 0%, transparent 40%)',
					],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			/>

			{/* Floating particles */}
			{isLoaded && (
				<>
					{[...Array(12)].map((_, i) => (
						<FloatingParticle 
							key={i} 
							delay={i * 0.3} 
							duration={6 + Math.random() * 4}
							className={`
								${i % 4 === 0 ? 'top-1/4 left-1/4' : ''}
								${i % 4 === 1 ? 'top-1/3 right-1/4' : ''}
								${i % 4 === 2 ? 'bottom-1/3 left-1/3' : ''}
								${i % 4 === 3 ? 'bottom-1/4 right-1/3' : ''}
							`}
						/>
					))}
				</>
			)}

			{/* Glowing orbs */}
			<GlowingOrb delay={1} className='top-1/6 left-1/6' />
			<GlowingOrb delay={3} className='top-1/4 right-1/5' />
			<GlowingOrb delay={5} className='bottom-1/5 left-1/4' />
			<GlowingOrb delay={7} className='bottom-1/6 right-1/6' />

			{/* Constellation dots */}
			{[...Array(8)].map((_, i) => (
				<ConstellationDot 
					key={i} 
					delay={i * 0.5} 
					className={`
						${i === 0 ? 'top-1/5 left-1/5' : ''}
						${i === 1 ? 'top-1/4 right-1/6' : ''}
						${i === 2 ? 'top-1/3 left-1/2' : ''}
						${i === 3 ? 'top-1/2 right-1/4' : ''}
						${i === 4 ? 'bottom-1/3 left-1/6' : ''}
						${i === 5 ? 'bottom-1/4 right-1/5' : ''}
						${i === 6 ? 'bottom-1/5 left-1/3' : ''}
						${i === 7 ? 'bottom-1/6 right-1/3' : ''}
					`}
				/>
			))}

			{/* Main content container */}
			<motion.div 
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className='relative z-10 w-11/12 lg:w-9/12 max-w-7xl mx-auto border-x border-slate-800 h-full flex flex-col justify-center'
			>
				{/* Content sections with staggered animations */}
				<AnimatePresence mode="wait">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="space-y-8 "
					>
						<MobileTitle firaSans={firaSans} />
						<DesktopTitle firaSans={firaSans} />
						<SubTitle firaSans={firaSans} />
						<HeroSectionButtons
							handleContactClick={handleContactClick}
							handleEnterClick={handleEnterClick}
							websiteVisible={websiteVisible}
						/>
					</motion.div>
				</AnimatePresence>

				{/* Scroll indicator for website visible state */}
				{websiteVisible && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.2 }}
						className='hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2'
					>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className='flex flex-col items-center text-slate-400'
						>
							<p className='text-sm mb-2 font-light'>Scroll to explore</p>
							<svg 
								className='w-5 h-5' 
								fill='none' 
								stroke='currentColor' 
								viewBox='0 0 24 24'
							>
								<path 
									strokeLinecap='round' 
									strokeLinejoin='round' 
									strokeWidth={2} 
									d='M19 14l-7 7m0 0l-7-7m7 7V3' 
								/>
							</svg>
						</motion.div>
					</motion.div>
				)}
			</motion.div>

			{/* Enhanced border glow effect */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 0.5, 0.3, 0.7, 0] }}
				transition={{ duration: 8, repeat: Infinity }}
				className='absolute inset-0 border border-fuchsia-500/10 pointer-events-none'
			/>
		</div>
	);
}
