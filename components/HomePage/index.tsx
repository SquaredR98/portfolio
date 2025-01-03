import React, { Fragment } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ExperienceAndSkills from './ExperienceAndSkills';

export default function HomePage() {
	return (
		<Fragment>
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<ExperienceAndSkills />
		</Fragment>
	);
}
