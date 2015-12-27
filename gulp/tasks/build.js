var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Standalone task to build the dist/
gulp.task('build', ['bower', 'images', 'styles', 'js', 'fonts', 'html', 'watch'], function() {
  $.util.log('Build complete');
});
