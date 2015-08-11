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
        'newer:sass:prod',
        // JS
        'newer:jshint',
    ],
    all_postprocess: [
        // CSS
        'newer:csslint',
        'newer:postcss',
    ],
    all_min: [
        // JS
        'newer:uglify',
        // IMG
        'newer:imagemin',
    ],

    // ----- Watch -----
    // CSS
    css_preprocess: [
        'newer:sass:prod',
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

    ],
    js_merge: [
        'newer:concat',
    ],
    js_min: [
        'newer:uglify',
    ],

    // Image tasks
    imgMin: [
        'newer:imagemin'
    ]
};
