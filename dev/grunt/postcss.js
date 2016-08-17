module.exports = {
  options: {
    map: {
      inline: false,
    },

    processors: [
      require('pixrem')(), // add fallbacks for rem units

      require('autoprefixer')({
        // add vendor prefixes
        browsers: [
          'last 3 version',
          'ie >= 10',
          'iOS 4',
          'Android 2.3',
        ],
      }),

      require('cssnano')({
        convertValues: false,
        zindex: false,
      }), // minify the result
    ],
  },

  main: {
    files: {
      '<%= destMinCSS %>' : '<%= destCSS %>',
    },
  },
};
