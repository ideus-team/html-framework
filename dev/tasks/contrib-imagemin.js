module.exports = function(grunt) {

  // Minify PNG and JPEG images
  grunt.config('imagemin', {
    main: {
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: '<%= imgDir %>' + '/',    // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: '<%= imgDir %>' + '/',   // Destination path prefix
      }]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

};