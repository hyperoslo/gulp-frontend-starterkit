var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();

// Lint : ESLinter
gulp.task('lint', function() {
  return gulp.src(config.src.alljs)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});
