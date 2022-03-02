$(document).ready(function() {
  $('.rb-navbar-toggle .fa-bars').click(function(){
    $('.rb-navbar-nav').slideToggle('500');
  });
  $('.rb-dropdown').click(function(){
    $('.rb-dropdown-menu').slideToggle('slow');
  });
  $('.rb-dropdown > a').click(function(e) {
    e.preventDefault();
  });
  $('.rb-slides-carousel').flickity({
    cellAlign: 'left',
    draggable: false,
    freeScroll: false,
    wrapAround: true,
    autoPlay: 2000,
    prevNextButtons: true,
    pageDots: true,
    contain: true
  });
  $('.rb-clients-carousel').flickity({
    cellAlign: 'left',
    draggable: true,
    freeScroll: false,
    wrapAround: true,
    autoPlay: 1500,
    prevNextButtons: false,
    pageDots: false,
    contain: true
  });
});


$(window).on('load', function() {
   setTimeout(function(){
     $('#subscribeModal').modal('show');
   }, 5000);
   setTimeout(function(){
     $('.subscribeModal-lg').modal('show');
   }, 10000);
});
$('#Reloadpage').click(function() {
    location.reload();
}); 












