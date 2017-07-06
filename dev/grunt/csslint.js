module.exports = {
  options: {
    csslintrc: '<%= gruntPluginsDir %>' + '/.csslintrc',
  },

  src: [
    '<%= destCSSDir %>' + '/*' + '<%= destCSSExt %>',
  ],
};
