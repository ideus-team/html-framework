module.exports = function(grunt) {

  // Склеиваем JS
  grunt.config('concat', {
    main: {
      src: [
        '<%= jsSourcePlugins %>',
        '<%= jsSourceFiles %>',
      ],
      dest: '<%= jsResultFile %>',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};