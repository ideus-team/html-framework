// Обязательная обёртка
module.exports = function(grunt) {

  // Конфигурация
  grunt.initConfig({
    // Пути к файлам и папкам
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

    // Pagespeed options
    pageUrl: 'https://developers.google.com',
    pageThreshold: 70,
    pageDevice: 'desktop',
  });

  // Загрузка конфигурации к задачам из отдельных файлов
  grunt.loadTasks('tasks');

  // Задача по умолчанию
  grunt.registerTask('default', ['datauri', 'datauriMobile', 'compass', 'csslint', 'autoprefixer', 'cssmin', 'fixmyjs', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('dev',     ['datauri', 'datauriMobile', 'compass', 'csslint', 'autoprefixer', 'fixmyjs', 'jshint', 'concat']);
  grunt.registerTask('comb',    ['compass', 'csslint', 'autoprefixer', 'cssmin', 'csscomb']);
  grunt.registerTask('test',    ['dalek']);
  grunt.registerTask('speed',   ['pagespeed']);
};