module.exports = {
  options: {
    sourceMap: true,
    includePaths: require('node-refills').includePaths,
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
