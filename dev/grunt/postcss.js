module.exports = {
  options: {
    map: {
      inline: false,
    },

    processors: [
      require('pixrem')(), // add fallbacks for rem units

      require('autoprefixer')(),

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
