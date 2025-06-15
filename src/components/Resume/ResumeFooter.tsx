'use client';

import React from 'react';
import { HiEnvelope, HiLink, HiArrowUp } from 'react-icons/hi2';
import { MotionH2, MotionH3, MotionP, MotionButton } from '../shared/MotionTags';
import Link from 'next/link';

const socialLinks = [
	{
		name: 'GitHub',
		url: 'https://github.com/SquaredR98',
		icon: HiLink
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/yourfriendraviranjan',
		icon: HiLink
	},
	{
		name: 'Email',
		url: 'mailto:mail@ravi-ranjan.in',
		icon: HiEnvelope
	}
];

export default function ResumeFooter() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="bg-slate-900 border-t border-slate-800 mt-20">
			<div className="max-w-7xl mx-auto w-11/12 lg:w-9/12 py-12">
				<div className="flex justify-between items-center">
					{/* Logo and Bio */}
					<div className="text-center md:text-left">
						<MotionH2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mb-2">
							Ravi Ranjan
						</MotionH2>
						<MotionP className="text-slate-400 text-sm">
							Full Stack Developer passionate about building scalable web applications
						</MotionP>
					</div>


					{/* Social Links */}
					<div className="text-center md:text-right">
						<MotionH3 className="text-white font-semibold mb-4">Connect With Me</MotionH3>
						<div className="flex justify-center md:justify-end gap-4">
							{socialLinks.map((social) => (
								<Link
									key={social.name}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-fuchsia-400 hover:bg-slate-700 transition-all duration-300"
								>
									<social.icon className="w-5 h-5" />
								</Link>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-slate-800 mt-8 pt-8 text-center">
					<MotionP className="text-slate-500 text-sm">
						© 2024 Ravi Ranjan. All rights reserved. Built with Next.js and Tailwind CSS.
					</MotionP>
				</div>

				{/* Back to Top Button */}
				<MotionButton
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.2 }}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
				>
					<HiArrowUp className="w-5 h-5" />
				</MotionButton>
			</div>
		</footer>
	);
} 