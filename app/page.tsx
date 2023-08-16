import Image from 'next/image';

export default function Home() {
	return (
		<main className='bg-white dark:bg-slate-900 h-screen w-10/12 mx-auto'>
			<div className='flex flex-col-reverse items-center h-3/4 lg:h-full md:flex-row'>
				<div className='md:w-1/2'>
					<div className='animate-slide-in'>
						<h1 className='text-slate-950 dark:text-cyan-300 text-6xl font-medium'>
							Ravi Ranjan
						</h1>
						<h3
							id=''
							className='text-slate-950 dark:text-cyan-300 text-xl font-light'
						>
							Software Developer @ Antino Labs
						</h3>
					</div>
					<div className='flex flex-col justify-between md:flex-row md:w-2/3 lg:w-64 mt-6 animate-slide-in-reverse'>
						<button className='border bg-cyan-300 border-cyan-300 px-6 py-2 transition-all duration-500 hover:bg-slate-900 hover:text-cyan-300'>
							Know More
						</button>
						<button className='border border-cyan-300 px-6 py-2 transition-all duration-500 hover:bg-cyan-300 text-cyan-300 hover:text-slate-900'>
							Resume
						</button>
					</div>
				</div>
				<div className='w-1/2 flex justify-center items-center relative animate-image-fade-in'>
					<Image
						src='/static/profile.jpg'
						alt='Profile'
						height={480}
						width={480}
						className='w-2/3'
						style={{
							clipPath: 'polygon(0% 25%,0% 75%,50% 100%,100% 75%,100% 25%,50% 0);',
						}}
					/>
				</div>
			</div>
		</main>
	);
}
