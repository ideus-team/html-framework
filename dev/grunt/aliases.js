module.exports = {
  'default': {
    description: 'Default (production) build',
    tasks: [
      'prod',
    ],
  },

  'prod': {
    description: 'Production build',
    tasks: [
      'clean',
      'img',
      'css',
      'js',
    ],
  },

  'dev': {
    description: 'Development build',
    tasks: [
      'clean',
      'devimg',
      'css',
      'devjs',
    ],
  },

  'css': {
    description: 'CSS Tasks',
    tasks: [
      'sass',
      'postcss',
    ],
  },

  'js': {
    description: 'JS Tasks',
    tasks: [
      'jshint',
      'jscs',
      'concat',
      'babel',
      'terser',
    ],
  },

  'devjs': {
    description: 'Development JS Tasks',
    tasks: [
      'jshint',
      'jscs',
      'concat',
      'babel',
    ],
  },

  'img': {
    description: 'Image Tasks',
    tasks: [
      'sprite',
      'imagemin',
    ],
  },

  'devimg': {
    description: 'Development Image Tasks',
    tasks: [
      'sprite',
      'copy',
    ],
  },
};
