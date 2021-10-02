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


// Section3 스와이퍼 슬라이드
function Section3__init() {
  const swiper = new Swiper('.section3-slide .swiper-container', {
    loop: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    on: {
      slideChange: function() {
        $('.section3-slide').attr('data-swiper-slide-index', this.realIndex);
      }
    }
  });
}

PortfolioSlider__init();