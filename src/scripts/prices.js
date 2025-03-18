export function handlePrices() {
  const buttons = document.querySelectorAll(".prices__buttons button");
  const headers = document.querySelectorAll(".prices__header--big");
  const smallHeaders = document.querySelectorAll(".prices__header--small");
  const choppers = document.querySelectorAll(".prices__chopper");
  const swiperSection = document.querySelector(".prices__swiper");
  const localizations = document.querySelectorAll(".prices__localization");
  const pricesSwiper = document.querySelector(".prices__localizations .swiper-wrapper");
  const pricesSwiperPagination = document.querySelector(".swiper-pagination-localizations");
  const text = document.querySelector(".prices__header-text");
  const businessSection = document.querySelector(".prices__business");
  const choppersSwiper = document.querySelector(".prices__swiper-choppers");

  function setDisplay(elements, displayValue) {
    elements.forEach((el) => {
      el.style.display = displayValue;
    });
  }

  function changeHeaders(index) {
    const headersText = [
      { big: "Nasze heliporty to komfortowe warunki dla śmigłowców i ich pasażerów", small: "Lokalizacje heliportów" },
      { big: "Kup udział w śmigłowcu i oszczędzaj na każdej godzinie spędzonej w powietrzu", small: "Oferta dla firm" }
    ];

    headers[1].textContent = headersText[index].big;
    smallHeaders[1].textContent = headersText[index].small;
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("prices__button--blue");
        btn.classList.add("prices__button--white");
      });

      button.classList.remove("prices__button--white");
      button.classList.add("prices__button--blue");

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
