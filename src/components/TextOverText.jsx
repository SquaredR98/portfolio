import React from 'react';

const TextOverText = ({ text }) => {
	return (
		<div className='relative w-full'>
			<span className='text-8xl absolute -top-8 -left-4 md:-left-8 -z-10 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 animate-slide-in-from-left delay-500'>
				{text}
			</span>
			<span className='z-10 animate-fade-in'>{text}</span>
		</div>
	);
};

export default TextOverText;
