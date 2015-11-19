module.exports = {
  options: {
    reporter: require('jshint-stylish'),
    jshintrc: '<%= gruntPluginsDir %>' + '/.jshintrc',
  },

  files: [
    '<%= sourceJSMy %>',
  ],
};
