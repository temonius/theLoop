
const gulp = require('gulp');
const pug = require('gulp-pug');  
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const  watch = require('gulp-watch');

gulp.task('pug', function(){
    return gulp.src('src/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./src/'));
    });


    gulp.task('scss', function(){
        return gulp.src('src/*.sass')
        .pipe(sass())
        // .pipe(autoprefixer())
        // .pipe(csso())
        .pipe(gulp.dest('./src/css'));
    });
    

    gulp.task('watch', function() {
        gulp.watch('./src/*.pug',gulp.series(['pug']))
        gulp.watch('./src/*.sass',gulp.series(['scss']))
    });
