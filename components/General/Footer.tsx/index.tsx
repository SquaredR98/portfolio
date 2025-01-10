import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '300', '500', '700'],
	subsets: ['latin'],
});

export default function Footer() {
	return (
		<footer className={`${firaSansCondensed.className} bg-gray-50`}>
			<div className='w-11/12 lg:w-8/12 max-w-5xl mx-auto backdrop-blur-lg flex flex-col items-center p-4 border-x border-red-600/20 py-16'>
				<div className='flex justify-between items-center w-full'>
					<div className=''>
						<p className='text-2xl text-red-900 font-bold'>
							Creating Digital Experiences
						</p>
					</div>{' '}
					<div className='flex gap-2'>
						<Link
							target='_blank'
							href='mailto:mail@ravi-ranjan.in'
						>
							<MdAlternateEmail className='border text-3xl p-1 border-red-600/20 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-500 ease-in-out' />
						</Link>
						<Link
							target='_blank'
							href='https://www.linkedin.com/in/raviranjan98/'
						>
							<FaLinkedinIn className='border text-3xl p-1 border-red-600/20 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-500 ease-in-out' />
						</Link>
						<Link
							target='_blank'
							href='https://www.github.com/SquaredR98'
						>
							<FaGithub className='border text-3xl p-1 border-red-600/20 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-500 ease-in-out' />
						</Link>
						<Link
							target='_blank'
							href='https://www.upwork.com/freelancers/~01f0f2709cd10b3bf9?mp_source=share'
						>
							<FaUpwork className='border text-3xl p-1 border-red-600/20 text-red-700 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-500 ease-in-out' />
						</Link>
					</div>
				</div>
				<div className='border-t w-full mt-4 text-center font-[300] pt-4'>
					<Link
						href='https://storyset.com/online'
						className='text-red-950/50 hover:text-red-950'
					>
						Online illustrations by Storyset
					</Link>
				</div>
			</div>
		</footer>
	);
}
