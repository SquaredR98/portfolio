import React from 'react';
import AboutMe from '../components/AboutMe';
import Banner from '../components/Banner';
import SkillsSection from '../components/SkillsSection';
import HomePageProjectSection from '../components/HomePageProjectSection';

const HomePage = () => {
	return (
		<>
			<Banner />
			<AboutMe />
			<SkillsSection />
			<HomePageProjectSection />
		</>
	);
};

export default HomePage;
