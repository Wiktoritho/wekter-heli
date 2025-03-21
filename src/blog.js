import { initBanner } from "./scripts/baner";
import { handleBlogs } from "./scripts/handleBlogs";

document.addEventListener("DOMContentLoaded", () => {
  initBanner({
    image: '/wekter-heli/images/blog-baner.png',
    title: "Wszystko o lotach",
    titleVersion: 'big',
    text: "Wszystko, co musisz wiedzieć o lataniu helikopterami – od najnowszych technologii i konstrukcji po relacje z lotów, ciekawostki i porady",
    from: "Blog",
    version: "low",
    hideButtonsFromHeader: true,
  });
  handleBlogs();
});
