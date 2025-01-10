import Footer from '@/components/General/Footer.tsx';
import Navbar from '@/components/General/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Full-Stack Developer | Scalable Web Solutions | Ravi Ranjan',
	description:
		'Ravi Ranjan is a Full-Stack Developer specializing in scalable web solutions, modern web technologies, and tailored digital experiences.',
	icons: {
		icon: '/favicon/favicon-16x16.png',
		shortcut: '/favicon/favicon-32x32.png',
		apple: '/favicon/apple-touch-icon.png',
	},
	keywords: [
		'Full-Stack Developer',
		'Web Development',
		'Scalable Solutions',
		'React',
		'Node.js',
		'SEO',
	],
	authors: [{ name: 'Ravi Ranjan', url: 'https://yourdomain.com' }],
	openGraph: {
		title: 'Full-Stack Developer | Scalable Web Solutions | Ravi Ranjan',
		description:
			'Explore modern web development services by Ravi Ranjan, specializing in scalable solutions and tailored experiences with technologies like React, Node.js, and Moodle.',
		url: 'https://ravi-ranjan.in',
		siteName: 'Ravi Ranjan Portfolio',
		images: [
			{
				url: 'https://ravi-ranjan.in/profile.png',
				width: 1200,
				height: 1200,
				alt: 'Ravi Ranjan Portfolio Image',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Full-Stack Developer | Scalable Web Solutions | Ravi Ranjan',
		description:
			'Ravi Ranjan offers web development services focusing on scalability, security, and user-centric designs with cutting-edge technologies.',
		images: ['https://ravi-ranjan.in/profile.png'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<body className='bg-white dark:bg-slate-950'>
			<Navbar />
			{children}
			<Footer />
			<SpeedInsights />
		</body>
	);
}
