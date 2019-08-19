//= require jquery/dist/jquery.min
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require jquery-backstretch/jquery.backstretch.min.js
//= require jquery.easing/js/jquery.easing.min.js
//= require fastclick/lib/fastclick.js
//= require force_https

$(function(){

  // Enable FastClick
	FastClick.attach(document.body);

  // Enable Hero Image
  $("#cover").backstretch([
    "../images/hero-image.jpg"
    ], {
      fade: 750,
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 68)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 70
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  var mainSection = $("#services").offset().top - 70;

  $('#mainNav').affix({
    offset: { top: mainSection }
  })

  // Explore Button Effect
  $('#explore').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 68)
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

  // $('[data-scroll-to]').each(function() {
  //   var bt = $(this)
  //   bt.on('click', function() {
  //     var target = $(bt.data('scroll-to'))
  //     $('html, body').animate({
  //       scrollTop: target.offset().top - 80
  //     }, 1000);
  //   });
  // });
});
