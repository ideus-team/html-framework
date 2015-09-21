module.exports = {
    compile: {
      options: {
        data: {
          debug: false
        }
      },
      files: {
        //'<%= destHTMLDir %>': ['<%= sourceHTMLDir %>']
        "../assets/html/index.html": ["src/jade/index.jade"]
      }
    }
};
