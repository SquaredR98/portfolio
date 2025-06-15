'use client';

import React from 'react';

interface TechnologyBadgeProps {
	technology: string;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

export default function TechnologyBadge({ 
	technology, 
	size = 'sm',
	className = '' 
}: TechnologyBadgeProps) {
	const sizeClasses = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-3 py-1 text-sm',
		lg: 'px-4 py-2 text-base'
	};

	return (
		<span
			className={`bg-slate-800 text-slate-300 rounded ${sizeClasses[size]} ${className}`}
		>
			{technology}
		</span>
	);
} 