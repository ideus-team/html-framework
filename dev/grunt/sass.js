module.exports = {

    // Development settings
    dev: {
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
    },

    // Production settings
    prod: {
        options: {
            sourceMap: false,
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
