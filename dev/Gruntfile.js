module.exports = function(grunt) {

  // Grunt config - declared in Load-Grunt-Config
  grunt.initConfig({

  });

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: true,

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
          /* Grunt tasks    */ 'grunt/*.js'
        ],
        gruntPluginsSettings: [
          '<%= csslint.options.csslintrc %>',
          '<%= jshint.options.jshintrc %>',
        ],

        // Compile:
          // Source:
            // CSS
            sourceCSSDir       : 'src/sass',
                sourceCSSFiles : '<%= sourceCSSDir %>' + '/**/*.scss',
            // JS
            sourceJSPlugins    : [
              'src/js/plugins/*.js',
              'src/js/plugins/helpers/*.js',
            ],
            sourceJSMy         : [
              'src/js/blocks/**/*.js',
              'src/js/main.js'
            ],
                sourceJSFiles  : [
                  '<%= sourceJSPlugins %>',
                  '<%= sourceJSMy %>'
                ],
            // IMG
            sourceIMGDir              : 'src/img',
                sourceIMGSpritesDir   : '<%= sourceIMGDir %>' + '/sprites',
                sourceIMGFiles        : '<%= sourceIMGDir %>' + '/**/*.{png,jpg,gif}',

          // Destination:
            destCSSDir      : '../assets/css', // generated css-files names taked from scss files in %sourceCSSDir
                destCSSExt  : '.min.css',
                destCSS     : '<%= destCSSDir %>' + '/main' + '<%= destCSSExt %>',
            destJSDir       : '../assets/js',
                destJS      : '<%= destJSDir %>'  + '/scripts.js',
            destIMGDir      : '../assets/img',

    }
  });
};
