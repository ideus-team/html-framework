module.exports = function(grunt) {

  // Следим за изменениями файлов
  grunt.config('watch', {
    main: {
      files: [
        '<%= compass.main.options.sassDir %>' + '/**/*.scss',
        '<%= csslint.main.options.csslintrc %>',
        '<%= concat.main.src %>',
        '<%= jshint.options.jshintrc %>',
        'Gruntfile.js',
      ],
      tasks: 'default',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};