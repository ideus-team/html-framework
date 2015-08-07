module.exports = {

    // Production settings
    prod: {
        options: {
            sourceMap: true,
            loadPath: require('node-refills').includePaths
        },
        files: [{
            expand: true,
            cwd: '<%= sourceCSSDir %>',
            src: ['*.scss'],
            dest: '<%= destCSSDir %>',
            ext: '.css'
        }]
    }
};
