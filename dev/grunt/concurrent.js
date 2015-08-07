module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Production tasks
    prodFirst: [
        //'clean',
        'newer:jshint'
    ],
    prodSecond: [
        'newer:sass:prod',
        'newer:uglify'
    ],

    // Image tasks
    imgFirst: [
        'newer:imagemin'
    ]
};
