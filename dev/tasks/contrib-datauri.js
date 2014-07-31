module.exports = function(grunt) {

  // Кодируем картинки в base64
  grunt.config('datauri', {
    datauri: {
      options: {
        classPrefix: 'data-',
        checkFilesize: false
      },
      src: ['<%= imgDir %>' + '/base64/*.{png,jpg,gif}'],
      dest: ['<%= sassDir %>' + '/_base64.scss']
    }
  });

  grunt.loadNpmTasks('grunt-datauri');

};