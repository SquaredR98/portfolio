/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { MotionButton, MotionLink } from '../MotionTags';

export default function Button({
	type,
	href,
	children,
	onClick,
	variant = 'PRIMARY',
	className = '',
	initial,
	animate,
	exit,
	transition,
}: {
	href?: string;
	onClick?: () => void;
	type: 'LINK' | 'BUTTON' | 'SUBMIT';
	variant?: 'PRIMARY' | 'SECONDARY' | 'LINK';
	className?: string;
	children?: ReactNode;
	initial?: Record<string, any>;
	animate?: Record<string, any>;
	exit?: Record<string, any>;
	transition?: Record<string, any>;
}) {
	if (variant === 'PRIMARY') {
		className = `bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300 flex items-center justify-center cursor-pointer ${className}`;
	} else if (variant === 'SECONDARY') {
		className = `border border-slate-600 text-slate-300 font-medium hover:border-slate-500 hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer ${className}`;
	} else if (variant === 'LINK') {
		className = `transition-all duration-300 hover:text-fuchsia-400 cursor-pointer ${className}`;
	}
	
	if (type === 'BUTTON' || type === 'SUBMIT') {
		return (
			<MotionButton
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
				onClick={onClick}
				className={className}
			>
				{children}
			</MotionButton>
		);
	}

	if (type === 'LINK')
		return (
			<MotionLink
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
				href={href as string}
				className={className}
			>
				{children}
			</MotionLink>
		);
}
