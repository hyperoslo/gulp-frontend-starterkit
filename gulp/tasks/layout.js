var gulp = require('gulp');
var config = require('../gulp.config')();
var $ = require('gulp-load-plugins')();

// This task renders the different layouts,
// so that the wrapping page html does not need to be included on every page
gulp.task('layout', ['clean:html'], function() {
  $.nunjucksRender.nunjucks.configure([config.src.path], {watch: false});

  return gulp.src(config.src.html)
    .pipe($.plumber())
    .pipe($.data(function() {
      return require(config.data.items);
    }))
    .pipe(
      $.nunjucksRender()
      .on('error', function(error) {
        $.util.log(error);
      })
    )
    .pipe(gulp.dest(config.dist.path));
});
