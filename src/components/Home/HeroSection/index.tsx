import { Fira_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';
import { HiSparkles, HiArrowRight, HiRocketLaunch } from 'react-icons/hi2';

const firaSans = Fira_Sans({ weight: ['300'], subsets: ['latin'] });

const FloatingElement = ({ delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ 
			opacity: [0, 1, 0],
			y: [20, -20, 20],
			scale: [0.8, 1.2, 0.8]
		}}
		transition={{
			duration: 4,
			delay,
			repeat: Infinity,
			ease: "easeInOut"
		}}
		className={`absolute pointer-events-none ${className}`}
	>
		<HiSparkles className='w-4 h-4 text-fuchsia-400/60' />
	</motion.div>
);

export default function HeroSection() {
	return (
		<div className='min-h-screen min-w-screen flex flex-col items-center justify-center bg-black/70 back relative overflow-hidden'>
			{/* Background Floating Elements */}
			<FloatingElement delay={0} className='top-1/4 left-1/4' />
			<FloatingElement delay={1} className='top-1/3 right-1/4' />
			<FloatingElement delay={2} className='bottom-1/4 left-1/3' />
			<FloatingElement delay={3} className='bottom-1/3 right-1/3' />
			<FloatingElement delay={4} className='top-1/2 left-1/6' />
			<FloatingElement delay={5} className='top-1/2 right-1/6' />

			{/* Main Content */}
			<div className='relative z-10 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='mb-6'
				>
					<motion.h2 
						className='text-5xl font-bold'
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
					>
						Don&apos;t just build Websites
					</motion.h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='mb-8'
				>
					<motion.h1 
						className='text-5xl mt-4 bg-gradient-to-r from-[#D8003E] to-[#0348BE] bg-clip-text text-transparent font-bold'
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
					>
						Build your Online Identity
					</motion.h1>
				</motion.div>

				<motion.div 
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='w-96 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0 my-8 mx-auto'
				></motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className={`max-w-[32rem] opacity-75 text-center mx-auto ${firaSans.className}`}
				>
					Unique. Scalable. Designed for growth. Let&apos;s craft
					something that makes your brand unforgettable.
				</motion.p>

				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className={`flex gap-x-6 mt-8 ${firaSans.className}`}
				>
					<motion.div
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.2 }}
					>
						<Link
							href='#contact'
							className='group bg-gradient-to-r from-[#D8003E] to-[#0348BE] h-12 w-48 flex items-center justify-center rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#D8003E]/25 relative overflow-hidden'
						>
							<span className='relative z-10 font-semibold flex items-center gap-2'>
								TELL ME YOUR IDEA
								<HiRocketLaunch className='w-4 h-4 group-hover:rotate-12 transition-transform duration-300' />
							</span>
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-[#D8003E]/20 to-[#0348BE]/20'
								initial={{ x: '-100%' }}
								whileHover={{ x: '100%' }}
								transition={{ duration: 0.5 }}
							/>
						</Link>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.2 }}
					>
						<Link
							href='#projects'
							className='group bg-gradient-to-r from-[#D8003E] to-[#0348BE] h-12 w-60 flex items-center p-[1px] rounded-lg hover:shadow-lg hover:shadow-[#0348BE]/25 transition-all duration-300'
						>
							<span className='flex items-center justify-center h-full w-full bg-black rounded-lg transition-all duration-300 group-hover:bg-black/90 font-semibold'>
								<span className='flex items-center gap-2'>
									SEE WHAT I HAVE BUILT
									<HiArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
								</span>
							</span>
						</Link>
					</motion.div>
				</motion.div>

				{/* Call to Action Hint */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.2 }}
					className='mt-12'
				>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className='flex flex-col items-center text-slate-400'
					>
						<p className='text-sm mb-2'>Scroll to explore</p>
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
			</div>

			{/* Animated Background Gradient */}
			<motion.div
				className='absolute inset-0 opacity-10'
				animate={{
					background: [
						'radial-gradient(circle at 20% 80%, #D8003E 0%, transparent 50%)',
						'radial-gradient(circle at 80% 20%, #0348BE 0%, transparent 50%)',
						'radial-gradient(circle at 40% 40%, #D8003E 0%, transparent 50%)',
					],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			/>
		</div>
	);
}
