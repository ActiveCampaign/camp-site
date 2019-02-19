const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const csso = require('gulp-csso');

function pkgcss() {
	return src('dev/**/*.css')
		.pipe(concat('main.min.css'))
		.pipe(csso({sourceMap: false}))
		.pipe(dest('static'));
}

exports.pkgcss = pkgcss;
