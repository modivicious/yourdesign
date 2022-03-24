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

  const animOptions = {
    threshold: 0,
    rootMargin: "10000px 0px -60px 0px",
  };

  const animObserver = new IntersectionObserver((entries, animObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      else {
        animateStart(entry.target);
        animObserver.unobserve(entry.target);
      }
    });
  }, animOptions);

  animItems.forEach(anim => animObserver.observe(anim));

  function animateStart(e) {
    if (e.dataset.anim) {
      switch (e.dataset.anim) {
        case 'list-anim':
          let items = e.querySelectorAll('.some-anim');
          for (let i = 0; i < items.length; i++)
            setTimeout(() => items[i].classList.add('list-anim'), (i + 1) * 250);
          break;
        default:
          e.classList.add(e.dataset.anim);
      }
    }
    if (e.dataset.extraanim) e.classList.add(e.dataset.extraanim);
  }

  // image effect when scrolling
  const scrollImages = document.querySelectorAll('.scroll-image');

  if (scrollImages.length > 0) {
    window.addEventListener('scroll', () => {
      for (let image of scrollImages) {
        const imageHeight = image.offsetHeight;
        const imageOffset = image.offsetTop;
        const imageX = imageOffset - imageHeight;

        if (scrollY > imageX) {
          const backgroundPosition = (scrollY - imageX) * 0.02; // pos = image scrolled * coeff
          image.style.backgroundPosition = `${backgroundPosition}%`;
        }
      }
    });
  }

  // form validation
  const form = document.querySelector(".consult__form");
  const formInputs = [...document.querySelectorAll(".js-validate")];

  for (let input of formInputs) {
    input.onblur = function () {
      emptyCheck(this);
    };
    input.oninput = function () {
      if (this.value)
        this.classList.remove("error");
    };
  }

  form.onsubmit = function () {
    let flag = false;
    for (let input of formInputs) {
      emptyCheck(input);
      if (input.classList.contains("error"))
        flag = true;
    }
    if (flag)
      return false;
  };

  const emptyCheck = elem => {
    if (!elem.value) {
      elem.classList.add("error");
      elem.placeholder = "Поле не заполнено";
    }
    else
      elem.classList.remove("error");
  }
});