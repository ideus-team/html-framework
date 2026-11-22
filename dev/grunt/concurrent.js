module.exports = {
	options: {
		logConcurrentOutput: true,
	},

	main: {
		tasks: [
			'watch:configs',
			'watch:scripts',
			'watch:styles',
			'watch:images',
		],
	},

	dev: {
		tasks: [
			'watch:devconfigs',
			'watch:devscripts',
			'watch:styles',
			'watch:devimages',
		],
	},
};
