import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { CgMenuGridR } from 'react-icons/cg';
import { BsCodeSlash, BsFileEarmarkText } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

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

const BigScreenNavItems = ({ darkMode, onClick }) => {
	const handleClick = () => {
		onClick(!darkMode);
	};
	return (
		<div className='hidden md:flex items-center'>
			{navItems.map((item, index) => (
				<p
					key={index}
					className='font-roboto-condensed px-2 dark:text-white'
				>
					{item.name}
				</p>
			))}
			{darkMode ? (
				<MdLightMode
					className='text-2xl hover:cursor-pointer text-white transition-all ml-2'
					onClick={handleClick}
				/>
			) : (
				<MdDarkMode
					className='text-2xl hover:cursor-pointer transition-all ml-2'
					onClick={handleClick}
				/>
			)}
		</div>
	);
};
const SmallScreenNavItems = ({
	showMenu,
	handleShowMenu,
	darkMode,
	onClick,
}) => {
	const handleClick = () => {
		onClick(!darkMode);
	};
	return (
		<div
			className={`md:hidden absolute bg-white dark:bg-slate-950  w-2/3 ${
				showMenu ? 'right-0' : '-right-[45rem]'
			}  transition-all duration-500 h-screen`}
		>
			<div className='flex justify-between items-center px-3 md:hidden my-4'>
				<h4 className='font-roboto-condensed text-2xl flex items-center font-bold dark:text-cyan-300'>
					<CgMenuGridR className='mr-1' /> Navigate
				</h4>
				<div className='flex items-center'>
					{darkMode ? (
						<MdLightMode
							className='text-2xl hover:cursor-pointer text-white transition-all ml-2'
							onClick={handleClick}
						/>
					) : (
						<MdDarkMode
							className='text-2xl hover:cursor-pointer transition-all ml-2'
							onClick={handleClick}
						/>
					)}
					<RxCross1
						className='text-xl ml-3 md:hidden hover:cursor-pointer dark:text-white'
						onClick={handleShowMenu}
					/>
				</div>
			</div>
			{navItems.map((item, index) => (
				<p
					className={`font-roboto-condensed mx-3 last:mr-0 py-2 text-xl flex items-center bg-white dark:text-white dark:bg-slate-950`}
					key={index}
				>
					{item.icon}
					{item.name}
				</p>
			))}
		</div>
	);
};

const Navbar = ({ darkMode, setMode }) => {
	const [showMenu, setShowMenu] = useState(false);
	console.log(showMenu);

	useEffect(() => {
		const timeout = setTimeout(() => {
			const nav = document.querySelector('nav');
			nav.classList.remove('hidden');
		}, 1000);

		return () => clearTimeout(timeout);
	});

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<nav className='fixed z-50 hidden w-screen transition-all animate-slide-in duration-150 bg-white dark:bg-slate-950'>
			<div className='flex justify-between items-center w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-4 relative'>
				<div className=''>
					<h3 className='text-2xl uppercase font-raleway font-black leading-none dark:text-cyan-300'>
						Ravi Ranjan
					</h3>
					<p className='font-roboto-condensed tracking-wider leading-none uppercase text-slate-500'>
						Designer & Developer
					</p>
				</div>
				<div className='bg-white dark:bg-slate-950'>
					<RxHamburgerMenu
						className={`text-2xl md:hidden hover:cursor-pointer dark:text-cyan-300`}
						onClick={() => setShowMenu(!showMenu)}
					/>
					<BigScreenNavItems
						darkMode={darkMode}
						onClick={setMode}
					/>
					<SmallScreenNavItems
						showMenu={showMenu}
						handleShowMenu={handleShowMenu}
						darkMode={darkMode}
						onClick={setMode}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
