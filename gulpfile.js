'use strict';

var os 			= require('os');
var gulp 		= require('gulp');
var rename		= require('gulp-rename');
var php 		= require('gulp-connect-php');
var browserSync = require('browser-sync').create();
var phantom 	= require('phantom');   
var shell 		= require('shelljs');

var browser 	=
	(os.platform() == 'linux') ?
	('google-chrome') :
	((os.platform() == 'darwin') ?
	('google chrome') :
	((os.platform() == 'win32') ?
	('chrome') : ('firefox')))
;

gulp.task('html', function() {
	return gulp
		.src('public/*.html')
		.pipe(browserSync.reload({ stream: true }))
	;
});

gulp.task('templates', function() {
	return gulp
		.src('public/templates/*.html')
		.pipe(browserSync.reload({ stream: true }))
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

gulp.task('app', function() {
	return gulp
		.src('public/app/*.json')
		.pipe(browserSync.reload({
			stream: true
		}))
	;
});

gulp.task('watch', ['html', 'templates', 'app', 'css', 'js'], function() {
	gulp.watch(['./public/js/*.js'], ['js']);
	gulp.watch(['./public/css/*.css'], ['css']);
	gulp.watch(['./public/*.html'], ['html']);
	gulp.watch(['./public/templates/*.html'], ['templates']);
	gulp.watch(['./public/app/*.json'], ['app']);
	return gulp;
});

gulp.task('export', function() {
	phantom.create().then(function(ph) {
		ph.createPage().then(function(page) {
			page.property('viewportSize', { width: 2480 / 2, height: 3508 / 2 }).then(function() {
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
	gulp.src('./node_modules/angular/*').pipe(gulp.dest('./public/lib/angular'));
	gulp.src('./node_modules/angular-ui-router/release/*').pipe(gulp.dest('./public/lib/angular-ui-router'));
	gulp.src('./node_modules/oclazyload/dist/*').pipe(gulp.dest('./public/lib/oclazyload'));
	return gulp;
});

gulp.task('init', ['lib'], function() {
	var mode = process.env.NODE_ENV || 'dev';
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

gulp.task('backend', function() {
	var pathPhpExe = process.env.PHP_EXE || shell.exec('where php.exe').stdout.replace(/(?:\r\n|\r|\n)/g, '');
	var pathPhpIni = process.env.PHP_INI || shell.exec('where php.ini').stdout.replace(/(?:\r\n|\r|\n)/g, '');
	console.log(pathPhpExe, pathPhpIni);
	php.server({
		hostname: '0.0.0.0',
		bin: pathPhpExe,
		ini: pathPhpIni,
		base: 'private/',
	});
});

gulp.task('default', function() {
	console.log('Please follow the README.md file, thank you.');
});