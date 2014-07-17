module.exports = function(grunt) {

  // fixmyjs
  grunt.config('fixmyjs', {
    options: {
      config:   '<%= configDir %>' + '/.jshintrc',
      boss:     true,
      curly:    true,
      eqeqeq:   false,
      eqnull:   true,
      esnext:   true,
      expr:     true,
      forin:    true,
      immed:    true,
      laxbreak: true,
      newcap:   false,
      noarg:    true,
      node:     true,
      nonew:    true,
      plusplus: true,
      quotmark: 'single',
      strict:   false,
      undef:    true,
      unused:   true
    },
    test: {
      files: [{
        expand: true,
        src: '<%= jsSourceFiles %>'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-fixmyjs');

};