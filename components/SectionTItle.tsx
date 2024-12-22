'use client';

import React from 'react';
import { MotionSpan } from './General/ClientComponents/MotionElements';
import { useInView } from 'react-intersection-observer';

interface ISectionTitleProps {
	text: string;
}

const SectionTitle = ({ text }: ISectionTitleProps) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.5, // Adjust threshold as needed
	});
	return (
		<div
			className='relative w-full h-full dark:bg-slate-950 py-4 my-8 md:my-0 overflow-hidden'
			ref={ref}
		>
			<MotionSpan
				variants={{
					hidden: {
						opacity: 0,
					},
					visible: {
						opacity: 1,
					},
				}}
				initial='hidden'
				animate={inView ? 'visible' : 'hidden'}
				transition={{
					delay: 0.2,
					duration: 0.2,
					ease: 'easeInOut',
				}}
				className='text-6xl font-bold relative text-cyan-900 dark:text-white z-[5] drop-shadow-lg'
			>
				{text}
				<div className='h-2 w-16 bg-cyan-900' />
			</MotionSpan>
			<MotionSpan
				variants={{
					hidden: {
						zoom: 1.5,
						opacity: 0,
					},
					visible: {
						zoom: 1,
						opacity: 1,
					},
				}}
				initial='hidden'
				animate={inView ? 'visible' : 'hidden'}
				transition={{
					delay: 0,
					duration: 0.2,
					ease: 'easeInOut',
				}}
				className='text-8xl md:text-9xl absolute -top-1 md:-top-5 md:left-2 -left-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-900 dark:to-slate-800 font-bold z-[1]'
			>
				{text}
			</MotionSpan>
		</div>
	);
};

export default SectionTitle;
