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
          /* Grunt config   */ 'Gruntfile.js',
          /* Grunt modules  */ 'package.json',
          /* Build settings */ 'grunt/aliases.yaml',
          /* Grunt tasks    */ 'grunt/*.js',       
        ],
        gruntPluginsSettings:  'grunt/config/*',
        sourceCSSFiles: [
          'src/sass/**/*.scss',
        ],
        sourceJS : [
          'src/js/**/.js',
        ],        
      
      // Paths for Compile:
        sourceCSSDir : 'src/sass',        
        destCSSDir   : '../res/css', // generated css-files names taked from scss files in %sourceCSSDir
      
      // Paths for custom plugins:
        sourceBase64: '<%= sourceCSSDir %>' + '/_base64.scss',
      
      // Paths for PostCSS
        destCSS     : '<%= destCSSDir %>' + '/main.css', // файлы что передаются различным обработчикам после компиляции готового CSS

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
