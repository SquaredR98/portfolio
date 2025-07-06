import React from 'react';
import { MotionSpan } from '../shared/MotionTags';
import { AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { HiArrowLongRight } from 'react-icons/hi2';

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
		<div className='grid md:grid-cols-2 border-y border-slate-800 mt-8'>
			<AnimatePresence>
				<button
					className='w-full text-xl lg:text-2xl font-normal py-3 cursor-pointer relative '
					onClick={handlePrimaryButtonClick}
				>
					<AnimatePresence>
						{websiteVisible ? (
							<MotionSpan
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.3,
									delay: 0.8,
									ease: 'easeInOut',
								}}
								exit={{ opacity: 0, x: -30 }}
								className='relative z-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent hover:text-white font-bold tracking-wider transition-all duration-300 ease-in-out'
							>
								MY WORKS
							</MotionSpan>
						) : (
							<MotionSpan
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.3,
									delay: 0.8,
									ease: 'easeInOut',
								}}
								exit={{ opacity: 0, x: -30 }}
								className='relative z-10 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent hover:text-white font-bold tracking-wider transition-all duration-300 ease-in-out'
							>
								TELL ME YOUR IDEA
							</MotionSpan>
						)}
					</AnimatePresence>
				</button>
			</AnimatePresence>
			<button
				className='w-full text-xl lg:text-2xl font-normal py-3 border-t md:border-t-0 md:border-l border-slate-800 cursor-pointer'
				onClick={handleSecondaryButtonClick}
			>
				<AnimatePresence>
					{websiteVisible ? (
						<MotionSpan
							initial={{ opacity: 0, y: -30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.3,
								delay: 0.8,
								ease: 'easeInOut',
							}}
							exit={{ opacity: 0, y: -30 }}
						>
							GET IN TOUCH
						</MotionSpan>
					) : (
						<MotionSpan
							initial={{ opacity: 0, y: -30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.3,
								delay: 0.8,
								ease: 'easeInOut',
							}}
							exit={{ opacity: 0, y: -30 }}
						>
							ENTER{' '}
							<HiArrowLongRight className='inline text-4xl' />
						</MotionSpan>
					)}
				</AnimatePresence>
			</button>
		</div>
	);
}
