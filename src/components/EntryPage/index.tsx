'use client';

import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import React from 'react';
import Button from '../shared/Button';
import { HiArrowLongRight } from 'react-icons/hi2';
import { MotionDiv, MotionH2, MotionP } from '../shared/MotionTags';
import { useEntryState } from './EntryStateContext';
import { AnimatePresence } from 'motion/react';
import JumpingArrow from '../shared/JumpingArrow';

const firaSans = Fira_Sans_Extra_Condensed({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export default function EntryPage({}) {
	const { setContactFormVisible, setWebsiteVisible, websiteVisible } =
		useEntryState();

	const handleContactClick = () => {
		setContactFormVisible(true);
	};

	const handleEnterClick = () => {
		setWebsiteVisible(true);
	};

	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<div className='absolute top-0 left-0 w-full h-screen -z-1'>
				<video
					src='/background.mp4'
					autoPlay
					muted
					loop
					className='w-full h-full object-cover opacity-10'
				/>
			</div>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto relative'>
				<MotionH2
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					exit={{ opacity: 0, y: 50 }}
					className={`text-5xl lg:hidden font-semibold uppercase ${firaSans.className}`}
				>
					Don&apos;t just build Websites{' '}
					<span className='bg-gradient-to-r from-[#D8003E] to-[#0348BE] bg-clip-text text-transparent'>
						Build your Online Identity
					</span>
				</MotionH2>
				<MotionH2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 1,
						delay: 0.2,
						ease: 'easeInOut',
					}}
					exit={{ opacity: 0 }}
					className={`hidden lg:block text-8xl font-semibold uppercase text-white ${firaSans.className}`}
				>
					CRAFTING NOT JUST APPS
				</MotionH2>
				<MotionH2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 1,
						delay: 0.5,
						ease: 'easeInOut',
					}}
					exit={{ opacity: 0 }}
					className={`hidden lg:block text-8xl mt-4 bg-gradient-to-r from-fuchsia-500  to-cyan-500 bg-clip-text text-transparent font-bold ${firaSans.className} uppercase`}
				>
					BUT YOUR DIGITAL PRESENCE
				</MotionH2>
				<MotionDiv
					initial={{ width: 0 }}
					animate={{ width: '40rem' }}
					transition={{ duration: 0.4, delay: 0.8 }}
					exit={{ width: 0 }}
					className='w-[40rem] hidden lg:block h-[2px] bg-gradient-to-r from-white to-white/0 my-8'
				/>
				<MotionDiv
					initial={{ width: 0 }}
					animate={{ width: '20rem' }}
					transition={{
						duration: 0.4,
						delay: 0.8,
						ease: 'easeInOut',
					}}
					exit={{ width: 0 }}
					className='lg:hidden w-[20rem] h-[2px] bg-gradient-to-r from-cyan-400/30 to-cyan-400/0 my-2'
				/>
				<MotionP
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: 1,
						ease: 'easeInOut',
					}}
					exit={{ opacity: 0, y: -40 }}
					className={`text-white/80 text-lg lg:text-2xl font-[300] tracking-wider ${firaSans.className}`}
				>
					Unique. Scalable. Designed for growth. Let&apos;s
					craft something that makes your brand
					unforgettable.
				</MotionP>
				<AnimatePresence>
					{!websiteVisible ? (
						<div
							className={`flex sm:flex-row flex-col gap-y-4 gap-x-6 mt-6 lg:mt-8 ${firaSans.className}`}
						>
							<Button
								type='BUTTON'
								variant='PRIMARY'
								onClick={handleContactClick}
								className='h-10 lg:h-12 lg:w-72 w-full text-xl lg:text-2xl font-normal px-8 py-3'
								initial={{
									opacity: 0,
									y: -30,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{
									duration: 0.5,
									delay: 1.5,
									ease: 'easeInOut',
								}}
							>
								TELL ME YOUR IDEA
							</Button>
							<Button
								type='BUTTON'
								variant='SECONDARY'
								onClick={handleEnterClick}
								className='h-10 lg:h-12 lg:w-72 w-full text-xl lg:text-2xl font-normal px-8 py-3'
								initial={{
									opacity: 0,
									y: -30,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{
									duration: 0.5,
									delay: 2,
									ease: 'easeInOut',
								}}
							>
								<span className='flex items-center gap-1'>
									ENTER{' '}
									<HiArrowLongRight className='inline text-4xl' />
								</span>
							</Button>
						</div>
					) : (
						<div
							className={`flex sm:flex-row flex-col gap-y-4 gap-x-6 mt-6 lg:mt-8 ${firaSans.className}`}
						>
							<Button
								type='LINK'
								variant='PRIMARY'
								href='/portfolio'
								className='h-10 lg:h-12 lg:w-72 w-full text-xl lg:text-2xl font-normal px-8 py-3'
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{
									duration: 0.5,
									ease: 'easeInOut',
								}}
							>
								MY WORKS
							</Button>
							<Button
								type='BUTTON'
								variant='SECONDARY'
								onClick={handleContactClick}
								className='h-10 lg:h-12 lg:w-72 w-full text-xl lg:text-2xl font-normal px-8 py-3'
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{
									duration: 0.5,
									ease: 'easeInOut',
								}}
							>
								GET IN TOUCH
							</Button>
						</div>
					)}
				</AnimatePresence>
				{websiteVisible && <JumpingArrow className='mt-8 absolute -bottom-28' />}
			</div>
		</div>
	);
}
