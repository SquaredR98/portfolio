import { motion } from 'motion/react';

export default function LoadingSpinner() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-slate-950">
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
				className="w-12 h-12 border-4 border-slate-700 border-t-fuchsia-500 rounded-full"
			/>
		</div>
	);
} 