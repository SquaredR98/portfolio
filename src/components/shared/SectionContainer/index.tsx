import React, { ReactNode } from 'react';
import { MotionSection } from '../MotionTags';

interface SectionContainerProps {
	children: ReactNode;
	id: string;
	background?: 'slate-950' | 'slate-900';
	className?: string;
}

export default function SectionContainer({ 
	children, 
	id, 
	background = 'slate-950',
	className = '' 
}: SectionContainerProps) {
	return (
		<MotionSection 
			id={id} 
			className={`py-20 bg-${background} ${className}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{children}
			</div>
		</MotionSection>
	);
} 