'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


function sync(cb) {
  let baseDir = './GlassesStore/**/*.*';
  browserSync.init({
    server: {
      baseDir
    },
    port: 3001
  })
  cb();
}

function reload(cb) {

  browserSync.reload();

  cb();
}

gulp.task('sync', sync);


sass.compiler = require('node-sass');

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.parallel('scss'));
});



