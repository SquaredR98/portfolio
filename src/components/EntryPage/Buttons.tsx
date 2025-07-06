import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { HiArrowLongRight, HiSparkles, HiRocketLaunch } from 'react-icons/hi2';

export default function HeroSectionButtons({
	handleContactClick,
	handleEnterClick,
	websiteVisible,
}: {
	handleContactClick: () => void;
	handleEnterClick: () => void;
	websiteVisible: boolean;
}) {
	const router = useRouter();

	const handlePrimaryButtonClick = () => {
		if (!websiteVisible) {
			handleContactClick();
		} else {
			router.push('/projects');
		}
	};
	
	const handleSecondaryButtonClick = () => {
		if (!websiteVisible) {
			handleEnterClick();
		} else {
			handleContactClick();
		}
	};

	return (
		<motion.div 
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 2.6 }}
			className='grid md:grid-cols-2 border-y border-slate-800 mt-8 relative overflow-hidden'
		>
			{/* Animated border glow */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.5, delay: 2.8 }}
				className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent transform origin-center"
			/>
			
			{/* Primary Button */}
			<motion.button
				initial={{ opacity: 0, x: -30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 3.0 }}
				whileHover={{ 
					scale: 1.02,
					backgroundColor: 'rgba(139, 69, 19, 0.1)' 
				}}
				whileTap={{ scale: 0.98 }}
				className='group relative w-full text-xl lg:text-2xl font-normal py-6 cursor-pointer overflow-hidden bg-gradient-to-r from-transparent to-transparent hover:from-fuchsia-500/10 hover:to-cyan-500/10 transition-all duration-300'
				onClick={handlePrimaryButtonClick}
			>
				{/* Hover effect background */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-cyan-500/5"
					initial={{ x: '-100%' }}
					whileHover={{ x: '100%' }}
					transition={{ duration: 0.6 }}
				/>
				
				{/* Floating particles on hover */}
				<motion.div
					className="absolute inset-0 pointer-events-none"
					initial={{ opacity: 0 }}
					whileHover={{ opacity: 1 }}
				>
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-fuchsia-400/60 rounded-full"
							animate={{
								x: [Math.random() * 100, Math.random() * 200],
								y: [Math.random() * 50, Math.random() * 100],
								opacity: [0, 1, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								delay: i * 0.3,
							}}
						/>
					))}
				</motion.div>
				
				<AnimatePresence mode="wait">
					{websiteVisible ? (
						<motion.span
							key="works"
							initial={{ opacity: 0, x: -20, rotateY: 90 }}
							animate={{ opacity: 1, x: 0, rotateY: 0 }}
							exit={{ opacity: 0, x: 20, rotateY: -90 }}
							transition={{ duration: 0.4 }}
							className='relative z-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent hover:text-white font-bold tracking-wider transition-all duration-300 ease-in-out flex items-center justify-center gap-2'
						>
							<HiSparkles className="w-6 h-6 text-fuchsia-500 group-hover:rotate-180 transition-transform duration-500" />
							MY WORKS
						</motion.span>
					) : (
						<motion.span
							key="idea"
							initial={{ opacity: 0, x: 20, rotateY: -90 }}
							animate={{ opacity: 1, x: 0, rotateY: 0 }}
							exit={{ opacity: 0, x: -20, rotateY: 90 }}
							transition={{ duration: 0.4 }}
							className='relative z-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent hover:text-white font-bold tracking-wider transition-all duration-300 ease-in-out flex items-center justify-center gap-2'
						>
							<HiRocketLaunch className="w-6 h-6 text-fuchsia-500 group-hover:rotate-12 transition-transform duration-300" />
							TELL ME YOUR IDEA
						</motion.span>
					)}
				</AnimatePresence>
			</motion.button>

			{/* Secondary Button */}
			<motion.button
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 3.2 }}
				whileHover={{ 
					scale: 1.02,
					backgroundColor: 'rgba(139, 69, 19, 0.1)' 
				}}
				whileTap={{ scale: 0.98 }}
				className='group relative w-full text-xl lg:text-2xl font-normal py-6 border-t md:border-t-0 md:border-l border-slate-800 cursor-pointer overflow-hidden bg-gradient-to-r from-transparent to-transparent hover:from-cyan-500/10 hover:to-fuchsia-500/10 transition-all duration-300'
				onClick={handleSecondaryButtonClick}
			>
				{/* Hover effect background */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-fuchsia-500/5"
					initial={{ x: '100%' }}
					whileHover={{ x: '-100%' }}
					transition={{ duration: 0.6 }}
				/>
				
				{/* Floating particles on hover */}
				<motion.div
					className="absolute inset-0 pointer-events-none"
					initial={{ opacity: 0 }}
					whileHover={{ opacity: 1 }}
				>
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
							animate={{
								x: [Math.random() * 200, Math.random() * 100],
								y: [Math.random() * 100, Math.random() * 50],
								opacity: [0, 1, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								delay: i * 0.3,
							}}
						/>
					))}
				</motion.div>
				
				<AnimatePresence mode="wait">
					{websiteVisible ? (
						<motion.span
							key="touch"
							initial={{ opacity: 0, y: -20, scale: 0.8 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 20, scale: 0.8 }}
							transition={{ duration: 0.4 }}
							className="text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent font-bold tracking-wider transition-all duration-300"
						>
							GET IN TOUCH
						</motion.span>
					) : (
						<motion.span
							key="enter"
							initial={{ opacity: 0, y: 20, scale: 0.8 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -20, scale: 0.8 }}
							transition={{ duration: 0.4 }}
							className="text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
						>
							ENTER
							<motion.div
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							>
								<HiArrowLongRight className='text-4xl group-hover:translate-x-2 transition-transform duration-300' />
							</motion.div>
						</motion.span>
					)}
				</AnimatePresence>
			</motion.button>
			
			{/* Bottom border glow */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.5, delay: 3.4 }}
				className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent transform origin-center"
			/>
			
			{/* Button separator glow effect */}
			<motion.div
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				transition={{ duration: 1, delay: 3.6 }}
				className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-600/50 to-transparent hidden md:block"
			/>
		</motion.div>
	);
}
