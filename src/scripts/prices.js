export function handlePrices() {
  const buttons = document.querySelectorAll(".prices__buttons button");
  const headers = document.querySelectorAll(".prices .headers--big");
  const smallHeaders = document.querySelectorAll(".prices .headers--small");
  const choppers = document.querySelectorAll(".prices__chopper");
  const swiperSection = document.querySelector(".prices__swiper");
  const localizations = document.querySelectorAll(".prices__localization");
  const pricesSwiper = document.querySelector(".prices__localizations .swiper-wrapper");
  const pricesSwiperPagination = document.querySelector(".swiper-pagination-localizations");
  const text = document.querySelector(".prices__header-text");
  const businessSection = document.querySelector(".prices__business");
  const choppersSwiper = document.querySelector(".prices__swiper-choppers");
  const headerButtons = document.querySelectorAll(".header__button--active, .header__button");
  const mobileHeaderButtons = document.querySelectorAll(".header__mobile-button--active, .header__mobile-button");

  function setDisplay(elements, displayValue) {
    if (elements) {
      elements.forEach((el) => {
        el.style.display = displayValue;
      });
    }
  }

  function changeHeaders(index) {
    const headersText = [
      { big: "Nasze heliporty to komfortowe warunki dla śmigłowców i ich pasażerów", small: "Lokalizacje heliportów" },
      { big: "Kup udział w śmigłowcu i oszczędzaj na każdej godzinie spędzonej w powietrzu", small: "Oferta dla firm" },
    ];
    if (headersText) {
      headers[1].textContent = headersText[index].big;
      smallHeaders[1].textContent = headersText[index].small;
    }
  }
  if (buttons) {
    buttons.forEach((button, index) => {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => {
          btn.classList.remove("button", "button--blue", "button--medium", "button--fonted");
          btn.classList.add("button", "button--white", "button--medium");
        });

        button.classList.remove("button", "button--white", "button--medium");
        button.classList.add("button", "button--blue", "button--medium", "button--fonted");

        if (this.textContent.trim() === "Loty biznesowe") {
          headerButtons[1]?.click();
          mobileHeaderButtons[1].click();
        } else {
          headerButtons[0]?.click();
          mobileHeaderButtons[0]?.click();
        }

        if (index === 0) {
          swiperSection.style.display = "block";
          choppersSwiper.style.display = "none";
          setDisplay(choppers, "none");

          if (window.innerWidth <= 900) {
            pricesSwiper.style.display = "flex";
            pricesSwiperPagination.style.display = "block";
          } else {
            setDisplay(localizations, "flex");
          }
          text.style.display = "none";
          businessSection.style.display = "none";
        } else if (index === 1) {
          swiperSection.style.display = "none";
          text.style.display = "block";
          setDisplay(localizations, "none");
          pricesSwiper.style.display = "none";
          pricesSwiperPagination.style.display = "none";

          if (window.innerWidth <= 900) {
            choppersSwiper.style.display = "flex";
          } else {
            setDisplay(choppers, "flex");
          }

          businessSection.style.display = "block";
        }

        changeHeaders(index);
      });
    });
  }
}

export function changeChoppers() {
  const choppersSwiper = document.querySelector(".prices__swiper-choppers");
  const choppers = document.querySelectorAll(".prices__chopper");
  const buttons = document.querySelectorAll(".prices__buttons button");

  if (window.innerWidth <= 900) {
    choppersSwiper.style.display = "flex";
    choppers.forEach((slide) => {
      slide.style.display = "none";
    });
  } else if (window.innerWidth > 900 && buttons[1].classList.value.includes("button--blue")) {
    choppersSwiper.style.display = "none";
    choppers.forEach((slide) => {
      slide.style.display = "flex";
    });
  }
}

export function ringProgress() {
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    const valueElement = slide.querySelector(".prices__ring-value");
    const ringOutside = slide.querySelector(".prices__ring--outside");

    if (!valueElement || !ringOutside) return;

    const minutes = parseInt(valueElement.textContent.trim().split(":")[1] || "0", 10);
    const degrees = (minutes / 60) * 360;

    ringOutside.style.background = `conic-gradient(#3B5EAB ${degrees}deg, #ddd ${degrees}deg)`;
  });
}
