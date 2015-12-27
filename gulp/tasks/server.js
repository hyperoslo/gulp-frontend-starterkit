var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../gulp.config')();
var argv = require('yargs').argv;

var port = argv.port || argv.p || config.defaultPort;
var host = argv.host || argv.h || config.defaultHost;
var reloadSwitch = argv.livereload || argv.l;

// Watch files for changes and reload
gulp.task('serve', ['bower', 'images', 'styles', 'js', 'fonts', 'html', 'watch'], function() {
  browserSync({
    server: {
      baseDir: './dist',
    },
    port: port,
    host: host,
    notify: false,
    open: false,
    ui: {
      port: port + 1,
    },
  });

  if (reloadSwitch === true) {
    // Watch the dist/ and reload devices
    gulp.watch([
      '*.html',
      '*.css',
      '*.js',
      'images/*.{jpg,jpeg,png,svg,gif}',
      'fonts/*.{eot,svg,ttf,woff,woff2}'],
      {cwd: './dist'}, browserSync.reload);
  }
});

// Default task
gulp.task('default', ['serve'], function() {

});
