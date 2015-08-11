module.exports = {
    options: {
      map: true, // inline sourcemaps

      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer-core')({browsers: 'last 2 versions'})//, // add vendor prefixes
        //require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: '<%= destCSSDir %>' + '/*.css'
    }
};
