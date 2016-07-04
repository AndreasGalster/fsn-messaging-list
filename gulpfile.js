var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();


gulp.task('default', function() {
  return gulp.src(['src/*.html'])
  //  .pipe($.sourcemaps.init())
   .pipe($.if('*.html', $.crisper({
     scriptInHead: false,
    //  onlySplit: true
   })))
   .pipe($.if('*.js', $.babel({
     presets: ['es2015']
   })))
  //  .pipe($.if('*.js', $.strip()))

  //  .pipe($.sourcemaps.write('.'))
   .pipe(gulp.dest('dist'))
});
