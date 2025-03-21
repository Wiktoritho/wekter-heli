import { initBanner } from "./scripts/baner";
import { handleBlogs } from "./scripts/handleBlogs";
import blogBaner from "./assets/images/blog-baner.png"

document.addEventListener("DOMContentLoaded", () => {
  initBanner({
    image: blogBaner,
    title: "Wszystko o lotach",
    titleVersion: 'big',
    text: "Wszystko, co musisz wiedzieć o lataniu helikopterami – od najnowszych technologii i konstrukcji po relacje z lotów, ciekawostki i porady",
    from: "Blog",
    version: "low",
    hideButtonsFromHeader: true,
  });
  handleBlogs();
});
