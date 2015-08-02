var gulp       = require('gulp'),
    fs         = require('fs'),
    path       = require('path'),
    header     = require('gulp-header'),
    footer     = require('gulp-footer'),
    jade       = require('gulp-jade'),
    intercept  = require('gulp-intercept'),
    concat     = require('gulp-concat'),
    cheerio    = require('cheerio'),
    gutil      = require('gulp-util');


/*
 * = = = = = = = = = = = = = = = = = = = = 
 *                STATE 
 * = = = = = = = = = = = = = = = = = = = = 
 */

var paths = {
  common_header    : 'src/templates/common-header.jade',
  common_footer    : 'src/templates/common-footer.jade',
  single_header    : 'src/templates/single-header.jade',
  single_footer    : 'src/templates/single-footer.jade',
  paginated_header : 'src/templates/paginated-header.jade',
  paginated_footer : 'src/templates/paginated-footer.jade'
};

var tinylr;

var data = {
  toc:     [],
  changed: undefined
};




/*
 * = = = = = = = = = = = = = = = = = = = = 
 *                TASKS 
 * = = = = = = = = = = = = = = = = = = = = 
 */


gulp.task('memorize-toc', function(cb){
  memorizeToc(cb);
})
function memorizeToc(cb){
  data.toc = [];
  gulp.src('./src/chapters/*.jade')
    .pipe(jade())
    .pipe(intercept(function(file){
      addFileToTOC(file);
      return file;
    }))
    .on('end', cb);
}


gulp.task('paginated', ['memorize-toc'], function(){
  if(data && data.changed && data.changed.type && data.changed.type == 'changed'){
    var shortname = "..." + data.changed.path.substring(data.changed.path.lastIndexOf('/')+1);
    gutil.log('Task', gutil.colors.cyan("'paginated'"), "is acting only on the single file: [", shortname, "]");
    compilePaginatedChapter(findChapterWithOrigin(data.changed.path));
  }else{
    gutil.log('Task', gutil.colors.cyan("'paginated'"), "is acting on all chapters.");
    chapterIterator(compilePaginatedChapter);
  }
});
function compilePaginatedChapter(chapter){
  gulp.src(chapter.contents.origin)
    .pipe(header(fs.readFileSync(paths.paginated_header)))
    .pipe(header(fs.readFileSync(paths.common_header)))
    .pipe(footer(fs.readFileSync('./src/templates/pagination.jade')))
    .pipe(footer(fs.readFileSync(paths.paginated_footer)))
    .pipe(footer(fs.readFileSync(paths.common_footer)))
    .pipe(jade({
      locals:{
        urls: {
          next: findOffsetChapterURL(chapter.contents.url, 1),
          prev: findOffsetChapterURL(chapter.contents.url, -1)
        }
      }
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(intercept(onNotifyReload));
}

gulp.task('single', ['memorize-toc'], function(){
  return gulp.src('./src/chapters/*.jade')
    .pipe(concat('full.html'))
    .pipe(header(fs.readFileSync(paths.single_header)))
    .pipe(header(fs.readFileSync(paths.common_header)))
    .pipe(footer(fs.readFileSync(paths.single_footer)))
    .pipe(footer(fs.readFileSync(paths.common_footer)))
    .pipe(jade({locals:{ toc: data.toc }}))
    .pipe(intercept(function(file){
      file.contents = new Buffer(injectAnchors(file.contents.toString()));
      return file;
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(intercept(onNotifyReload));
});

gulp.task('index', ['memorize-toc'], function(){
  return gulp.src('./src/index.jade')
    .pipe(jade({
      locals:{
        toc:   data.toc,
        first: data.toc[0]
      }
    }))
    .pipe(gulp.dest('./'))
    .pipe(intercept(onNotifyReload));
});

gulp.task('pages', ['memorize-toc'], function(){
  return gulp.src(['./src/*.jade', '!./src/index.jade'])
    .pipe(jade({locals:{toc:data.toc}}))
    .pipe(gulp.dest('./dist/'))
    .pipe(intercept(onNotifyReload));
});

gulp.task('assets', function(){
  return gulp.src('./src/assets/**/*.*')
    .pipe(gulp.dest('./dist/assets/'))
    .pipe(intercept(onNotifyReload));
});

gulp.task('server', function() {
  var express = require('express'),
      app     = express();
  app.use(require('connect-livereload')());
  app.use(express.static(__dirname));
  app.listen(4000);
});

gulp.task('livereload', function(){
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

gulp.task('watch', ['server', 'livereload', 'compile'], function(){
  gulp.watch('src/chapters/*.jade', ['jade'])
    .on('change', function(event){
      data.changed = event;
    })
  gulp.watch('src/templates/*.jade', ['jade']);
  gulp.watch('src/index.jade', ['index']);
  gulp.watch(['src/*.jade', '!src/index.jade'], ['pages']);
  gulp.watch('src/assets/**/*.*', ['assets']);
});

gulp.task('compile', ['jade', 'assets'])
gulp.task('jade', ['index', 'paginated', 'pages', 'single'])

gulp.task('default', ['compile']);//['paginated', 'single']);





/*
 * = = = = = = = = = = = = = = = = = = = = 
 *                HELPERS 
 * = = = = = = = = = = = = = = = = = = = = 
 */

function onNotifyReload(file){
  // don't reload unless we're running a reload server
  if(typeof tinylr === 'undefined')
    return;

  var fileName = require('path').relative('.', file.path);
  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}


var addFileToTOC = function(file){
  var $       = cheerio.load(file.contents.toString()),
      $h1     = $('h1'),
      $h2     = $('h2'),
      $header = $h1.length > 0 ? $h1 : $h2;

  // find chapter url
  var url = path.basename(file.path).split('.')[0] + '.html';

  // locate origin
  var origin = file.path.substring(0, file.path.indexOf('.')) + '.jade';

  // determine number
  var number;
  if($h1.length > 0)
    number = data.toc.length + 1;
  else
    number = data.toc.length + "." + (data.toc[data.toc.length-1].subchapters.length + 1);

  // coming soon?
  var todo = false;
  if($header.text().indexOf('kommer snart') != -1)
    todo = true;
  else if($h2.length > 0)
    if(data.toc[data.toc.length-1].contents.title.indexOf('kommer snart') != -1)
      todo = true;


  // create chapter object
  var chapter = {
    title     : $header.text(),
    url       : url,
    slug      : url.substring(0, url.indexOf('.')),
    origin    : origin,
    number    : number,
    todoClass : (todo ? 'toc-coming-soon' : '')
  }

  // memorize chapter
  if($h1.length > 0){
    data.toc.push({
      contents:    chapter,
      subchapters: []
    });
  }else if($h2.length > 0){
    data.toc[data.toc.length-1].subchapters.push({
      contents:   chapter
    });
  }
}

var hasTocSignificantlyChanged = function(cb){
  if(data.toc === []) return cb(true);

  var oldness = [];
  chapterIterator(function(c){ oldness.push(c); });
  memorizeToc(function(){
    var newness = [];
    chapterIterator(function(c){ newness.push(c); });

    if(newness.length != oldness.length)
      return cb(true);

    for(var n=0; n<newness.length; n++)
      if(newness[n].contents.origin != oldness[n].contents.origin)
        return cb(true);

    return cb(false);
  });
}


var findChapterWithOrigin = function(filepath){
  var ret;
  chapterIterator(function(chapter){
    if(chapter.contents.origin  === filepath){
      ret = chapter;
    }
  });
  if(typeof ret != 'undefined')
    return ret;
  else
    throw ("ERROR: Could not find chapter at path: " + filepath);
}

var chapterIterator = function(cb){
  var n = 0;
  data.toc.forEach(function(chapter){
    cb(chapter, n);
    n++;
    chapter.subchapters.forEach(function(subchapter){
      cb(subchapter, n);
      n++;
    });
  });
};

var chaptersAsFlatArray = function(){
  var chapters = [];
  chapterIterator(function(c){
    chapters.push(c);
  });
  return chapters;
};

var indexOfChapter = function(url){
  var chapters = chaptersAsFlatArray();
  var index = -1;
  chapters.forEach(function(c,i){
    if(c.contents.url === url){
      index = i;
    }
  });
  return index;
};

var findOffsetChapterURL = function(url, offset){
  var chapters = chaptersAsFlatArray(),
      index    = indexOfChapter(url),
      newIndex = index + offset;
  if(newIndex < 0  ||  newIndex > chapters.length-1){
    console.log("At end-file: Not found referring to index");
    return '/index.html';
  }
  else{
    return chapters[newIndex].contents.url;
  }
}


var injectAnchors = function(html){
  var $ = cheerio.load(html),
      chapters = chaptersAsFlatArray();

  $('h1, h2').each(function(n){
    var slug = chapters[n].contents.slug;
    $(this).attr('href', '#' + slug)
           .attr('name', slug)
           .attr('id', slug);
  });

  return '<!DOCTYPE html><html>' + $('html').html() + '</html>';
}
