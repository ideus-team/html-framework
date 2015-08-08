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
        // Grunt
            gruntSettings: [
              /* Grunt config   */ 'Gruntfile.js',
              /* Grunt modules  */ 'package.json',
              /* Build settings */ 'grunt/aliases.yaml',
              /* Grunt tasks    */ 'grunt/*.js'   
            ],
            gruntPluginsSettings: [              
              '<%= csslint.options.csslintrc %>',
              '<%= jshint.options.jshintrc %>',
            ],
        // CSS
            sourceCSSFiles: [
              'src/sass/**/*.scss'
            ],
        // JS
            sourceJSPlugins : [
              'src/js/plugins/**/*.js'
            ],              
            sourceJSMy : [
              'src/js/blocks/**/*.js',          
              'src/js/main.js'
            ],                    
        sourceJSFiles : [
          '<%= sourceJSPlugins %>',
          '<%= sourceJSMy %>'
        ],        
      
      // Paths for Compile:
        gruntPluginsDir : 'grunt/config',
        sourceCSSDir    : 'src/sass',              
        destCSSDir      : '../assets/css', // generated css-files names taked from scss files in %sourceCSSDir
        destJSDir       : '../assets/js',
      
      // Paths for custom plugins:
      // sourceBase64: '<%= sourceCSSDir %>' + '/_base64.scss',
      
      // Paths for PostCSS & Minify:
        destCSS : '<%= destCSSDir %>' + '/main.css',
        destJS  : '<%= destJSDir %>'  + '/scripts.js',      

      // Img
      imgSourceDir: 'src/img',
      imgResultDir: '../assets/img',
      imgBaseFiles: '<%= imgDir %>' + '/base64/*.{png,jpg,gif}',

      // Pagespeed options
      pageUrl: 'https://developers.google.com',
      pageThreshold: 70,
      pageDevice: 'desktop'
    }
  });

};
