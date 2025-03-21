export function initOffers() {
  createOfferLists();
  const buttons = document.querySelectorAll(".offers__buttons button");
  const lists = document.querySelectorAll(".offers__list");
  const headerButtons = document.querySelectorAll(".header__button--active, .header__button");
  const mobileHeaderButtons = document.querySelectorAll(".header__mobile-button--active, .header__mobile-button");
  const switcher = document.querySelector(".button--active");
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
        btn.classList.remove("button", "button--medium", "button--fonted", "button--reset");
        btn.classList.add("button", "button--white", "button--medium");
      });

      button.classList.remove("button", "button--white", "button--medium");
      button.classList.add("button", "button--medium", "button--fonted");
      setTimeout(() => {
        button.classList.add("button--reset");
      }, 200);
      if (this.textContent.trim() === "Loty biznesowe") {
        headerButtons[1]?.click();
        mobileHeaderButtons[1].click();
        switcher.style.left = "50%";
      } else {
        headerButtons[0]?.click();
        mobileHeaderButtons[0]?.click();
        switcher.style.left = "0%"
      }
      showList(lists[index]);
    });
  });
}

import LotyWidokowe from "../assets/images/loty-widokowe.png";
import SzkoleniaLicencyjne from "../assets/images/szkolenia-licencyjne.png";
import Zareczyny from "../assets/images/zareczyny.png";
import AirTaxi from "../assets/images/air-taxi.png";
import Cargo from "../assets/images/cargo.png";
import EventyIWydarzenia from "../assets/images/eventy-i-wydarzenia.png";
import Arrow from "../assets/icons/arrow-side.svg";

export function createOfferLists() {
  const offersContainer = document.querySelector(".offers__container");

  const offersData1 = [
    {
      image: LotyWidokowe,
      alt: "Loty widokowe",
      text: "Loty widokowe",
      number: ".01",
    },
    {
      image: SzkoleniaLicencyjne,
      alt: "Szkolenia Licencyjne",
      text: "Szkolenia Licencyjne",
      number: ".02",
    },
    {
      image: Zareczyny,
      alt: "Zaręczyny",
      text: "Zaręczyny",
      number: ".03",
    },
    {
      image: LotyWidokowe,
      alt: "Loty zapoznawcze",
      text: "Loty zapoznawcze",
      number: ".04",
    },
    {
      image: SzkoleniaLicencyjne,
      alt: "Loty grupowe",
      text: "Loty grupowe",
      number: ".05",
    },
  ];

  const offersData2 = [
    {
      image: AirTaxi,
      alt: "Air Taxi",
      text: "Air Taxi",
      number: ".01",
    },
    {
      image: Cargo,
      alt: "Cargo",
      text: "Cargo",
      number: ".02",
    },
    {
      image: EventyIWydarzenia,
      alt: "Eventy i Wydarzenia",
      text: "Eventy i wydarzenia",
      number: ".03",
    },
    {
      image: LotyWidokowe,
      alt: "Udziały",
      text: "Udziały",
      number: ".04",
    },
    {
      image: SzkoleniaLicencyjne,
      alt: "Fotografowanie i filmowanie",
      text: "Fotografowanie i filmowanie",
      number: ".05",
    },
  ];

  function createOfferList(offersData) {
    const offersList = document.createElement("ul");
    offersList.classList.add("offers__list");

    offersData.forEach((offer) => {
      const offerItem = document.createElement("li");
      offerItem.classList.add("offers__list-element");

      offerItem.innerHTML = `
            <div class="offers__list-image">
              <img src="${offer.image}" alt="${offer.alt}">
            </div>
            <div class="offers__list-container">
                    <div>
                        <img src="${Arrow}" alt="Arrow Right">
                    </div>
                    <p>${offer.text}</p>
                    <span>${offer.number}</span>
            </div>
        `;

      offersList.appendChild(offerItem);
    });

    return offersList;
  }

  offersContainer.appendChild(createOfferList(offersData1));
  offersContainer.appendChild(createOfferList(offersData2));
}
