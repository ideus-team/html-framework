module.exports = {

    // Production settings
    prod: {
        options: {
            sourceMap: true,
            loadPath: require('node-refills').includePaths
        },
        files: [{
            expand: true,
            cwd: '<%= sassDir %>',
            src: ['*.scss'],
            dest: '<%= cssDir %>',
            ext: '.css'
        }]
    }
};
