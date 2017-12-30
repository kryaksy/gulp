// REQUIRES
const gulp = require('gulp');
const useref = require('gulp-useref');
/*    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css');*/
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// TASKS

//useref task
gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

//html task
/*
 gulp.task('html', () => {
  return gulp.src('app/*.html')
  .pipe(useref({ searchPath: '.tmp' }).on('error', useref.logError))
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.css', minifyCss()))
  .pipe(gulp.dest('dist'))
})
*/

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
