import React from 'react';
import AboutMeGrid from './AboutMeGrid';
import TextOverText from './TextOverText';

const AboutMe = () => {
	return (
		<div className='mb-16'>
			<h2 className='text-slate-900 dark:text-cyan-300 text-4xl font-bold my-6 w-11/12 md:w-10/12 lg:w-8/12 mx-auto'>
				<TextOverText text='ABOUT ME' />
			</h2>
			<div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid md:grid-cols-2 gap-6'>
				<div className='order-last flex flex-col justify-center'>
					<p className='text-black dark:text-white dark:font-light pb-3 last:pb-0'>
						Hello! I'm a Full Stack Developer with a
						robust academic foundation from IIIT
						Dharwad. Specializing in the MERN stack, I
						craft comprehensive digital solutions that
						seamlessly bridge frontend and backend
						worlds. My technical journey also led me to
						acquire skills in DevOps, ensuring the
						smooth deployment and integration of the
						applications I develop. Each line of code I
						write reflects my commitment to
						functionality and innovation.
					</p>
					<p className='text-black dark:text-white dark:font-light pb-3 last:pb-0'>
						Outside of coding, my interests are
						straightforward. I take breaks by playing
						CS:GO or delving into melodies on my piano.
						These simple pursuits offer a refreshing
						counterpoint to my tech-driven endeavors,
						keeping me balanced. With a combination of
						technical expertise and a hint of
						creativity, I'm always ready to face the
						dynamic challenges of today's digital age.
					</p>
				</div>
				<div className='h-full flex justify-center items-center md:justify-start md:items-center'>
					<AboutMeGrid />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
