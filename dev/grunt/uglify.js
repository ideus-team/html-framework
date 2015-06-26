module.exports = {
    all: {
        options: {
          mangle: false,
        },
        files: [{
            '<%= jsResultFile %>': '<%= jsSourceFile %>'
        }]
    }
};
