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
      'watch:configs',
      'watch:devscripts',
      'watch:styles',
      'watch:devimages',
    ],
  },
};
