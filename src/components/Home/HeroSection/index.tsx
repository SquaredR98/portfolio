import { Fira_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const firaSans = Fira_Sans({ weight: ['300'], subsets: ['latin'] });

export default function HeroSection() {
	return (
		<div className='min-h-screen min-w-screen flex flex-col items-center justify-center bg-black/70 back'>
			<h2 className='text-5xl font-bold'>
				Don&apos;t just build Websites
			</h2>
			<h1 className='text-5xl mt-4 bg-gradient-to-r from-[#D8003E] to-[#0348BE] bg-clip-text text-transparent font-bold'>
				Build your Online Identity
			</h1>
			<div className='w-96 h-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0 my-8'></div>
			<p
				className={`max-w-[32rem] opacity-75 text-center ${firaSans.className}`}
			>
				Unique. Scalable. Designed for growth. Let&apos;s craft
				something that makes your brand unforgettable.
			</p>
			<div className={`flex gap-x-6 mt-6 ${firaSans.className}`}>
				<Link
					href=''
					className='bg-gradient-to-r from-[#D8003E] to-[#0348BE] h-10 w-44 flex items-center justify-center rounded-xs transition-all duration-200 ease-linear hover:tracking-wider'
				>
					TELL ME YOUR IDEA
				</Link>
				<Link
					href=''
					className='bg-gradient-to-r from-[#D8003E] to-[#0348BE] h-10 w-56 flex items-center p-[1px] rounded-xs'
				>
					<span className='flex items-center justify-center h-full w-full bg-black rounded-xs transition-all duration-100 ease-linear hover:tracking-wider'>
						SEE WHAT I HAVE BUILT
					</span>
				</Link>
			</div>
		</div>
	);
}
