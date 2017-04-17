'use strict';

var os 			= require('os');
var gulp 		= require('gulp');
var rename		= require('gulp-rename');
var browserSync = require('browser-sync').create();
var phantom 	= require('phantom');   

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
	;
});

gulp.task('js', function() {
	return gulp
		.src('public/js/*.js')
		.pipe(browserSync.reload({
			stream: true
		}))
	;
});

gulp.task('css', function() {
	return gulp
		.src('public/css/*.css')
		.pipe(browserSync.reload({
			stream: true
		}))
	;
});

gulp.task('watch', ['index', 'css', 'js'], function() {
	return gulp;
});

gulp.task('export', function() {
	phantom.create().then(function(ph) {
		ph.createPage().then(function(page) {
			page.property('viewportSize', {width: 800, height: 600}).then(function() {
				page.open('public/index.html').then(function(status) {
					page.render('cv.pdf').then(function() {
						console.log('Page Rendered');
						ph.exit();
					});
				});
			});
		});
	});
	return gulp;
});

gulp.task('lib', function() {
	gulp.src('./node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest('./public/lib/jquery'));
	gulp.src('./node_modules/semantic-ui/dist/semantic.min.js').pipe(gulp.dest('./public/lib/semantic'));
	gulp.src('./node_modules/semantic-ui/dist/semantic.min.css').pipe(gulp.dest('./public/lib/semantic'));
	gulp.src('./node_modules/semantic-ui/dist/themes/**/*').pipe(gulp.dest('./public/lib/semantic/themes'));
	return gulp;
});

gulp.task('init', ['lib'], function() {
	let mode = process.env.NODE_ENV || 'dev';
	if (mode == 'dev') {
		gulp
			.src('./public/app/config_dev.json')
			.pipe(rename('./public/app/config.json'))
			.pipe(gulp.dest('./'))
		;
		return gulp;
	}
	gulp
		.src('./public/app/config_prod.json')
		.pipe(rename('./public/app/config.json'))
		.pipe(gulp.dest('./'))
	;
	return gulp;
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: 'public/',
		},
		browser: browser,
	});
	gulp.start('watch');
});

gulp.task('default', function() {
	console.log('Please follow the README.md file, thank you.');
});