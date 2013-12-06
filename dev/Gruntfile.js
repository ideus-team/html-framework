// Обязательная обёртка
module.exports = function(grunt) {

  // Задачи
  grunt.initConfig({
    // Пути к файлам и папкам JS
    js_files: 'js/main.js',
    js_plugins_files: 'js/plugins/**/*.js',
    js_result_file: '../js/scripts.js',

    // SASS + Compass
    compass: {
      main: {
        options: {
          sassDir: 'sass',
          cssDir: '../css',
          imagesDir: '../img',
          outputStyle: 'expanded',
          force: true
        }
      }
    },

    // CSSLint
    csslint: {
      main: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: '<%= compass.main.options.cssDir %>' + '/*.css'
      }
    },

    // Autoprefixer
    autoprefixer: {
      main: {
        options: {
          browsers: ['last 3 version', 'ie 8', 'opera 12.1', 'ios 4', 'android 2.3']
        },
        src: '<%= compass.main.options.cssDir %>' + '/*.css'
      }
    },

    // Сжимаем CSS
    cssmin: {
      main: {
        expand: true,
        cwd: '../css/',
        src: '*.css',
        dest: '../css/',
        ext: '.css'
      }
    },

    // JSHint
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'Gruntfile.js',
        '<%= js_files %>'
      ]
    },

    // Склеиваем JS
    concat: {
      main: {
        src: [
          '<%= js_plugins_files %>',
          '<%= js_files %>'
        ],
        dest: '<%= js_result_file %>'
      }
    },

    // Сжимаем JS
    uglify: {
      main: {
        options: {
          mangle: false
        },
        files: {
          // Результат задачи concat
          '<%= js_result_file %>': '<%= concat.main.dest %>'
        }
      }
    },

    // Чистим
    clean: {
      main: {
        src: '.sass-cache'
      }
    },

    // Следим за изменениями файлов
    watch: {
      main: {
        files: [
          '<%= compass.main.options.sassDir %>' + '/**/*.scss',
          '<%= csslint.main.options.csslintrc %>',
          '<%= concat.main.src %>',
          '<%= jshint.options.jshintrc %>',
          'Gruntfile.js'
        ],
        tasks: 'default'
      }
    },

    // Автоматизированное тестирование при помощи DalekJS
    dalek: {
      options: {
        // Task-specific options go here.
      },
      main: {
        src: 'test/test.js'
      }
    }
  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-dalek');

  // Задача по умолчанию
  grunt.registerTask('default', ['compass', /*'clean',*/ 'csslint', 'autoprefixer', 'cssmin', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('test', ['dalek']);
};