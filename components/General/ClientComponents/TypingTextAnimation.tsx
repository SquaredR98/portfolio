import { Variants } from 'framer-motion';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';
import {
	MotionH1,
	MotionH2,
	MotionH3,
	MotionP,
	MotionSpan,
} from './MotionElements';

type TagType = 'p' | 'h1' | 'h2' | 'h3';

export default function TypingTextAnimation({
	text,
	className,
	font,
	tag = 'p',
	parentVariants,
	childVariants,
}: {
	text: string;
	className?: string;
	font?: NextFont;
	tag?: TagType;
	parentVariants?: Variants;
	childVariants?: Variants;
}) {
	const MotionTag =
		tag === 'h1'
			? MotionH1
			: tag === 'h2'
				? MotionH2
				: tag === 'h3'
					? MotionH3
					: MotionP;

	return (
		<MotionTag
			variants={parentVariants}
			initial='hidden'
			animate='visible'
			className={`${font?.className} ${className}`}
		>
			{text.split('').map((char, index) => (
				<MotionSpan
					key={`${char}-${index}`}
					variants={childVariants}
					transition={{
						ease: 'easeInOut',
					}}
				>
					{char}
				</MotionSpan>
			))}
		</MotionTag>
	);
}
