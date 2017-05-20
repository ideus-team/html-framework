module.exports = {
  options: {
    spawn: false,
    /**
     * Uncomment `livereload: true` if you want to use it. More details and config options can be found here:
     *   https://github.com/gruntjs/grunt-contrib-watch#optionslivereload
     *
     * The easiest way to get Livereload working is to install the browser extension. Details here:
     *   http://feedback.livereload.com/knowledgebase/articles/86242
     */
    // livereload: true
  },

  configs: {
    options: {
      reload: true,
    },
    files: [
      '<%= gruntSettings %>',
      '<%= gruntPluginsSettings %>',
    ],
    tasks: [
      'prod',
    ],
  },

  scripts: {
    files: [
      '<%= sourceJSFiles %>',
    ],
    tasks: [
      'js',
    ],
  },

  devscripts: {
    files: [
      '<%= sourceJSFiles %>',
    ],
    tasks: [
      'devjs',
    ],
  },

  styles: {
    files: [
      '<%= sourceCSSFiles %>',
    ],
    tasks: [
      'css',
    ],
  },

  images: {
    files: [
      '<%= sourceIMGFiles %>',
    ],
    tasks: [
      'img',
    ],
  },

  devimages: {
    files: [
      '<%= sourceIMGFiles %>',
    ],
    tasks: [
      'devimg',
    ],
  },
};
