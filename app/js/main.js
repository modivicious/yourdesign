$(function () {
  new Swiper(".recent__slider", {
    autoHeight: false,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    simulateTouch: false,
    navigation: {
      nextEl: ".recent__next",
      prevEl: ".recent__prev",
    },
  });

  new Swiper(".reviews__slider", {
    slidesPerView: 1,
    effect: 'fade',
    simulateTouch: false,
    loop: true,
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
  });

  $('.search__btn').on('click', function () {
    $('.search__input').animate({ width: 'toggle', paddingLeft: 'toggle', paddingRight: 'toggle' }, 400);
  });
});