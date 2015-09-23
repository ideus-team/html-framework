module.exports = {

    options: {
        spawn: false,
        livereload: true
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
