// Обязательная обёртка
module.exports = function(grunt) {

  // Конфигурация
  grunt.initConfig({
    // Пути к файлам и папкам JS
    js_files: 'js/main.js',
    js_plugins_files: 'js/plugins/**/*.js',
    js_result_file: '../js/scripts.js',
  });

  // Загрузка конфигурации к задачам из отдельных файлов
  grunt.loadTasks('tasks');

  // Задача по умолчанию
  grunt.registerTask('default', ['compass', /*'clean',*/ 'csslint', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('dev', ['compass', /*'clean',*/ 'csslint', 'autoprefixer', 'jshint', 'concat']);
  grunt.registerTask('test', ['dalek']);
};