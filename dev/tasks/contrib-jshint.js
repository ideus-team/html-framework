module.exports = function(grunt) {

  // JSHint
  grunt.config('jshint', {
    options: {
      jshintrc: '<%= configDir %>' + '/.jshintrc',
    },
    files: [
      'Gruntfile.js',
      '<%= jsSourceFiles %>',
    ],
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};