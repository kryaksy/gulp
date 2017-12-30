// REQUIRES
const gulp = require('gulp');
const useref = require('gulp-useref');
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

// Watch task
gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass'])
  gulp.watch('app/js/**/*.js', browserSync.reload)
  gulp.watch('app/*.html', browserSync.reload)
})