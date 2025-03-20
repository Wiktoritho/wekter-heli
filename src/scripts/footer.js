export function handleFooterLists() {
  const headers = document.querySelectorAll(".footer__list h3");
  if (!headers.length) return;

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const ul = this.nextElementSibling;
      if (ul && ul.tagName.toLowerCase() === "ul") {
        ul.style.display = ul.style.display === "block" ? "none" : "block";
      }
    });
  });
}