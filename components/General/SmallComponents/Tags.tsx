import React, { ReactElement, ReactNode } from 'react';

export default function Tags({
	Icon,
	text,
}: {
	Icon: ReactElement;
	text: string;
}) {
	return (
		<span className='border pr-3 font-[400] rounded-full border-red-700/60 bg-red-200/40 text-nowrap'>
			{Icon} {text}
		</span>
	);
}
