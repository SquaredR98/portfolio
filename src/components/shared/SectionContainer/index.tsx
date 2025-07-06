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
			className={`bg-${background} ${className}`}
		>
			<div className='w-11/12 lg:w-9/12 max-w-7xl mx-auto border-x border-slate-800'>
				{children}
			</div>
		</MotionSection>
	);
} 