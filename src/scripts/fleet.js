export function initFleet() {
  const examples = document.querySelectorAll(".fleet__example, .fleet__example--active");
  const elements = document.querySelectorAll(".fleet__advantages-element, .fleet__advantages-element--active");
  const texts = document.querySelectorAll(".fleet__advantages-text, .fleet__advantages-text--active");
  const headers = document.querySelectorAll(".fleet__advantages-header, .fleet__advantages-header--active");
  const cities = document.querySelectorAll(".fleet__advantages-city--active, .fleet__advantages-city");
  const switcher = document.querySelector(".fleet__advantages-city-switch");
  const tables = document.querySelectorAll(".fleet__advantages-table--active, .fleet__advantages-table");
  // choppers section
  examples.forEach((example) => {
    example.addEventListener("click", function () {
      examples.forEach((el) => {
        if (el.classList.contains("fleet__example--active")) {
          el.classList.replace("fleet__example--active", "fleet__example");
          el.querySelector(".fleet__example-header--active")?.classList.replace("fleet__example-header--active", "fleet__example-header");
          el.querySelector(".fleet__example-index--active")?.classList.replace("fleet__example-index--active", "fleet__example-index");
          el.querySelector(".fleet__example-text--active")?.classList.replace("fleet__example-text--active", "fleet__example-text");
        }
      });

      if (this.classList.contains("fleet__example")) {
        this.classList.replace("fleet__example", "fleet__example--active");
        this.querySelector(".fleet__example-header")?.classList.replace("fleet__example-header", "fleet__example-header--active");
        this.querySelector(".fleet__example-index")?.classList.replace("fleet__example-index", "fleet__example-index--active");
        this.querySelector(".fleet__example-text")?.classList.replace("fleet__example-text", "fleet__example-text--active");
      } else {
        this.classList.replace("fleet__example--active", "fleet__example");
        this.querySelector(".fleet__example-header--active")?.classList.replace("fleet__example-header--active", "fleet__example-header");
        this.querySelector(".fleet__example-index--active")?.classList.replace("fleet__example-index--active", "fleet__example-index");
        this.querySelector(".fleet__example-text--active")?.classList.replace("fleet__example-text--active", "fleet__example-text");
      }
    });
  });
  // below choppers section
  elements.forEach((element, index) => {
    element.addEventListener("click", function () {
      elements.forEach((el) => el.classList.replace("fleet__advantages-element--active", "fleet__advantages-element"));
      texts.forEach((text) => text.classList.replace("fleet__advantages-text--active", "fleet__advantages-text"));
      headers.forEach((header) => header.classList.replace("fleet__advantages-header--active", "fleet__advantages-header"));

      this.classList.replace("fleet__advantages-element", "fleet__advantages-element--active");

      const header = this.querySelector(".fleet__advantages-header");
      if (header) {
        header.classList.replace("fleet__advantages-header", "fleet__advantages-header--active");
      }

      if (texts[index]) {
        texts[index].classList.replace("fleet__advantages-text", "fleet__advantages-text--active");
      }
    });
  });
  // cities section
  cities.forEach((city, index) => {
    city.addEventListener("click", function () {
      if (!this.classList.contains("fleet__advantages-city--active")) {
        cities.forEach((c) => c.classList.replace("fleet__advantages-city--active", "fleet__advantages-city"));
        this.classList.replace("fleet__advantages-city", "fleet__advantages-city--active");
        if (this.textContent.trim() === "Warszawa") {
          switcher.style.left = "calc(50% - 3px)";
        } else {
          switcher.style.left = "3px";
        }

        tables.forEach((table, tableIndex) => {
          if (tableIndex === index) {
            table.classList.replace("fleet__advantages-table", "fleet__advantages-table--active");
          } else {
            table.classList.replace("fleet__advantages-table--active", "fleet__advantages-table");
          }
        });
      }
    });
  });
}

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";


export function initFleetSwiper() {
  return new Swiper(".fleet__examples", {
    modules: [Pagination],
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination-examples",
      clickable: true,
    },
  });
}