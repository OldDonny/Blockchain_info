$(document).ready(function(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  
  });



  var options = [
    {selector: '.info_tab', offset: 200, callback: customCallbackFunc },
    {selector: '.other-class', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);