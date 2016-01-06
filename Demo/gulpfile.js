"use strict";

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('browserify', function () {
    browserify('./app/main.js')
		.transform(reactify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);