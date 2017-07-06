module.exports = {
  main: {
    options: {
      classPrefix: 'data-',
      checkFilesize: true,
      usePlaceholder: true,
      variables: false,
    },
    src: '<%= sourceBase64Files %>',
    dest: '<%= sourceCSSBase64 %>',
  },
};
