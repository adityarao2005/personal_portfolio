/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			'sm-exclusive': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }

			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md-exclusive': { 'max': '767px', 'min': '640px' },
			// => @media (min-width: 640px) and (max-width: 767px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg-exclusive': { 'max': '1023px', 'min': '768px' },
			// => @media (min-width: 640px) and (max-width: 767px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl-exclusive': { 'max': '1279px', 'min': '1024px' },
			// => @media (min-width: 640px) and (max-width: 767px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl-exclusive': { 'max': '1535px', 'min': '1280' },
			// => @media (min-width: 640px) and (max-width: 767px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
}