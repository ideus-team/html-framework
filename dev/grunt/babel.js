module.exports = {
  main: {
    options: {
      presets: ['es2015']
    },
    files: [{
      src: '<%= tempJS %>',
      dest: '<%= destJS %>',
    }]
  },
};
