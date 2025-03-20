export function animateMainText() {
  const lines = document.querySelectorAll(".line");

  function checkVisibility() {
    lines.forEach((line) => {
      const rect = line.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight - 50) {
        line.classList.add("visible");
      } else if (rect.bottom > window.innerHeight - 50) {
        line.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
}