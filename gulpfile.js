var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('img/sprites/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css'
        }));
    spriteData.img.pipe(gulp.dest('img'));
    spriteData.css.pipe(gulp.dest('css'));
});