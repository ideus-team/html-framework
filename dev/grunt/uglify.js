module.exports = {
    all: {
        options: {
          mangle: false,
        },
        files: [{
            '<%= destJS %>': '<%= jsSourceFile %>'
        }]
    }
};
