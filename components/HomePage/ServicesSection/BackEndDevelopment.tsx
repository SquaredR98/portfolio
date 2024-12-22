import {
	MotionDiv,
	MotionImage,
} from '@/components/General/ClientComponents/MotionElements';
import { AnimatePresence } from 'framer-motion';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '400', '500', '700'],
	subsets: ['latin'],
});

export default function BackEndDevelopment() {
	const [showExtras, setShowExtras] = useState(false);
	const { inView, ref } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	return (
		<div ref={ref} className='min-h-[200px]'>
			{inView && (
				<MotionDiv
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='my-4'
				>
					<div className=''>
						<h4
							className={`text-red-400 font-[500] w-fit border-b border-red-600/20 text-3xl uppercase ${firaSansCondensed.className}`}
						>
							BACK END DEVELOPMENT
						</h4>
						<div className='flex flex-col md:flex-row items-center'>
							<div className='md:w-1/2'>
								<Image
									alt=''
									className='w-full'
									src='/animations/cloud-hosting-animate.svg'
									height={300}
									width={300}
								/>
							</div>
							<p
								className={`text-red-950 font-[300] tracking-wide mt-4 md:w-1/2 text-2xl ${firaSansCondensed.className}`}
							>
								Behind every successful web
								application lies a robust and
								efficient back-end. My back-end
								development skills ensure your
								applications are fast, secure,
								and built to scale, empowering
								your business with the tools it
								needs to thrive in a competitive
								digital landscape.
								{!showExtras && (
									<button
										onClick={() =>
											setShowExtras(
												true,
											)
										}
										className='text-red-700 font-[500] block'
									>
										Read More
									</button>
								)}
							</p>
						</div>
						<AnimatePresence>
							{showExtras && (
								<MotionDiv
									initial={{
										opacity: 0,
										height: 0,
									}}
									animate={{
										opacity: 1,
										height: '100%',
									}}
								>
									<div>
										<ul
											className={`list-disc ${firaSansCondensed.className} ml-6 mt-4 text-2xl text-red-950 font-[300]`}
										>
											<li>
												<strong>
													Custom
													API
													Development:
												</strong>{' '}
												Seamlessly
												connect
												your
												applications
												with
												reliable,
												scalable,
												and
												secure
												APIs
												tailored
												to your
												needs.
											</li>
											<li>
												<strong>
													Database
													Design
													&
													Optimization:
												</strong>{' '}
												Efficient
												database
												architecture
												and
												query
												optimization
												using{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													MongoDB
												</span>
												,{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													Postgres
												</span>
												,{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													DynamoDB
												</span>
												, and{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													Redis
												</span>
												to
												handle
												high
												performance
												and
												concurrent
												users.
											</li>
											<li>
												<strong>
													Cloud
													Integration:
												</strong>{' '}
												Expertise
												in{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													AWS
												</span>
												,
												including{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													Lambda
												</span>
												,{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													S3
												</span>
												, and{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													CI/CD
												</span>{' '}
												pipelines
												for
												smooth
												and
												reliable
												deployment.
											</li>
											<li>
												<strong>
													Server-Side
													Logic:
												</strong>{' '}
												Comprehensive
												solutions
												in{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													Node.js
												</span>
												,{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													NestJS
												</span>
												, and{' '}
												<span className='border px-3 font-[400] rounded-full border-red-700/60 bg-red-200/40'>
													Express
												</span>{' '}
												for
												robust,
												efficient
												back-end
												processing.
											</li>
											<li>
												<strong>
													Security
													&
													Compliance:
												</strong>{' '}
												Industry-standard
												security
												measures
												for
												secure
												data
												handling,
												governance,
												and
												compliance.
											</li>
											<li>
												<strong>
													Third-Party
													Integrations:
												</strong>{' '}
												Flawless
												integration
												with
												payment
												gateways,
												analytics
												tools
												(Google
												Analytics,
												Facebook
												Pixels,
												etc.),
												and
												other
												APIs.
											</li>
											<li>
												<strong>
													DevOps
													Practices:
												</strong>{' '}
												Efficient
												development
												workflows
												with
												Docker,
												Jenkins,
												and
												Serverless
												Framework
												for
												seamless
												CI/CD
												pipelines.
											</li>
										</ul>
										<p
											className={`text-red-950 font-[300] tracking-wide mt-4 text-2xl ${firaSansCondensed.className}`}
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
											together.
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
