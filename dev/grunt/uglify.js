module.exports = {
    all: {
        options: {
          mangle: false,
        },
        files: [{
            '<%= destJS %>': '<%= destJS %>'
        }]
    }
};
