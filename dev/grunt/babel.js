module.exports = {
  main: {
    options: {
      presets: ['es2015']
    },
    files: [{
      src: ['es5/scripts.js'],
      dest: '../assets/js/scripts.js',
    }]
  },
};