import React from 'react';

import { projects } from '../data/homePageProjects';
import CustomSlider from './CustomSlider';

const HomeProjectCard = () => {
	return (
		<div>
			<div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-2 bg-slate-200 dark:bg-slate-900 py-10 px-5 shadow-lg'>
				<div className='flex items-center'>
					{projects.map((element, index) => (
						<div key={index}>
							<h3 className='text-3xl font-bold text-slate-950 dark:text-cyan-100'>
								{element.title}
							</h3>
							<p className='flex flex-wrap gap-2 my-2'>
								{element.techs.map(
									(element, index) => (
										<span
											className='bg-slate-400 text-slate-950 px-4 py-1 rounded-full'
											key={index}
										>
											{element}
										</span>
									),
								)}
							</p>
							<p className='dark:text-white py-3 dark:font-light'>
								Description: {element.about}
							</p>
							<div>
								<button className='font-fira-sans-condensed uppercase my-2 py-2 px-8 bg-slate-900 animate-slide-in-reverse text-white md:mr-8 transition-all duration-300 hover:opacity-90'>
									Live Demo
								</button>
								<button className='font-fira-sans-condensed uppercase my-2 py-2 px-8 bg-slate-900 animate-slide-in-reverse text-white md:mr-8 transition-all duration-300 hover:opacity-90'>
									Github
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='px-5'>
					<CustomSlider gallery={projects[0].gallery} />
				</div>
			</div>
		</div>
	);
};

export default HomeProjectCard;
