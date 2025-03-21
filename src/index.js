import { initOffers } from "./scripts/offers";
import { initFleet } from "./scripts/fleet";
import { handlePrices, changeChoppers, ringProgress } from "./scripts/prices";
import { handleHeaderSwitcher, handleMenu, handleMobileMenu } from "./scripts/header";
import { initAllSwipers, changeSwiperSlides } from "./scripts/swipers";
import { handleFooterLists } from "./scripts/footer";
import { animateMainText } from "./scripts/animations";
import { debounce } from "./scripts/utils";



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
  changeSwiperSlides();
  animateMainText();

  window.addEventListener(
    "resize",
    debounce(() => handleResize(), 200)
  );

  
});

function handleResize() {
  const breakpoint = 900;
  if ((startedWidth > breakpoint && window.innerWidth < breakpoint) || (startedWidth <= breakpoint && window.innerWidth >= breakpoint)) {
    initAllSwipers();
    initOffers();
    changeChoppers();
    startedWidth = window.innerWidth;
  }
}
