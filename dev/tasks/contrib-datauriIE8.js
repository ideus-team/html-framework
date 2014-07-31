var fs = require('fs');

function generateCSS(file) {
  var template = '\n.ie8 .data-{{filename}} {\n\tbackground-image: url("../img/base64/{{file}}"); \n}';
  var fileObj = {};
  fileObj.name = file.split('.')[0].toLowerCase();
  fileObj.type = file.split('.')[1].toLowerCase();
  if (fileObj.type === 'png' || fileObj.type === 'gif' || fileObj.type === 'jpg') {
    return template.replace('{{filename}}', fileObj.name).replace('{{file}}', file);
  } else {
    return '';
  }
}

module.exports = function(grunt) {

  grunt.registerTask('datauriIE8', 'for ie8', function(){
    fs.readdir('../img/base64', function(err, files) {
      var css = '';
      if (err) throw err;
      files.forEach(function(el) {
        css += generateCSS(el);
      });
      fs.appendFile('sass/_base64.scss', css, function(err) {
        if (err) throw err;
      });
    });
  });

};