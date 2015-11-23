module.exports = {
  main: {
    files: [{
      expand: true,
      cwd: '<%= sourceIMGDir %>' + '/',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= destIMGDir %>' + '/',
    }],
  },
};
