module.exports = function(grunt) {

  // SASS + Compass
  grunt.config('compass', {
    main: {
      options: {
        sassDir: '<%= sassDir %>',
        cssDir: '<%= cssDir %>',
        imagesDir: '<%= imgDir %>',
        outputStyle: 'expanded',
        force: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};