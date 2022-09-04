const { src, dest,series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso')
const pug = require('gulp-pug'); 
const autoprefixer = require('gulp-autoprefixer');
const { watch } = require('browser-sync');
const sync = require('browser-sync')

function pug2html (){

    return src('src/*.pug')

    .pipe(pug({
        pretty: true
    }))

    .pipe(dest('src'))
}

function scss () {
    return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}