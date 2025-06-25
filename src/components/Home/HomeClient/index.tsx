'use client';

import {
	EntryStateProvider,
	useEntryState,
} from '../../EntryPage/EntryStateContext';
import EntryPage from '../../EntryPage';
import ContactForm from '../../EntryPage/ContactForm';
import AboutSection from '../AboutSection';
import SkillsSection from '../SkillsSection';
import ServicesSection from '../ServicesSection';
import ProjectsSection from '../ProjectsSection';
import ExperienceSection from '../ExperienceSection';
import ContactSection from '../ContactSection';
import { AnimatePresence } from 'motion/react';

function MainContent() {
	const { websiteVisible, contactFormVisible } = useEntryState();

	return (
		<>
			{/* Entry Page - Always Visible */}
			<main className='min-h-screen w-full flex flex-col justify-center'>
				<EntryPage />
			</main>

			{/* Website Sections - Appear when "ENTER" is clicked */}
			<AnimatePresence>
				{websiteVisible && (
					<>
						<AboutSection />
						<SkillsSection />
						<ServicesSection />
						<ProjectsSection />
						<ExperienceSection />
						<ContactSection />
					</>
				)}
			</AnimatePresence>

			{/* Contact Form Modal */}
			<AnimatePresence>
				{contactFormVisible && <ContactForm />}
			</AnimatePresence>
		</>
	);
}

export default function HomeClient() {
	return (
		<EntryStateProvider>
			<MainContent />
		</EntryStateProvider>
	);
}
