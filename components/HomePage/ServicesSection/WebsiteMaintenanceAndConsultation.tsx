import { MotionDiv } from '@/components/General/ClientComponents/MotionElements';
import { AnimatePresence } from 'framer-motion';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '400', '500', '700'],
	subsets: ['latin'],
});

export default function WebsiteMaintenanceAndConsultation() {
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
							className={`text-red-400 font-[500] w-fit border-b border-red-600/20 text-3xl uppercase ${firaSansCondensed.className}`}
						>
							Website Maintenance and Consultation
						</h4>
						<div className='flex flex-col-reverse md:flex-row-reverse items-center'>
							<div className='md:w-1/3'>
								<Image
									alt=''
									className='w-full'
									src='/animations/telecommuting-animate.svg'
									height={300}
									width={300}
								/>
							</div>
							<p
								className={`text-red-950 font-[300] tracking-wide mt-4 md:w-2/3 text-2xl ${firaSansCondensed.className}`}
							>
								Ensure your website stays
								secure, up-to-date, and
								optimized with tailored
								maintenance and expert
								consultation services. Whether
								managing an e-commerce store,
								corporate site, or learning
								platform, these services provide
								ongoing support and strategic
								insights for success. By
								addressing updates, security
								concerns, and performance needs,
								your website remains reliable,
								adaptable, and aligned with
								evolving business goals. 🚀
								{!showExtras ? '...' : '.'}{' '}
								{!showExtras && (
									<button
										onClick={() =>
											setShowExtras(
												true,
											)
										}
										className='text-red-700/90 hover:text-red-700 ml-2 font-[400]'
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
												Regular
												Updates:
											</strong>{' '}
											Keep your
											website
											running
											smoothly with
											the latest
											updates for
											plugins,
											themes, and
											security
											patches.
										</li>
										<li>
											<strong>
												Performance
												Optimization:
											</strong>{' '}
											Boost speed,
											reduce
											downtime, and
											enhance
											overall
											performance
											for a seamless
											user
											experience.
										</li>
										<li>
											<strong>
												Security
												Monitoring:
											</strong>{' '}
											Protect your
											site from
											vulnerabilities
											with real-time
											monitoring and
											proactive
											threat
											mitigation.
										</li>
										<li>
											<strong>
												Bug
												Fixes &
												Troubleshooting:
											</strong>{' '}
											Address issues
											promptly to
											ensure
											uninterrupted
											functionality.
										</li>
										<li>
											<strong>
												Content
												Management:
											</strong>{' '}
											Update and
											optimize your
											content to
											stay relevant
											and engaging
											for your
											audience.
										</li>
										<li>
											<strong>
												Consultation
												Services:
											</strong>{' '}
											Get expert
											advice on
											improving your
											website’s
											design,
											functionality,
											and strategy.
										</li>
										<li>
											<strong>
												SEO and
												Analytics:
											</strong>{' '}
											Improve search
											engine
											rankings and
											understand
											user behavior
											through
											advanced
											analytics.
										</li>
										<li>
											<strong>
												Scalability
												Planning:
											</strong>{' '}
											Prepare for
											growth with
											strategies to
											handle
											increased
											traffic and
											new features.
										</li>
									</ul>
									<p
										className={`text-red-950 font-[300] tracking-wide mt-4 text-2xl ${firaSansCondensed.className}`}
									>
										From routine
										maintenance to
										strategic guidance,
										these services are
										designed to ensure
										your website remains
										a valuable asset,
										delivering
										consistent results.
										Let’s work together
										to maintain and
										elevate your online
										presence. 🚀
										{showExtras && (
											<button
												onClick={() =>
													setShowExtras(
														false,
													)
												}
												className='text-red-700/80 hover:text-red-700 ml-2 font-[400]'
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
