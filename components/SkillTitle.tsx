import React from 'react';
import { MotionCard } from './General/ClientComponents/MotionElements';

interface ISkillTitleProps {
	name: string;
	desc: string;
	isActive: boolean;
}

export default function SkillTitle({ name, desc, isActive }: ISkillTitleProps) {
	return (
		<MotionCard
			radius='none'
			className={`border px-2 py-1 hover:cursor-pointer transition-all group rounded-md group duration-400 ease-in-out dark:bg-slate-950 ${
				isActive
					? 'border-cyan-950/30 bg-cyan-200/40 dark:border-cyan-300/40 dark:bg-slate-800 shadow-md'
					: 'dark:border-slate-900 hover:border-slate-300/80 hover:dark:border-slate-600 hover:bg-cyan-50/60 hover:dark:bg-slate-900/80'
			}`}
		>
			<h3
				className={`text-md md:text-2xl ${
					isActive
						? 'dark:text-cyan-300 text-cyan-900'
						: 'text-slate-500 group-hover:text-slate-200'
				}`}
			>
				{name}
			</h3>
			<p
				className={`text-sm dark:font-light text-slate-500 hidden md:block ${
					isActive ? 'dark:text-white/60' : 'text-slate-500'
				}`}
			>
				{desc}
			</p>
		</MotionCard>
	);
}
