module.exports = function(grunt) {

  // CSSLint
  grunt.config('csslint', {
    main: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '<%= compass.main.options.cssDir %>' + '/*.css',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');

};