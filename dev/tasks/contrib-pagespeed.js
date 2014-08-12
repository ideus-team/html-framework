module.exports = function(grunt) {

  // html валидация
  grunt.config('pagespeed', {
    options: {
      nokey: true,
      url: "https://developers.google.com"
    },
    main: {
      options: {
        url: '<%= pageUrl %>',
        locale: 'ru_RU',
        strategy: '<%= pageDevice %>',
        threshold: '<%= pageThreshold %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-pagespeed');

};