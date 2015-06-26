module.exports = function(grunt) {

  // Конфигурация
  grunt.initConfig({

  });

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: true,

    data: {
      // data passed into config.  Can use with <%= test %>

      // Путь к конфигам плагинов (CSSLint,JsHint, etc)
      configDir: 'grunt/config',

      // имена генерируемых css файлов берутся из имен scss файлов в /dev/sass
      sassDir: 'src/sass',
      sassFiles: '<%= sassDir %>' + '/main.scss', // файлы что должны обрабатьваться CSSComb и тп.
      sassBase64: '<%= sassDir %>' + '/_base64.scss',
      cssDir: '../res/css',
      cssFiles: '<%= cssDir %>' + '/main.css', // файлы что передаются различным обработчикам после компиляции готового CSS

      jsSourceFiles: [
        'src/js/*.js',
        'src/js/blocks/*.js',
      ],
      jsSourcePlugins: [
        'src/js/plugins/*.js',
        'src/js/plugins/helpers/*.js',
      ],
      jsResultFile: '../res/js/scripts.js',

      imgDir: 'src/img',
      imgBaseFiles: '<%= imgDir %>' + '/base64/*.{png,jpg,gif}',

      // Pagespeed options
      pageUrl: 'https://developers.google.com',
      pageThreshold: 70,
      pageDevice: 'desktop'
    }
  });

};
