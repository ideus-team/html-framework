module.exports = {
  main: {
    src: '<%= sourceIMGDir %>' + '/sprites/*.png',
    dest: '<%= sourceIMGDir %>' + '/spritesheet.png',
    destCss: '<%= sourceCSSDir %>' + '/_sprites.scss',
  },
};
