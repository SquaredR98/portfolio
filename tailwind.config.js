const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			textShadow: {
				sm: '0 0px 12px rgb(165 243 252)',
				DEFAULT: '0 0px 6px rgb(165 243 252)',
				lg: '0 0px 16px rgb(165 243 252)',
			},
			keyframes: {
				slideIn: {
					'0%': {
						transform: 'translateY(-50%)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: 1,
					},
				},
				slideInReverse: {
					'0%': {
						transform: 'translateY(50%)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: 1,
					},
				},
				imageFadeIn: {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
			},
			animation: {
				'slide-in': 'slideIn .5s ease-in-out',
				'slide-in-reverse': 'slideInReverse .5s ease-in-out',
				'image-fade-in': 'imageFadeIn 5s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') },
			);
		}),
	],
};
