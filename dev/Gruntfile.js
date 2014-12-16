// Обязательная обёртка
module.exports = function(grunt) {

  // Конфигурация
  grunt.initConfig({
    // Пути к файлам и папкам
    configDir: 'config',

    sassDir: 'sass',
    sassFiles: '<%= sassDir %>' + '/main.scss',
    sassBase64: '<%= sassDir %>' + '/_base64.scss',
    cssDir: '../css',
    cssFiles: '<%= cssDir %>' + '/main.css',

    jsSourceFiles: 'js/*.js',
    jsSourcePlugins: [
      'js/plugins/*.js',
      'js/plugins/helpers/*.js',
    ],
    jsResultFile: '../js/scripts.js',

    imgDir: '../img',
    imgBaseFiles: '<%= imgDir %>' + '/base64/*.{png,jpg,gif}',

    // Pagespeed options
    pageUrl: 'https://developers.google.com',
    pageThreshold: 70,
    pageDevice: 'desktop',
  });

  // Загрузка конфигурации к задачам из отдельных файлов
  grunt.loadTasks('tasks');

  // Задача по умолчанию
  grunt.registerTask('default', ['datauri', 'datauriMobile', 'compass', 'csslint', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('dev',     ['datauri', 'datauriMobile', 'compass', 'csslint', 'autoprefixer', 'jshint', 'concat']);
  grunt.registerTask('comb',    ['compass', 'csslint', 'autoprefixer', 'cssmin', 'csscomb']); // не работает
  grunt.registerTask('test',    ['dalek']);
  grunt.registerTask('speed',   ['pagespeed']);
};