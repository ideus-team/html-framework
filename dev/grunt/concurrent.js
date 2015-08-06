module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Production tasks
    prodFirst: [
        //'clean',
        'jshint'
    ],
    prodSecond: [
        'sass:prod',
        'uglify'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};
