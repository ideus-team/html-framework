module.exports = {
    compile: {
      options: {
        data: {
          debug: false
        }
      },
      files: {
        '<%= destHTMLDir %>': ['<%= sourceHTMLDir %>']
      }
    }
};
