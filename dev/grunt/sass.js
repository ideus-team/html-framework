module.exports = {

    // Production settings
    prod: {
        options: {
            trace: true,
            loadPath: require('node-refills').includePaths,
            style: 'expanded',
            update: true,
        },
        files: [{
            expand: true,
            cwd: '<%= sourceCSSDir %>',
            src: ['*.scss'],
            dest: '<%= destCSSDir %>',
            ext:  '<%= destCSSExt %>'
        }]
    }
};
