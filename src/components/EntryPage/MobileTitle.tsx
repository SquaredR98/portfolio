import React from 'react';
import { MotionH2 } from '../shared/MotionTags';
import { NextFont } from 'next/dist/compiled/@next/font';

export default function MobileTitle({ firaSans }: { firaSans: NextFont }) {
	return (
		<div className='lg:hidden border-y border-slate-800 py-4 pl-3'>
			<MotionH2
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.2 }}
				exit={{ opacity: 0, y: 50 }}
				className={`text-5xl font-semibold uppercase ${firaSans.className}`}
			>
				Don&apos;t just build Websites{' '}
				<span className='bg-gradient-to-r from-[#D8003E] to-[#0348BE] bg-clip-text text-transparent'>
					Build your Online Identity
				</span>
			</MotionH2>
		</div>
	);
}
