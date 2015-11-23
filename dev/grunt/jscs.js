module.exports = {
  options: {
    config: '<%= gruntPluginsDir %>' + '/.jscsrc',
    verbose: false, // If you need output with rule names http://jscs.info/overview.html#verbose
    fix: false, // Autofix code style violations when possible.
    requireCurlyBraces: [ "if" ],
  },

  src: '<%= sourceJSMy %>',
};
