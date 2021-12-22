$(function () {
  $('.recent__list').slick({
    rows: 2,
    slidesPerRow: 3,
  });

  $('.reviews__list').slick({
    fade: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="35" height="60" opacity=".4" fill="#D77E4A"><use href="images/icons/sprite.svg#arrow-left"></use></svg></button >',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="35" height="60" opacity=".4" fill="#D77E4A"><use href="images/icons/sprite.svg#arrow-right"></use></svg></button >',
  });
});