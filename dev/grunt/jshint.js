module.exports = {

    options: {
        reporter: require('jshint-stylish'),
        jshintrc: '<%= configDir %>' + '/.jshintrc',
    },

    files: [
        '<%= jsSourceFiles %>'
    ]
};
