import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Noto Serif SC', 'Vesper Libre', ...defaultTheme.fontFamily.serif],
				sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
				hargle: ['Work Sans'],
			},
			colors: {
				'p-red': 
				{
					'light': '#D98E73',
					DEFAULT: '#d9583b',
					'dark': '#D94423'
				},
				'p-cream': '#FFFCEB',
				'p-blue': '#3B3F59',
			},
			aspectRatio: {
				'box': '3 / 2'
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
