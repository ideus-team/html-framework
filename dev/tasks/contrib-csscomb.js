module.exports = function(grunt) {

  // Сортируем свойства CSS
  grunt.config('csscomb', {
    main: {
      options: {
        config: '<%= configDir %>' + '/csscomb.json'
      },
      files: {
        '<%= sassFiles %>': ['<%= sassFiles %>'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-csscomb');

};