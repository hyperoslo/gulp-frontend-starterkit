var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();

// Javascript: JS
gulp.task('js', ['lint', 'clean:js'], function() {
  return gulp.src(config.src.js)
    .pipe($.sourcemaps.init())
    .pipe($.concat('index.js'))
    .pipe($.sourcemaps.write(config.dist.maps))
    .pipe(gulp.dest(config.dist.path));
});
