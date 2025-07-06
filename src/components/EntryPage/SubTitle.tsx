import React from 'react'
import { MotionP } from '../shared/MotionTags';
import { NextFont } from 'next/dist/compiled/@next/font';

export default function SubTitle({ firaSans }: { firaSans: NextFont }) {
  return (
		<div className='border-y border-slate-800 py-4 mt-8 overflow-hidden'>
			<MotionP
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.3,
					delay: .6,
					ease: 'easeInOut',
				}}
				exit={{ opacity: 0, y: -40 }}
				className={`text-white/80  px-3 md:px-6 lg:text-lg font-[300] tracking-wider ${firaSans.className}`}
			>
				Unique. Scalable. Designed for growth. Let&apos;s craft
				something that makes your brand unforgettable.
			</MotionP>
		</div>
  );
}
