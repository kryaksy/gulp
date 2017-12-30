// REQUIRES
const gulp = require('gulp'), useref = require('gulp-useref'),  gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin');

gulp.task('imagemin', () => {
    gulp.src('app/images/*.+(png|jpg|gif|svg)')
    .pipe(imagemin( {
      interlaced: true
    } ))
    .pipe(gulp.dest('dist/images'))
});

// TASKS


//useref task
gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

/*
//html task
 gulp.task('', () => {
  return gulp.src('app/*.html')
  .pipe(useref().on('error', useref.logError))
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.css', cssnano()))
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
