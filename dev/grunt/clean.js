module.exports = {
  options: {
    force: true,
  },

  main: [
    '<%= tempDir %>',
    '<%= destCSSDir %>',
    '<%= destIMGDir %>',
  ],
};
