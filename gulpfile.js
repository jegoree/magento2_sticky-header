const gulp = require('gulp');
const sass = require('gulp-sass');

function style() {
    // Locate all scss files
    return gulp.src('./web/scss/**/*.scss')
        // go through compiler
        .pipe(sass())
        // Stores in css folder
        .pipe(gulp.dest('./web/css'))
}

function render() {
    gulp.watch('./web/scss/**/*scss', style);
}

exports.render = render;
