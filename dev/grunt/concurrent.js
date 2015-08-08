module.exports = {

    // Task options
    options: {
        limit: 4
    },

    // Tasks
    // CSS/JS sections below should correspond CSS/JS sections in Grunt:Watch!
    prod_css: [
        'newer:sass:prod'
    ],    
    prod_js: [
        'newer:jshint',      
        'newer:concat',
        'newer:uglify'
    ],      

    // Image tasks
    imgMin: [
        'newer:imagemin'
    ]
};
