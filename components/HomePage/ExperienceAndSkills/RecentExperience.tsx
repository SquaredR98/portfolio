import { MotionDiv } from '@/components/General/ClientComponents/MotionElements';
import Tags from '@/components/General/SmallComponents/Tags';
import { AnimatePresence } from 'framer-motion';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoLogoReact } from 'react-icons/io5';
import {
	SiNextdotjs,
	SiNodedotjs,
	SiPrimefaces,
	SiReacthookform,
	SiRedux,
	SiSequelize,
	SiTailwindcss,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '400', '500', '700'],
	subsets: ['latin'],
});

export default function RecentExperience() {
	const [showExtras, setShowExtras] = useState(false);
	const { inView, ref } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	return (
		<div
			ref={ref}
			className='min-h-[200px] transition-all duration-500 ease-in-out'
		>
			{inView && (
				<MotionDiv
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='my-4'
				>
					<div className=''>
						<h4
							className={`text-red-900 font-[500] w-fit border-b border-red-600/20 text-3xl ${firaSansCondensed.className}`}
						>
							Recent Experience & Achievement
						</h4>
						<div
							className={`mt-6 ${firaSansCondensed.className}`}
						>
							<h3
								className={`text-red-950/90 text-3xl font-[500] mb-4`}
							>
								Senior Software Developer,
								Antino Labs
							</h3>
							<p className='text-xl leading-none'>
								Senior Software Developer -
								September 2024 - Present
							</p>
							<p className='text-xl leading-none'>
								Software Developer - May 2023 -
								September 2024
							</p>
							<p className='text-xl leading-none'>
								Backend Software Developer -
								April 2022 - April 2023
							</p>
						</div>
						<div
							className={`mt-6 ${firaSansCondensed.className}`}
						>
							<h3
								className={`text-red-950/60 text-3xl font-[500] mb-4`}
							>
								Achievements
							</h3>
							<ul
								className={`list-disc ${firaSansCondensed.className} ml-6 mt-4 text-2xl text-red-950 font-[300]`}
							>
								<li>
									<strong>
										GEM (Going the Extra
										Mile):
									</strong>{' '}
									Awarded twice for
									exceptional dedication and
									exceeding expectations in
									project delivery.
								</li>
								<li>
									<strong>
										Best Manager of the
										Month:
									</strong>{' '}
									Recognized for exemplary
									team management and
									mentorship, fostering a
									collaborative and
									productive team
									environment.
								</li>
								<li>
									<strong>
										Collared Diamond:
									</strong>{' '}
									Honored for exceptional
									performance under
									high-pressure situations,
									consistently delivering
									high-quality results.
								</li>
								<li>
									<strong>
										Key Contribution:
									</strong>{' '}
									Stepped beyond the defined
									role to play a pivotal
									part in retaining a
									critical project for the
									organization, showcasing
									leadership and commitment
									to the company's success.
								</li>
							</ul>
						</div>
						<div
							className={`mt-6 ${firaSansCondensed.className}`}
						>
							<h3
								className={`text-red-950/60 text-3xl font-[500] mb-4`}
							>
								NeoFinity - A Modern Payment Tag
							</h3>
							<ul
								className={`list-disc ${firaSansCondensed.className} ml-6 mt-4 text-2xl text-red-950 font-[300]`}
							>
								<li>
									<strong>
										Product Landing Page
										& E-Commerce
										Transition:
									</strong>{' '}
									Developed an engaging
									landing page to capture
									user interest during the
									pre-launch phase, allowing
									users to join the waitlist
									and prebook. Post-launch,
									transitioned the website
									into a fully functional
									e-commerce platform for
									seamless shopping
									experiences using{' '}
									<Tags
										Icon={
											<IoLogoReact className='inline ml-1 mb-1' />
										}
										text='React'
									/>
									,{' '}
									<Tags
										Icon={
											<SiNextdotjs className='inline ml-1 mb-1' />
										}
										text='Next.js'
									/>
									,{' '}
									<Tags
										Icon={
											<SiTailwindcss className='inline ml-1 mb-1' />
										}
										text='Tailwind CSS'
									/>
									,{' '}
									<Tags
										Icon={
											<SiSequelize className='inline ml-1 mb-1' />
										}
										text='Sequelize'
									/>
									,{' '}
									<Tags
										Icon={
											<SiNodedotjs className='inline ml-1 mb-1' />
										}
										text='Nodejs'
									/>
								</li>
								<li>
									<strong>
										WordPress CMS
										Integration:
									</strong>{' '}
									Integrated a
									WordPress-based CMS to
									manage and publish blogs
									effortlessly, enhancing
									the product’s content
									marketing strategy.
								</li>
								<li>
									<strong>
										Analytics
										Implementation:
									</strong>{' '}
									Set up comprehensive
									analytics using Google and
									Meta, enabling effective
									tracking of user behavior
									and creating proper
									funnels to optimize
									conversions and understand
									customer journeys.
								</li>
								<li>
									<strong>
										Content Management &
										Support Dashboard:
									</strong>{' '}
									Designed and built a
									custom dashboard to manage
									the product's content and
									mobile app features. The
									dashboard empowered
									customer support to
									address customer issues
									efficiently. Implemented
									role-based access control
									for enhanced security and
									user management using{' '}
									<Tags
										Icon={
											<IoLogoReact className='inline ml-1 mb-1' />
										}
										text='React'
									/>
									,{' '}
									<Tags
										Icon={
											<SiPrimefaces className='inline ml-1 mb-1' />
										}
										text='PrimeReact'
									/>
									,{' '}
									<Tags
										Icon={
											<SiTailwindcss className='inline ml-1 mb-1' />
										}
										text='Tailwind CSS'
									/>
									,{' '}
									<Tags
										Icon={
											<SiRedux className='inline ml-1 mb-1' />
										}
										text='Redux Toolkit'
									/>
									,{' '}
									<Tags
										Icon={
											<SiReacthookform className='inline ml-1 mb-1' />
										}
										text='React Hook Form'
									/>{' '}
								</li>
							</ul>
						</div>
					</div>
				</MotionDiv>
			)}
		</div>
	);
}
