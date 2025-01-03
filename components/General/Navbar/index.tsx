'use client';

import React, { useEffect, useState } from 'react';
import { MotionDiv } from '../ClientComponents/MotionElements';
import Icon from './Icon';
import NavItems from './NavItems';

export default function Navbar() {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [lastScrolledY, setLastScrolledY] = useState(0);
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > 0) {
				setHasScrolled(true); // User has scrolled
			} else {
				setHasScrolled(false); // User is at the top of the page
			}

			if (currentScrollY > lastScrolledY) {
				// Scrolling down
				setShowNavbar(false);
			} else {
				// Scrolling up
				setShowNavbar(true);
			}

			setLastScrolledY(currentScrollY); // Update last scrolled position
		};

		// Add the event listener when the component mounts
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrolledY]);

	useEffect(() => {
		const navbar = document.getElementById('navbar');

		if (hasScrolled) {
			navbar?.classList?.add('backdrop-blur-lg');
			navbar?.classList?.add('dark:bg-slate-900/90');
			navbar?.classList?.add('bg-white/50');
		} else {
			navbar?.classList?.remove('backdrop-blur-lg');
			navbar?.classList?.remove('dark:bg-slate-900/90');
			navbar?.classList?.remove('bg-white/50');
		}
	}, [hasScrolled]);

	return (
		<MotionDiv
			className={`fixed z-[9999] top-0 border-b border-red-600/20 left-0 w-full flex transition-all duration-500 ease-in-out h-28`}
		>
			<MotionDiv
				id='navbar'
				className={`w-11/12 max-w-5xl mx-auto backdrop-blur-lg flex justify-between items-center p-4 border-x border-red-600/20 transition-transform duration-500 ease-in-out transform ${
					showNavbar ? 'translate-y-0' : '-translate-y-full'
				} ${hasScrolled ? 'shadow-lg shadow-red-700/20' : ''}`}
			>
				<Icon />
				<NavItems />
			</MotionDiv>
		</MotionDiv>
	);
}
