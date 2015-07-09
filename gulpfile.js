var gulp        = require('gulp');
var sass        = require('gulp-sass');
var watch       = require('gulp-watch');
var spritesmith = require('gulp.spritesmith');


gulp.task('default', ['watch']);


gulp.task('sprite', function () {
    var spriteData = gulp.src('img/sprites/*')
        .pipe(spritesmith({
            /* this whole image path is used within the css background declaration */
            imgName: '../img/sprite.png',
            cssName: 'sprite.scss',
            cssTemplate: 'css/scss.template.handlebars'
        }));
    spriteData.img.pipe(gulp.dest('img'));
    spriteData.css.pipe(gulp.dest('css'));
});


gulp.task('sass', function() {
    return gulp.src('css/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});


// Watch for changes to sprite images
gulp.task('watch', function () {
    gulp.watch(['img/sprites/**/*'], ['sprite']);
});