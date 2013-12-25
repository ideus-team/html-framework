module.exports = function(grunt) {

  // Чистим
  grunt.config('clean', {
    main: {
      src: '.sass-cache',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

};