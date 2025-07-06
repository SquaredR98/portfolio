import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { NextFont } from 'next/dist/compiled/@next/font';

// Typewriter effect for subtitle
const TypewriterText = ({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) => {
	const [displayText, setDisplayText] = useState('');
	const [isAnimating, setIsAnimating] = useState(false);
	
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsAnimating(true);
			let currentIndex = 0;
			
			const typeInterval = setInterval(() => {
				if (currentIndex <= text.length) {
					setDisplayText(text.slice(0, currentIndex));
					currentIndex++;
				} else {
					clearInterval(typeInterval);
				}
			}, 50);
			
			return () => clearInterval(typeInterval);
		}, delay * 1000);
		
		return () => clearTimeout(timer);
	}, [text, delay]);
	
	return (
		<div className={className}>
			{displayText}
			{isAnimating && displayText.length < text.length && (
				<motion.span
					animate={{ opacity: [1, 0] }}
					transition={{ duration: 0.8, repeat: Infinity }}
					className="inline-block ml-1"
				>
					|
				</motion.span>
			)}
		</div>
	);
};

export default function SubTitle({ firaSans }: { firaSans: NextFont }) {
	return (
		<motion.div 
			initial={{ opacity: 0, scaleY: 0 }}
			animate={{ opacity: 1, scaleY: 1 }}
			transition={{ duration: 0.6, delay: 1.8 }}
			className='border-y border-slate-800 py-6 mt-8 overflow-hidden relative'
		>
			{/* Animated border glow */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.5, delay: 2.0 }}
				className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent transform origin-center"
			/>
			
			{/* Main subtitle with enhanced animation */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 2.1 }}
				className={`text-white/80 px-3 md:px-6 lg:text-lg font-[300] tracking-wider leading-relaxed ${firaSans.className} relative`}
			>
				{/* Subtle glow effect */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 0.3, 0.1, 0.4, 0.2] }}
					transition={{ duration: 4, delay: 2.3, repeat: Infinity }}
					className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-cyan-500/5 rounded-lg blur-sm -z-10"
				/>
				
				{/* Typewriter effect for the subtitle */}
				<TypewriterText 
					text="Unique. Scalable. Designed for growth. Let's craft something that makes your brand unforgettable."
					delay={2.2}
					className="relative z-10"
				/>
			</motion.div>
			
			{/* Bottom border glow */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.5, delay: 2.4 }}
				className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transform origin-center"
			/>
			
			{/* Floating accent dots */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 2.8 }}
				className="absolute top-0 left-0 w-full h-full pointer-events-none"
			>
				{[...Array(3)].map((_, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ 
							opacity: [0, 0.6, 0],
							scale: [0, 1, 0],
							y: [0, -20, 0],
						}}
						transition={{
							duration: 3,
							delay: i * 0.5,
							repeat: Infinity,
							ease: "easeInOut"
						}}
						className={`absolute w-1 h-1 bg-gradient-to-r from-fuchsia-500/60 to-cyan-500/60 rounded-full
							${i === 0 ? 'top-1/4 left-1/6' : ''}
							${i === 1 ? 'top-1/2 right-1/6' : ''}
							${i === 2 ? 'bottom-1/4 left-1/2' : ''}
						`}
					/>
				))}
			</motion.div>
		</motion.div>
	);
}
