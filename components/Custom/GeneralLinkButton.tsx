import Link from 'next/link';
import React from 'react';

interface IGeneralLinkButtonProps {
	label: string;
	buttonStyles?: string;
	url: string;
}

export default function GeneralLinkButton({
	url,
	buttonStyles,
	label,
}: IGeneralLinkButtonProps) {
	return (
		<Link href={url} className='group'>
			<button className={buttonStyles}>{label}</button>
		</Link>
	);
}
