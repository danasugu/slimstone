gulp.task('compile:app', function () {
  return gulp
    .src('src/**/*.ts')
    .pipe(/*npm run tsc*/)
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});
