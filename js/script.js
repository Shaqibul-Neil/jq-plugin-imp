$(document).ready(function(){

// --------------------------------------------------------------------
// preloader
pageLoading({
  barColor:'#79c4df',
  barTop:'300px',
  textTop:'200px', 
  backColor:'rgba(0, 0, 0, 1)',
  backBarColor:'#dfe8ea', 
  // text:'Loading <b>{process} %</b>',
  textVisible:false, 
  loadOut:true,
});

// --------------------------------------------------------------------
// counter 1
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('.counterDetails').addClass('animated fadeIn');

// --------------------------------------------------------------------
// counter 2
$('.counter2').counterUp({
    delay: 10,
    time: 1000
});

// --------------------------------------------------------------------
// counter 3
$("#counter").countMe(40,65);

// --------------------------------------------------------------------
// aos 1
AOS.init({
  delay: 500, 
  duration: 1000,
  easing: 'linear'
});

// --------------------------------------------------------------------
// wow js
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
  }
)
wow.init();

// --------------------------------------------------------------------
// snowfall effect
$('.snows').flurry({
  character: ["❄", "❅", "❆", "*"],
  color: ["#55476A", "#AE3D63", "#DB3853", "#F45C44", "#F8B646"],
  speed: 3500,
  height: 500,
  frequency: 60,
  small: 12,
  large: 50,
  rotation: 90,
  rotationVariance: 20,
  startRotation: 90,
  wind: 10,
  windVariance: 100,
  opacityEasing: "cubic-bezier(1,0,.96,.9)"
});

// --------------------------------------------------------------------
// gotop
jQuery.goup({
  goupSpeed:'fast',
  bottomOffset: 10,
  containerColor:'red',
  arrowColor:'black'

});

































































































});