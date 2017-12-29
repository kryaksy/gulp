// REQUIRES
const gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

// TASKS

//useref task
gulp.task('html', () => {
  return gulp.src('app/*.html')
  .pipe(useref())
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.js', minifyCss()))
  .pipe(gulp.dest('dist'))
})

// Browser Sync task
gulp.task('browserSync', function() {
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
});

// Watch tasks
gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
});

//Contaneting JS
gulp.task('scripts', function() {
  return gulp.src(['./app/js/design.js', './app/js/design'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
