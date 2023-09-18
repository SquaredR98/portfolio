import React, { useEffect } from 'react';

import nodeLogo from '../assets/logos/nodejs.svg';
import linuxLogo from '../assets/logos/linux.svg';
import serverLogo from '../assets/logos/server.svg';
import codeLogo from '../assets/logos/code.svg';
import pythonLogo from '../assets/logos/python.svg';
import reactLogo from '../assets/logos/react.svg';
import dockerLogo from '../assets/logos/docker.svg';

const AboutMeGrid = () => {
	useEffect(() => {
		const imgElements = document.querySelectorAll('img');
		imgElements.forEach((img, index) => {
			setTimeout(() => {
				img.classList.remove('hidden');
				img.classList.add('animate-fade-in');
			}, 100 * index + 1);
		});
	});
	return (
		<div className='gallery'>
			<img
				src={nodeLogo}
				alt='logo'
				className='hidden transition-all duration-300'
			/>
			<img
				src={linuxLogo}
				alt='logo'
				className='hidden transition-all duration-300'
			/>
			<img
				src={serverLogo}
				alt='logo'
				className='hidden transition-all duration-300'
			/>
			<img
				src={dockerLogo}
				alt='logo'
				className='hidden transition-all duration-300'
			/>
			<img
				src={pythonLogo}
				alt='logo'
				className='hidden transition-all duration-300'
			/>
			<img
				src={reactLogo}
				alt='logo'
				className='hidden transition-all duration-300 p-2'
			/>
			<img
				src={codeLogo}
				alt='logo'
				className='hidden transition-all duration-300'
			/>
		</div>
	);
};

export default AboutMeGrid;
