"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('webserver', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('js', function () {
    browserify('./app/main.js')
		.transform(reactify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['webserver', 'js']);