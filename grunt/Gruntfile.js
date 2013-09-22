// Обязательная обёртка
module.exports = function(grunt) {

  // Задачи
  grunt.initConfig({
    // Пути к файлам и папкам JS
    js_files: '../js/dev/main.js',
    js_plugins_files: '../js/dev/plugins/*.js',
    js_result_file: '../js/scripts.js',

    // SASS + Compass
    compass: {
      main: {
        options: {
          sassDir: '../sass',
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
          'box-model': false,
          'adjoining-classes': false,
          'box-sizing': false,
          'floats': false,
          'font-sizes': false,
          'qualified-headings': false,
          'unique-headings': false,

          // Эти опции надо бы убрать в будущем. В данный момент их проверка отключена по причине конфликтов с CSS нашего фреймворка.
          'text-indent': false,
          'outline-none': false,
          'important': false,
          'regex-selectors': false,
          'underscore-property-hack': false,
          'star-property-hack': false,
          'universal-selector': false,
          'unqualified-attributes': false,
          'compatible-vendor-prefixes': false
        },
        src: [
          '<%= compass.main.options.cssDir %>' + '/*.css'
        ]
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
        strict: false,
        jquery: true
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
      main: [
        '.sass-cache'
      ]
    },

    // Следим за изменениями файлов
    watch: {
      css: {
        files: '<%= compass.main.options.sassDir %>' + '/*.scss',
        tasks: ['compass', 'clean', 'csslint', 'cssmin']
      },
      js: {
        files: '<%= concat.main.src %>',
        tasks: ['jshint', 'concat', 'uglify']
      },
      grunt: {
        files: 'Gruntfile.js',
        tasks: 'default'
      }
    }
  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Задача по умолчанию
  grunt.registerTask('default', ['compass', 'clean', 'csslint', 'cssmin', 'jshint', 'concat', 'uglify']);
};