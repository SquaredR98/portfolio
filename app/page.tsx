import Image from 'next/image';

export default function Home() {

  // useEffect(() => {
	// 	const lineElements = containerRef.current.querySelectorAll('li');
	// 	const resume = document.getElementById('resume');
	// 	const landingCta = document.getElementById('landing-cta');
	// 	lineElements.forEach((lineElement, index) => {
	// 		const delay = (index + 1) * 0.2;
	// 		console.log(delay);
	// 		lineElement.style.animationDelay = `${delay}s`;
	// 		lineElement.classList.add('animate-slide-in');
	// 	});
	// 	resume.style.animationDelay = `${1}s`;
	// 	resume.classList.add('animate-slide-in');
	// 	landingCta.style.animationDelay = `${2}s`;
	// 	landingCta.classList.add('animate-slide-in');

	// 	setTimeout(() => {
	// 		lineElements.forEach((lineElement) => {
	// 			lineElement.classList.remove('opacity-0');
	// 		});
	// 	}, intro.length * 0.2 * 1000);
	// 	setTimeout(() => {
	// 		resume.classList.remove('opacity-0');
	// 	}, intro.length * 0.2 * 1000 + 900);
	// 	setTimeout(() => {
	// 		landingCta.classList.remove('opacity-0');
	// 	}, intro.length * 0.2 * 1000 + 1600);
	// }, []);

	return (
		<main className='bg-white dark:bg-slate-900 h-screen w-10/12 mx-auto'>
			<div className='flex items-center h-full'>
				<div className='w-1/2'>
					<h1 className='text-slate-950 dark:text-cyan-300 text-6xl font-medium text-shadow-sm'>
						Ravi Ranjan
					</h1>
					<h3 id='' className='text-slate-950 dark:text-cyan-300 text-xl font-light text-shadow-sm'>Software Developer @ Antino Labs</h3>
				</div>
				<div className='w-1/2 flex justify-center items-center'>
					<Image
						src='/static/profile.jpg'
						alt='Profile'
						height={480}
						width={480}
            className='w-2/3 rounded-full'
					/>
				</div>
			</div>
		</main>
	);
}
