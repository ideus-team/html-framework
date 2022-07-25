module.exports = {
  main: {
    src     : '<%= sourceIMGDir %>' + '/sprites/*.png',
    dest    : '<%= sourceIMGDir %>' + '/spritesheet.png',
    imgPath : '<%= destIMGFromCSS %>' + '/spritesheet.png?' + (new Date().getTime()),
    destCss : '<%= sourceCSSDir %>' + '/_sprites.scss',

    // retinaSrcFilter : '<%= sourceIMGDir %>' + '/sprites/*@2x.png',
    // retinaDest      : '<%= sourceIMGDir %>' + '/spritesheet@2x.png',
    // retinaImgPath   : '<%= destIMGFromCSS %>' + '/spritesheet@2x.png?' + (new Date().getTime()),
  },
};
