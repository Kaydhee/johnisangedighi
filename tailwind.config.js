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
			primaryVariant: '#003162',
			secondary: '#007fff',

			green: '#00ff00',
			white: '#fff',
			gray: '#F5F5F5',
			black: '#000',
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
		extend: {},
	},
	plugins: [],
};
