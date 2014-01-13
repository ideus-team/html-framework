module.exports = function(grunt) {

  // Следим за изменениями файлов
  grunt.config('watch', {
    main: {
      options: {
        atBegin: true,
      },
      files: [
        '<%= sassDir %>' + '/**/*.scss',
        '<%= csslint.main.options.csslintrc %>',
        '<%= jsSourcePlugins %>',
        '<%= jsSourceFiles %>',
        '<%= jshint.options.jshintrc %>',
        'Gruntfile.js',
        'tasks/*.js',
      ],
      tasks: 'default',
    },
    dev: {
      options: {
        atBegin: true,
      },
      files: [
        '<%= sassDir %>' + '/**/*.scss',
        '<%= csslint.main.options.csslintrc %>',
        '<%= jsSourcePlugins %>',
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