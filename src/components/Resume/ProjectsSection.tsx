import React from 'react';
import { HiCodeBracket } from 'react-icons/hi2';
import { MotionSection, MotionH3, MotionDiv, MotionH4, MotionP, MotionH5, MotionUl, MotionLi } from '../shared/MotionTags';

const projects = [
	{
		name: 'Foodaholix',
		description: 'A restaurant rating app landing page built using React, Gatsby, Tailwind',
		technologies: ['React', 'Gatsby', 'Tailwind CSS'],
		features: ['Logical rendering to create pages to simulate blog statically without using any CMS']
	},
	{
		name: 'Salarywala',
		description: 'Landing page for a HR platform built using Next.js, React, Tailwind',
		technologies: ['Next.js', 'React', 'Tailwind CSS'],
		features: ['Designed and implemented the whole landing page from start to finish']
	},
	{
		name: 'Moodle LMS',
		description: 'Managed and maintained the LMS by deploying it on Hostinger VPS',
		technologies: ['PHP', 'MySQL'],
		features: ['Implemented new features like locking module while a student\'s exam is in progress', 'Helped in bringing more clients to the platform']
	}
];

export default function ProjectsSection() {
	return (
		<MotionSection
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.3 }}
			className="space-y-8"
		>
			<MotionH3 className="text-2xl font-bold text-white flex items-center gap-3">
				<HiCodeBracket className="w-6 h-6 text-fuchsia-500" />
				Side Projects
			</MotionH3>
			<div className="space-y-6">
				{projects.map((project, index) => (
					<MotionDiv
						key={index}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
						className="bg-slate-900 rounded-xl p-6 border border-slate-800"
					>
						<div className="mb-3">
							<MotionH4 className="text-lg font-bold text-white mb-1">{project.name}</MotionH4>
							<MotionP className="text-slate-300 text-sm">{project.description}</MotionP>
						</div>
						<div className="mb-3">
							<MotionH5 className="text-white font-semibold mb-2 text-sm">Features:</MotionH5>
							<MotionUl className="space-y-1">
								{project.features.map((feature, idx) => (
									<MotionLi key={idx} className="text-slate-400 text-sm flex items-start gap-2">
										<div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
										{feature}
									</MotionLi>
								))}
							</MotionUl>
						</div>
						<div className="flex flex-wrap gap-2">
							{project.technologies.map((tech) => (
								<span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
									{tech}
								</span>
							))}
						</div>
					</MotionDiv>
				))}
			</div>
		</MotionSection>
	);
} 