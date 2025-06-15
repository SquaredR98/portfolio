import { Metadata } from 'next';
import HomeClient from '@/components/Home/HomeClient';

export const metadata: Metadata = {
	title: 'Ravi Ranjan - Professional Consultant & Developer',
	description: 'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting. Full-stack development, e-commerce solutions, and technical consulting.',
	keywords: 'Ravi Ranjan, consultant, business solutions, professional services, development, full-stack developer, e-commerce, payment integration, React, Next.js, Node.js',
	authors: [{ name: 'Ravi Ranjan' }],
	creator: 'Ravi Ranjan',
	publisher: 'Ravi Ranjan',
	robots: 'index, follow',
	openGraph: {
		title: 'Ravi Ranjan - Professional Consultant & Developer',
		description: 'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ravi Ranjan - Professional Consultant & Developer',
		description: 'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting.',
	},
};

export default function Home() {
	return <HomeClient />;
}
