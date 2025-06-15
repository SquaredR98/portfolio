import React from 'react';
import { MotionDiv, MotionH2, MotionP } from '../MotionTags';

interface SectionHeaderProps {
	title: string;
	highlightedWord: string;
	description: string;
	className?: string;
}

export default function SectionHeader({
	title,
	highlightedWord,
	description,
	className = '',
}: SectionHeaderProps) {
	return (
		<MotionDiv
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
			className={`text-center mb-16 ${className}`}
		>
			<MotionH2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
				{title}{' '}
				<span className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
					{highlightedWord}
				</span>
			</MotionH2>
			<div
				className={`w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 ${
					!className?.includes('text-left') ? 'mx-auto' : ''
				}`}
			></div>
			<MotionP className='text-slate-400 text-lg mt-6 max-w-2xl mx-auto'>
				{description}
			</MotionP>
		</MotionDiv>
	);
}
