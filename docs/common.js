// 메인 첫화면 부산버튼
$('.btn-busan').click(function () {
  $('.btn-busan').addClass('active');
  $('.btn-seoul').removeClass('active');
  $('.busan-bg').addClass('active');
  $('.seoul-bg').removeClass('active');
});
// 메인 첫화면 서울버튼
$('.btn-seoul').click(function () {
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
      nextEl: ".btn-next1",
      prevEl: ".btn-prev1",
    },
    on: {
      slideChange: function () {
        $('.section3-slide').attr('data-swiper-slide-index', this.realIndex);
      }
    }
  });
}
Section3__init();

// Section3 스와이퍼 슬라이드
function Section4__init() {
  const swiper = new Swiper('.section4-slide .swiper-container', {
    loop: true,
    slidesPerView: 3,
      spaceBetween: 50,
    navigation: {
      nextEl: ".btn-next2",
      prevEl: ".btn-prev2",
    },
    on: {
      slideChange: function () {
        $('.section4-slide').attr('data-swiper-slide-index', this.realIndex);
      }
    }
  });
}
Section4__init();


// section-4의 타겟검색창 (야매로..)
$('.targetage, .targettendency').click(function() {
  $(this).find('>ul').stop().slideDown(500);
  $(this).find('>ul').mouseleave(function() {
    $(this).stop().slideUp(500);
  });
});
