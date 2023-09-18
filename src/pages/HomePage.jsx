import React from 'react';
import AboutMe from '../components/AboutMe';
import Banner from '../components/Banner';
import SkillsSection from '../components/SkillsSection';
import HomeProjectCard from '../components/HomeProjectCard';

const HomePage = () => {
	return (
		<>
			<Banner />
			<AboutMe />
			<SkillsSection />
			<HomeProjectCard />
		</>
	);
};

export default HomePage;
