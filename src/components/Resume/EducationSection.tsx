import React from 'react';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi2';
import { MotionSection, MotionH3, MotionDiv, MotionH4, MotionP } from '../shared/MotionTags';

const education = [
	{
		degree: 'Bachelor of Technology in Computer Science',
		school: 'Indian Institute of Information Technology, Dharwad',
		period: '2017 - 2021',
		location: 'Dharwad, Karnataka',
		description: 'Relevant Coursework: Data Structures & Algorithms, AWS, C/C++, Operating Systems, Machine Learning, Artificial Intelligence, Data Analysis & Statistics',
		achievements: ['Graduated with comprehensive understanding of modern computing technologies']
	}
];

export default function EducationSection() {
	return (
		<MotionSection
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.4 }}
			className="space-y-8"
		>
			<MotionH3 className="text-2xl font-bold text-white flex items-center gap-3">
				<HiAcademicCap className="w-6 h-6 text-fuchsia-500" />
				Education
			</MotionH3>
			<div className="space-y-6">
				{education.map((edu, index) => (
					<MotionDiv
						key={index}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
						className="bg-slate-900 rounded-xl p-6 border border-slate-800"
					>
						<div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
							<div>
								<MotionH4 className="text-xl font-bold text-white mb-1">{edu.degree}</MotionH4>
								<MotionP className="text-fuchsia-400 font-medium">{edu.school}</MotionP>
							</div>
							<div className="text-left md:text-right mt-2 md:mt-0">
								<div className="flex items-center gap-1 text-slate-400 text-sm">
									<HiCalendar className="w-4 h-4" />
									{edu.period}
								</div>
							</div>
						</div>
						<MotionP className="text-slate-300 mb-3">{edu.description}</MotionP>
						<div className="flex flex-wrap gap-2">
							{edu.achievements.map((achievement, idx) => (
								<span key={idx} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
									{achievement}
								</span>
							))}
						</div>
					</MotionDiv>
				))}
			</div>
		</MotionSection>
	);
} 