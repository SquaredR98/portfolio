import React from 'react';
import {
	ResumeSummary,
	ExperienceSection,
	ProjectsSection,
	EducationSection,
	SkillsSidebar
} from '../../components/Resume';

export default function ResumePage() {
	return (
		<div className="min-h-screen bg-slate-950 pt-16 relative overflow-hidden">
			{/* Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950"></div>
			<div className="absolute inset-0 bg-gradient-to-tl from-slate-950 via-emerald-950/10 to-slate-950"></div>
			<div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
			
			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto w-11/12 lg:w-9/12 py-12">
				<ResumeSummary />

				<div className="grid lg:grid-cols-3 gap-12">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-12">
						<ExperienceSection />
						<ProjectsSection />
						<EducationSection />
					</div>

					{/* Sidebar */}
					<SkillsSidebar />
				</div>
			</div>
		</div>
	);
} 