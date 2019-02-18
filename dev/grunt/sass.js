module.exports = {
  options: {
    implementation: require('node-sass'),
    sourceMap: true,
  },

  dist: {
    files: [{
      expand: true,
      cwd: '<%= sourceCSSDir %>',
      src: '*.scss',
      dest: '<%= destCSSDir %>',
      ext: '<%= destCSSExt %>',
    }],
  },
};
