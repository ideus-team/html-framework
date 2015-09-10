module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Tasks
    // all tasks inside one section run in parallel!

    // ===== Compile =====
    all_preprocess: [
        // CSS
        //'newer:spritesmith',
        'newer:sass',
        // JS
        'newer:jshint',
    ],
    all_postprocess: [
        // CSS
        'newer:csslint',
        'newer:postcss',
        // JS
        'newer:uglify',
        // IMG
        'newer:imagemin',
    ],
    all_merge: [
        // JS
        'newer:concat',
    ],

    // ----- Watch -----
    // CSS
    css_preprocess: [
        //'newer:spritesmith',
        'newer:sass',
    ],
    css_postprocess: [
        'newer:csslint',
        'newer:postcss',
    ],

    // JS
    js_preprocess: [
        'newer:jshint',
    ],
    js_postprocess: [
        'newer:uglify',
    ],
    js_merge: [
        'newer:concat',
    ],

    // Images
    images: [
        'newer:imagemin'
    ]
};
