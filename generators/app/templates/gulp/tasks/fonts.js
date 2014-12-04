var gulp = require('gulp');

module.exports = function() {
  gulp.task('fonts', function() {
    return gulp.src(['./public/components/font-awesome/fonts/fontawesome-webfont.*'])
      .pipe(gulp.dest('./public/build/fonts/'));
  });
}