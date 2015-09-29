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
    cheerio = require('cheerio'),
    del     = require('del'),
    fs      = require('fs');


gulp.task('default', ['watch:development']);
gulp.task('build:development', ['chapters', 'js:development', 'css:development', 'img', 'root', 'examples']);
gulp.task('build:production',  ['chapters', 'js:production', 'css:production', 'img', 'root', 'examples']);

gulp.task('watch:development', ['build:development', 'server'], function(){
  gulp.watch('src/chapters/**/*',   ['chapters']);
  gulp.watch('src/templates**/*',   ['chapters']);
  gulp.watch('src/examples/**/*',   ['examples']);
  gulp.watch('src/assets/js/**/*',  ['js:development']);
  gulp.watch('src/assets/css/**/*', ['css:development']);
  gulp.watch('src/assets/img/**/*', ['img']);
});

gulp.task('watch:production', ['build:production', 'server'], function(){
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

gulp.task('toc', function() {
  return gulp.src('src/chapters/**/*.md')
    .pipe(marked())
    .pipe(concat('toc.json'))
    .pipe(insert.transform(function(contents) {
      var $ = cheerio.load(contents);
      var h1s = $('h1');
      var toc = h1s.toArray().map(function(h1) {
        var $h1 = $('#' + h1.attribs.id);
        return {
          id:   h1.attribs.id,
          name: $h1.text(),
          children: $h1.nextUntil('h1', 'h2').toArray().map(function(h2) {
            var $h2 = $('#' + h2.attribs.id);
            return {
              id:   h2.attribs.id,
              name: $h2.text(),
              children: $h2.nextUntil('h2', 'h3').toArray().map(function(h3) {
                var $h3 = $('#' + h3.attribs.id);
                return {
                  id:   h3.attribs.id,
                  name: $h3.text()
                };
              })
            }
          })
        }
      });
      return JSON.stringify(toc);
    }))
    .pipe(gulp.dest('tmp'));
});

gulp.task('chapters', ['toc'], function(){
  return gulp.src('src/chapters/**/*.md')
    .pipe(marked())
    .pipe(concat('index.html'))
    .pipe(insert.transform(function(contents){
      var tocString = fs.readFileSync('tmp/toc.json', { encoding: 'utf-8' });
      var toc = JSON.parse(tocString);
      return jade.renderFile('src/templates/index.jade', {
        body : contents,
        toc  : toc
      });
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

