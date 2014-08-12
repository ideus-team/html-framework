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

  // Fallback для мобильных устройств
  grunt.registerTask('datauriMobile', 'for mobile', function(){
    var fs = require('fs');
    var newCSS = '';
    var template = ' !important;\n\t.-device_mobile & {background-image: url("../img/base64/{{file}}") !important;}\n}\n';
    var listFile = [];
    fs.readFile('sass/_base64.scss', 'utf8', function(err, file){
      if(err) throw err;
      var data = file.split('\n\n');
      fs.readdir('../img/base64', function(err, files){

        files.forEach(function(el, indx){
          var filetype = el.split('.')[1].toLowerCase();
          if(filetype === 'png' || filetype === 'gif' || filetype === 'jpg') {
            listFile.push(el);
          }
        });

        data.forEach(function(el, indx){
          newCSS += el.replace(';\n}', template.replace('{{file}}', listFile[indx]));
        });

        fs.writeFile('sass/_base64.scss', newCSS, function(err){
          if(err) throw err;
        });

      });
    });
  });

  grunt.loadNpmTasks('grunt-datauri');

};

