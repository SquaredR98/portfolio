import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { NextFont } from 'next/dist/compiled/@next/font';

// Mobile-optimized text reveal animation
const MobileRevealText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
	const [isVisible, setIsVisible] = useState(false);
	
	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), delay * 1000);
		return () => clearTimeout(timer);
	}, [delay]);

	const words = text.split(' ');
	
	return (
		<div className={`overflow-hidden ${className}`}>
			{words.map((word: string, index: number) => (
				<motion.span
					key={index}
					initial={{ opacity: 0, y: 50, scale: 0.8 }}
					animate={isVisible ? { 
						opacity: 1, 
						y: 0, 
						scale: 1 
					} : {}}
					transition={{
						duration: 0.6,
						delay: index * 0.08,
						ease: [0.25, 0.4, 0.25, 1],
					}}
					className="inline-block mr-2 transform-gpu"
				>
					{word}
				</motion.span>
			))}
		</div>
	);
};

// Mobile gradient text with glow
const MobileGlowingText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, delay, ease: 'easeOut' }}
			className={`relative ${className}`}
		>
			{/* Subtle glow effect for mobile */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 0.6, 0.4, 0.8, 0.5] }}
				transition={{ duration: 2.5, delay: delay + 0.3, repeat: Infinity }}
				className="absolute inset-0 blur-sm bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 -z-10 rounded-lg"
			/>
			
			<MobileRevealText text={text} delay={delay} className={className} />
		</motion.div>
	);
};

export default function MobileTitle({ firaSans }: { firaSans: NextFont }) {
	return (
		<motion.div 
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.1 }}
			className='lg:hidden border-y border-slate-800 py-6 px-3 relative overflow-hidden'
		>
			{/* Animated border glow */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.2, delay: 0.3 }}
				className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent transform origin-left"
			/>
			
			{/* Main mobile title */}
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className={`text-4xl sm:text-5xl font-semibold uppercase leading-tight ${firaSans.className}`}
			>
				{/* First part - regular text */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-white mb-2"
				>
					<MobileRevealText text="Don't just build Websites" delay={0.6} />
				</motion.div>
				
				{/* Second part - gradient text with glow */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.9 }}
					className="relative"
				>
					<MobileGlowingText 
						text="Build your Online Identity" 
						delay={0.9}
						className="bg-gradient-to-r from-[#D8003E] to-[#0348BE] bg-clip-text text-transparent font-bold"
					/>
				</motion.div>
			</motion.h2>
			
			{/* Bottom border glow */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.2, delay: 1.2 }}
				className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent transform origin-right"
			/>
			
			{/* Floating particles for mobile */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.5 }}
				className="absolute top-0 left-0 w-full h-full pointer-events-none"
			>
				{[...Array(4)].map((_, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ 
							opacity: [0, 0.8, 0],
							scale: [0, 1, 0],
							x: [0, Math.random() * 60 - 30],
							y: [0, Math.random() * 60 - 30],
						}}
						transition={{
							duration: 3,
							delay: i * 0.4,
							repeat: Infinity,
							ease: "easeInOut"
						}}
						className={`absolute w-1.5 h-1.5 bg-gradient-to-r from-fuchsia-500/50 to-cyan-500/50 rounded-full
							${i % 2 === 0 ? 'top-1/4 left-1/4' : 'bottom-1/4 right-1/4'}
						`}
					/>
				))}
			</motion.div>
		</motion.div>
	);
}
