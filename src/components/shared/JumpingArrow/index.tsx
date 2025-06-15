import React from 'react';
import { MotionDiv, MotionP } from '../MotionTags';
import { HiArrowDown } from 'react-icons/hi2';

interface JumpingArrowProps {
	className?: string;
}

export default function JumpingArrow({ className = '' }: JumpingArrowProps) {
	return (
		<MotionDiv
			className={`flex justify-center ${className}`}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.5 }}
		>
			<MotionDiv
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className="flex flex-col items-center gap-2 cursor-pointer group"
				onClick={() => {
					// Smooth scroll to the first section
					document.getElementById('about')?.scrollIntoView({
						behavior: 'smooth',
					});
				}}
			>
				<MotionDiv
					animate={{
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-fuchsia-500/25 transition-all duration-300"
				>
					<HiArrowDown className="w-6 h-6 text-white" />
				</MotionDiv>
				<MotionP
					animate={{
						opacity: [0.7, 1, 0.7],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className="text-slate-400 text-sm font-medium group-hover:text-fuchsia-400 transition-colors"
				>
					Scroll to explore
				</MotionP>
			</MotionDiv>
		</MotionDiv>
	);
} 