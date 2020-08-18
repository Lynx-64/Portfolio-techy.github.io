const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');

// BrowserSync
gulp.task('serve', ['sass'], () => {
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});
	gulp.watch('*.html').on('change', reload);
	gulp.watch('scss/*.scss', ['sass']).on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
	gulp.src('scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream({match: 'css/*.css'}));
});

gulp.task('default', ['serve']);
