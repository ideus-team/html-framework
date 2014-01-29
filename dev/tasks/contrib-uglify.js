module.exports = function(grunt) {

  // Сжимаем JS
  grunt.config('uglify', {
    main: {
      options: {
        mangle: false,
      },
      files: {
        '<%= jsResultFile %>': '<%= jsResultFile %>',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};