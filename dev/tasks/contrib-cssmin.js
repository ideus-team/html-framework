module.exports = function(grunt) {

  // Сжимаем CSS
  grunt.config('cssmin', {
    main: {
      expand: true,
      cwd: '../css/',
      src: '*.css',
      dest: '../css/',
      ext: '.css',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

};