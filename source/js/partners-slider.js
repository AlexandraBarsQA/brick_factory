var swiper = new Swiper('.partners-slider__list', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.partners-slider__toggle--next',
        prevEl: '.partners-slider__toggle--prev',
      },
    });
