import React, { ReactNode } from 'react';

export default function NavbarButton({
	label,
	icons,
}: {
	label: string;
	icons: ((props: any) => ReactNode)[];
}) {
	return (
		<div className='font-[400] border border-[#490609]/50 dark:border-cyan-400/30 p-1 group hover:border-[#490609] dark:hover:border-cyan-400/50 w-28 h-12 relative flex flex-col justify-center'>
			<div className='absolute border scale-0 bg-[#FFA0A4]/50 backdrop-blur-md group-hover:scale-100 left-1 right-1 top-1 bottom-1 border-[#490609]/50 dark:border-cyan-300/30 transition-all ease-in-out duration-300 z-[1]' />
			<p className='relative z-[1] px-2 py-1 text-[#490609] dark:text-cyan-400 border tracking-wide border-cyan-400/0 group-hover:tracking-widest transition-all ease-in-out duration-500  text-center'>
				{label}
			</p>
		</div>
	);
}
