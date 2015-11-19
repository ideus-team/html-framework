module.exports = {
  options: {
    separator: ';',
  },

  dist: {
    src: [
      '<%= sourceJSFiles %>',
    ],
    dest: '<%= destJS %>',
  },
};
