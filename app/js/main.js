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
    simulateTouch: false,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 550,
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
  });

  $('.search__btn').on('click', function () {
    if (screenWidth > 1200)
      $('.search__input').animate({ width: 'toggle', paddingLeft: 'toggle', paddingRight: 'toggle' }, 500);
  });

  function toggleMenu() {
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu__overlay").toggleClass("menu__overlay--active");
    $(".menu__btn").toggleClass("menu__btn--active");
    $("body").toggleClass("hide-overflow");
  }

  $(".menu__btn").on("click", () => toggleMenu());
  $(".menu__overlay").on("click", () => toggleMenu());


  const animItems = document.querySelectorAll(".animation");

  function someAnimation(e, anim) {
    var items = e.querySelectorAll('.some-anim');
    switch (anim) {
      // case 'hover-anim':
      //   var time = 100;
      //   for (let i = 0; i < items.length; i++) {
      //     setTimeout(() => {
      //       items[i].classList.add('hoverAnim');
      //       setTimeout(() => items[i].classList.remove('hoverAnim'), time);
      //     }, (i + 1) * 400);
      //     time += 100;
      //   }
      //   break;
      case 'list-anim':
        for (let i = 0; i < items.length; i++) {
          setTimeout(() => {
            items[i].classList.add('list-anim');
          }, (i + 1) * 250);
        }
        break;
    }
  }

  function animateStart(e) {
    if (e.dataset.anim) {
      switch (e.dataset.anim) {
        case 'list-anim':
          someAnimation(e, 'list-anim');
          break;
        // case 'hoverAnim':
        //   someAnimation(e, 'hover-anim');
        //   break;
        default:
          e.classList.add(e.dataset.anim);
      }
    }
    if (e.dataset.extraanim) e.classList.add(e.dataset.extraanim);

  }

  const animOptions = {
    threshold: 0,
    rootMargin: "10000px 0px -60px 0px",
  };

  const animObserver = new IntersectionObserver((entries, animObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      else {
        animateStart(entry.target);
        animObserver.unobserve(entry.target);
      }
    });
  }, animOptions);

  animItems.forEach((anim) => {
    animObserver.observe(anim);
  });


  const scrollImages = document.querySelectorAll('.scroll-image');

  if (scrollImages.length > 0) {
    window.addEventListener('scroll', () => {
      scrollImages.forEach((image) => {
        const imageHeight = image.offsetHeight;
        const imageOffset = image.offsetTop;
        var imageX = imageOffset - imageHeight;

        if (scrollY > imageX) {
          var imageScrolled = scrollY - imageX;
          var backgroundPosition = imageScrolled * 0.02;
          image.style.backgroundPosition = `${backgroundPosition}%`;
        }
      });
    });
  }

});