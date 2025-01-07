/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			red: '#ff0000',
			blue: '#0000ff',
			// primary: '#001e3c',
			primary: '#003162',
			variantColor: '#00264d',
			secondary: '#E2F4FE',
			placeholderColor: '#00509f',

			green: '#00ff00',
			white: '#FFFFFF',
			gray: '#5F5F5F',
			gray2: '#4F4D4D',
			black: '#0B0B0B',
			black2: '#141414',
			transparent: 'transparent',
			// shadow: '0 0 1.5rem 0 rgba(0, 0, 255, 0.2)',
			transition: 'all 500ms ease',
		},
		// fontFamily: {
		// 	tilt: 'Tilt Neon',
		// 	silkScreen: 'Silkscreen',
		// },
		screens: {
			sm: '576px',

			md: '960px',
		},
		extend: {
			keyframes: {
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideInRight: {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
			},
			animation: {
				slideUp: 'slideUp 1s ease-out',
				slideInRight: 'slideInRight 1s ease-out',
			},
		},
	},
	plugins: [],
};
