import { initSwiper } from "./scripts/swiper";
import { initOffers } from "./scripts/offers";

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("components/header.html", "header-container");
  initSwiper();
  initOffers();
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
