module.exports = function(grunt) {

  // Сжимаем CSS
  grunt.config('cssmin', {
    main: {
      expand: true,
      cwd: '<%= cssDir %>' + '/',
      src: '*.css',
      dest: '<%= cssDir %>' + '/',
      ext: '.css',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

};