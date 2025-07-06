import React from 'react';
import { HiBriefcase, HiCalendar, HiMapPin } from 'react-icons/hi2';
import {
	MotionSection,
	MotionH3,
	MotionDiv,
	MotionH4,
	MotionP,
	MotionH5,
	MotionUl,
	MotionLi,
} from '../../MotionTags';

const experiences = [
	{
		id: 1,
		title: 'Senior Software Developer',
		company: 'Antino Labs',
		period: 'September 2024 - Present',
		location: 'Gurugram, Haryana',
		description:
			"Leading end-to-end implementation of Offers Dashboard, building Rewards UI in Next.js for NeoZAP's mobile app, and implementing Spin the Wheel feature using react-custom-roulette.",
		achievements: [
			'Led the end-to-end implementation of the Offers Dashboard',
			"Built the Rewards UI in Next.js for NeoZAP's mobile app with SSR and ISR",
			'Implemented the Spin the Wheel feature using react-custom-roulette',
			'Customized library behavior and eliminated visual glitches for enhanced UX',
		],
		technologies: [
			'ReactJS',
			'PrimeReact',
			'react-hook-form',
			'Next.js',
			'SSR',
			'Node.js',
		],
	},
	{
		id: 2,
		title: 'Software Developer',
		company: 'Antino Labs',
		period: 'May 2023 - August 2024',
		location: 'Gurugram, Haryana',
		description:
			"Led development of NeoZAP's marketing website, integrated multiple payment gateways, and architected content management dashboard. Collaborated with marketing team for analytics integration.",
		achievements: [
			"Led the development of NeoZAP's marketing website using Next.js, Tailwind CSS, Framer Motion, and RTK",
			'Integrated multiple payment gateways (Razorpay, Paytm, Cashfree) into e-commerce flow',
			'Architected and developed a full-featured content management dashboard',
			'Integrated Google Analytics, GTAG, and Facebook Pixel for campaign insights',
			'Designed admin panel reducing update turnaround time by 50%',
			'Awarded GEM, Best Manager of the Month, and Collared Diamond',
		],
		technologies: [
			'Next.js',
			'Tailwind CSS',
			'Framer Motion',
			'RTK',
			'Razorpay',
			'Paytm',
			'Cashfree',
			'Google Analytics',
		],
	},
	{
		id: 3,
		title: 'Associate Software Developer',
		company: 'Antino Labs',
		period: 'April 2022 - May 2023',
		location: 'Gurugram, Haryana',
		description:
			'Developed RBAC and authentication modules, built feature testing simulator, and led backend architecture for various platforms. Mentored new team members.',
		achievements: [
			'Developed Role-Based Access Control (RBAC) for Casha platform using NestJS and PostgreSQL',
			'Built a feature testing simulator, reducing QA time by 80%',
			'Led backend architecture for Travel Hangouts platform',
			'Contributed to Jify Earned Wage Access platform using Serverless Framework',
			'Developed core backend features for Top Faculty social media app',
			'Awarded Best Manager, GEM, and Collared Diamond',
		],
		technologies: [
			'NestJS',
			'PostgreSQL',
			'Node.js',
			'MongoDB',
			'Serverless Framework',
			'AWS Lambda',
		],
	},
	{
		id: 4,
		title: 'Software Developer',
		company: 'Startoon Labs',
		period: 'April 2021 - March 2022',
		location: 'Hyderabad, Telangana',
		description:
			'Developed comprehensive product management and inventory management system, engineered invoicing tools, and managed entire software lifecycle as sole engineer.',
		achievements: [
			'Developed comprehensive product management and inventory management system',
			'Engineered invoicing tool reducing manual effort by 60%',
			'Solely managed entire software lifecycle as the sole engineer in the team',
			'Implemented dashboard for product usage and sales analysis',
			'Reduced product usage tracking effort by 30%',
		],
		technologies: [
			'Node.js',
			'MongoDB',
			'Express',
			'EJS',
			'PHP',
			'MySQL',
			'JavaScript',
		],
	},
];

export default function ExperienceSection() {
	return (
		<MotionSection
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.2 }}
			className='space-y-8 border-x border-b border-slate-800 px-6 pt-8'
		>
			<MotionH3 className='text-3xl font-bold text-white flex items-center gap-3'>
				<HiBriefcase className='text-fuchsia-500' />
				Professional Experience
			</MotionH3>
			<div className='space-y-8'>
				{experiences.map((exp, index) => (
					<MotionDiv
						key={exp.id}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							delay: 0.2 + index * 0.1,
						}}
						className={`border-b border-slate-800 pb-6 ${index === experiences.length - 1 ? 'border-b-0' : ''}`}
					>
						<div className='flex flex-col md:flex-row md:items-start justify-between mb-4'>
							<div>
								<MotionH4 className='text-xl font-bold text-white mb-1'>
									{exp.title}
								</MotionH4>
								<MotionP className='text-fuchsia-400 font-medium'>
									{exp.company}
								</MotionP>
							</div>
							<div className='text-left md:text-right mt-2 md:mt-0'>
								<div className='flex items-center gap-1 text-slate-400 text-sm mb-1'>
									<HiCalendar className='w-4 h-4' />
									{exp.period}
								</div>
								<div className='flex items-center gap-1 text-slate-400 text-sm'>
									<HiMapPin className='w-4 h-4' />
									{exp.location}
								</div>
							</div>
						</div>
						<MotionP className='text-slate-300 mb-4'>
							{exp.description}
						</MotionP>
						<div className='mb-4'>
							<MotionH5 className='text-white font-semibold mb-2'>
								Key Achievements:
							</MotionH5>
							<MotionUl className='space-y-1'>
								{exp.achievements.map(
									(achievement, idx) => (
										<MotionLi
											key={idx}
											className='text-slate-400 text-sm flex items-start gap-2'
										>
											<div className='w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0'></div>
											{achievement}
										</MotionLi>
									),
								)}
							</MotionUl>
						</div>
						<div className='flex flex-wrap gap-2'>
							{exp.technologies.map((tech) => (
								<span
									key={tech}
									className='px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs'
								>
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
