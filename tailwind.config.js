const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
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
