module.exports = function(grunt) {

  // Кодируем картинки в base64
  grunt.config('datauri', {
    main: {
      options: {
        classPrefix: 'data-',
        checkFilesize: true,
        usePlaceholder: true,
        variables: false
      },
      src: ['<%= imgBaseFiles %>'],
      dest: ['<%= sassDir %>' + '/_base64.scss']
    }
  });

  grunt.loadNpmTasks('grunt-datauri');

};