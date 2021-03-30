module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'gray-250': '#D2D2D2'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
