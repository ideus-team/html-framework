module.exports = function(grunt) {

  // Сортируем свойства CSS
  grunt.config('csscomb', {
    main: {
      options: {
        config: 'config/csscomb.json'
      },
      files: {
        'sass/main.scss': ['sass/main.scss'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-csscomb');

};