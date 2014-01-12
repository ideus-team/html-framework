module.exports = function(grunt) {

  // CSSLint
  grunt.config('csslint', {
    main: {
      options: {
        csslintrc: '<%= configDir %>' + '/.csslintrc',
      },
      src: '<%= cssDir %>' + '/*.css',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');

};