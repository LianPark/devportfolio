const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
    return gulp
      .src('./scss/styles.scss')        // scss 파일 경로 설정
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write(''))       // 컴파일 된 css map 파일 저장될 경로 설정
      .pipe(gulp.dest('./css'));        // 컴파일 된 css 파일 저장될 경로 설정
});

// 컴파일 상시 감시
gulp.task('watch', () => {
    gulp.watch('./scss/styles.scss', gulp.series('sass'));
});


gulp.task('sass2', () => {
  return gulp
    .src('./scss/styles.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//exports.buildStyles = buildStyles;
gulp.task('default', gulp.series('sass', 'watch'));