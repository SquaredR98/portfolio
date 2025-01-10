import GeneralLinkButton from '@/components/Custom/GeneralLinkButton';
import {
	MotionDiv,
	MotionLink,
	MotionP,
} from '@/components/General/ClientComponents/MotionElements';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import React from 'react';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '400', '500', '700'],
	subsets: ['latin'],
});

export default function HeroSectionDetails() {
	return (
		<MotionDiv className='h-2/3 flex flex-col items-center md:items-start justify-center'>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				className={`text-xl font-normal md:text-3xl text-red-700/70 ${firaSansCondensed.className}`}
			>
				Hello, My name is
			</MotionP>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.6,
					duration: 1,
					ease: 'easeInOut',
				}}
				className={`text-3xl md:text-7xl font-[500] text-red-900 mt-4 ${firaSansCondensed.className}`}
			>
				Ravi Ranjan,
			</MotionP>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.9,
					duration: 2,
					ease: 'easeInOut',
				}}
				className={`text-3xl md:text-7xl font-[500] text-red-900 my-1 ${firaSansCondensed.className}`}
			>
				A Full Stack Developer
			</MotionP>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.9,
					duration: 2,
					ease: 'easeInOut',
				}}
				className={`text-3xl md:text-7xl font-[500] text-red-900 my-1 ${firaSansCondensed.className}`}
			>
				Creating Digital Experiences
			</MotionP>
			<MotionP
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 1.2,
					duration: 1,
					ease: 'easeInOut',
				}}
				className={`text-lg md:text-2xl text-center md:text-left mt-4 font-[300] text-red-600 ${firaSansCondensed.className}`}
			>
				Crafting innovative digital solutions with expertise in
				full-stack development, scalable architectures, and
				seamless user experiences. Let's transform your ideas
				into reality with precision, performance, and
				creativity.
			</MotionP>
			<div className='mt-8 flex flex-col md:flex-row gap-y-4 gap-x-8 w-full md:w-auto'>
				<MotionLink
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1.8 }}
					href='/portfolio'
				>
					<button
						className={`border border-red-700/50 text-red-50 bg-red-700 hover:bg-red-800 hover:drop-shadow-lg transition-all duration-300 text-xl w-full md:w-40 flex justify-center items-center px-6 py-2 hover:tracking-widest ${firaSansCondensed.className}`}
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
						className={`border border-red-500 text-red-500 transition-all hover:drop-shadow-lg duration-300 text-xl w-full md:w-48 flex justify-center items-center px-6 py-2 hover:tracking-widest ${firaSansCondensed.className}`}
					>
						GET IN TOUCH
					</button>
				</MotionLink>
			</div>
		</MotionDiv>
	);
}
