var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    concatJs = require('gulp-concat'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify');
    
gulp.task('css', function (){
  gulp.src('stylesheets/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    //.pipe(notify('task css ended'));
});

gulp.task('js', function(){
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
  //.pipe(notify('task js ended'));
});

gulp.task('default',['css', 'js'], function(){
  gulp.src('lib/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/lib'))
  //.pipe(notify('task lib js ended'));
});