module.exports = {

    options: {
        reporter: require('jshint-stylish'),
        jshintrc: '<%= gruntPluginsSettings %>' + '/.jshintrc',
    },

    files: [
        '<%= sourceJS %>'
    ]
};
