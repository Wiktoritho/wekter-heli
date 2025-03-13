import { initSwiper } from "./scripts/swiper";

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("components/header.html", "header-container");
    const swiper = initSwiper();
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
