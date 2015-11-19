module.exports = {
  options: {
    map: true, // inline sourcemaps

    processors: [
      require('pixrem')(), // add fallbacks for rem units

      require('autoprefixer')({
        // add vendor prefixes
        browsers: [
          'last 3 version',
          'ie 8',
          'ff 3.6',
          'opera 11.1',
          'ios 4',
          'android 2.3',
        ],
      }),

      require('cssnano')({
        convertValues: false
      }), // minify the result
    ],
  },

  dist: {
    src: '<%= destCSSDir %>' + '/*.css',
  },
};
