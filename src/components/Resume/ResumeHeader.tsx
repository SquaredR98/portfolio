'use client';

import React from 'react';
import { HiArrowLeft, HiArrowDownTray } from 'react-icons/hi2';
import Link from 'next/link';
import { MotionButton } from '../shared/MotionTags';

export default function ResumeHeader() {
	const handleDownload = () => {
		// TODO: Implement PDF download functionality
		console.log('Download PDF clicked');
	};

	return (
		<header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
			<div className="max-w-7xl mx-auto w-11/12 lg:w-9/12 py-2">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-3 text-white hover:text-fuchsia-400 transition-colors"
					>
						<HiArrowLeft className="w-5 h-5" />
						<div className="text-left">
							<div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
								Ravi Ranjan
							</div>
							<div className="text-sm text-slate-400 hidden lg:block">
								Full Stack Developer | React | Next.js | Tailwind CSS | TypeScript | Node.js | Express | MongoDB | PostgreSQL | AWS | Docker | Kubernetes
							</div>
						</div>
					</Link>
					<div className="flex items-center gap-4">
						<h1 className="text-2xl font-bold text-white hidden lg:block">Resume</h1>
						<MotionButton
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
							onClick={handleDownload}
							className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300"
						>
							<HiArrowDownTray className="w-4 h-4" />
							Download PDF
						</MotionButton>
					</div>
				</div>
			</div>
		</header>
	);
} 