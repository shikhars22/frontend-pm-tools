/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 100 },
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.4s ease-in-out forwards',
			},
			colors: {
				'lam-mint': '#6CE3C6',
				'lam-midnight': '#242437',
				'lam-slate': '#6A7885',
				'lam-sand': '#E6E3DC',
			},
			backgroundColor: {
				'lam-mint': '#6CE3C6',
				'lam-midnight': '#242437',
				'lam-slate': '#6A7885',
				'lam-sand': '#E6E3DC',
			},
			textColor: {
				'lam-mint': '#6CE3C6',
				'lam-midnight': '#242437',
				'lam-slate': '#6A7885',
				'lam-sand': '#E6E3DC',
			},
			ringColor: {
				'lam-mint': '#6CE3C6',
				'lam-midnight': '#242437',
				'lam-slate': '#6A7885',
				'lam-sand': '#E6E3DC',
			},
			borderColor: {
				'lam-mint': '#6CE3C6',
				'lam-midnight': '#242437',
				'lam-slate': '#6A7885',
				'lam-sand': '#E6E3DC',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
