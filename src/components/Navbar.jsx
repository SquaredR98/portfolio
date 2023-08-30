import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { CgMenuGridR } from 'react-icons/cg';
import { BsCodeSlash, BsFileEarmarkText } from 'react-icons/bs';

const navItems = [
	{
		name: 'Resume',
		url: 'resume',
		icon: <BsFileEarmarkText className='mr-2' />,
	},
	{
		name: 'Devfolio',
		url: 'portfolio',
		icon: <BsCodeSlash className='mr-2' />,
	},
	{
		name: 'UI/UX',
		url: 'ui-ux',
		icon: <BsCodeSlash className='mr-2' />,
	},
	{
		name: 'Contact',
		url: 'contact',
		icon: <BsCodeSlash className='mr-2' />,
	},
];

const BigScreenNavItems = () => (
	<div className='hidden md:flex'>
		{navItems.map((item, index) => (
			<p
				key={index}
				className='font-roboto-condensed px-2 last:pr-0 dark:text-white'
			>
				{item.name}
			</p>
		))}
	</div>
);
const SmallScreenNavItems = ({ showMenu, handleShowMenu }) => (
	<div
		className={`md:hidden absolute w-2/3 h-full top-0 ${
			showMenu ? 'right-0' : '-right-[45rem]'
		} z-50 bg-slate-500 transition-all duration-500`}
	>
		<div className='flex justify-between items-center px-3 md:hidden my-4'>
			<h4 className='font-roboto-condensed text-2xl flex items-center font-bold'>
				<CgMenuGridR className='mr-1' /> Menu
			</h4>
			<RxCross1
				className='text-xl md:hidden hover:cursor-pointer'
				onClick={handleShowMenu}
			/>
		</div>
		{navItems.map((item, index) => (
			<p
				className={`font-roboto-condensed mx-3 last:mr-0 py-2 text-xl flex items-center`}
				key={index}
			>
				{item.icon}
				{item.name}
			</p>
		))}
	</div>
);

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	useEffect(() => {
		const nav = document.querySelector('nav');
		const timeout = setTimeout(() => {
			nav.classList.remove('hidden');
			nav.classList.add('flex');
			nav.classList.add('animate-slide-in');
		}, 1000);
	});

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<nav className='fixed w-screen hidden'>
			<div className='flex justify-between items-center w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-4  transition-all animate-fade-in duration-150'>
				<div className=''>
					<h3 className='text-2xl uppercase font-raleway font-black leading-none dark:text-cyan-300'>
						Ravi Ranjan
					</h3>
					<p className='font-roboto-condensed tracking-wider leading-none text-slate-500'>
						Personal Portfolio
					</p>
				</div>
				<div className=''>
					<RxHamburgerMenu
						className={`text-2xl md:hidden hover:cursor-pointer`}
						onClick={handleShowMenu}
					/>
					<BigScreenNavItems />
					<SmallScreenNavItems
						showMenu={showMenu}
						handleShowMenu={handleShowMenu}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
