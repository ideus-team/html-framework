module.exports = {

    options: {
        csslintrc: '<%= gruntPluginsDir %>' + '/.csslintrc',
    },

    src: [
        '<%= destCSS %>'
    ]
};
