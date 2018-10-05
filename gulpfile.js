var gulp            = require('gulp');
var sass            = require('gulp-sass');
var scssLint        = require('gulp-scss-lint');
var scssLintStylish = require('gulp-scss-lint-stylish');
var notify          = require('gulp-notify');
var gulpSequence    = require('gulp-sequence');
const eslint        = require('gulp-eslint');

// gulp-color
// NOTE: to enable colors... set envrionment variable FORCE_COLOR true
// oin windows OS.

// gulp cache
// https://css-tricks.com/gulp-for-beginners/
// https://www.npmjs.com/package/gulp-prompt
// https://www.npmjs.com/package/gulp-print
// https://scotch.io/tutorials/prevent-errors-from-crashing-gulp-watch
// https://duaneblake.co.uk/front-end/system-notifcation-in-gulp-using-notify-and-plumber/

// https://pawelgrzybek.com/using-webpack-with-gulpjs/




gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    // .pipe(notify("Starting Sass complile..."))
    // .pipe(scssLint({customReport: scssLintStylish}))
    .pipe(scssLint())
    //.pipe(scssLint.failReporter('E'))
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('eslint', function() {
  return gulp.src(['js/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('finish', function() {
  return gulp.src('scss/*.scss').pipe(notify("Finished!"));
});

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
  // other watchers
});

// Split out tasks...
// https://gist.github.com/heldr/a3429c31ff45937c13de
// https://gist.github.com/thomastuts/a4dafc20d49662e4e13a
// http://macr.ae/article/splitting-gulpfile-multiple-files.html


// NOTE use gulp-inject for injection into html.

// Gulp Stats
// https://www.npmjs.com/package/gulp-stats

// also...
// gulp.task('copy', ['html', 'css', 'js']);
// html, css, and js will run BEFORE copy as a dependency.


// usage 1, recommend
// 1. run 'a', 'b' in parallel;
// 2. run 'c' after 'a' and 'b';
// 3. run 'd', 'e' in parallel after 'c';
// 3. run 'f' after 'd' and 'e'.
// gulp.task('sequence-1', gulpSequence(['a', 'b'], 'c', ['d', 'e'], 'f'))


gulp.task('default', gulpSequence(['sass', 'eslint'],['finish','watch']));
gulp.task('random', ['sass', 'finish']);