$(function () {
  const screenWidth = window.screen.width;

  new Swiper(".recent__slider", {
    autoHeight: false,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    simulateTouch: false,
    speed: 450,
    navigation: {
      nextEl: ".recent__next",
      prevEl: ".recent__prev",
    },
    breakpoints: {
      950: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 0,
      }
    }
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
    if (screenWidth > 1200)
      $('.search__input').animate({ width: 'toggle', paddingLeft: 'toggle', paddingRight: 'toggle' }, 400);
  });
});

function toggleMenu() {
  $(".menu__list").toggleClass("menu__list--active");
  $(".menu__overlay").toggleClass("menu__overlay--active");
  $(".menu__btn").toggleClass("menu__btn--active");
  $("body").toggleClass("hide-overflow");
}

$(".menu__btn").on("click", () => toggleMenu());
$(".menu__overlay").on("click", () => toggleMenu());