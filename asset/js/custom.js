
$( document ).ready(function() {

  // Our team area slider
  $('.our_team_slide_area').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '<div class="top-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
      prevArrow: '<div class="top-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i>',
      responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 1,
          dots:true,
          centerMode: true,
        }
      },
       {
        breakpoint: 992,
        settings: {
          vertical: false,
          slidesToShow: 2,
          dots:true,
          centerMode: true,
        }
      },
      ]
  });

});

// trigger menu
(function($){
  "use strict";

  jQuery(document).ready(function(){
    $('.off_can_trigger').on('click',function(){
      $('.header_menu').addClass('active');
      return false;
    });
  });

  jQuery(document).ready(function(){
    $('.off_canvas_close').on('click',function(){
      $('.header_menu').removeClass('active');
    });
  });

}(jQuery));

{
// footer testimonial slider
var $status = $('.footer_testimonial_pagingInfo');
var $slickElement = $('.footer_testimonial_slideshow');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  autoplay: true,
  nextArrow: '<div class="top-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
  prevArrow: '<div class="top-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i>',
});
}

{
// About us team slider
var $status = $('.aboutus_pagingInfo');
var $slickElement = $('.aboutus_team_single_slideshow');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  autoplay: true,
  nextArrow: '<div class="top-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i>',
  prevArrow: '<div class="top-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i>',
  centerMode: false,
});
}

//  Sticky header
$(window).scroll(function(){
      if ($(this).scrollTop() > 180) {
          $('.header_area').addClass('fixed');
          $('.if_home').addClass('scroll_logo');
      } else {
          $('.header_area').removeClass('fixed');
          $('.if_home').removeClass('scroll_logo');
      }
});


// Rent page Tab content
{

  window.onload = function(){
    document.getElementById("floorplan1_btn").click();
  }
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
}


// Fancybox
{

  $('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});
  
}