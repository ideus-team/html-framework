module.exports = function(grunt) {

  // SASS + Compass
  grunt.config('compass', {
    main: {
      options: {
        sassDir: 'sass',
        cssDir: '../css',
        imagesDir: '../img',
        outputStyle: 'expanded',
        force: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};