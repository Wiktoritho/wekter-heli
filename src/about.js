import { initBanner } from "./scripts/baner";
import aboutBaner from "./assets/images/about-baner.png"

document.addEventListener("DOMContentLoaded", () => {
  initBanner({
    image: aboutBaner,
    title: "Wekter Helicopters to przede wszystkim spełnione marzenia",
    text: "Nie tylko naszych pasażerów, ale również wszystkich nas – członków załogi.",
    from: "O nas",
    titleVersion: "small",
    version: "high",
    hideButtonsFromHeader: true,
    
  });
});
