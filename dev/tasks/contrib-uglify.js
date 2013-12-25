module.exports = function(grunt) {

  // Сжимаем JS
  grunt.config('uglify', {
    main: {
      options: {
        mangle: false,
      },
      files: {
        // Результат задачи concat
        '<%= js_result_file %>': '<%= concat.main.dest %>',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};