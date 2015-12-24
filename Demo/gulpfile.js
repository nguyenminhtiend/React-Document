"use strict";

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var concat = require('gulp-concat');

var config = {
    port: 8888,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        jsx: './src/**/*.jsx',
        css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/font-awesome/css/font-awesome.min.css',
            'node_modules/react-datepicker/dist/react-datepicker.min.css',
			'./src/css/custom.css'
        ],
        fonts: 'node_modules/font-awesome/fonts/*.{otf,eot,svg,ttf,woff,woff2}',
        mainJs: './src/main.js',
        dist: './dist'
    }
};

gulp.task('js', function () {
    browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'));
});

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);