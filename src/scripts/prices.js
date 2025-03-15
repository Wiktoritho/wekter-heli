export function handlePrices() {
    const buttons = document.querySelectorAll(".prices__buttons button");
    const headers = document.querySelectorAll(".prices__header--big");
    const choppers = document.querySelectorAll(".prices__chopper");
    const swiperSection = document.querySelector(".prices__swiper");
    const localizations = document.querySelectorAll(".prices__localization");
    const text = document.querySelector(".prices__header-text");
    const businessSection = document.querySelector(".prices__business");

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
                localizations.forEach((el) => {
                    el.style.display = "flex"
                })
                choppers.forEach((el) => {
                    el.style.display = "none"
                })
                headers[1].textContent = "Nasze heliporty to komfortowe warunki dla śmigłowców i ich pasażerów"
                text.style.display = "none"
                businessSection.style.display = "none";
            } else if (index === 1) {
                swiperSection.style.display = "none";
                text.style.display = "block";
                localizations.forEach((el) => {
                    el.style.display = "none"
                })
                choppers.forEach((el) => {
                    el.style.display = "flex"
                })
                headers[index].textContent = "Kup udział w śmigłowcu i oszczędzaj na każdej godzinie spędzonej w powietrzu"
                businessSection.style.display = "block";
            }
        });
    });
}
