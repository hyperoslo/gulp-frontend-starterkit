var gulp = require('gulp');
var config = require('../gulp.config')();

gulp.task('html', ['layout'], function() {
  return gulp
    .src(config.dist.html)
    .pipe(gulp.dest(config.dist.path));
});
