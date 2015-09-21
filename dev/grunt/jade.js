module.exports = {
    compile: {
      options: {
        pretty: true
      },
      files: [{
        expand: true,
        cwd: '<%= sourceHTMLDir %>',
        src: ['*.jade'],
        dest: '<%= destHTMLDir %>',
        ext: '.html'
      }]
    }
};
