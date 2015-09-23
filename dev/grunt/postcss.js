module.exports = {
    options: {
      map: true, // inline sourcemaps

      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer-core')({
          // add vendor prefixes
          browsers: [
            '> 1%',
            'Last 2 versions',
            'IE 8'
          ]
        }),
        require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: '<%= destCSSDir %>' + '/*.css'
    }
};
