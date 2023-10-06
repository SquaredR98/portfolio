import React from 'react';
import HexGrid from './HexGrid';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
	const navigateTo = useNavigate();
	return (
		<div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-rows-2 md:grid-cols-2 h-screen'>
			<div className='flex flex-col items-center justify-start md:items-start md:justify-center h-screen'>
				<h2 className='font-fira-sans-condensed text-xl text-slate-500 animate-slide-in delay-75 transition-all duration-75 hover:opacity-90'>
					HI, I AM RAVI & I AM A FULL STACK
				</h2>
				<h1 className='font-fira-sans-condensed font-bold text-4xl text-slate-900 animate-slide-in transition-all duration-75 dark:text-cyan-300 mb-4 text-center md:text-left'>
					DEVELOPER & DESIGNER
				</h1>
				<div className='flex flex-col md:flex-row w-full'>
					<button
						onClick={() => navigateTo('#about-me')}
						className='font-fira-sans-condensed uppercase my-2 py-2 px-8 bg-slate-900 animate-slide-in-reverse text-white md:mr-8 transition-all duration-300 hover:opacity-90'
					>
						Know More
					</button>
					<button className='font-fira-sans-condensed uppercase my-2 py-2 px-8 bg-slate-900 text-white transition-all duration-300 animate-slide-in-reverse hover:opacity-90'>
						Resume
					</button>
				</div>
			</div>
			<div className='flex justify-center md:justify-end items-end md:items-center order-first md:order-last md:h-screen z-0'>
				<HexGrid />
			</div>
		</div>
	);
};

export default Banner;
