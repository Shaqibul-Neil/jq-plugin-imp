$(document).ready(function(){

// -----------------------------------------------------------------
// parallax 2
$('.my-paroller').paroller();
$(".my-element").paroller({ factor: 0.4, type: 'foreground', direction: 'vertical'});  

$('.my-paroller2').paroller();
$(".my-element2").paroller({ factor: -0.4, type: 'foreground', direction: 'horizontal'});  

// -----------------------------------------------------------------
// gallery
$('#gallery').tabX({
  type:'pills',
  animation:'blast',
  // animations: "blur",
  boxClass:'photo',
  activeCat:'all',
});

// -----------------------------------------------------------------
// lightbox
lightbox.option({
 	'resizeDuration': 200,
  'wrapAround': true
});
vertical






















































});