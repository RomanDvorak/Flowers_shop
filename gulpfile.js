var gulp         = require('gulp');
var bs           = require('browser-sync');
var sass         = require('gulp-sass');
var concatCss    = require('gulp-concat-css');
var gutil        = require('gulp-util');
var ftp          = require('vinyl-ftp');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var notify       = require('gulp-notify');
var combiner     = require('stream-combiner2').obj;

// Тест  combiner
gulp.task('test', function() {


 return combiner(
 		gulp.src("src/sass/test.sass"),
   sass(),
   concatCss("test.css"),
   gulp.dest("src/css"),
   bs.stream()
 ).on('error', notify.onError());


});


// Запускаем сервер, предварительно скопилировав SASS
gulp.task('serve', ['sass'], function() {

    bs.init({
      server: "./src"
    });
    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', bs.reload);
    gulp.watch("src/js/*.js").on('change', bs.reload);
});

// Делаем компиляцию SASS в CSS 
gulp.task('sass', function() {



 return combiner(
 		gulp.src("src/sass/*.sass"),
   sass(),
   autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }),
   concatCss("style.css"),
   gulp.dest("src/css"),
   bs.stream()
 ).on('error', notify.onError());


 
});

gulp.task('default', ['serve']);

gulp.task( 'deploy', function () {

	var conn = ftp.create( {
		host:     '88.99.94.73',
		user:     'roman205',
		password: 'jSgO68eENI',
		log:      gutil.log
	} );

	var globs = [
		'C:/Users/Slava/Desktop/glo_Academy/lessons/good-cardboard/dist/**'
	];

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src( globs, { base: '.', buffer: false } )
		.pipe( conn.newer( '/www/romandvorak.ru/lessons/good-cardboard/' ) ) // only upload newer files
		.pipe( conn.dest( '/www/romandvorak.ru/lessons/good-cardboard/' ) );

} );