import React from 'react';
import { HiCodeBracket, HiChartBar, HiShieldCheck } from 'react-icons/hi2';
import { MotionSection, MotionH3, MotionH4 } from '../../MotionTags';

const skills = {
	languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'C/C++', 'Python'],
	frontend: ['React', 'Next.js', 'GatsbyJS', 'Tailwind CSS', 'Redux Toolkit', 'PrimeReact', 'Framer Motion', 'Antd', 'ShadCN UI'],
	backend: ['Node.js', 'Expressjs', 'NestJS', 'Express.js', 'REST APIs', 'Mongoose', 'TypeORM', 'NextAuth', 'Prisma'],
	database: ['PostgreSQL', 'MongoDB', 'DynamoDB'],
	tools: ['Git', 'GitHub Actions', 'Docker', 'Jenkins', 'Serverless Framework'],
	integrations: ['WordPress API', 'Razorpay', 'Paytm', 'Cashfree', 'Stripe', 'Google Analytics', 'GA4', 'GTAG', 'Facebook Pixel']
};

export default function SkillsSidebar() {
	return (
		<div className="space-y-8 border-r border-slate-800 px-6 pt-8 border-t border-l md:border-l-0 pb-16">
			{/* Skills */}
			<MotionSection
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.6 }}
				className="border-b border-slate-800 pb-6"
			>
				<MotionH3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
					<HiCodeBracket className="text-fuchsia-500 text-3xl" />
					Technical Skills
				</MotionH3>
				<div className="space-y-4">
					<div>
						<MotionH4 className="text-white font-semibold mb-2">Languages</MotionH4>
						<div className="flex flex-wrap gap-2">
							{skills.languages.map((lang) => (
								<span key={lang} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
									{lang}
								</span>
							))}
						</div>
					</div>
					<div>
						<MotionH4 className="text-white font-semibold mb-2">Frontend</MotionH4>
						<div className="flex flex-wrap gap-2">
							{skills.frontend.map((tech) => (
								<span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
									{tech}
								</span>
							))}
						</div>
					</div>
					<div>
						<MotionH4 className="text-white font-semibold mb-2">Backend</MotionH4>
						<div className="flex flex-wrap gap-2">
							{skills.backend.map((tech) => (
								<span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
									{tech}
								</span>
							))}
						</div>
					</div>
					<div>
						<MotionH4 className="text-white font-semibold mb-2">Database</MotionH4>
						<div className="flex flex-wrap gap-2">
							{skills.database.map((db) => (
								<span key={db} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
									{db}
								</span>
							))}
						</div>
					</div>
					<div>
						<MotionH4 className="text-white font-semibold mb-2">Tools & DevOps</MotionH4>
						<div className="flex flex-wrap gap-2">
							{skills.tools.map((tool) => (
								<span key={tool} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
									{tool}
								</span>
							))}
						</div>
					</div>
					<div>
						<MotionH4 className="text-white font-semibold mb-2">Integrations</MotionH4>
						<div className="flex flex-wrap gap-2">
							{skills.integrations.map((integration) => (
								<span key={integration} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">
									{integration}
								</span>
							))}
						</div>
					</div>
				</div>
			</MotionSection>

			{/* Soft Skills */}
			<MotionSection
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				className="border-b border-slate-800 pb-6"
			>
				<MotionH3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
					<HiChartBar className="text-cyan-500" />
					Soft Skills
				</MotionH3>
				<div className="space-y-3">
					{[
						'Team Leadership',
						'Project Management',
						'Problem Solving',
						'Communication',
						'Mentoring',
						'Performance Optimization',
						'API Integration',
						'System Architecture'
					].map((skill) => (
						<div key={skill} className="flex items-center gap-2">
							<div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
							<span className="text-slate-300 text-sm">{skill}</span>
						</div>
					))}
				</div>
			</MotionSection>

			{/* Awards */}
			<MotionSection
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 1.0 }}
				className=""
			>
				<MotionH3 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
					<HiShieldCheck className="text-fuchsia-500" />
					Awards & Recognition
				</MotionH3>
				<div className="space-y-4">
					<div className="border-l-2 border-fuchsia-500 pl-4">
						<MotionH4 className="text-white font-semibold text-sm">GEM (Going the Extra Mile)</MotionH4>
						<p className="text-slate-400 text-xs">Awarded twice for exceeding delivery expectations</p>
					</div>
					<div className="border-l-2 border-fuchsia-500 pl-4">
						<MotionH4 className="text-white font-semibold text-sm">Best Manager of the Month</MotionH4>
						<p className="text-slate-400 text-xs">Recognized for leading and mentoring high-performing teams</p>
					</div>
					<div className="border-l-2 border-fuchsia-500 pl-4">
						<MotionH4 className="text-white font-semibold text-sm">Collared Diamond</MotionH4>
						<p className="text-slate-400 text-xs">Honoured for exceptional delivery in high-pressure environments</p>
					</div>
				</div>
			</MotionSection>
		</div>
	);
} 