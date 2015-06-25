module.exports = {

    // Development settings
    dev: {
        options: {
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'src/sass',
            src: ['*.scss'],
            dest: '../res/css',
            ext: '.css'
        }]
    },

    // Production settings
    prod: {
        options: {
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'src/sass',
            src: ['*.scss'],
            dest: '../res/css',
            ext: '.css'
        }]
    }
};
