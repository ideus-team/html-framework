module.exports = function(grunt) {

  // CSSLint
  grunt.config('csslint', {
    main: {
      options: {
        csslintrc: '<%= configDir %>' + '/.csslintrc',
      },
      src: '<%= cssFiles %>',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');

};