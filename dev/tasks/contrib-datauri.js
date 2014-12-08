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
      dest: ['<%= sassBase64 %>']
    }
  });
  // Fallback для мобильных устройств
  grunt.registerTask('datauriMobile', 'for mobile', function(){
    var fs = require('fs');
    var newCSS = '';
    var template = ' !important;\n\t.-device_mobile & {background-image: url("../img/base64/{{file}}") !important;}\n}\n';
    var listFile = [];
    var pathDirBase64 = grunt.config.get('imgBaseFiles').split('*')[0];
    var pathFileBase64 = grunt.config.get('sassBase64');
    fs.readFile(pathFileBase64, 'utf8', function(err, file){
      if(err) throw err;
      var data = file.split('\n\n');
      fs.readdir(pathDirBase64, function(err, files){
        files.forEach(function(el){
          var filetype = el.split('.')[1].toLowerCase();
          if(filetype === 'png' || filetype === 'gif' || filetype === 'jpg') {
            listFile.push(el);
          }
        });

        data.forEach(function(el, indx){
          newCSS += el.replace(';\n}', template.replace('{{file}}', listFile[indx]));
        });

        fs.writeFile(pathFileBase64, newCSS, function(err){
          if(err) throw err;
        });

      });
    });
  });

  grunt.loadNpmTasks('grunt-datauri');

};

