module.exports = {
  main: {
    options: {
      mangle: false,
      banner: '/*! Build: <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */',
    },
    files: [{
      '<%= destJS %>': '<%= destJS %>',
    }],
  },
};
