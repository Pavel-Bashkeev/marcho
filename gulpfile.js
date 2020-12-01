let preprocessor = 'scss';

const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');

function styles() {
       return src([
              'node_modules/reset-css/reset.css',
              'node_modules/slick-carousel/slick/slick.css',
              'app/'+ preprocessor +'/main.'+ preprocessor +'',
       ])
              .pipe(eval(preprocessor)())
              .pipe(concat('style.min.css'))
              .pipe(autoprefixer({
                     overrideBrowserslist: ['last 10 versions'],
                     grid: true,
              }))
              .pipe(cleanCss(({
                     level: {
                            1:{
                                   specialComments: 0
                            }
                     }
              })))
              .pipe(dest('app/css/'))
              .pipe(browserSync.stream())
}
function scripts() {
       return src([
              'node_modules/jquery/dist/jquery.min.js',
              'node_modules/slick-carousel/slick/slick.min.js',
              'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
              'app/js/main.js',
       ])
              .pipe(concat('main.min.js'))
              .pipe(uglify())
              .pipe(dest('app/js/'))
              .pipe(browserSync.stream())
}
function images(){ 
       return  src('app/images/src/**/*')
       .pipe(newer('app/images/dest/'))
       .pipe(imagemin())
       .pipe(dest('app/images/dest/'))
}
function browsersync() {
       browserSync.init({
              server: { baseDir: 'app/' },
              notify: false,
              //  notify: false убирает уведомление 
              online: false
       });
}
function cleanimg(){
       return del('app/images/dest/**/*', { force: true })
}
function cleandist(){
       return del('dist/**/*', { force: true })
}
function buildcopy(){
       return src([
              'app/css/**/*.min.css',
              'app/js/**/*.min.js',
              'app/images/dest/**/*',
              'app/fonts/**/*',
              'app/**/*.html',
       ], { base: 'app' })
       .pipe(dest('dist'));
}
function startwatch() {
       watch('app/**/'+ preprocessor +'/**/*',  styles);
       watch(['app/**/*js', '!app/**/*.min.js'], scripts);
       watch('app/**/*.html').on('change', browserSync.reload);
       watch('app/images/src/**/*', images);
}

exports.styles = styles;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanimg = cleanimg;
exports.cleandist = cleandist;
exports.build = series(cleandist, styles, scripts, images, buildcopy);

exports.default = parallel(styles, scripts, browsersync, startwatch);