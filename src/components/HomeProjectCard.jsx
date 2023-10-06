import React from 'react';
import CustomSlider from './CustomSlider';

const HomeProjectCard = ({ data }) => {
	const { title, techs, about, gallery, link, github } = data;
	return (
		<div className='my-8 shadow-lg dark:shadow-slate-900'>
			<div className='grid grid-cols-2 gap-x-8 py-4 shadow-lg'>
				<div className='flex items-center pl-4'>
					<div className='flex flex-col justify-between'>
						<h3 className='text-3xl font-bold text-slate-950 dark:text-cyan-300 mb-4'>
							{title}
						</h3>
						<p className='flex flex-wrap gap-2 my-2'>
							{techs.map((element, index) => (
								<span
									className='bg-cyan-200 text-slate-950 px-4 py-0.5 text-xs rounded-full'
									key={index}
								>
									{element}
								</span>
							))}
						</p>
						<p className='dark:text-white py-3 dark:font-light'>
							Description: {about}
						</p>
						<div className='my-4'>
							<a
								href={link}
								target='_blank'
								rel='noreferrer'
								className='font-fira-sans-condensed uppercase my-2 py-2 px-8 bg-slate-900 animate-slide-in-reverse text-white md:mr-8 transition-all duration-300 hover:opacity-90'
							>
								Live Demo
							</a>
							<a
								href={github}
								target='_blank'
								rel='noreferrer'
								className='font-fira-sans-condensed uppercase my-2 py-2 px-8 bg-slate-900 animate-slide-in-reverse text-white md:mr-8 transition-all duration-300 hover:opacity-90'
							>
								Github
							</a>
						</div>
					</div>
				</div>
				<div className='px-5 mr-4'>
					<CustomSlider gallery={gallery} />
				</div>
			</div>
		</div>
	);
};

export default HomeProjectCard;
