$(function () {
  new Swiper(".recent__slider", {
    autoHeight: false,
    slidesPerView: 3,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 2,
    spaceBetween: 30,
    setWrapperSize: true,
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
});