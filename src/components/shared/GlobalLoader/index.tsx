import React from 'react';
import styles from './styles.module.css';

export default function GlobalLoader() {
	return (
		<div className='absolute top-0 left-0 bottom-0 right-0 z-30 flex justify-center items-center bg-black/60 backdrop-blur-lg'>
			<div
				className={`w-72 h-1 rounded-full bg-gradient-to-r from-[#D8003E] to-[#0348BE] ${styles.animateLine}`}
			/>
		</div>
	);
}
