module.exports = {
	options: {
		map: {
			inline: false,
		},

		processors: [
			require('autoprefixer')(), // add vendor prefixes

			require('cssnano')({
				convertValues: false,
				zindex: false,
			}), // minify the result
		],
	},

	main: {
		files: [{
			expand: true,
			cwd: '<%= destCSSDir %>',
			src: '*' + '<%= destCSSExt %>',
			dest: '<%= destCSSDir %>',
			ext: '<%= destMinCSSExt %>',
		}],
	},
};
