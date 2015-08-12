module.exports = {

    sprite:{
        all: {
          // Standart images
          src:     '<%= sourceIMGSpritesDir %>' + '/*.png',
          dest:    '<%= sourceIMGSpritesDir %>' + '/spritesheet.png',
          //imgPath: '<%= sourceIMGSpritesDir %>' + '/spritesheet.png',

          // Retina images
          //retinaSrcFilter: ['*@2x.png'],
          //retinaDest: '<%= sourceIMGSpritesDir %>' + 'spritesheet.retina@2x.png',
          //retinaImgPath : '<%= sourceIMGSpritesDir %>' + '/spritesheet.png',

          //cssVarMap: function (sprite) {
          //  sprite.name = 'sprite-' + sprite.name;
          //},
          destCss: '<%= sourceCSSDir %>' + '/_sprites.scss'
        }
    }
};
