import type { Metadata } from 'next';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/shared/StructuredData';
// import GlobalLoader from '@/components/shared/GlobalLoader';

export const metadata: Metadata = {
	title: 'Ravi Ranjan - Professional Consultant & Developer',
	description: 'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting. Full-stack development, e-commerce solutions, and technical consulting.',
	keywords: 'Ravi Ranjan, consultant, business solutions, professional services, development, full-stack developer, e-commerce, payment integration, React, Next.js, Node.js, PostgreSQL, MongoDB',
	authors: [{ name: 'Ravi Ranjan' }],
	creator: 'Ravi Ranjan',
	publisher: 'Ravi Ranjan',
	robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
	openGraph: {
		title: 'Ravi Ranjan - Professional Consultant & Developer',
		description: 'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting.',
		type: 'website',
		locale: 'en_US',
		siteName: 'Ravi Ranjan Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Ravi Ranjan - Professional Consultant & Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ravi Ranjan - Professional Consultant & Developer',
		description: 'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting.',
		images: ['/og-image.jpg'],
	},
	alternates: {
		canonical: 'https://raviranjan.com',
	},
	verification: {
		google: 'your-google-verification-code',
	},
};

const firaSans = Fira_Sans_Extra_Condensed({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<StructuredData />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<meta name="theme-color" content="#0f172a" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body
				className={`${firaSans.className} relative antialiased min-h-screen bg-slate-950`}
			>
				{children}
			</body>
		</html>
	);
}
