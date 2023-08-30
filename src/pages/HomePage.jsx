import React from 'react';
import HexGrid from '../components/HexGrid';
import SkillCard from '../components/SkillCard';
import skills from '../data/skills';

const HomePage = () => {
	return (
		<>
			<div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-rows-2 md:grid-cols-2 h-screen'>
				<div className='flex flex-col items-center justify-start md:items-start md:justify-center h-screen'>
					<h2 className='font-roboto-condensed text-xl text-slate-500 animate-slide-in delay-75 transition-all duration-75 hover:opacity-90'>
						HI, I AM RAVI & I AM A
					</h2>
					<h1 className='font-roboto-condensed font-black text-4xl text-slate-900 animate-slide-in transition-all duration-75 hover:opacity-90 dark:text-cyan-300 mb-4 text-center md:text-left'>
						DEVELOPER & DESIGNER
					</h1>
					<div className='flex flex-col md:flex-row w-full'>
						<button className='font-roboto-condensed uppercase my-2 py-2 px-8 bg-slate-900 animate-slide-in-reverse text-white md:mr-8 transition-all duration-300 hover:opacity-90'>
							Know More
						</button>
						<button className='font-roboto-condensed uppercase my-2 py-2 px-8 bg-slate-900 text-white transition-all duration-300 animate-slide-in-reverse hover:opacity-90'>
							Resume
						</button>
					</div>
				</div>
				<div className='flex justify-center md:justify-end items-end md:items-center order-first md:order-last md:h-screen z-0'>
					<HexGrid />
				</div>
			</div>
			<div className='dark:bg-slate-950 w-11/12 md:w-10/12 lg:w-8/12 mx-auto'>
				<h2 className='font-roboto-condensed text-3xl font-bold dark:text-cyan-300'>Skills & Expertise</h2>
				<div className='grid md:grid-cols-2 gap-4'>
				{
					skills.map(({ title, skills }, index) => <SkillCard key={index} title={title} skills={skills} />)
				}
				</div>
			</div>
		</>
	);
};

export default HomePage;
