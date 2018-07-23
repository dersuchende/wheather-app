var gulp = require('gulp');
const sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var moduleImporter = require('sass-module-importer');


gulp.task('build-sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({importer: moduleImporter()}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['build-sass']);
});

gulp.task('default', ['build-sass']);