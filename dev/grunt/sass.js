module.exports = {
  options: {
    sourceMap: true,
  },

  dist: {
    files: [{
      expand: true,
      cwd: '<%= sourceCSSDir %>',
      src: ['*.scss'],
      dest: '<%= destCSSDir %>',
      ext:  '<%= destCSSExt %>',
    }],
  },
};
