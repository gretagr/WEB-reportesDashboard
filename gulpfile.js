// Initialize mpdules

const { src, dest, watch, series, parallel } = require('gulp');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');

// File path variables

const files = {
  scssPath: 'app/scss/**/*.scss',
  jsPath: 'app/js/**/*.js',
  htmlPath: 'index.html'
}

// BrowserSync task

function browserSyncTask(done){
  browserSync.init({
    server: {
      baseDir: '.'
    }
  });
  done();
}

// Sass task

function scssTask(){
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'))
    .pipe( browserSync.stream()
  );
}

// JS task

function jsTask() {
  return src(files.jsPath)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(dest('dist'))
    .pipe( browserSync.stream()
  );
}
// Cachebusting task

const cbString = new Date().getTime();

function cacheBustTask() {
  return src(['index.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('.')
  );
}

// Watch task

function watchTask(){
  watch([files.scssPath, files.jsPath, files.htmlPath],
    parallel(browserSyncTask, scssTask, jsTask)
  );
}

// Default task

exports.default = series(
  parallel(browserSyncTask, scssTask, jsTask),
  cacheBustTask,
  watchTask
);
