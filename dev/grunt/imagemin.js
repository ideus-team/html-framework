module.exports = {
	main: {
		options: {
			svgoPlugins: [{
				removeViewBox: false,
			}],
		},
		files: [{
			expand: true,
			cwd: '<%= sourceIMGDir %>' + '/',
			src: '**/*' + '<%= sourceIMGFormats %>',
			dest: '<%= destIMGDir %>' + '/',
		}],
	},
};
