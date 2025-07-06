import React from 'react';
import { HiLightBulb } from 'react-icons/hi2';
import { MotionDiv, MotionH3, MotionP } from '../shared/MotionTags';

export default function ResumeSummary() {
	return (
		<MotionDiv
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.1 }}
			className="p-6 border-t-0 border border-white/10"
		>
			<MotionH3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
				<HiLightBulb className="w-5 h-5 text-fuchsia-500" />
				Professional Summary
			</MotionH3>
			<MotionP className="text-slate-300 leading-relaxed">
				Full-Stack Developer with over four years of experience in designing, building, and deploying scalable web applications and platforms. 
				Proficient in React, Next.js, Node.js, NestJS, PostgreSQL, and MongoDB. Demonstrated ability to lead full project lifecycles, 
				integrate third-party APIs, and optimize performance across frontend and backend. Known for delivering under pressure, mentoring teams, 
				and driving product success. Open to remote full-time roles or technical co-founder opportunities.
			</MotionP>
		</MotionDiv>
	);
} 