module.exports = {

    // Development settings
    dev: {
        options: {
            sourceMap: true
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
            sourceMap: false
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
