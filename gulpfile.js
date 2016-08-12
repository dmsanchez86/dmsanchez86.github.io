var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    concatJs = require('gulp-concat'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify');
    
gulp.task('css', () => {
  gulp.src('./stylesheets/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    //.pipe(notify('task css ended'));
});

gulp.task('js', () => {
  gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
  //.pipe(notify('task js ended'));
});

gulp.task('lib', () => {
  gulp.src('./lib/*.js')
    .pipe(plumber())
    .pipe(uglify().on('error', (e) => {
      console.log(e);
    }))
    .pipe(gulp.dest('./dist/lib'));
});

gulp.task('watch', () => {
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./lib/*.js', ['lib']);
  gulp.watch('./stylesheets/*.css', ['css']);
});

gulp.task('default', ['js', 'css', 'lib', 'watch']);