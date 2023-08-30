/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
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
				leaveTopRight: {
					'0%': {
						transform: 'translateY(0%)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(100%)',
						opacity: 1,
					},
				},
			},
			animation: {
				'slide-in': 'slideIn 1.5s ease-in-out',
				'slide-in-reverse': 'slideInReverse 1.5s ease-in-out',
				'fade-in': 'imageFadeIn 1.5s ease-in-out',
			},
		},
		fontFamily: {
			raleway: ['Raleway', 'sans-serif'],
			'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
		},
	},
	plugins: [],
};
