import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import less from 'gulp-less';
import ghPages from 'gh-pages';
import gutil from 'gulp-util';

const sync = browserSync.create();

gulp.task('html', () => {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('script', () => {
  browserify({
      entries: ['./src/scripts/main.jsx'],
      extensions: ['.js', '.jsx'],
      debug: true
    }).transform(babelify.configure({
      optional: ['es7.classProperties']
    })).bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('styles', () => {
  gulp.src('src/styles/**/*.less')
    .pipe(less().on('error', gutil.log))
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }))
});

gulp.task('build', ['html', 'script', 'styles']);

gulp.task("deploy", ["build"], () => {
  ghPages.publish("dist");
});

gulp.task('serve', ['build'], () => {
  sync.init({
    server: 'dist',
  });

  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.less', ['styles']);
  gulp.watch('src/**/*.{js,jsx}', ['script'])
});

gulp.task('default', ['serve']);
