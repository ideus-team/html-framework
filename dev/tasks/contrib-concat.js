module.exports = function(grunt) {

  // Склеиваем JS
  grunt.config('concat', {
    main: {
      src: [
        '<%= js_plugins_files %>',
        '<%= js_files %>',
      ],
      dest: '<%= js_result_file %>',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};