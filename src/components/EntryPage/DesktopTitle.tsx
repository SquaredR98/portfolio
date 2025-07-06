import React from 'react';
import { MotionH2 } from '../shared/MotionTags';
import { NextFont } from 'next/dist/compiled/@next/font';

export default function DesktopTitle({ firaSans }: { firaSans: NextFont }) {
	return (
		<div className='hidden lg:block'>
			<div className='border-y border-slate-800 py-4 mb-8 overflow-hidden'>
				<MotionH2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: .3,
						delay: 0,
						ease: 'easeInOut',
					}}
					exit={{ opacity: 0 }}
					className={`text-8xl font-semibold uppercase text-white px-6 ${firaSans.className}`}
				>
					CRAFTING NOT JUST APPS
				</MotionH2>
			</div>
			<div className='border-y border-slate-800 py-4 overflow-hidden'>
				<MotionH2
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: .3,
						delay: 0.3,
						ease: 'easeInOut',
					}}
					exit={{ opacity: 0 }}
					className={`text-8xl mt-4 bg-gradient-to-r from-fuchsia-500 px-6 to-cyan-500 bg-clip-text text-transparent font-bold ${firaSans.className} uppercase`}
				>
					BUT YOUR DIGITAL PRESENCE
				</MotionH2>
			</div>
		</div>
	);
}
