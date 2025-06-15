import React from 'react';
import AnimatedContainer from '../AnimatedContainer';
import Button from '../Button';

interface CallToActionProps {
	title: string;
	description: string;
	buttonText: string;
	onButtonClick?: () => void;
	buttonHref?: string;
	className?: string;
	delay?: number;
}

export default function CallToAction({
	title,
	description,
	buttonText,
	onButtonClick,
	buttonHref,
	className = '',
	delay = 0.8
}: CallToActionProps) {
	return (
		<AnimatedContainer
			variants="fadeUp"
			delay={delay}
			className={`text-center mt-16 ${className}`}
		>
			<div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
				<h3 className="text-2xl font-bold text-white mb-4">
					{title}
				</h3>
				<p className="text-slate-400 mb-6 max-w-2xl mx-auto">
					{description}
				</p>
				{buttonHref ? (
					<Button
						type="LINK"
						variant="PRIMARY"
						href={buttonHref}
						className="px-8 py-3"
					>
						{buttonText}
					</Button>
				) : (
					<Button
						type="BUTTON"
						variant="PRIMARY"
						onClick={onButtonClick}
						className="px-8 py-3"
					>
						{buttonText}
					</Button>
				)}
			</div>
		</AnimatedContainer>
	);
} 