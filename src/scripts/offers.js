export function initOffers() {
  const buttons = document.querySelectorAll(".offers__buttons button");
  const lists = document.querySelectorAll(".offers__list");
  let activeList = lists[0];
  let visibleItems = 3;

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
    visibleItems = 3;
    updateListVisibility(activeList);
  }

  lists.forEach((list, index) => {
    if (index !== 0) list.style.display = "none";
    const showMoreButton = document.createElement("p");
    showMoreButton.textContent = "Pokaż więcej";
    showMoreButton.classList.add("offers__show-more");
    showMoreButton.style.display = index === 0 ? "block" : "none";

    list.after(showMoreButton);
    showMoreButton.addEventListener("click", () => {
      visibleItems += 3;
      updateListVisibility(activeList);
    });
  });

  updateListVisibility(activeList);

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showList(lists[index]);
    });
  });
}
