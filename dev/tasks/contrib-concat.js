module.exports = function(grunt) {

  // Склеиваем JS
  grunt.config('concat', {
    main: {
      src: [
        '<%= jsSourceFiles %>',
      ],
      dest: '<%= jsResultFile %>',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};