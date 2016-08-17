module.exports = {
  options: {
    config: '<%= gruntPluginsDir %>' + '/.jscsrc',
    fix: false, // Autofix code style violations when possible.
    requireCurlyBraces: [ "if" ],
  },

  src: '<%= sourceJSMy %>',
};
