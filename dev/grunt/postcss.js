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
          'last 5 version',
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
    files: [{
      expand: true,
      cwd: '<%= destCSSDir %>',
      src: '*' + '<%= destCSSExt %>',
      dest: '<%= destCSSDir %>',
      ext: '<%= destMinCSSExt %>',
    }],
  },
};
