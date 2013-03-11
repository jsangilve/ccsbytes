$(function() {
  var arrow_pos = (window.innerWidth-$('article').width()-200)/4;
  var left = $('nav.left-arrow');
  var right = $('nav.right-arrow');
  left.css('left', arrow_pos +'px');
  right.css('right', arrow_pos +'px');
        
  left.click(function() {
    $('article.active').each(function(){
      var $prev_post = $(this).prev('article');
      if ($prev_post.length > 0) {
        $(this).hide().removeClass('active');
        $prev_post.addClass('active').fadeIn(500)
      }
    })
  })
  right.click(function() {
    $('article.active').each(function(){
      var $next_post = $(this).next('article');
      if ($next_post.length > 0) {
        $(this).hide().removeClass('active');
        $next_post.fadeIn(500).addClass('active');
      }
    })
  })      
          
});

