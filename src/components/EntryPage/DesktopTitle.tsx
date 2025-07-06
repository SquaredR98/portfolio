import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { NextFont } from 'next/dist/compiled/@next/font';

// Text reveal animation component
const RevealText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
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
					initial={{ opacity: 0, y: 100, rotateX: 90 }}
					animate={isVisible ? { 
						opacity: 1, 
						y: 0, 
						rotateX: 0 
					} : {}}
					transition={{
						duration: 0.8,
						delay: index * 0.1,
						ease: [0.25, 0.4, 0.25, 1],
					}}
					className="inline-block mr-4 transform-gpu"
					style={{ transformOrigin: '50% 100%' }}
				>
					{word}
				</motion.span>
			))}
		</div>
	);
};

// Glowing text effect
const GlowingText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1, delay, ease: 'easeOut' }}
			className={`relative ${className}`}
		>
			{/* Glow effect */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 0.8, 0.5, 1, 0.6] }}
				transition={{ duration: 3, delay: delay + 0.5, repeat: Infinity }}
				className="absolute inset-0 blur-lg bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 -z-10"
			>
				<div className="w-full h-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 rounded-lg" />
			</motion.div>
			
			{/* Main text */}
			<RevealText text={text} delay={delay} className={className} />
		</motion.div>
	);
};

export default function DesktopTitle({ firaSans }: { firaSans: NextFont }) {
	return (
		<div className='hidden lg:block space-y-6'>
			{/* First line with enhanced animation */}
			<motion.div 
				initial={{ opacity: 0, scaleY: 0 }}
				animate={{ opacity: 1, scaleY: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className='border-y border-slate-800 py-6 overflow-hidden relative'
			>
				{/* Animated border glow */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent transform origin-left"
				/>
				
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className={`text-6xl lg:text-8xl font-semibold uppercase text-white px-6 ${firaSans.className} relative`}
				>
					<RevealText text="CRAFTING NOT JUST APPS" delay={0.8} />
				</motion.h2>
				
				{/* Bottom border glow */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.5, delay: 1.2 }}
					className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform origin-right"
				/>
			</motion.div>

			{/* Second line with glowing effect */}
			<motion.div 
				initial={{ opacity: 0, scaleY: 0 }}
				animate={{ opacity: 1, scaleY: 1 }}
				transition={{ duration: 0.8, delay: 1.0 }}
				className='border-y border-slate-800 py-6 overflow-hidden relative'
			>
				{/* Animated border glow */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.5, delay: 1.3 }}
					className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent transform origin-left"
				/>
				
				<motion.h2
					className={`text-6xl lg:text-8xl font-bold uppercase px-6 ${firaSans.className} relative`}
				>
					<GlowingText 
						text="BUT YOUR DIGITAL PRESENCE" 
						delay={1.4}
						className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
					/>
				</motion.h2>
				
				{/* Bottom border glow */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.5, delay: 1.8 }}
					className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform origin-right"
				/>
			</motion.div>

			{/* Subtle floating particles around text */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 2.5 }}
				className="absolute top-0 left-0 w-full h-full pointer-events-none"
			>
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ 
							opacity: [0, 1, 0],
							scale: [0, 1, 0],
							x: [0, Math.random() * 100 - 50],
							y: [0, Math.random() * 100 - 50],
						}}
						transition={{
							duration: 4,
							delay: i * 0.3,
							repeat: Infinity,
							ease: "easeInOut"
						}}
						className={`absolute w-2 h-2 bg-gradient-to-r from-fuchsia-500/60 to-cyan-500/60 rounded-full
							${i % 3 === 0 ? 'top-1/4 left-1/4' : ''}
							${i % 3 === 1 ? 'top-1/2 right-1/4' : ''}
							${i % 3 === 2 ? 'bottom-1/4 left-1/2' : ''}
						`}
					/>
				))}
			</motion.div>
		</div>
	);
}
