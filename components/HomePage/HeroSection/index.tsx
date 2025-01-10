import React from 'react';
import HeroSectionDetails from './HeroSectionDetails';

export default function HeroSection() {
	return (
		<section className='h-[700px] flex items-center justify-center border-b border-red-600/20 pt-28'>
			<div className='w-11/12 md:w-8/12 max-w-5xl md:pt-0 px-4 border-x border-red-600/20 h-[700px] flex items-center justify-start'>
				<HeroSectionDetails />
			</div>
		</section>
	);
}
