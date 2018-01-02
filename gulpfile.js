// REQUIRES
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano');
/*
    const gulp = require('gulp'),
        useref = require('gulp-useref'),
        gulpif = require('gulp-if'),
        uglify = require('gulp-uglify'),
        cssnano = require('gulp-cssnano'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync').create();
*/


// TASKS

//Useref task
gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref().on('error', useref.logError))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Browser Sync task
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// Sass task
gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

// Watch tasks
gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass'])
  gulp.watch('app/js/**/*.js', browserSync.reload)
  gulp.watch('app/*.html', browserSync.reload)
})
