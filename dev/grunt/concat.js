module.exports = {
  options: {
    separator: ';',
  },

  main: {
    src: [
      '<%= sourceJSFiles %>',
    ],
    dest: 'es5/scripts.js',
  },
};
