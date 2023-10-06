import React from 'react';
import skills from '../data/skills';
import SkillCard from './SkillCard';
import TextOverText from './TextOverText';

const SkillsSection = () => {
	return (
		<div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-16'>
			<h2 className='font-roboto-condensed text-3xl font-bold dark:text-cyan-300 mb-16'>
				<TextOverText text='SKILLS & EXPERTISE' />
			</h2>
			<div className='grid md:grid-cols-2 gap-4 my-6 mt-8'>
				{skills.map(({ title, skills }, index) => (
					<SkillCard
						key={index}
						title={title}
						skills={skills}
					/>
				))}
			</div>
		</div>
	);
};

export default SkillsSection;
