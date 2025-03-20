export function initBanner(data) {
  const banner = document.querySelector(".baner");
  const headerSwitch = document.querySelector(".header__switch");
  const headerElements = document.querySelectorAll(".header__list > li");

  if (banner) {
    const bannerHTML = `
        <img class="baner__image" src="${data.image}" alt="Baner"/>
        <div class="baner__content baner__content--${data.version}">
            <p class="baner__link">
                <a href="/">Strona główna</a>
                <img src="/wekter-heli/src/assets/icons/arrow-side-header.svg" alt="Arrow"/>
                <a>${data.from}</a>
            </p>
            <h2 class="baner__title">${data.title}</h2>
            <p class="baner__text">${data.text}</p>
        </div>
        `;
    banner.innerHTML = bannerHTML;
  }

  if (data.hideButtonsFromHeader) {
    headerSwitch.style.display = "none";
  }

  headerElements.forEach((el) => {
    if (el.innerText.trim() === data.from) {
      el.classList.add("show-before")
    }
    
  })

}
