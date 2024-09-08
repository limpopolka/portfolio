addEventListener('DOMContentLoaded', (event) => {
  const newsSlider = new Swiper('.news-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
      },
    },
  })
})
