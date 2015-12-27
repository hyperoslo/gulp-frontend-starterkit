var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Watch the assets and re-run tasks
gulp.task('watch', function() {
  $.watch('./src/images/**/*.{jpg,jpeg,png,svg,gif}', $.batch(function(events, done) {
    gulp.start('images', done);
  }));
  $.watch('./src/fonts/**/*.{eot,svg,ttf,woff,woff2}', $.batch(function(events, done) {
    gulp.start('fonts', done);
  }));
  $.watch('./src/**/*.js', $.batch(function(events, done) {
    gulp.start('js', done);
  }));
  $.watch('./src/**/*.styl', $.batch(function(events, done) {
    gulp.start('styles', done);
  }));
  $.watch('./src/**/*.html', $.batch(function(events, done) {
    gulp.start('html', done);
  }));
});
