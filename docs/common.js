$('.btn-busan').click(function() {
  $('.btn-busan').addClass('active');
  $('.btn-seoul').removeClass('active');
  $('.busan-bg').addClass('active');
  $('.seoul-bg').removeClass('active');
});


$('.btn-seoul').click(function() {
  $('.btn-seoul').addClass('active');
  $('.btn-busan').removeClass('active');
  $('.busan-bg').removeClass('active');
  $('.seoul-bg').addClass('active');
});