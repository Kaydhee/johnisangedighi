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
			white: '#fff',
			black: '#000',
			black2: '#141414',
			transparent: 'transparent',
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
