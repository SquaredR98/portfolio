import React from 'react';
import { projects } from '../data/homePageProjects';
import HomeProjectCard from './HomeProjectCard';
import TextOverText from './TextOverText';

const HomePageProjectSection = () => {
	return (
		<div>
			<div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-16'>
				<h2 className='font-roboto-condensed text-3xl font-bold dark:text-cyan-300 mb-4'>
					<TextOverText text='PORTFOLIO' />
				</h2>
				<div className='w-full'>
					{projects.map((element, index) => (
						<HomeProjectCard
							data={element}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePageProjectSection;
