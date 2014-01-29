// Обязательная обёртка
module.exports = function(grunt) {

  // Конфигурация
  grunt.initConfig({
    // Пути к файлам и папкам JS
    configDir: 'config',
    sassDir: 'sass',
    sassFiles: '<%= sassDir %>' + '/main.scss',
    cssDir: '../css',
    jsSourceFiles: 'js/*.js',
    jsSourcePlugins: [
      'js/plugins/*.js',
      'js/plugins/helpers/*.js',
    ],
    jsResultFile: '../js/scripts.js',
  });

  // Загрузка конфигурации к задачам из отдельных файлов
  grunt.loadTasks('tasks');

  // Задача по умолчанию
  grunt.registerTask('default', ['compass', /*'clean',*/ 'csslint', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('dev', ['compass', /*'clean',*/ 'csslint', 'autoprefixer', 'jshint', 'concat']);
  grunt.registerTask('comb', ['compass', /*'clean',*/ 'csslint', 'autoprefixer', 'cssmin', 'csscomb']);
  grunt.registerTask('test', ['dalek']);
};