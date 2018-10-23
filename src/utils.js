import $ from "jquery";

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50){
            $('.navBar').css('background-color','black');
            $('.navBar').css('box-shadow','8px 8px 8px rgba(0,0,0,0.4)');
        }
        else if ($(window).scrollTop() < 50){
            $('.navBar').css('background-color','transparent');
        }
    });

    $.fn.visible = function(partial) {
    
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };

    $(window).scroll(function(event) {
        $(".mainContent").each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
            el.addClass("come-in"); 
          } 
        });
        
      });
      var win = $(window);
var allMods = $(".mainContent");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});
});