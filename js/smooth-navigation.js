// 
// Creates a smooth scroll effect when clicking on a link
// and scrolling to that heading.
// 
// @author : stack overflow :(
//  
$("a[href^='#']").on('click', function(e) {

 target = this.hash;
 
 // prevent default anchor click behavior
 e.preventDefault();

 // store hash
 var hash = this.hash;

 // animate
 $('html, body').animate({
     scrollTop: $(this.hash).offset().top
   }, 300, function(){

     // when done, add hash to url
     // (default click behaviour)
     window.location.hash = target;
   });

});