import React, { ReactNode } from 'react';
import { MotionDiv } from '../MotionTags';

interface AnimationProps {
	initial?: Record<string, number | string>;
	animate?: Record<string, number | string>;
	transition?: Record<string, number | string>;
}

interface AnimatedContainerProps {
	children: ReactNode;
	className?: string;
	initial?: Record<string, number | string>;
	animate?: Record<string, number | string>;
	exit?: Record<string, number | string>;
	transition?: Record<string, number | string>;
	viewport?: Record<string, boolean | number>;
	delay?: number;
	variants?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'custom';
}

const animationVariants: Record<string, AnimationProps> = {
	fadeUp: {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 }
	},
	fadeIn: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: { duration: 0.6 }
	},
	slideLeft: {
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: 0 },
		transition: { duration: 0.6 }
	},
	slideRight: {
		initial: { opacity: 0, x: 50 },
		animate: { opacity: 1, x: 0 },
		transition: { duration: 0.6 }
	},
	scale: {
		initial: { opacity: 0, scale: 0.8 },
		animate: { opacity: 1, scale: 1 },
		transition: { duration: 0.6 }
	}
};

export default function AnimatedContainer({ 
	children, 
	className = '', 
	initial,
	animate,
	exit,
	transition,
	viewport = { once: true },
	delay = 0,
	variants = 'fadeUp'
}: AnimatedContainerProps) {
	const variant = variants === 'custom' ? null : animationVariants[variants];
	
	const finalInitial = initial || variant?.initial;
	const finalAnimate = animate || variant?.animate;
	const finalTransition = {
		...(variant?.transition || {}),
		...transition,
		delay: delay || (variant?.transition as Record<string, number>)?.delay || 0
	};

	return (
		<MotionDiv
			initial={finalInitial}
			animate={finalAnimate}
			exit={exit}
			transition={finalTransition}
			viewport={viewport}
			className={className}
		>
			{children}
		</MotionDiv>
	);
} 