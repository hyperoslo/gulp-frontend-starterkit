var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');

gulp.task('clean', function() {
  return del.sync(config.dist.path);
});

gulp.task('clean:html', function() {
  del.sync(config.dist.html);
});

gulp.task('clean:css', function() {
  del.sync(['./dist/index.css', './dist/maps/index.css.map']);
});

gulp.task('clean:js', function() {
  del.sync(['./dist/index.js', './dist/maps/index.js.map']);
});

gulp.task('clean:images', function() {
  del.sync(config.dist.images);
});

gulp.task('clean:fonts', function() {
  del.sync(config.dist.fonts);
});
