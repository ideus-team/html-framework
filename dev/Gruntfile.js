module.exports = function(grunt) {

  // Grunt config - declared in Load-Grunt-Config
  grunt.initConfig({

  });

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: true,

    data: {
      // Data passed into config.  Can use with <%= test %>

      // Paths for Watch:
        gruntSettings: [
          /* Grunt config          */ 'Gruntfile.js',
          /* Grunt modules         */ 'package.json',
          /* Build settings        */ 'grunt/aliases.yaml',
          /* Grunt tasks           */ 'grunt/*.js',
          /* Grunt plugins configs */ 'grunt/config/*',          
        ],
        sourceCSSDir: [
          'src/sass',
        ],      
        sourceCSSFiles: [
          'src/sass/**/*.scss',
        ],
        sourceJS : [
          'src/js/**/.js',
        ],     
      
      // имена генерируемых css файлов берутся из имен scss файлов в /dev/sass
      sassDir: 'src/sass',
        sassFiles: '<%= sassDir %>' + '/main.scss', // файлы что должны обрабатьваться CSSComb и тп.
        sassBase64: '<%= sassDir %>' + '/_base64.scss',

      cssDir: '../res/css',
        cssFiles: '<%= cssDir %>' + '/main.css', // файлы что передаются различным обработчикам после компиляции готового CSS

      jsSourceFiles: [

      ],
      jsSourcePlugins: [

      ],
      jsSourceFile: 'src/js/main.js',
      jsResultFile: '../res/js/scripts.js',

      imgSourceDir: 'src/img',
      imgResultDir: '../res/img',
      imgBaseFiles: '<%= imgDir %>' + '/base64/*.{png,jpg,gif}',

      // Pagespeed options
      pageUrl: 'https://developers.google.com',
      pageThreshold: 70,
      pageDevice: 'desktop'
    }
  });

};
