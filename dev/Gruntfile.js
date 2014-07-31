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

    imgDir: '../img',
    imgBaseFiles: '<%= imgDir %>' + '/base64/*.{png,jpg,gif}',
  });

  // Загрузка конфигурации к задачам из отдельных файлов
  grunt.loadTasks('tasks');

  // Задача по умолчанию
  grunt.registerTask('default', ['datauri', 'compass', /*'clean',*/ 'csslint', 'autoprefixer', 'cssmin', /*'fixmyjs',*/ 'jshint', 'concat', 'uglify']);
  grunt.registerTask('dev',     ['datauri', 'compass', /*'clean',*/ 'csslint', 'autoprefixer', /*'fixmyjs',*/ 'jshint', 'concat']);
  grunt.registerTask('comb',    ['compass', /*'clean',*/ 'csslint', 'autoprefixer', 'cssmin', 'csscomb']);
  grunt.registerTask('test',    ['dalek']);
};