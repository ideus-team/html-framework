module.exports = function(grunt) {
  // fixmyjs
  grunt.config('fixmyjs', {
    options: {
      config: '<%= configDir %>' + '/.jshintrc',
      debug: false,
      legacy: true
    },
    test: {
      files: [
        {expand: true, src: ['js/main.js']}
      ]
    }
  });
  grunt.loadNpmTasks('grunt-fixmyjs');
};