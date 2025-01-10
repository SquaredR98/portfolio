import React from 'react';
import { MotionA } from '../ClientComponents/MotionElements';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '500', '700'],
	subsets: ['latin'],
});

export default function Icon() {
	return (
		<MotionA
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 2 }}
			href='/'
			className={`group`}
		>
			<div
				className={`w-fit border px-1 pt-1 border-red-900 dark:border-cyan-500/30 group-hover:border-red-900 dark:group-hover:border-cyan-500/50 transition-all ease-in-out duration-500 ${firaSansCondensed.className}`}
			>
				<p className='text-xl md:text-2xl font-[600] text-center group-hover:tracking-wider text-red-700 group-hover:text-red-800 dark:group-hover:text-cyan-300 transition-all ease-in-out duration-300 leading-none'>
					RAVI RANJAN
				</p>
				<hr className='border-red-900 group-hover:border-red-900/80 dark:group-hover:border-cyan-500/50 transition-all ease-in-out duration-500 leading-none' />
				<p className='text-xs md:text-medium font-[400] text-red-800 group-hover:text-red-800/80'>
					FULL STACK DEVELOPER
				</p>
			</div>
		</MotionA>
	);
}
