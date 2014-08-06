module.exports = function(grunt) {

  // html валидация
  grunt.config('pagespeed', {
    options: {
      nokey: true,
      url: "https://developers.google.com"
    },
    prod: {
      options: {
        url: '<%= pageUrl %>',
        locale: 'ru_Ru',
        strategy: '<%= pageDevice %>',
        threshold: '<%= pageThreshold %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-pagespeed');

};