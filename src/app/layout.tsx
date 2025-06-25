import type { Metadata } from 'next';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/shared/StructuredData';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
// import GlobalLoader from '@/components/shared/GlobalLoader';

export const metadata: Metadata = {
	title: 'Ravi Ranjan - Professional Consultant & Developer',
	description:
		'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting. Full-stack development, e-commerce solutions, and technical consulting.',
	keywords: 'Ravi Ranjan, consultant, business solutions, professional services, development, full-stack developer, e-commerce, payment integration, React, Next.js, Node.js, PostgreSQL, MongoDB',
	authors: [{ name: 'Ravi Ranjan' }],
	creator: 'Ravi Ranjan',
	publisher: 'Ravi Ranjan',
	robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/icon.png', type: 'image/png', sizes: '32x32' },
			{
				url: '/favicon-16x16.png',
				type: 'image/png',
				sizes: '16x16',
			},
			{
				url: '/favicon-16x16.png',
				type: 'image/png',
				sizes: '32x32',
			},
			{ url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
			{
				url: '/android-chrome-192x192.png',
				type: 'image/png',
				sizes: '192x192',
			},
			{
				url: '/android-chrome-512x512.png',
				type: 'image/png',
				sizes: '512x512',
			},
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
		other: [
			{
				rel: 'mask-icon',
				url: '/safari-pinned-tab.svg',
				color: '#0f172a',
			},
		],
	},
	manifest: '/site.webmanifest',
	openGraph: {
		title: 'Ravi Ranjan - Professional Consultant & Developer',
		description:
			'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting.',
		type: 'website',
		locale: 'en_US',
		siteName: 'Ravi Ranjan Portfolio',
		url: 'https://ravi-ranjan.in',
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
		description:
			'Professional consulting services by Ravi Ranjan. Expert in business solutions, development, and strategic consulting.',
		images: ['/og-image.jpg'],
		creator: '@raviranjan98',
	},
	alternates: {
		canonical: 'https://ravi-ranjan.in',
	},
	verification: {
		google: 'your-google-verification-code',
		other: {
			'msvalidate.01': 'your-bing-verification-code',
		},
	},
	category: 'technology',
	classification: 'Portfolio Website',
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
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link
					rel='icon'
					href='/icon.png'
					type='image/png'
					sizes='32x32'
				/>
				<link
					rel='apple-touch-icon'
					href='/apple-touch-icon.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='theme-color' content='#0f172a' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</head>
			<body
				className={`${firaSans.className} relative antialiased min-h-screen bg-slate-950 overflow-x-hidden`}
			>
				<Header />
				{children}
				<Footer />
				
			</body>
		</html>
	);
}
