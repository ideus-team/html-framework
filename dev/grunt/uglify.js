module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/js',
            src: '**/*.js',
            dest: '../res/js',
            ext: '.min.js'
        }]
    }
};
