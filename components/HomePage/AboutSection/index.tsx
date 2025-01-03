'use client';

import { MotionH3 } from '@/components/General/ClientComponents/MotionElements';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ShortDescription from './ShortDescription';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['700'],
	subsets: ['latin'],
});

export default function AboutSection() {
	const { inView, ref } = useInView({
		threshold: 1,
		triggerOnce: true,
	});
	return (
		<section className='border-b border-red-600/20 '>
			<div className='w-11/12 md:w-8/12 max-w-5xl px-4 border-x border-red-600/20 mx-auto py-12'>
				<div className='h-20' ref={ref}>
					<MotionH3
						initial={{ opacity: 0, y: 40 }}
						animate={{
							opacity: inView ? 1 : 0,
							y: inView ? 0 : 40,
						}}
						transition={{ duration: 0.8 }}
						className={`text-red-800 font-bold text-6xl uppercase mb-8 ${firaSansCondensed.className}`}
					>
						ABOUT ME
					</MotionH3>
				</div>
				<ShortDescription />
			</div>
		</section>
	);
}
