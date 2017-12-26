var gulp = require('gulp');
var sass = require('gulp-sass');

// [$ gulp hi] returns 'Hello Ibo!':
gulp.task('hi', function() {
	// Stuff here
	console.log('Hi Ibo!');
});

//SASS
gulp.task('sass', function () {
  return gulp.src('app/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})
