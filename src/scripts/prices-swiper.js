import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export function initPricesSwiper() {
  return new Swiper(".prices__swiper", {
    modules: [Navigation],
    loop: false,
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1400: {
        slidesPerView: 5,
      },
      1100: {
        slidesPerView: 4
      },
      800: {
        slidesPerView: 3
      },
      100: {
        slidesPerView: 2.25
      }
    },
  });
}

export function initLocalizationsSwiper() {
  return new Swiper(".prices__localizations", {
    modules: [Pagination],
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination-localizations",
      clickable: true,
    },
  });
}

export function initChoppersSwiper() {
  return new Swiper(".prices__swiper-choppers", {
    modules: [Pagination],
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination-choppers",
      clickable: true,
    },
  });
}

export function ringProgress() {
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    const valueElement = slide.querySelector(".prices__ring-value");
    const ringOutside = slide.querySelector(".prices__ring--outside");

    if (valueElement && ringOutside) {
      const timeText = valueElement.textContent.trim();
      const minutes = parseInt(timeText.split(":")[1], 10) || 0;

      const maxTime = 60;
      const percentage = (minutes / maxTime) * 100;
      const degrees = (percentage / 100) * 360;

      ringOutside.style.background = `conic-gradient(#3B5EAB ${degrees}deg, #ddd ${degrees}deg)`;
    }
  });
}
