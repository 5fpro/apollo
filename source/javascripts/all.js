//= require jquery/dist/jquery.min
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require jquery-backstretch/jquery.backstretch.min.js
//= require jquery.easing/js/jquery.easing.min.js
//= require force_https

$(function(){

  // Enable Hero Image
  $.backstretch("../images/hero-image.jpg");

  // Enable Bootstrap Carousel
  $('.carousel').carousel()

  // Explore Button Effect
  $('#explore').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1000, 'easeInOutExpo');
      event.preventDefault();
  });

  // View More Projects
  var hidden_project = $('.prehidden');

  hidden_project.hide();
  
  $('#project-more').click(function(e){
    e.preventDefault();
    hidden_project.fadeToggle();

    if (this.innerHTML == "VIEW MORE"){
      this.innerHTML = "VIEW LESS";
    }
    else {
      this.innerHTML = "VIEW MORE"
    };
  });
});