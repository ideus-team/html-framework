module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Dev tasks
    devFirst: [
        //'clean',
        'newer:jshint'
    ],
    devSecond: [
        'newer:sass:dev',
        'newer:uglify'
    ],

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
