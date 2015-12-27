var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();

// Images
gulp.task('images', ['clean:images'], function() {
  var svgFilter = $.filter('**/*.svg', {restore: true});
  gulp.src(config.src.images)
  .pipe(svgFilter)
  .pipe($.svgmin())
  .pipe(svgFilter.restore)
  .pipe(gulp.dest(config.dist.images));
});
