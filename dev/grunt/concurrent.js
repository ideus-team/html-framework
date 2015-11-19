module.exports = {
  // Task options
  options: {
    limit: 4,
  },

  // Tasks
  // all tasks inside one section run in parallel!

  // ===== Compile =====
  all_preprocess: [
    // CSS
    'sass',
    // JS
    'jshint',
  ],
  all_postprocess: [
    // CSS
    'csslint',
    'postcss',
    // JS
    'uglify',
    // IMG
    'imagemin',
  ],
  all_merge: [
    // JS
    'concat',
  ],

  // ----- Watch -----
  // CSS
  css_preprocess: [
    //'spritesmith',
    'sass',
  ],
  css_postprocess: [
    'csslint',
    'postcss',
  ],

  // JS
  js_preprocess: [
    'jshint',
  ],
  js_postprocess: [
    'uglify',
  ],
  js_merge: [
    'concat',
  ],

  // Images
  images: [
    'imagemin',
  ],
};
