module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: '<%= imgSourceDir %>' + '/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '<%= imgResultDir %>' + '/'
        }]
    }
};
