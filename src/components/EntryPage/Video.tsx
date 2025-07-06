import React from 'react';

export default function Video() {
	return (
		<div className='absolute top-0 left-0 w-full h-screen -z-1'>
			<video
				src='/background.mp4'
				autoPlay
				muted
				loop
				className='w-full h-full object-cover opacity-10'
			/>
		</div>
	);
}
