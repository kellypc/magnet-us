$(function () {
  $('.technologies-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true
  });
  // $('.products-carousel').flickity({
  //   // options
  //   cellAlign: 'left',
  //   contain: true,
  //   autoPlay: false,
  //   prevNextButtons: true,
  //   pageDots: false,
  //   wrapAround: true
  // });
  var $carousel = $('.products-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true
  });
  // previous
  $('.button--previous').on( 'click', function() {
    $carousel.flickity('previous');
  });
  // next
  $('.button--next').on( 'click', function() {
    $carousel.flickity('next');
  });
});