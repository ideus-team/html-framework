module.exports = {
  main: {
    options: {
      sassDir: '<%= sourceCSSDir %>',
      cssDir: '<%= destCSSDir %>',
      imagesDir: '<%= sourceIMGDir %>',
      outputStyle: 'expanded',
      force: true,
      relativeAssets: true,
      sourcemap: true,
    },
  },
};
