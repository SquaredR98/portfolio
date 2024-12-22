import GeneralLinkButton from '@/components/Custom/GeneralLinkButton';
import {
	MotionDiv,
	MotionLink,
	MotionP,
} from '@/components/General/ClientComponents/MotionElements';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import React from 'react';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '500', '700'],
	subsets: ['latin'],
});

export default function HeroSectionDetails() {
	return (
		<MotionDiv className='h-2/3 flex flex-col items-center md:items-start justify-center'>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				className={`text-xl font-bold md:text-xl text-red-500/60 ${firaSansCondensed.className}`}
			>
				HI! I AM RAVI & I AM A
			</MotionP>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.6,
					duration: 1,
					ease: 'easeInOut',
				}}
				className={`text-xl md:text-3xl font-[300] text-red-500 drop-shadow ${firaSansCondensed.className}`}
			>
				DESIGNER & DEVELOPER CREATING
			</MotionP>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.9,
					duration: 2,
					ease: 'easeInOut',
				}}
				className={`text-3xl md:text-7xl font-[700] text-red-800 drop-shadow my-1 ${firaSansCondensed.className}`}
			>
				DIGITAL EXPERIENCES
			</MotionP>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 1.2,
					duration: 1,
					ease: 'easeInOut',
				}}
				className={`text-2xl md:text-3xl font-[300] text-red-500 drop-shadow ${firaSansCondensed.className}`}
			>
				ONE PIXEL AT A TIME
			</MotionP>
			<div className='mt-8 flex gap-x-8'>
				<MotionLink
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1.8 }}
					href='/portfolio'
				>
					<button
						className={`border border-red-700/50 text-red-50 bg-red-700 hover:bg-red-800 hover:drop-shadow-lg transition-all duration-300 text-xl w-40 flex justify-center items-center px-6 py-2 hover:tracking-widest ${firaSansCondensed.className}`}
					>
						MY WORK
					</button>
				</MotionLink>
				<MotionLink
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 2 }}
					href='/contact'
				>
					<button
						className={`border border-red-500 text-red-500 transition-all hover:drop-shadow-lg duration-300 text-xl w-48 flex justify-center items-center px-6 py-2 hover:tracking-widest ${firaSansCondensed.className}`}
					>
						GET IN TOUCH
					</button>
				</MotionLink>
			</div>
		</MotionDiv>
	);
}
