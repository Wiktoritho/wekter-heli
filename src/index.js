import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import { initOffers } from "./scripts/offers";
import { initFleet } from "./scripts/fleet";
import { handlePrices } from "./scripts/prices";
import { handleHeaderSwitcher, handleMenu, handleMobileMenu } from "./scripts/header";

let startedWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", () => {
  initAllSwipers();
  initOffers();
  initFleet();
  ringProgress();
  handlePrices();
  handleHeaderSwitcher();
  handleMenu();
  handleFooterLists();
  handleMobileMenu();
});

function initAllSwipers() {
  const swiperConfigs = [
    {
      selector: ".swiper",
      options: { loop: true, slidesPerView: 1, pagination: { el: ".swiper-pagination", clickable: true }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } },
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

function ringProgress() {
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    const valueElement = slide.querySelector(".prices__ring-value");
    const ringOutside = slide.querySelector(".prices__ring--outside");

    if (!valueElement || !ringOutside) return;

    const minutes = parseInt(valueElement.textContent.trim().split(":")[1] || "0", 10);
    const degrees = (minutes / 60) * 360;

    ringOutside.style.background = `conic-gradient(#3B5EAB ${degrees}deg, #ddd ${degrees}deg)`;
  });
}

function handleFooterLists() {
  const headers = document.querySelectorAll(".footer__list h3");
  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const ul = this.nextElementSibling;
      if (ul && ul.tagName.toLowerCase() === "ul") {
        ul.style.display = ul.style.display === "block" ? "none" : "block";
      }
    });
  });
}

function changeChoppers() {
  const choppersSwiper = document.querySelector(".prices__swiper-choppers");
  const choppers = document.querySelectorAll(".prices__chopper");

  if (window.innerWidth <= 900) {
    choppersSwiper.style.display = "flex";
    choppers.forEach((slide) => {
      slide.style.display = "none"
    });
  } else {
    choppersSwiper.style.display = "none";
    choppers.forEach((slide) => {
      slide.style.display = "flex"
    });
  }
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    const breakpoint = 900;
    if ((startedWidth > breakpoint && window.innerWidth < breakpoint) || (startedWidth <= breakpoint && window.innerWidth >= breakpoint)) {
      initAllSwipers();
      initOffers();
      changeChoppers();
      startedWidth = window.innerWidth;
    }
  }, 200)
);
