module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: '<%= sourceIMGDir %>' + '/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '<%= destIMGDir %>' + '/'
        }]
    }
};
