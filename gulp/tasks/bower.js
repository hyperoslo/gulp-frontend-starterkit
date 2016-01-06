var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var $ = require('gulp-load-plugins')();
var config = require('../gulp.config')();

// grab libraries files from bower_components, minify and push in /public
gulp.task('bower', function() {
  var jsFilter = $.filter('*.js', {restore: true});
  var cssFilter = $.filter('*.css', {restore: true});
  var imagesFilter = $.filter(['*.gif', '*.png', '*.jpg'], {restore: true});
  var fontFilter = $.filter(['*.eot', '*.woff', '*.svg', '*.ttf'], {restore: true});

  gulp.src(mainBowerFiles({includeDev: true}))

  // grab vendor js files from bower_components, minify and push to /dist
  .pipe(jsFilter)
  .pipe($.sourcemaps.init())
  .pipe($.uglify())
  .pipe($.concat('vendor.min.js'))
  .pipe($.sourcemaps.write(config.dist.maps))
  .pipe(gulp.dest(config.dist.path))
  .pipe(jsFilter.restore)

  // grab vendor css files from bower_components, minify and push to /dist
  .pipe(cssFilter)
  .pipe($.sourcemaps.init())
  .pipe($.concat('vendor.min.css'))
  .pipe($.cssnano({compatibility: 'ie8'}))
  .pipe($.sourcemaps.write(config.dist.maps))
  .pipe(gulp.dest(config.dist.path))
  .pipe(cssFilter.restore)


  // grab vendor images files from bower_components and push to /dist/images
  .pipe(imagesFilter)
  .pipe(gulp.dest(config.dist.images))
  .pipe(imagesFilter.restore)

  // grab vendor font files from bower_components and push to /dist/fonts
  .pipe(fontFilter)
  .pipe($.flatten())
  .pipe(gulp.dest(config.dist.fonts))
  .pipe(fontFilter.restore);
});
