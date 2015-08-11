module.exports = {
  options: {
    sourceMap: true
  },
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
