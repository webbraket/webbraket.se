/*
 * Namespace
 */
var lathunden = window.lathunden = {}


/*
 * jQuery Load
 */

$(function(){
  lathunden.init();
})


$(window).on('resize', function(){
  lathunden.TOC.onResize();
});


/*
 * Anchors
 */

lathunden.Anchors = {}
lathunden.Anchors.init = function(){
  var $root = $('html, body');
  $('.toc a').click(function(e) {
    e.preventDefault();
    var href = $.attr(this, 'href').substring(1);
    var selector = "*[id='" + href + "']";
    var $elem = $(selector).first();
    $root.animate({
        scrollTop: $elem.offset().top
    }, 500, function () {
        window.location.hash = href;
    });
  });
}



/*
 * Examples
 */

lathunden.Examples = {};
lathunden.Examples.CSSPositionFixed = {}
lathunden.Examples.init = function(){
  lathunden.Examples.CSSPositionFixed.init();
}
lathunden.Examples.CSSPositionFixed.init = function(){
  var html = '';
  for(var i=0; i<20; i++){
    html += '<!DOCTYPE html><html><head><title>HTMLHunden example</title></head><body>';
    html += '<div style="width:100px; height:100px; background:red; margin: 6px;"></div>';
    html += '</body></html>';
  }
  html += '<div style="width:100px; height:100px; background:blue; position:fixed; left:30px; top:20px;"></div>';
  var iframe = document.getElementById('example-css-position-fixed');
  iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
  iframe.document.open();
  iframe.document.write(html);
  iframe.document.close();
}


lathunden.TOC = {};
lathunden.TOC.init = function(){
  this.visible = false;
  this.listen();
  $('#toc-single .toc-list').hide();
};
lathunden.TOC.listen = function(){
  $('#toggle-toc').click(function(event){
    event.stopPropagation();
    lathunden.TOC.toggleVisibility()
  });
  $('#toc-single').click(function(){
    if($(this).get(0) != $('#toggle-toc').get(0))
      if(lathunden.TOC.visible === false)
        if($('#toggle-toc').is(':visible'))
          lathunden.TOC.show()
  });
  $('#toc-single .btn-group-vertical a').click(function(e){
    e.preventDefault();

    var anchor = $(this).attr('href'),
        delay = lathunden.TOC.visible ? 300 : 0;

    if(lathunden.TOC.visible)
      lathunden.TOC.hide();

    setTimeout(function(){
      var goal = $(anchor).offset().top;
      $('body').animate({
        'scrollTop': goal
      },function(){
        window.location.hash = anchor;
        $('body').animate({scrollTop: ($('body').scrollTop() - 15)}, 100);
      });
    }, delay)
  })
}
lathunden.TOC.toggleVisibility = function(){
  if(this.visible)
    this.hide();
  else
    this.show();
}
lathunden.TOC.show = function(){
  this.lastContentY = $('body').scrollTop();
  $('#toc-single .toc-list').fadeIn();
  $('#chapters').fadeOut();
  $('#toc-single').animate({'width': '90%'}, function(){
    var $peek = $('<div id="content-peek"/>')
      .width('10%')
      .click(function(){
        lathunden.TOC.hide();
      });
    $('body').scrollTop(0)
             .append($peek)
             .css('padding', 0);
    $('#toc-single').addClass('visible');
    lathunden.TOC.visible = true;
  });
}
lathunden.TOC.hide = function(){
  $('#chapters').show();
  $('#toc-single').removeClass('visible');
  $('body').scrollTop(this.lastContentY)
           .css('padding', '');
  $('#content-peek').remove();
  $('#toc-single .toc-list').fadeOut();
  $('#toc-single').animate({'width':'50px'}, function(){
    lathunden.TOC.visible = false;
  });
}
lathunden.TOC.onResize = function(){
  if(this.visible)
    this.hide();
}


lathunden.FitText = {};
lathunden.FitText.init = function(){
  $('.title h1').fitText(0.7);
  $('.title h2').fitText(1.45);
}




/*
 * Initalizer
 */

lathunden.init = function(){
 lathunden.TOC.init();
 lathunden.FitText.init();
  //lathunden.Anchors.init();
  //lathunden.Examples.init();
  //$('#chapters h1').find('a').removeAttr('href'); //TODO: Clean out all the anchors cuz they are broken
  //$('#chapters h2').find('a').removeAttr('href'); //TODO: Clean out all the anchors cuz they are brokn
}
