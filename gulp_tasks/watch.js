'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
  var debug = process.env.NODE_ENV !== 'production';
  var dest = debug ? 'build/development' : 'build/production';

	gulp.watch('src/img/**', ['images']);
	gulp.watch('src/scss/**/*.scss', ['styles']);
	gulp.watch('src/index.html', ['html']);
	// gulp.watch('src/js/background.js', ['background-js']);

	// Watch .js files
	global.scripts('home.js', true);
	global.scripts('dashboard.js', true);
});
