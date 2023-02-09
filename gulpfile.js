const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function styles() {
    return gulp.src('./src/styles/*.scss') // apenas recuperamos os arquivos, ainda não estamos compilando o sass
        .pipe(sass({ outputStyle: 'compressed' })) // compilando o sass
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}