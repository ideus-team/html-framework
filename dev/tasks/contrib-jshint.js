module.exports = function(grunt) {

  // JSHint
  grunt.config('jshint', {
    options: {
      jshintrc: 'config/.jshintrc'
    },
    files: [
      'Gruntfile.js',
      '<%= js_files %>'
    ]
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

};