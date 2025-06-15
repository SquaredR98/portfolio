import React from 'react';
import {
	ResumeHeader,
	ResumeSummary,
	ExperienceSection,
	ProjectsSection,
	EducationSection,
	SkillsSidebar,
	ResumeFooter
} from '../../components/Resume';

export default function ResumePage() {
	return (
		<div className="min-h-screen bg-slate-950">
			<ResumeHeader />
			
			<div className="max-w-7xl mx-auto w-11/12 lg:w-9/12 py-12">
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

			<ResumeFooter />
		</div>
	);
} 