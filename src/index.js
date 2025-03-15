import { initSwiper } from "./scripts/swiper";
import { initOffers } from "./scripts/offers";
import { initFleet } from "./scripts/fleet";
import { initPricesSwiper } from "./scripts/prices-swiper";
import { ringProgress } from "./scripts/prices-swiper";
import { handlePrices } from "./scripts/prices";

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/header.html", "header-container");
  initSwiper();
  initOffers();
  initFleet();
  initPricesSwiper();
  ringProgress();
  handlePrices();
  loadComponent("components/footer.html", "footer-container");
});

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
