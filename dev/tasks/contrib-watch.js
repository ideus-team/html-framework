module.exports = function(grunt) {

  // Следим за изменениями файлов
  grunt.config('watch', {
    main: {
      files: [
        '<%= sassDir %>' + '/**/*.scss',
        '<%= csslint.main.options.csslintrc %>',
        '<%= jsSourceFiles %>',
        '<%= jshint.options.jshintrc %>',
        'Gruntfile.js',
        'tasks/*.js',
      ],
      tasks: 'default',
    },
    dev: {
      files: [
        '<%= sassDir %>' + '/**/*.scss',
        '<%= csslint.main.options.csslintrc %>',
        '<%= jsSourceFiles %>',
        '<%= jshint.options.jshintrc %>',
        'Gruntfile.js',
        'tasks/*.js',
      ],
      tasks: 'dev',
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};