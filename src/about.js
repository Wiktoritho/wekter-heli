import { initBanner } from "./scripts/baner";

document.addEventListener("DOMContentLoaded", () => {
  initBanner({
    image: "/wekter-heli/src/assets/images/about-baner.png",
    title: "Wekter Helicopters to przede wszystkim spełnione marzenia",
    text: "Nie tylko naszych pasażerów, ale również wszystkich nas – członków załogi.",
    from: "O nas",
    version: "high",
    hideButtonsFromHeader: true,
    
  });
});
