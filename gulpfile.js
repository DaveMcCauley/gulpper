var gulp            = require('gulp');
var sass            = require('gulp-sass');
var scssLint        = require('gulp-scss-lint');
var scssLintStylish = require('gulp-scss-lint-stylish');
var notify          = require('gulp-notify');

// gulp-color
// NOTE: to enable colors... set envrionment variable FORCE_COLOR true
// oin windows OS.

// gulp cache
// https://css-tricks.com/gulp-for-beginners/
// https://www.npmjs.com/package/gulp-prompt
// https://www.npmjs.com/package/gulp-print
// https://scotch.io/tutorials/prevent-errors-from-crashing-gulp-watch
// https://duaneblake.co.uk/front-end/system-notifcation-in-gulp-using-notify-and-plumber/

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    // .pipe(notify("Starting Sass complile..."))
    // .pipe(scssLint({customReport: scssLintStylish}))
    .pipe(scssLint())
    //.pipe(scssLint.failReporter('E'))
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// gulp.task('default', [ 'sass', 'watch']);

gulp.task('default', gulp.series('sass', 'watch'));

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
  // other watchers
});

