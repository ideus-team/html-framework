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
        files: [
          '<%= gruntSettings %>',
          '<%= gruntPluginsSettings %>'
        ],
        tasks: [
          'prod'
        ]
    },

    html: {
      files: [
        '<%= sourceHTMLFiles %>'
      ],
      tasks: [
        'jade'
      ]
    },

    styles: {
        files: [
            '<%= sourceCSSFiles %>',
        ],
        tasks: [
            'css'
        ]
    },

    scripts: {
      files: [
        '<%= sourceJSFiles %>'
      ],
      tasks: [
        'js'
      ]
    },

    images: {
        files: [
            '<%= sourceIMGFiles %>',
        ],
        tasks: [
            'img'
        ]
    },
};
