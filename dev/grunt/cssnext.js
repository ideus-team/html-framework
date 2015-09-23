module.exports = {

    options: {
      sourcemap: true,
      browsers: [
        '> 1%',
        'Last 2 versions',
        'IE 8'
      ]
    },
    dist: {
      files: {
        '<%= destCSS %>': '<%= destCSS %>'
      }
    }
};
