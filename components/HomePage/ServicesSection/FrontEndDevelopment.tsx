import { MotionDiv } from '@/components/General/ClientComponents/MotionElements';
import Tags from '@/components/General/SmallComponents/Tags';
import { AnimatePresence } from 'framer-motion';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import {
	SiAntdesign,
	SiMaterialdesign,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '400', '500', '700'],
	subsets: ['latin'],
});

export default function FrontEndDevelopment() {
	const [showExtras, setShowExtras] = useState(false);
	const { inView, ref } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	return (
		<div
			ref={ref}
			className='min-h-[200px] border-b mb-12 transition-all duration-500 ease-in-out'
		>
			{inView && (
				<MotionDiv
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='py-4'
				>
					<div className=''>
						<h4
							className={`text-red-950/80 font-[500] w-fit border-b border-red-600/20 text-2xl md:text-3xl ${firaSansCondensed.className}`}
						>
							Front-End Development
						</h4>
						<div className='flex flex-col-reverse md:flex-row items-center'>
							<p
								className={`text-red-950 font-[300] tracking-wide mt-4 md:w-1/2 md:text-2xl ${firaSansCondensed.className}`}
							>
								Transforming ideas into visually
								stunning and highly interactive
								web interfaces is at the heart
								of my front-end development
								skill. With expertise in
								cutting-edge technologies like{' '}
								<Tags
									text='React'
									Icon={
										<SiReact className='inline ml-1 mb-1' />
									}
								/>
								,{' '}
								<Tags
									text='Next.js'
									Icon={
										<SiNextdotjs className='inline ml-1 mb-1' />
									}
								/>
								, and modern CSS frameworks like{' '}
								<Tags
									Icon={
										<SiTailwindcss className='inline ml-1 mb-1' />
									}
									text='Tailwind CSS'
								/>
								,{' '}
								<Tags
									Icon={
										<SiAntdesign className='inline ml-1 mb-1' />
									}
									text='Ant Design'
								/>
								,{' '}
								<Tags
									Icon={
										<SiMaterialdesign className='inline ml-1 mb-1' />
									}
									text='Material UI'
								/>
								, any many more. I deliver
								seamless, responsive designs
								that captivate users across
								devices
								{!showExtras ? '...' : '.'}{' '}
								{!showExtras && (
									<button
										onClick={() =>
											setShowExtras(
												true,
											)
										}
										className='text-red-700/80 hover:text-red-700 ml-2 font-[400]'
									>
										Read More
									</button>
								)}
							</p>
							<div className='w-full md:w-1/2'>
								<Image
									alt=''
									className='w-full'
									src='/animations/devices-animate.svg'
									height={300}
									width={300}
								/>
							</div>
						</div>
						<AnimatePresence>
							{showExtras && (
								<MotionDiv
									initial={{
										opacity: 0,
										height: '0%',
									}}
									animate={{
										opacity: 1,
										height: '100%',
									}}
									exit={{
										opacity: 0,
										height: 0,
									}}
									transition={{
										duration: 0.5,
										ease: 'easeInOut',
									}}
								>
									<div className='min-h-40'>
										<ul
											className={`list-disc ${firaSansCondensed.className} ml-6 mt-4 md:text-2xl text-red-950 font-[300]`}
										>
											<li>
												<strong>
													Custom
													UI/UX
													Design
													Implementation:
												</strong>{' '}
												Elevate
												your
												brand
												with
												pixel-perfect,
												user-friendly
												interfaces
												tailored
												to your
												unique
												identity
												or your
												pre
												designed
												Figma.
											</li>
											<li>
												<strong>
													Responsive
													&
													Mobile-First
													Design:
												</strong>{' '}
												Assured
												flawless
												user
												experience
												on every
												screen
												size,
												from
												desktops
												to
												smartphones.
											</li>
											<li>
												<strong>
													Dynamic
													Web
													Applications:
												</strong>{' '}
												Empower
												your
												business
												with
												fast,
												interactive,
												and
												scalable
												solutions.
											</li>
											<li>
												<strong>
													Performance
													Optimization:
												</strong>{' '}
												Lightning-fast
												load
												times
												and
												optimized
												code for
												superior
												performance.
											</li>
											<li>
												<strong>
													Cross-Browser
													Compatibility:
												</strong>{' '}
												Consistent
												look and
												functionality
												across
												all
												modern
												browsers.
											</li>
											<li>
												<strong>
													Accessibility-First
													Approach:
												</strong>{' '}
												Inclusive
												designs
												ensuring
												ADA/WCAG
												compliance
												for a
												broader
												audience
												reach.
											</li>
										</ul>
										<p
											className={`text-red-950 font-[300] tracking-wide mt-4 md:text-2xl ${firaSansCondensed.className}`}
										>
											Whether you
											need a sleek
											landing page,
											a robust web
											application,
											or a complete
											redesign, I
											bring your
											vision to life
											with
											meticulous
											attention to
											detail and a
											focus on
											exceptional
											user
											experiences.
											Let’s build
											something
											extraordinary
											together.{' '}
											{showExtras && (
												<button
													onClick={() =>
														setShowExtras(
															false,
														)
													}
													className='text-red-700/90 hover:text-red-700 ml-2 font-[400]'
												>
													Hide
												</button>
											)}
										</p>
									</div>
								</MotionDiv>
							)}
						</AnimatePresence>
					</div>
				</MotionDiv>
			)}
		</div>
	);
}
