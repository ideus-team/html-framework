module.exports = {
  main: {
    src: '<%= sourceIMGDir %>' + '/sprites/*.png',
    dest: '<%= sourceIMGDir %>' + '/spritesheet.png',
    destCss: '<%= sourceCSSDir %>' + '/_sprites.scss',

    // retinaSrcFilter: ['<%= sourceIMGDir %>' + '/sprites/*@2x.png'],
    // retinaDest: '<%= sourceIMGDir %>' + '/spritesheet@2x.png',
    // destCss: '<%= sourceCSSDir %>' + '/_sprites.scss',
  },
};
