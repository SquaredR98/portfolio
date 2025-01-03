'use client';

import {
	MotionDiv,
	MotionH3,
	MotionP,
	MotionSpan,
} from '@/components/General/ClientComponents/MotionElements';
import { Fira_Code, Fira_Sans_Extra_Condensed } from 'next/font/google';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import FrontEndDevelopment from './FrontEndDevelopment';
import BackEndDevelopment from './BackEndDevelopment';
import WebsiteMaintenanceAndConsultation from './WebsiteMaintenanceAndConsultation';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['500'],
	subsets: ['latin'],
});

export default function ServicesSection() {
	return (
		<section id='services' className='border-b border-red-600/20 '>
			<div className='w-11/12 md:w-8/12 max-w-5xl px-4 border-x border-red-600/20 mx-auto py-12'>
				<div className='h-20'>
					<MotionH3
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 3 }}
						className={`text-red-800 font-[500] text-6xl mb-8 ${firaSansCondensed.className}`}
					>
						I can help you with
					</MotionH3>
				</div>
				<FrontEndDevelopment />
				<BackEndDevelopment />
				<WebsiteMaintenanceAndConsultation />
			</div>
		</section>
	);
}
