module.exports = function() {
  var src = './src/';
  var dist = './dist/';
  var data = './../../data/';
  var cssType = '.styl';

  var config = {
    /*
    * File distribution paths
    */
    dist: {
      path: dist,
      html: dist + '**/*.html',
      maps: 'maps/',
      images: dist + 'images/',
      fonts: dist + 'fonts/',
    },

    /* All data needs for development */

    data: {
      items: data + 'items.json'
    },

    /*
    * File source paths
    */
    src: {
      path: src,
      alljs: [src + '**/*.js'],
      html: [
        src + '**/*.html',
        '!' + src + 'layout.html',
      ],
      js: [
        src + '**/*.js',
        '!' + src + '**/index.js',
      ],
      css: [
        src + 'modules/**/*' + cssType,
        src + 'base-styles/**/*' + cssType,
      ],
      images: [
        src + 'images/**/*.{jpg,jpeg,png,svg,gif}',
      ],
      fonts: [
        src + 'fonts/**/*.{eot,svg,ttf,woff,woff2}',
      ],
      indexHtml: src + 'layout.html',
      indexCss: src + 'index' + cssType,
      indexJs: src + 'index.js',
    },
    /*
    * Bower settings
    */
    bower: {
      json: require('../bower.json'),
      directory: '../bower_components/',
      ignorePath: '../..',
    },

    /*
    * Server settings
    */
    defaultPort: 3001,
    defaultHost: '0.0.0.0',
  };

  return config;
};
