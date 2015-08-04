var gulp    = require('gulp'),
    jade    = require('jade'),
    sass    = require('gulp-sass'),
    path    = require('path'),
    concat  = require('gulp-concat'),
    marked  = require('gulp-marked'),
    insert  = require('gulp-insert'),
    rename  = require('gulp-rename'),
    connect = require('gulp-connect'),
    uglify  = require('gulp-uglify'),
    ghpages = require('gh-pages'),
    del     = require('del');


gulp.task('default', ['watch:development']);
gulp.task('build:development', ['chapters', 'js:development', 'css:development', 'img', 'root', 'examples']);
gulp.task('build:production',  ['chapters', 'js:production', 'css:production', 'img', 'root', 'examples']);

gulp.task('watch:development', ['server'], function(){
  gulp.watch('src/chapters/**/*',   ['chapters']);
  gulp.watch('src/templates**/*',   ['chapters']);
  gulp.watch('src/examples/**/*',   ['examples']);
  gulp.watch('src/assets/js/**/*',  ['js:development']);
  gulp.watch('src/assets/css/**/*', ['css:development']);
  gulp.watch('src/assets/img/**/*', ['img']);
});

gulp.task('watch:production', ['server'], function(){
  gulp.watch('src/chapters/**/*',   ['chapters']);
  gulp.watch('src/templates**/*',   ['chapters']);
  gulp.watch('src/examples/**/*',   ['examples']);
  gulp.watch('src/assets/js/**/*',  ['js:production']);
  gulp.watch('src/assets/css/**/*', ['css:production']);
  gulp.watch('src/assets/img/**/*', ['img']);
});

gulp.task('server', function(){
  connect.server({
    root: 'build/',
    livereload: true
  });
});

gulp.task('publish', ['clean'], function(){
  gulp.start('build:production', function(){
    ghpages.publish(path.join(__dirname, 'build'), function(err) {
      if(err)
        console.log('Error', err);
    });
  });
});

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('chapters', function(){
  return gulp.src('src/chapters/**/*.md')
    .pipe(marked())
    .pipe(concat('index.html'))
    .pipe(insert.transform(function(contents){
      return jade.renderFile('src/templates/index.jade', { body : contents })
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('js:development', function(){
  return gulp.src('src/assets/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

gulp.task('js:production', function(){
  return gulp.src('src/assets/js/**/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

gulp.task('css:development', function(){
  return gulp.src('src/assets/css/**/*.*')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('css:production', function(){
  return gulp.src('src/assets/css/**/*.*')
    .pipe(sass({ outputStyle : 'compressed' }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('root', function(){
  return gulp.src('src/assets/root/**/*')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('img', function(){
  return gulp.src('src/assets/img/**/*.*')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('examples', function(){
  return gulp.src('src/examples/**/*.*')
    .pipe(gulp.dest('build/examples'))
    .pipe(connect.reload());
});

