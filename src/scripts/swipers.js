import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export function initAllSwipers() {
  const swiperConfigs = [
    {
      selector: ".swiper",
      options: { loop: false, slidesPerView: 1 },
    },
    {
      selector: ".prices__swiper",
      options: {
        loop: false,
        slidesPerView: 5,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: { 1400: { slidesPerView: 5 }, 1100: { slidesPerView: 4 }, 800: { slidesPerView: 3 }, 100: { slidesPerView: 2.25 } },
      },
    },
    { selector: ".prices__swiper-choppers", options: { loop: false, slidesPerView: 1.2, spaceBetween: 16, pagination: { el: ".swiper-pagination-choppers", clickable: true } } },
    { selector: ".prices__localizations", options: { loop: false, slidesPerView: 1.2, spaceBetween: 16, pagination: { el: ".swiper-pagination-localizations", clickable: true } } },
    { selector: ".fleet__examples", options: { loop: false, slidesPerView: 1.2, spaceBetween: 12, pagination: { el: ".swiper-pagination-examples", clickable: true } } },
  ];

  swiperConfigs.forEach((config) => new Swiper(config.selector, { modules: [Pagination, Navigation], ...config.options }));
}

export function changeSwiperSlides() {
  const mainSwiper = document.querySelector(".swiper")?.swiper;
  const headerButtons = document.querySelectorAll(".header__button--active, .header__button");
  const mobileHeaderButtons = document.querySelectorAll(".header__mobile-button--active, .header__mobile-button");
  if (mainSwiper) {
    mainSwiper.on("slideChange", function () {
      if (mainSwiper.activeIndex === 1) {
        headerButtons[1]?.click();
        mobileHeaderButtons[1].click();
      } else {
        headerButtons[0]?.click();
        mobileHeaderButtons[0].click();
      }
    });
  }
}