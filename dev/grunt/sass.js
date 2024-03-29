module.exports = {
	options: {
		implementation: require('sass'),
		sourceMap: true,
	},

	dist: {
		files: [{
			expand: true,
			cwd: '<%= sourceCSSDir %>',
			src: '*.scss',
			dest: '<%= destCSSDir %>',
			ext: '<%= destCSSExt %>',
		}],
	},
};
