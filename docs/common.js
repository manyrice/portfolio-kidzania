console.clear();
// 로딩화면
$("body").imagesLoaded(function () {
  // 이 부분을 0으로 바뀌면 로딩화면이 안보일 때가 있습니다. 억지로라도 로딩화면을 보여주려면 이 부분을 남겨두세요. 500이 적당합니다.
  const fakeLoadingMilliSeconds = 3000;
  setTimeout(function () {
    $(".loading").remove();
  }, fakeLoadingMilliSeconds);
});

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
      nextEl: ".btn-next1-1",
      prevEl: ".btn-prev1-1",
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
      nextEl: ".btn-next1-2",
      prevEl: ".btn-prev1-2",
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


// Section6 스와이퍼 슬라이드 1
function Section6_1__init() {
  const swiper = new Swiper('.section6-slide1 .swiper-container', {
    loop: true,
    slidesPerView: 2,
      spaceBetween: 0,
    navigation: {
      nextEl: ".btn-next2-1",
      prevEl: ".btn-prev2-1",
    },
    on: {
      slideChange: function () {
        $('.section4-slide1').attr('data-swiper-slide-index', this.realIndex);
      }
    }
  });
}
Section6_1__init();

// Section6 스와이퍼 슬라이드 2
function Section6_2__init() {
  const swiper = new Swiper('.section6-slide2 .swiper-container', {
    loop: true,
    slidesPerView: 3,
      spaceBetween: 0,
    navigation: {
      nextEl: ".btn-next2-2",
      prevEl: ".btn-prev2-2",
    },
    on: {
      slideChange: function () {
        $('.section4-slide2').attr('data-swiper-slide-index', this.realIndex);
      }
    }
  });
}
Section6_2__init();