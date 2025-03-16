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
        choppers.forEach((el) => {
          el.style.display = "none";
        });
        if (window.innerWidth <= 900) {
          pricesSwiper.style.display = "flex";
          pricesSwiperPagination.style.display = "block";
        } else {
          localizations.forEach((el) => {
            el.style.display = "flex";
          });
        }
        headers[1].textContent = "Nasze heliporty to komfortowe warunki dla śmigłowców i ich pasażerów";
        smallHeaders[1].textContent = "Lokalizacje heliportów";
        text.style.display = "none";
        businessSection.style.display = "none";
      } else if (index === 1) {
        swiperSection.style.display = "none";
        text.style.display = "block";
        localizations.forEach((el) => {
          el.style.display = "none";
        });
        pricesSwiper.style.display = "none";
        pricesSwiperPagination.style.display = "none";
        if (window.innerWidth <= 900) {
          choppersSwiper.style.display = "flex";
        } else {
          choppers.forEach((el) => {
            el.style.display = "flex";
          });
        }
        headers[index].textContent = "Kup udział w śmigłowcu i oszczędzaj na każdej godzinie spędzonej w powietrzu";
        smallHeaders[index].textContent = "Oferta dla firm";
        businessSection.style.display = "block";
      }
    });
  });
}
