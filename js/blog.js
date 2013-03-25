/*
* CCS Mordiscos web layout
*
* @author José A. San Gil Machin
*/




$(function() {
  var arrow_pos = (window.innerWidth-$('article').width()-200)/4;
  var left = $('nav.prev');
  var right = $('nav.next');
  left.css('left', arrow_pos);
  right.css('right', arrow_pos);
    
  // Fade In and Fade out    
  /*left.click(function() {
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
  })*/     
  
  /*left.click(function() {
    var $current = $('article.active')
    var $prev = $current.prev('article')
    
    if ($prev.length > 0) {
      //$('section').height($prev.height())
      $current.removeClass('active').animate({
        left: 960,
        right: -720,
      }, 500)
      
      $prev.addClass('active').css({left: -840}).show().animate({
        left: 120,
        right: 120,
      }, 500)
    }    
  })
       
  right.click(function() {
    var $current = $('article.active')
    var $next = $current.next('article')
    
    if ($next.length > 0) {
      //$('section').height($next.height())
      $current.removeClass('active').animate({
        left: -720,
        right: 960,
      }, 500)
     
      $next.addClass('active').css({left: 960}).show().animate({
        left: 120,
        right: 120,
      }, 500)
    }    
  })*/


  function postTransition(type) {
    
    if (type != 'prev' && type != 'next') {
      throw "Transition type unknown: 'prev' and 'next' are the only allowed values";
    }
    
    var $current = $('article.active')
    // moving to next post (older) are the default values 
    var move_left = -720, 
        move_right = 960,
        animate_from = 960,
        animate_to = 120; 

    if (type == 'prev') {
      move_left = 960;
      move_right = -720;
      animate_from = -840;
      var $next = $current.prev('article');
    } else {
      var $next = $current.next('article')
    }
    
    if ($next.length > 0) {
      //$('section').height($next.height())
      $current.removeClass('active').animate({
        left: move_left,
        right: move_right,
      }, 500)
     
      $next.addClass('active').css({left: animate_from}).show().animate({
        left: animate_to,
        right: animate_to,
      }, 500)
    }    
  };




  left.click(function() { postTransition('prev'); });
  right.click(function() { postTransition('next'); });

 
});

