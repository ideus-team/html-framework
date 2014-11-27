module.exports = function(grunt) {

  // Autoprefixer
  grunt.config('autoprefixer', {
    main: {
      options: {
        browsers: ['last 3 version', 'ie 8', 'ff 3.6', 'opera 11.1', 'ios 4', 'android 2.3'],
      },
      src: '<%= cssFiles %>',
    },
  });

  grunt.loadNpmTasks('grunt-autoprefixer');

};