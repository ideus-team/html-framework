module.exports = {

  target: {
    files: [{
      expand: true,
      cwd: '<%= destCSSDir %>' + '/',
      src: '*.css',
      dest: '<%= destCSSDir %>' + '/',
      ext: '.min.css'
    }]
  }
};
