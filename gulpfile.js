const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const autoprefix = require('gulp-autoprefixer');

gulp.task('style', function () {
  return gulp.src('./src/styles/index.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(autoprefix())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./lib/css'));
});
