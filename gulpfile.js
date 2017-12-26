var gulp = require('gulp');
var sass = require('gulp-sass');

/*GULP WATCH SYNTAX METHOD
gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
*/

//GULP.WATCH
gulp.watch('app/scss/**/*.scss', ['sass']);

//GROUP GULP.WATCH
gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
});
