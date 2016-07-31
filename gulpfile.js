var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var simplevars = require('postcss-simple-vars');
var customproperties = require('postcss-custom-properties');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var svgfragments = require('postcss-svg-fragments');
var cssnano = require('cssnano');
var colourFunctions = require('postcss-colour-functions');
var notify = require('gulp-notify');

gulp.task('css', function() {
    var processors = [
        cssimport,
        autoprefixer,
        simplevars,
        customproperties,
        mixins,
        nested,
        cssnano(),
        colourFunctions,
        svgfragments
    ];
    return gulp.src('./src/style.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./app/css/'))
        .pipe(notify({ message: 'Your CSS is ready ;)' }));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.css', ['css']); 
});


gulp.task('default', ['css', 'watch']);