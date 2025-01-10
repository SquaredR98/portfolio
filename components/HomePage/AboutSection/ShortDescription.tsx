import {
	MotionDiv,
	MotionImage,
	MotionP,
} from '@/components/General/ClientComponents/MotionElements';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '400', '500', '700'],
	subsets: ['latin'],
});

export default function ShortDescription() {
	const { inView: firstParaInView, ref: firstParaRef } = useInView({
		threshold: 1,
		triggerOnce: true,
	});
	const { inView: secondParaInView, ref: secondParaRef } = useInView({
		threshold: 1,
		triggerOnce: true,
	});
	const { inView: thirdParaInView, ref: thirdParaRef } = useInView({
		threshold: 1,
		triggerOnce: true,
	});
	return (
		<Fragment>
			<div
				className='flex flex-col-reverse md:flex-row md:gap-x-12'
				ref={firstParaRef}
			>
				<MotionP
					initial={{ opacity: 0 }}
					animate={{ opacity: firstParaInView ? 1 : 0 }}
					transition={{
						duration: 0.5,
						delay: 0.5,
						ease: 'easeInOut',
					}}
					className={`text-red-950 font-[300] tracking-wide mt-4 md:w-2/3  md:text-2xl ${firaSansCondensed.className}`}
				>
					Hello! I&apos;m Ravi Ranjan, a passionate Software
					Engineer and Full Stack Developer with over 4
					years of experience turning ideas into impactful
					digital solutions. My expertise spans a wide range
					of technologies, including Node.js, NestJS, React,
					Next.js, PHP, and Moodle, alongside deployment and
					maintenance proficiency. I&apos;ve had the
					privilege of working on diverse projects, from
					financial platforms and learning management
					systems to social networks and automation tools,
					always focusing on performance, scalability, and
					user satisfaction.
				</MotionP>
				<MotionDiv
					initial={{ opacity: 0 }}
					animate={{ opacity: firstParaInView ? 1 : 0 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					className='md:w-1/3 relative group over'
				>
					<div className='border border-red-600/20 w-full h-full absolute left-1 top-1 z-[1] group-hover:left-2 group-hover:top-2 transition-all duration-300 ease-in-out' />
					<MotionImage
						src='/profile.png'
						height={1000}
						width={1000}
						alt='Profile'
						className='w-full border border-red-600/20 group-hover:border-red-600/40 group-hover:bg-red-700/10 relative z-[1] backdrop-blur-sm group-hover:shadow-2xl group-hover:backdrop-blur-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out'
					/>
				</MotionDiv>
			</div>
			<div
				className='flex flex-col-reverse md:gap-x-12 md:flex-row-reverse mt-8'
				ref={secondParaRef}
			>
				<MotionP
					initial={{ opacity: 0 }}
					animate={{ opacity: secondParaInView ? 1 : 0 }}
					transition={{
						duration: 0.5,
						delay: 0.5,
						ease: 'easeInOut',
					}}
					className={`text-red-950 font-[300] tracking-wide mt-4 md:w-2/3 md:text-2xl ${firaSansCondensed.className}`}
				>
					Beyond technical skills, I bring a collaborative
					and solution-oriented approach to every project.
					I&apos;ve led teams, streamlined development
					workflows using tools like Docker and Jenkins, and
					contributed to enhancing product efficiency
					through innovative solutions like invoice
					automation and custom dashboards. My work reflects
					a commitment to not just meeting, but exceeding
					client and business expectations, whether building
					from scratch or optimizing existing systems.
				</MotionP>
				<div className='md:w-1/3'>
					{secondParaInView && (
						<MotionImage
							src='/animations/programming-animate.svg'
							height={1000}
							width={1000}
							alt='programming-animate'
							className='w-full'
						/>
					)}
				</div>
			</div>
			<div
				className='flex flex-col-reverse md:gap-x-12 md:flex-row mt-8'
				ref={thirdParaRef}
			>
				<MotionP
					initial={{ opacity: 0 }}
					animate={{ opacity: secondParaInView ? 1 : 0 }}
					transition={{
						duration: 0.5,
						delay: 0.5,
						ease: 'easeInOut',
					}}
					className={`text-red-950 font-[300] tracking-wide mt-4 md:w-2/3 md:text-2xl ${firaSansCondensed.className}`}
				>
					Driven by a thirst for learning and a deep
					interest in emerging technologies, I&apos;m also
					exploring areas like SaaS development, intraday
					trading strategies, and animation. When I’m not
					coding, you’ll find me engaging with my creative
					side or enjoying CS2 matches, which often inspire
					teamwork and strategy in my professional
					endeavors. Let’s collaborate to bring your vision
					to life! 🚀
				</MotionP>
				<div className='md:w-1/3'>
					{thirdParaInView && (
						<MotionImage
							src='/animations/select-player-animate.svg'
							height={1000}
							width={1000}
							alt='select-player-animate'
							className='w-full'
						/>
					)}
				</div>
			</div>
		</Fragment>
	);
}
