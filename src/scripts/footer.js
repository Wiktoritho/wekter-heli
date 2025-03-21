export function handleFooterLists() {
  const headers = document.querySelectorAll(".footer__list h3");
  const lists = document.querySelectorAll(".footer__list");
  
  if (!headers.length) return;

  headers.forEach((header, index) => {
    header.addEventListener("click", function () {
      const ul = this.nextElementSibling;
      if (ul && ul.tagName.toLowerCase() === "ul") {
        if (index === lists.length - 2) {
          lists[index].style.height = lists[index].style.height === "400px" ? "67px" : "400px"
        } else {
          lists[index].style.height = lists[index].style.height === "200px" ? "67px" : "200px"
        }
      }
    });
  });
}