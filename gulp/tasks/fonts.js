var gulp = require('gulp');
var config = require('../gulp.config')();

gulp.task('fonts', ['clean:fonts'], function() {
  gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.dist.fonts));
});
