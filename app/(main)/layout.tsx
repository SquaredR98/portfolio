import Navbar from '@/components/General/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<body className='bg-white dark:bg-slate-950'>
			<Navbar />
			{children}
			<SpeedInsights />
		</body>
	);
}
