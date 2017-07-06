module.exports = function(grunt) {

  // Grunt config - declared in Load-Grunt-Config
  grunt.initConfig({

  });

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: {
      staticMappings: {
        sprite: 'grunt-spritesmith',
      },
    },

    data: {
      // Data passed into config.  Can use with <%= test %>

      // Paths for Plugins settings:
      gruntPluginsDir : 'grunt/config',

      // Paths for Watch:
      // Grunt
      gruntSettings: [
        /* Grunt config   */ 'Gruntfile.js',
        /* Grunt modules  */ 'package.json',
        /* Build settings */ 'grunt/aliases.yaml',
        /* Grunt tasks    */ 'grunt/*.js',
      ],
      gruntPluginsSettings: [
        '<%= csslint.options.csslintrc %>',
        '<%= jshint.options.jshintrc %>',
        '<%= jscs.options.config %>',
      ],

      // Compile:
        // Source:
          // CSS
          sourceCSSDir    : 'src/sass',
          sourceCSSFiles  : '<%= sourceCSSDir %>' + '/**/*.scss',
          sourceCSSBase64 : '<%= sourceCSSDir %>' + '/_base64.scss',

          // JS
          sourceJSPlugins : [
            'src/js/plugins/*.js',
            'src/js/plugins/helpers/*.js',
          ],
          sourceJSMy      : [
            'src/js/blocks/**/*.js',
            'src/js/main.js',
          ],
          sourceJSFiles   : [
            '<%= sourceJSPlugins %>',
            '<%= sourceJSMy %>',
          ],

          // IMG
          sourceIMGDir      : 'src/img',
          sourceIMGFiles    : '<%= sourceIMGDir %>' + '/**/*.{png,jpg,gif,svg}',
          sourceBase64Files : '<%= sourceIMGDir %>' + '/base64/*.{png,jpg,gif,svg}',

        // Temp
          tempDir       : '.temp',
          tempJS        : '<%= tempDir %>' + '/js/main.js',

        // Destination:
          // CSS
          destCSSDir    : '../assets/css', // generated css-files names taked from scss files in %sourceCSSDir
          destCSSExt    : '.full.css',
          destMinCSSExt : '.min.css',

          // JS
          destJSDir  : '../assets/js',
          destJS     : '<%= destJSDir %>'  + '/scripts.js',

          // IMG
          destIMGDir : '../assets/img',
    },
  });
};
