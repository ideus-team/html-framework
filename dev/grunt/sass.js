module.exports = {
  options: {
    implementation: require('dart-sass'),
    fiber: require('fibers'),
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
