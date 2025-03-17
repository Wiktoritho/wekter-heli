import { initSwiper } from "./scripts/swiper";
import { initOffers } from "./scripts/offers";
import { initFleet } from "./scripts/fleet";
import { initPricesSwiper } from "./scripts/prices-swiper";
import { ringProgress } from "./scripts/prices-swiper";
import { handlePrices } from "./scripts/prices";
import { handleHeaderSwitcher } from "./scripts/header";
import { handleMenu } from "./scripts/header";
import { initFleetSwiper } from "./scripts/fleet";
import { initLocalizationsSwiper } from "./scripts/prices-swiper";
import { initChoppersSwiper } from "./scripts/prices-swiper";
import { handleFooterLists } from "./scripts/footer";
import { handleMobileMenu } from "./scripts/header";

document.addEventListener("DOMContentLoaded", () => {
  // loadComponent("/wekter-heli/components/header.html", "header-container");
  initSwiper();
  initOffers();
  initFleet();
  initPricesSwiper();
  ringProgress();
  handlePrices();
  handleHeaderSwitcher();
  handleMenu();
  initFleetSwiper();
  initLocalizationsSwiper();
  initChoppersSwiper();
  handleFooterLists();
  handleMobileMenu();
  // loadComponent("/wekter-heli/components/footer.html", "footer-container");
});

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

let startedWidth = window.innerWidth;

window.addEventListener(
  "resize",
  debounce(() => {
    const breakpoint = 900;
    if (startedWidth > breakpoint && window.innerWidth < breakpoint) {
      initPricesSwiper();
      initFleetSwiper();
      initLocalizationsSwiper();
      initChoppersSwiper();
      initOffers();
      startedWidth = window.innerWidth;
    } else if (startedWidth <= breakpoint && window.innerWidth >= breakpoint) {
      initPricesSwiper();
      initFleetSwiper();
      initLocalizationsSwiper();
      initChoppersSwiper();
      initOffers();
      startedWidth = window.innerWidth;
    }
  }, 200)
);

async function loadComponent(url, elementId) {
  const container = document.getElementById(elementId);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.status);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}
