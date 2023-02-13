const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') // apenas recuperamos os arquivos, ainda não estamos compilando o sass
        .pipe(sass({ outputStyle: 'compressed' })) // compilando o sass
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*') // apenas recuperamos os arquivos, ainda não estamos compilando o sass
        .pipe(imagemin()) // compilando o sass
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}