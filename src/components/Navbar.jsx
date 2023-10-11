import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { CgMenuGridR } from 'react-icons/cg';
import { BsCodeSlash, BsFileEarmarkText } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Logo from './Logo';

const navItems = [
	{
		name: 'Resume',
		url: 'resume',
		icon: <BsFileEarmarkText className='mr-2' />,
	},
	{
		name: 'Devfolio',
		url: 'devfolio',
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
		<div className='hidden md:flex items-center dark:bg-slate-950/0'>
			{navItems.map((item, index) => (
				<Link
					key={index}
					to={`/${item.url}`}
					className='font-fira-sans-condensed font-light px-2 dark:text-white'
				>
					{item.name}
				</Link>
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
			className={`md:hidden -top-5 absolute bg-white/80 dark:bg-slate-950/90 pr-2 backdrop-blur-md w-3/4 ${
				showMenu ? '-right-3' : '-right-[45rem]'
			}  transition-all duration-500 h-screen`}
		>
			<div className='flex justify-between items-center md:hidden mt-6'>
				<h4 className='font-fira-sans-condensed font-light text-2xl pl-3 flex items-center dark:text-white'>
					<CgMenuGridR className='mr-1' /> Navigate
				</h4>
				<div className='flex items-center'>
					{darkMode ? (
						<MdLightMode
							className='text-2xl hover:cursor-pointer text-white transition-all'
							onClick={handleClick}
						/>
					) : (
						<MdDarkMode
							className='text-2xl hover:cursor-pointer transition-all'
							onClick={handleClick}
						/>
					)}
					<RxCross1
						className='text-xl ml-4 md:hidden hover:cursor-pointer dark:text-white'
						onClick={handleShowMenu}
					/>
				</div>
			</div>
			<div className='mt-2'>
				{navItems.map((item, index) => (
					<Link
						to={`/${item.url}`}
						className={`font-fira-sans-condensed font-light pl-4 last:mr-0 py-2 text-xl flex items-center dark:text-white `}
						key={index}
					>
						{item.icon}
						{item.name}
					</Link>
				))}
			</div>
		</div>
	);
};

const Navbar = ({ darkMode, setMode }) => {
	const [showMenu, setShowMenu] = useState(false);

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
		<nav className="fixed z-50 hidden w-screen transition-all animate-slide-in duration-150 bg-white dark:bg-slate-950 before:w-full before:h-full before:z-[-1] before:backdrop-filter-lg before:content-[''] py-2">
			<div className='flex justify-between items-center w-11/12 md:w-10/12 lg:w-8/12 mx-auto relative'>
				<Link to='/'>
					<Logo />
				</Link>
				<div className=''>
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
