module.exports = {
  main: {
    files: [{
      expand: true,
      cwd: '<%= sourceIMGDir %>' + '/',
      src: '**/*' + '<%= sourceIMGFormats %>',
      dest: '<%= destIMGDir %>' + '/',
    }],
  },
};
