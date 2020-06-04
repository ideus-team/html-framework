module.exports = {
  main: {
    options: {
      presets: ['@babel/preset-env']
    },
    files: [{
      src: '<%= tempJS %>',
      dest: '<%= destJS %>',
    }]
  },
};
