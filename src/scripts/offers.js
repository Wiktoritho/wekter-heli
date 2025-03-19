export function initOffers() {
  const buttons = document.querySelectorAll(".offers__buttons button");
  const lists = document.querySelectorAll(".offers__list");
  const headerButtons = document.querySelectorAll(".header__button--active, .header__button");
  const mobileHeaderButtons = document.querySelectorAll(".header__mobile-button--active, .header__mobile-button");
  let activeList = lists[0];
  let visibleItems = window.innerWidth <= 900 ? 5 : 3;

  function updateListVisibility(list) {
    const listItems = list.querySelectorAll(".offers__list-element");
    const showMoreButton = list.nextElementSibling;

    listItems.forEach((item, index) => {
      item.style.display = index < visibleItems ? "flex" : "none";
    });

    if (visibleItems >= listItems.length) {
      showMoreButton.style.display = "none";
    } else {
      showMoreButton.style.display = "block";
    }
  }

  function showList(list) {
    lists.forEach((l) => (l.style.display = "none"));
    document.querySelectorAll(".offers__show-more").forEach((btn) => {
      btn.style.display = "none";
    });

    list.style.display = "flex";
    activeList = list;
    visibleItems = window.innerWidth <= 900 ? 5 : 3;
    updateListVisibility(activeList);
  }

  lists.forEach((list, index) => {
    if (index !== 0) list.style.display = "none";
    if (!list.nextElementSibling || !list.nextElementSibling.classList.contains("offers__show-more")) {
      const showMoreButton = document.createElement("p");
      showMoreButton.textContent = "Pokaż więcej";
      showMoreButton.classList.add("offers__show-more");
      showMoreButton.style.display = index === 0 ? "block" : "none";

      list.after(showMoreButton);
      showMoreButton.addEventListener("click", () => {
        visibleItems += 3;
        updateListVisibility(activeList);
      });
    }
  });

  updateListVisibility(activeList);

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => {
        btn.classList.remove("offers__button--blue");
        btn.classList.add("offers__button--white");
      });
      
      button.classList.remove("offers__button--white");
      button.classList.add("offers__button--blue");
      if (this.textContent.trim() === "Loty biznesowe") {
        headerButtons[1]?.click();
        mobileHeaderButtons[1].click();
      } else {
        headerButtons[0]?.click();
        mobileHeaderButtons[0]?.click();
      }
      showList(lists[index]);
    });
  });
}
