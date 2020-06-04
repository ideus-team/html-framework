module.exports = {
  main: {
    options: {
      mangle: false,
    },
    files: [{
      '<%= destJS %>': '<%= destJS %>',
    }],
  },
};
