'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

// Skill data with logos
const skillCategories = [
	{
		title: "Languages",
		skills: [
			{ name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
			{ name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
			{ name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
			{ name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
			{ name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
			{ name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
			{ name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
		]
	},
	{
		title: "Frontend",
		skills: [
			{ name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
			{ name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
			{ name: "Gatsby", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg" },
			{ name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
			{ name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
			{ name: "PrimeReact", logo: "https://primefaces.org/cdn/primereact/images/logo.png" }
		]
	},
	{
		title: "Backend",
		skills: [
			{ name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
			{ name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
			{ name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
			{ name: "REST API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
			{ name: "Mongoose", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
			{ name: "TypeORM", logo: "https://typeorm.io/img/logo.png" },
			{ name: "NextAuth", logo: "https://next-auth.js.org/img/logo/logo-sm.png" }
		]
	},
	{
		title: "Database",
		skills: [
			{ name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
			{ name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
			{ name: "DynamoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
		]
	},
	{
		title: "Tools & DevOps",
		skills: [
			{ name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
			{ name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
			{ name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
			{ name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
			{ name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
			{ name: "Serverless", logo: "https://www.serverless.com/favicon.ico" }
		]
	},
	{
		title: "Integrations",
		skills: [
			{ name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
			{ name: "Razorpay", logo: "https://razorpay.com/favicon.png" },
			{ name: "Paytm", logo: "https://paytm.com/favicon.ico" },
			{ name: "Cashfree", logo: "https://www.cashfree.com/favicon.ico" },
			{ name: "Stripe", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
			{ name: "Google Analytics", logo: "https://www.google.com/analytics/favicon.ico" },
			{ name: "Facebook Pixel", logo: "https://facebook.com/favicon.ico" }
		]
	}
];

export default function SkillsSection() {
	return (
		<section id="skills" className="py-20 bg-slate-900">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
					<p className="text-slate-400 text-lg max-w-2xl mx-auto">
						Comprehensive expertise across modern web technologies and development tools
					</p>
				</motion.div>

				{/* Skills Scroller */}
				<div className="relative overflow-hidden">
					{/* First row - Left to Right */}
					<div className="flex animate-scroll-left">
						{skillCategories.map((category, categoryIndex) => (
							<div key={categoryIndex} className="flex-shrink-0 mx-8">
								<div className="text-center mb-6">
									<h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
									<div className="flex gap-6">
										{category.skills.map((skill, skillIndex) => (
											<div
												key={skillIndex}
												className="flex flex-col items-center group"
											>
												<div className="w-16 h-16 bg-slate-800 rounded-xl p-3 border border-slate-700 group-hover:border-fuchsia-500 transition-all duration-300 group-hover:scale-110 mb-2">
													<Image
														src={skill.logo}
														alt={skill.name}
														className="w-full h-full object-contain"
														width={64}
														height={64}
														onError={(e) => {
															// Fallback to text if image fails to load
															const target = e.currentTarget as HTMLImageElement;
															const fallback = target.nextElementSibling as HTMLDivElement;
															target.style.display = 'none';
															if (fallback) fallback.style.display = 'flex';
														}}
													/>
													<div className="w-full h-full flex items-center justify-center text-xs font-bold text-slate-400 lg:hidden">
														{skill.name}
													</div>
												</div>
												<span className="text-slate-400 text-sm font-medium group-hover:text-fuchsia-400 transition-colors">
													{skill.name}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Second row - Right to Left */}
					<div className="flex animate-scroll-right mt-12">
						{skillCategories.slice().reverse().map((category, categoryIndex) => (
							<div key={categoryIndex} className="flex-shrink-0 mx-8">
								<div className="text-center mb-6">
									<h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
									<div className="flex gap-6">
										{category.skills.map((skill, skillIndex) => (
											<div
												key={skillIndex}
												className="flex flex-col items-center group"
											>
												<div className="w-16 h-16 bg-slate-800 rounded-xl p-3 border border-slate-700 group-hover:border-cyan-500 transition-all duration-300 group-hover:scale-110 mb-2">
													<img
														src={skill.logo}
														alt={skill.name}
														className="w-full h-full object-contain"
														onError={(e) => {
															// Fallback to text if image fails to load
															const target = e.currentTarget as HTMLImageElement;
															const fallback = target.nextElementSibling as HTMLDivElement;
															target.style.display = 'none';
															if (fallback) fallback.style.display = 'flex';
														}}
													/>
													<div className="w-full h-full flex items-center justify-center text-xs font-bold text-slate-400 hidden">
														{skill.name}
													</div>
												</div>
												<span className="text-slate-400 text-sm font-medium group-hover:text-cyan-400 transition-colors">
													{skill.name}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
} 