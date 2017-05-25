//= require jquery/dist/jquery.min
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require force_https

$('.carousel').carousel()

$(function(){
  var hidden_project = $('.prehidden');
      
  hidden_project.hide();
  
  $('#project-more').click(function(e){
    e.preventDefault();
    hidden_project.slideToggle(1500, 'linear');

    if (this.innerHTML == "VIEW MORE"){
      this.innerHTML = "VIEW LESS";
    }
    else {
      this.innerHTML = "VIEW MORE"
    };
  });
});