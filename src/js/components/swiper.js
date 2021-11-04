const aboutSwiper = document.querySelector(".about__swiper");
const reviewsSwiper = document.querySelector(".reviews__swiper");

let swiperSlider = new Swiper(aboutSwiper, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  direction: "vertical",
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true,
  },
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    319: {
      pagination: false,
      direction: "horizontal",
    },
    1199: {
      pagination: {
        el: ".about__swiper-pagination",
        clickable: true,
      },
    },
  },
});

let swiperSlider2 = new Swiper(reviewsSwiper, {
  centeredSlides: false,
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    319: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
});
