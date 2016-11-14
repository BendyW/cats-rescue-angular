'use strict';
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('Nodemon', restartServer);
function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js hbs scss sql'
    });
}

gulp.task('compile-sass', function () {
    gulp.src('./public/styles/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/styles/'));
});

gulp.task('watch-sass', function () {
    gulp.watch(['./public/styles/style.scss'], ['compile-sass']);
});
gulp.task('default', ['watch-sass', 'compile-sass', 'Nodemon']);