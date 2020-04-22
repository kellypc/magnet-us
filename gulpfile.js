// require gulp
var gulp = require('gulp');
// require other packages
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');

//compile and minify styles task
gulp.task('styles', () => {
    var processors = [
        autoprefixer({browsers: ['last 4 version']})
    ];
    return gulp.src(['./src/scss/main.scss'])
        .pipe(concat('main.scss'))
        .pipe(gulp.dest('./src/scss/'))
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'))
});
// compile and minify script task
gulp.task('js', () => {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js','./node_modules/bootstrap/dist/js/bootstrap.min.js','./node_modules/flickity/dist/flickity.pkgd.min.js','./src/js/main.js'])
        .pipe(concat('magnet-us.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(uglify())
        .pipe(rename({
        suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js/'));
});
