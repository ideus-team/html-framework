module.exports = function(grunt) {

  // Автоматизированное тестирование при помощи DalekJS
  grunt.config('dalek', {
    options: {
      // Task-specific options go here.
    },
    main: {
      src: 'test/test.js',
    },
  });

  grunt.loadNpmTasks('grunt-dalek');

};