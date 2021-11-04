"use strict";

new ModalVideo(".js-modal-btn");
"use strict";

var mainNavBtn = document.querySelector(".main-nav__btn");
var mainNavList = document.querySelector(".main-nav__list");
mainNavBtn.addEventListener("click", function () {
  mainNavList.classList.toggle("main-nav__list--show");
  mainNavBtn.classList.toggle("btn-burger");
  mainNavBtn.classList.toggle("btn-close");
});
"use strict";

var selector = document.querySelectorAll('input[type=tel]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
"use strict";

var aboutSwiper = document.querySelector(".about__swiper");
var reviewsSwiper = document.querySelector(".reviews__swiper");
var swiperSlider = new Swiper(aboutSwiper, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  direction: "vertical",
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true
  },
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    319: {
      pagination: false,
      direction: "horizontal"
    },
    1199: {
      pagination: {
        el: ".about__swiper-pagination",
        clickable: true
      }
    }
  }
});
var swiperSlider2 = new Swiper(reviewsSwiper, {
  centeredSlides: false,
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  breakpoints: {
    319: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 3
    },
    1199: {
      slidesPerView: 4
    }
  }
});
"use strict";
//# sourceMappingURL=main.js.map
