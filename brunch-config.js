module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: {'app.js': /^app\/templates/}
    }
  },
  npm: {
    globals: {
      $: 'jquery',
      Marionette: 'backbone.marionette',
      Backbone: 'backbone'
    }
  },
  plugins: {
    babel: {
      presets: ['es2015'],
      ignore: [
        /^(node_modules)/
      ]
    },
    swPrecache: {
      autorequire: true,
      options: {
        staticFileGlobs: [
          'public/app.css',
          'public/vendor.js',
          'public/app.js',
          'public/index.html'
        ],
        stripPrefix: 'public'
      }
    }
  }
};
