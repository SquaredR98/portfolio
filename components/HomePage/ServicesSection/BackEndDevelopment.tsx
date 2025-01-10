import {
	MotionDiv,
	MotionImage,
} from '@/components/General/ClientComponents/MotionElements';
import Tags from '@/components/General/SmallComponents/Tags';
import { AnimatePresence } from 'framer-motion';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaAws } from 'react-icons/fa';
import {
	SiAmazondynamodb,
	SiAmazons3,
	SiAwslambda,
	SiDocker,
	SiExpress,
	SiGithubactions,
	SiJenkins,
	SiMongodb,
	SiNestjs,
	SiNodedotjs,
	SiPostgresql,
	SiRedis,
	SiServerless,
} from 'react-icons/si';
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
		<div
			ref={ref}
			className='min-h-[200px] mb-12 border-b transition-all duration-500 ease-in-out'
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
							className={`text-red-950/80 font-[500] w-fit border-b border-red-600/20 text-3xl ${firaSansCondensed.className}`}
						>
							Back-End Development
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
								{!showExtras ? '...' : '.'}{' '}
								{!showExtras && (
									<button
										onClick={() =>
											setShowExtras(
												true,
											)
										}
										className='text-red-700/80 hover:text-red-700 font-[400]'
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
									exit={{
										opacity: 0,
										height: 0,
									}}
									transition={{
										duration: 0.5,
										ease: 'linear',
									}}
								>
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
											connect your
											applications
											with reliable,
											scalable, and
											secure APIs
											tailored to
											your needs.
										</li>
										<li>
											<strong>
												Database
												Design &
												Optimization:
											</strong>{' '}
											Efficient
											database
											architecture
											and query
											optimization
											using{' '}
											<Tags
												Icon={
													<SiMongodb className='inline ml-1 mb-1 text-xl' />
												}
												text='MongoDB'
											/>
											,{' '}
											<Tags
												Icon={
													<SiPostgresql className='inline ml-1 text-xl' />
												}
												text='PostgreSQL'
											/>
											,{' '}
											<Tags
												Icon={
													<SiAmazondynamodb className='inline ml-1 mb-1 text-xl' />
												}
												text='DynamoDB'
											/>
											, and{' '}
											<Tags
												Icon={
													<SiRedis className='inline ml-1 mb-1 text-xl' />
												}
												text='Redis'
											/>{' '}
											to handle high
											performance
											and concurrent
											users.
										</li>
										<li>
											<strong>
												Cloud
												Integration:
											</strong>{' '}
											Expertise in{' '}
											<Tags
												Icon={
													<FaAws className='inline ml-1' />
												}
												text='AWS'
											/>
											, including{' '}
											<Tags
												Icon={
													<SiAwslambda className='inline ml-1 mb-1 text-lg' />
												}
												text='Lambda'
											/>
											,{' '}
											<Tags
												Icon={
													<SiAmazons3 className='inline ml-1 mb-1 text-lg' />
												}
												text='S3'
											/>
											, and{' '}
											<Tags
												Icon={
													<SiGithubactions className='inline ml-2 mb-1 text-lg' />
												}
												text='CI/CD'
											/>{' '}
											pipelines for
											smooth and
											reliable
											deployment.
										</li>
										<li>
											<strong>
												Server-Side
												Logic:
											</strong>{' '}
											Comprehensive
											solutions in{' '}
											<Tags
												Icon={
													<SiNodedotjs className='inline ml-1 mb-1 text-lg' />
												}
												text='Node.js'
											/>
											,{' '}
											<Tags
												Icon={
													<SiNestjs className='inline ml-1 mb-1 text-lg' />
												}
												text='Nest.js'
											/>
											, and{' '}
											<Tags
												Icon={
													<SiExpress className='inline ml-1 mb-1' />
												}
												text='Express'
											/>{' '}
											for robust,
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
											measures for
											secure data
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
											with payment
											gateways,
											analytics
											tools (Google
											Analytics,
											Facebook
											Pixels, etc.),
											and other
											APIs.
										</li>
										<li>
											<strong>
												DevOps
												Practices:
											</strong>{' '}
											Efficient
											development
											workflows with{' '}
											<Tags
												Icon={
													<SiDocker className='inline ml-1 mb-1 text-lg' />
												}
												text='Docker'
											/>
											,{' '}
											<Tags
												Icon={
													<SiJenkins className='inline ml-1 mb-1 text-lg' />
												}
												text='Jenkins'
											/>
											, and{' '}
											<Tags
												Icon={
													<SiServerless className='inline ml-1 mb-1 text-lg' />
												}
												text='Serverless'
											/>{' '}
											Framework for
											seamless{' '}
											<Tags
												Icon={
													<SiGithubactions className='inline ml-1 mb-1 text-lg' />
												}
												text='CI/CD'
											/>{' '}
											pipelines.
										</li>
									</ul>
									<p
										className={`text-red-950 font-[300] tracking-wide mt-4 text-2xl ${firaSansCondensed.className}`}
									>
										Back-end solutions
										designed with a
										focus on
										performance,
										scalability, and
										user satisfaction,
										ensuring seamless
										functionality across
										diverse industries.
										Collaborate to
										create a reliable
										and scalable
										infrastructure
										tailored to your
										needs.
										{showExtras && (
											<button
												onClick={() =>
													setShowExtras(
														false,
													)
												}
												className='text-red-700 ml-2 font-[500]'
											>
												Hide
											</button>
										)}
									</p>
								</MotionDiv>
							)}
						</AnimatePresence>
					</div>
				</MotionDiv>
			)}
		</div>
	);
}
