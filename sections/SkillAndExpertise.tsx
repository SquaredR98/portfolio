'use client';

import React, { useState } from 'react';
import { skillsAndExpertise } from '@/data';
import SkillTitle from '@/components/SkillTitle';
import SectionTitle from '@/components/SectionTItle';
import SkillDetails from '@/components/SkillDetails';
import {
	MotionDiv,
	MotionH3,
	MotionImg,
	MotionLi,
} from '@/components/General/ClientComponents/MotionElements';
import { useInView } from 'react-intersection-observer';
import { Poppins } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const poppins = Poppins({
	weight: ['100', '200', '300', '400'],
	subsets: ['latin'],
});

export default function SkillAndExpertise() {
	const [currentSkillSelected, setCurrentSkillSelected] = useState(0);
	const { ref: firstRef, inView: firstInView } = useInView({
		triggerOnce: false,
		threshold: 0.3, // Adjust threshold as needed
	});
	const { ref: secondRef, inView: secondInView } = useInView({
		triggerOnce: false,
		threshold: 0.3, // Adjust threshold as needed
	});
	const { ref: thirdRef, inView: thirdInView } = useInView({
		triggerOnce: false,
		threshold: 0.3, // Adjust threshold as needed
	});

	const variants = {
		hidden: {
			x: -10,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<section id='skills' className='dark:bg-slate-950'>
			<div
				className={`w-11/12 lg:w-9/12 mx-auto dark:bg-slate-950 mb-24`}
			>
				<SectionTitle text='My Expertise' />
				<div className='hidden lg:flex lg:h-[300vh] relative'>
					<div className='w-full lg:w-1/2'>
						<div
							className='lg:h-screen flex flex-wrap items-center mt-12 lg:mt-0'
							ref={firstRef}
						>
							<div className='mt-12 lg:mt-0'>
								<AnimatePresence>
									{firstInView && (
										<MotionH3
											initial={{
												opacity: 0,
												x: -50,
											}}
											animate={{
												opacity: 1,
												x: 0,
											}}
											transition={{
												duration: 0.5,
												delay: 0.2,
											}}
											className='text-4xl font-bold'
										>
											Frontend
											Development
										</MotionH3>
									)}
									{firstInView && (
										<ul
											className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1] pr-4`}
										>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.3,
												}}
												className='my-1 lg:pr-4'
											>
												Elevate
												your
												online
												presence
												with my
												expert
												frontend
												development
												services.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.6,
												}}
												className='my-1 lg:pr-4'
											>
												Specialize
												in
												crafting
												cutting-edge
												Single
												Page
												Applications
												(SPAs)
												using
												technologies
												like
												React
												and
												Redux.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.9,
												}}
												className='my-1 lg:pr-4'
											>
												Translate
												design
												concepts
												from
												Figma
												into
												pixel-perfect
												frontend
												interfaces.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 1.2,
												}}
												className='my-1 lg:pr-4'
											>
												Proficient
												in
												ReactJS,
												Redux
												Toolkit,
												SCSS,
												HTML,
												JavaScript,
												TailwindCSS,
												MaterialUI,
												and CSS.
											</MotionLi>
										</ul>
									)}
								</AnimatePresence>
							</div>
						</div>
						<div
							className='lg:h-screen flex flex-wrap items-center mt-12 lg:mt-0'
							ref={secondRef}
						>
							<div className='mt-12 lg:mt-0'>
								<AnimatePresence>
									{secondInView && (
										<MotionH3
											initial={{
												opacity: 0,
												x: -50,
											}}
											animate={{
												opacity: 1,
												x: 0,
											}}
											transition={{
												duration: 0.5,
												delay: 0.2,
											}}
											className='text-4xl font-bold'
										>
											Fullstack
											Development
										</MotionH3>
									)}
									{secondInView && (
										<ul
											className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1] pr-4`}
										>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.3,
												}}
												className='my-1 lg:pr-4'
											>
												Unlock
												the full
												potential
												of your
												digital
												vision
												with my
												comprehensive
												fullstack
												development
												solutions.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.6,
												}}
												className='my-1 lg:pr-4'
											>
												Develop
												robust
												full
												stack
												applications
												integrating
												frontend
												with
												backend
												functionalities.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.9,
												}}
												className='my-1 lg:pr-4'
											>
												Expertise
												in
												ReactJS,
												Node.js,
												ExpressJS,
												NestJS,
												PostgresQL,
												and
												MongoDB.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 1.2,
												}}
												className='my-1 lg:pr-4'
											>
												Ensure
												scalability,
												security,
												and
												performance
												of
												backend
												systems.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 1.5,
												}}
												className='my-1 lg:pr-4'
											>
												Translate
												legacy
												code and
												migrate
												applications
												seamlessly.
											</MotionLi>
										</ul>
									)}
								</AnimatePresence>
							</div>
						</div>
						<div
							className='lg:h-screen flex flex-wrap items-center mt-12 lg:mt-0'
							ref={thirdRef}
						>
							<div className='mt-12 lg:mt-0'>
								<AnimatePresence>
									{thirdInView && (
										<MotionH3
											initial={{
												opacity: 0,
												x: -50,
											}}
											animate={{
												opacity: 1,
												x: 0,
											}}
											transition={{
												duration: 0.5,
												delay: 0.2,
											}}
											className='text-4xl font-bold'
										>
											Website
											Maintenance &
											Hosting
										</MotionH3>
									)}
									{thirdInView && (
										<ul
											className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1] pr-8`}
										>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.3,
												}}
												className='my-1 lg:pr-4'
											>
												Keep
												your
												digital
												assets
												running
												smoothly
												with my
												reliable
												website
												maintenance
												and
												hosting
												services.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.6,
												}}
												className='my-1 lg:pr-4'
											>
												Provide
												ongoing
												support
												and
												maintenance
												for SPAs
												developed
												using
												React
												and
												Redux.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 0.9,
												}}
												className='my-1 lg:pr-4'
											>
												Expertise
												in
												dockerizing
												applications
												for easy
												deployment
												and
												scalability.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 1.2,
												}}
												className='my-1 lg:pr-4'
											>
												Implement
												Jenkins
												CI/CD
												pipelines
												for
												automated
												testing
												and
												deployment.
											</MotionLi>
											<MotionLi
												initial={{
													opacity: 0,
													x: -50,
												}}
												animate={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.5,
													delay: 1.5,
												}}
												className='my-1 lg:pr-4'
											>
												Manage
												hosting
												environments
												using
												cPanel
												for ease
												of
												administration.
											</MotionLi>
										</ul>
									)}
								</AnimatePresence>
							</div>
						</div>
					</div>
					<div className='sticky hidden h-screen top-0 lg:w-1/2 lg:flex justify-center items-center'>
						<div className='rounded-full bg-white h-[300px] w-[300px] overflow-hidden'>
							<AnimatePresence>
								{firstInView && (
									<MotionImg
										initial={{
											opacity: 0,
											x: -50,
										}}
										animate={{
											opacity: 1,
											x: 0,
										}}
										exit={{
											opacity: 0,
											x: 150,
											transition: {
												delay: 0.3,
												duration: 0.3,
											},
										}}
										transition={{
											delay: 0.3,
											duration: 0.5,
										}}
										className='rounded-full'
										alt=''
										height={300}
										width={300}
										src='/home/frontend.webp'
									></MotionImg>
								)}
							</AnimatePresence>
							<AnimatePresence>
								{secondInView && (
									<MotionImg
										initial={{
											opacity: 0,
											x: -50,
										}}
										animate={{
											opacity: 1,
											x: 0,
										}}
										exit={{
											opacity: 0,
											x: 150,
											transition: {
												delay: 0.3,
												duration: 0.3,
											},
										}}
										transition={{
											delay: 0.3,
											duration: 0.5,
										}}
										className='rounded-full'
										alt=''
										height={300}
										width={300}
										src='/home/fullstack.webp'
									></MotionImg>
								)}
							</AnimatePresence>
							<AnimatePresence>
								{thirdInView && (
									<MotionImg
										initial={{
											opacity: 0,
											x: -50,
										}}
										animate={{
											opacity: 1,
											x: 0,
										}}
										exit={{
											opacity: 0,
											x: 150,
											transition: {
												delay: 0.3,
												duration: 0.3,
											},
										}}
										transition={{
											delay: 0.3,
											duration: 0.5,
										}}
										className='rounded-full scale-150'
										alt=''
										height={300}
										width={300}
										src='/home/devops.webp'
									></MotionImg>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
				<div className='flex lg:hidden relative'>
					<div className='w-full lg:w-1/2'>
						<div className='lg:h-screen flex flex-wrap items-center mt-12 lg:mt-0'>
							<div className='w-full lg:hidden'>
								<Image
									className='rounded-full'
									alt=''
									height={300}
									width={300}
									src='/home/frontend.webp'
								/>
							</div>
							<div className='mt-12 lg:mt-0'>
								<h3 className='text-4xl font-bold'>
									Frontend Development
								</h3>
								<ul
									className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1] pr-4`}
								>
									<li className='my-1 lg:pr-4'>
										Elevate your online
										presence with my
										expert frontend
										development
										services.
									</li>
									<li className='my-1 lg:pr-4'>
										Specialize in
										crafting
										cutting-edge Single
										Page Applications
										(SPAs) using
										technologies like
										React and Redux.
									</li>
									<li className='my-1 lg:pr-4'>
										Translate design
										concepts from Figma
										into pixel-perfect
										frontend interfaces.
									</li>
									<li className='my-1 lg:pr-4'>
										Proficient in
										ReactJS, Redux
										Toolkit, SCSS, HTML,
										JavaScript,
										TailwindCSS,
										MaterialUI, and CSS.
									</li>
								</ul>
							</div>
						</div>
						<div className='lg:h-screen flex flex-wrap items-center mt-12 lg:mt-0'>
							<div className='w-full lg:hidden'>
								<Image
									className='rounded-full'
									alt=''
									height={300}
									width={300}
									src='/home/fullstack.webp'
								/>
							</div>
							<div className='mt-12 lg:mt-0'>
								<h3 className='text-4xl font-bold'>
									Fullstack Development
								</h3>
								<ul
									className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1] pr-4`}
								>
									<li className='my-1 lg:pr-4'>
										Unlock the full
										potential of your
										digital vision with
										my comprehensive
										fullstack
										development
										solutions.
									</li>
									<li className='my-1 lg:pr-4'>
										Develop robust full
										stack applications
										integrating frontend
										with backend
										functionalities.
									</li>
									<li className='my-1 lg:pr-4'>
										Expertise in
										ReactJS, Node.js,
										ExpressJS, NestJS,
										PostgresQL, and
										MongoDB.
									</li>
									<li className='my-1 lg:pr-4'>
										Ensure scalability,
										security, and
										performance of
										backend systems.
									</li>
									<li className='my-1 lg:pr-4'>
										Translate legacy
										code and migrate
										applications
										seamlessly.
									</li>
								</ul>
							</div>
						</div>
						<div className='lg:h-screen flex flex-wrap items-center mt-12 lg:mt-0'>
							<div className='w-full lg:hidden'>
								<Image
									className='rounded-full'
									alt=''
									height={300}
									width={300}
									src='/home/fullstack.webp'
								/>
							</div>
							<div className='mt-12 lg:mt-0'>
								<h3 className='text-4xl font-bold'>
									Website Maintenance &
									Hosting
								</h3>
								<ul
									className={`tracking-wide font-[300] dark:font-[200] ${poppins.className} mt-6 list-disc ml-4 relative z-[1] pr-8`}
								>
									<li className='my-1 lg:pr-4'>
										Keep your digital
										assets running
										smoothly with my
										reliable website
										maintenance and
										hosting services.
									</li>
									<li className='my-1 lg:pr-4'>
										Provide ongoing
										support and
										maintenance for SPAs
										developed using
										React and Redux.
									</li>
									<li className='my-1 lg:pr-4'>
										Expertise in
										dockerizing
										applications for
										easy deployment and
										scalability.
									</li>
									<li className='my-1 lg:pr-4'>
										Implement Jenkins
										CI/CD pipelines for
										automated testing
										and deployment.
									</li>
									<li className='my-1 lg:pr-4'>
										Manage hosting
										environments using
										cPanel for ease of
										administration.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
