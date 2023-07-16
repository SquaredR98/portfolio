import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/profile.jpg';
import { intro } from './../utils/constants';

const LandingPage = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const lineElements = containerRef.current.querySelectorAll('li');
		const resume = document.getElementById('resume');
		const landingCta = document.getElementById('landing-cta');
		lineElements.forEach((lineElement, index) => {
			const delay = (index + 1) * 0.2;
			console.log(delay);
			lineElement.style.animationDelay = `${delay}s`;
			lineElement.classList.add('animate-slide-in');
		});
		resume.style.animationDelay = `${1}s`;
		resume.classList.add('animate-slide-in');
		landingCta.style.animationDelay = `${2}s`;
		landingCta.classList.add('animate-slide-in');

		setTimeout(() => {
			lineElements.forEach((lineElement) => {
				lineElement.classList.remove('opacity-0');
			});
		}, intro.length * 0.2 * 1000);
		setTimeout(() => {
			resume.classList.remove('opacity-0');
		}, intro.length * 0.2 * 1000 + 900);
		setTimeout(() => {
			landingCta.classList.remove('opacity-0');
		}, intro.length * 0.2 * 1000 + 1600);
	}, []);
	return (
		<div>
			<div className='text-cyan-200'>
				<div className='flex justify-between'>
					<div className='w-1/2 flex items-center h-screen'>
						<div className=''>
							<h1 className='text-8xl font-bold animate-slide-in py-4'>
								Ravi Ranjan
							</h1>
							<ul
								ref={containerRef}
								className='font-light mb-1'
							>
								{intro.map(
									(introLine, index) => (
										<li
											className='flex items-center py-1 text-shadow opacity-0'
											id={`line-${index}`}
											key={index}
										>
											{introLine}
										</li>
									),
								)}
							</ul>
							<a
								id='resume'
								className='opacity-0 text-shadow'
								href='/'
							>
								Quick Peak at my{' '}
								<span className='font-medium'>
									Resume
								</span>
							</a>
							<div
								className=' w-full my-6 opacity-0 animate-slide-in-reverse'
								id='landing-cta'
							>
								<button className='px-10 py-2 border border-cyan-200 hover:text-shadow shadow-[0_0px_6px_#a5f3fc55] hover:shadow-[0_0px_16px_#a5f3fc66] transition duration-500 ease-in-out'>
									KNOW MORE
								</button>
								<button className='px-10 mx-10 py-2 border border-cyan-200 hover:text-shadow shadow-[0_0px_6px_#a5f3fc55] hover:shadow-[0_0px_16px_#a5f3fc66] transition duration-500 ease-in-out'>
									PROJECTS
								</button>
							</div>
						</div>
					</div>
					<div className='w-1/2 flex items-center justify-center h-screen'>
						<div className='h-2/3 rounded-full border border-cyan-200 p-3 shadow-[0_0px_24px_#a5f3fc99] animate-image-fade-in'>
							<img
								src={profileImage}
								alt=''
								className='h-full rounded-full border border-cyan-200 p-3 animate-image-fade-in'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
