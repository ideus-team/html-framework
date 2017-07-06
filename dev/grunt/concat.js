module.exports = {
  options: {
    separator: ';',
  },

  main: {
    src: '<%= sourceJSFiles %>',
    dest: '<%= tempJS %>',
  },
};
