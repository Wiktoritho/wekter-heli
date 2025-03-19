export function handleHeaderSwitcher() {
    const switcher = document.querySelector(".header__button--slider");
    const mobileSwitcher = document.querySelector(".header__mobile-button--slider");
    const headerButtons = document.querySelectorAll(".header__button--active, .header__button");
    const mobileHeaderButtons = document.querySelectorAll(".header__mobile-button--active, .header__mobile-button");
    const offersButtons = document.querySelectorAll(".offers__buttons button");
    const pricesButtons = document.querySelectorAll(".prices__buttons button");
    const swiper = document.querySelector(".swiper");
  
    headerButtons.forEach((button) => {
      button.addEventListener("click", function () {
        if (!this.classList.contains("header__button--active")) {
          headerButtons.forEach((c) => c.classList.replace("header__button--active", "header__button"));
          this.classList.replace("header__button", "header__button--active");
          if (this.textContent.trim() === "Loty biznesowe") {
            switcher.style.left = "50%";
            offersButtons[1]?.click();
            pricesButtons[1]?.click();
            // console.log(Object.keys(swiper));
            swiper.swiper.slideNext()
            
          } else {
            switcher.style.left = "0px";
            offersButtons[0]?.click();
            pricesButtons[0]?.click();
            swiper.swiper.slidePrev();
          }
        }
      });
    });

    mobileHeaderButtons.forEach((button) => {
      button.addEventListener("click", function () {
        if (!this.classList.contains("header__mobile-button--active")) {
          mobileHeaderButtons.forEach((c) => c.classList.replace("header__mobile-button--active", "header__mobile-button"));
          this.classList.replace("header__mobile-button", "header__mobile-button--active");
          if (this.textContent.trim() === "Loty biznesowe") {
            mobileSwitcher.style.left = "50%";
            offersButtons[1]?.click();
            pricesButtons[1]?.click();
          } else {
            mobileSwitcher.style.left = "0px";
            offersButtons[0]?.click();
            pricesButtons[0]?.click();
          }
        }
      });
    });
}

export function handleMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const headerMobile = document.querySelector(".header__mobile");
    const heliportsList = document.querySelector(".header__mobile-heliports");
    const offersList = document.querySelector(".header__mobile-offer");
    const main = document.querySelector(".header__mobile-top-main");
    let isMenuShown = false;

    function handleMenuShow() {
      isMenuShown = !isMenuShown;
      if (isMenuShown) {
        headerMobile.style.transform = "translateX(0%)";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "15px";
      } else {
        main.style.transform = "translateX(0%)";
        heliportsList.style.transform = "translateX(112%)";
        offersList.style.transform = "translateX(112%)";
        setTimeout(() => {
          headerMobile.style.transform = "translateX(100%)";
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";
        }, 100);
      }
    }

    menuIcon.addEventListener("click", handleMenuShow);
    closeIcon.addEventListener("click", handleMenuShow);
}

export function handleMobileMenu() {
    const main = document.querySelector(".header__mobile-top-main");
    const offerButton = document.getElementById("mobile-offer");
    const heliportButton = document.getElementById("mobile-heliports");
    const offerButtonClose = document.getElementById("mobile-offer-close");
    const heliportsButtonClose = document.getElementById("mobile-heliports-close");
    const heliportsList = document.querySelector(".header__mobile-heliports");
    const offersList = document.querySelector(".header__mobile-offer");

    offerButton.addEventListener("click", function () {
      main.style.transform = "translateX(-100%)";
      heliportsList.style.transform = "translateX(224%)";
    });
    offerButtonClose.addEventListener("click", function (event) {
      event.stopPropagation();
      main.style.transform = "translateX(0%)";
      heliportsList.style.transform = "translateX(112%)";
    });
    heliportsButtonClose.addEventListener("click", function (event) {
      event.stopPropagation();
      main.style.transform = "translateX(0%)";
      offersList.style.transform = "translateX(112%)";
    });
    heliportButton.addEventListener("click", function () {
      main.style.transform = "translateX(-100%)";
      offersList.style.transform = "translateX(224%)";
    });
}
