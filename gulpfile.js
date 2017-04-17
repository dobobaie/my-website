'use strict';

var os 			= require('os');
var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();

var browser 	=
	(os.platform() == 'linux') ?
	('google-chrome') :
	((os.platform() == 'darwin') ?
	('google chrome') :
	((os.platform() == 'win32') ?
	('chrome') : ('firefox')))
;

gulp.task('index', function() {
	return gulp
			.src('public/*.html')
			.pipe(browserSync.reload({
				stream: true
			}))
});

gulp.task('js', function() {
	return gulp
			.src('public/js/*.js')
			.pipe(browserSync.reload({
				stream: true
			}))
});

gulp.task('css', function() {
	return gulp
			.src('public/css/*.css')
			.pipe(browserSync.reload({
				stream: true
			}))
});

gulp.task('watch', ['index', 'css', 'js'], function() {
	gulp.watch('public/css/*.css', ['css']); 
	gulp.watch('public/*.html', ['index']); 
	gulp.watch('public/js/*.js', ['js']); 
});

gulp.task('serve', function() {
	browserSync.init({
		//port: 3001,
		server: {
			baseDir: 'public/',
		},
		browser: browser,
	});
	gulp.start('watch');
})