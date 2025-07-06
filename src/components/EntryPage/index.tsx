'use client';

import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import React from 'react';
import { useEntryState } from './EntryStateContext';
import Video from './Video';
import MobileTitle from './MobileTitle';
import DesktopTitle from './DesktopTitle';
import SubTitle from './SubTitle';
import HeroSectionButtons from './Buttons';

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
		<div className='w-full h-screen flex items-center justify-center border-b border-slate-800'>
			<Video />
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto relative border-x border-slate-800 h-full flex flex-col justify-center'>
				<MobileTitle firaSans={firaSans} />
				<DesktopTitle firaSans={firaSans} />
				<SubTitle firaSans={firaSans} />
				<HeroSectionButtons
					handleContactClick={handleContactClick}
					handleEnterClick={handleEnterClick}
					websiteVisible={websiteVisible}
				/>
				{/* <AnimatePresence>
					{!websiteVisible ? (
						<div
							className={`flex border-b border-slate-800 pt-4 mt-8 sm:flex-row flex-col gap-y-4 gap-x-6 ${firaSans.className}`}
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
				</AnimatePresence> */}
				{/* {websiteVisible && (
					<JumpingArrow className='mt-8 absolute -bottom-28' />
				)} */}
			</div>
		</div>
	);
}
