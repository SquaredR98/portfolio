import React from 'react';
import { MotionDiv, MotionLink } from '../ClientComponents/MotionElements';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import NavbarButton from '@/components/Custom/NavbarButton';
import { FaFigma, FaNodeJs } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { SiAuth0, SiGoogleforms } from 'react-icons/si';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import { IoCallOutline } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';

const navItems = [
	{
		title: 'SERVICES',
		url: '#services',
	},
	{
		title: 'ABOUT ME',
		url: '#about-me',
	},
	// {
	// 	title: 'CONTACT',
	// 	url: '#contact',
	// },
];

const firaSansCondensed = Fira_Sans_Extra_Condensed({
	weight: ['100', '200', '300', '500', '700'],
	subsets: ['latin'],
});

export default function NavItems() {
	return (
		<MotionDiv
			className={`${firaSansCondensed.className} md:flex gap-x-4 hidden`}
		>
			{navItems.map(({ title, url }, idx) => (
				<MotionLink
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: idx * 0.25 + 2 }}
					href={url}
					key={idx}
				>
					<NavbarButton label={title} />
				</MotionLink>
			))}
		</MotionDiv>
	);
}
