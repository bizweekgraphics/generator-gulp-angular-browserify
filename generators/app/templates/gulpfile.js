var gulp = require('./gulp')([
  'browser-sync',
  'html',
  'watch',
  'browserify',
  'vendor',
  'sass',
  'jshint',
  'nghtml2js',
  'replace',
  'fonts'
])

gulp.task('default', ['html', 'nghtml2js', 'sass', 'jshint', 'vendor', 'browserify', 'browser-sync', 'watch']);