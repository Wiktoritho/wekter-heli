import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CountUp } from "countup.js";

gsap.registerPlugin(ScrollTrigger);

export function animateMainText() {
  const lines = document.querySelectorAll(".line");
  const statisticsSection = document.querySelector(".introduction__statistics");
  observer.observe(statisticsSection);

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
  toggleMenuScroll();
}

function toggleMenuScroll() {
  const panels = document.querySelectorAll(".section--animated");
  const header = document.querySelector(".header");

  gsap.utils.toArray(panels).forEach((panel) => {
    gsap.fromTo(
      panel,
      { y: "15vh" },
      {
        y: "0vh",
        scrollTrigger: {
          trigger: panel,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  });

  ScrollTrigger.create({
    trigger: ".swiper",
    start: "bottom top",
    end: "top top",
    onEnter: () => {
      if (window.innerWidth > 900) {
        gsap.set(header, { position: "fixed", top: 0, backgroundColor: "white", marginTop: "0px", paddingBlock: "40px 32px", color: "black" });
        gsap.set(".header__switch", { color: "white" });
        gsap.set(".header__nav > a img", { filter: "invert(1)" });
        gsap.set(".header__list > li > span img", { filter: "invert(1)" });
        gsap.set(".header__buttons div img:last-of-type", { filter: "invert(1)" });
        gsap.set(".header__buttons img:nth-of-type(2)", { filter: "invert(1)" });
        gsap.set("#menu-icon", { filter: "invert(1)" });
        gsap.fromTo(header, { y: "-100%" }, { y: "0%", duration: 0.3, ease: "power2.out" });
      } else {
        gsap.set(header, { position: "fixed", top: 0, backgroundColor: "white", marginTop: "0px", paddingBlock: "20px", color: "black" });
        gsap.set(".header__mobile-switch", { color: "white" });
        gsap.set(".header__mobile-languages", { color: "white" });
        gsap.set(".header__nav > a img", { filter: "invert(1)" });
        gsap.set(".header__list > li > span img", { filter: "invert(1)" });
        gsap.set(".header__buttons div img:last-of-type", { filter: "invert(1)" });
        gsap.set(".header__buttons img:nth-of-type(2)", { filter: "invert(1)" });
        gsap.set("#menu-icon", { filter: "invert(1)" });
        gsap.fromTo(header, { y: "-100%" }, { y: "0%", duration: 0.3, ease: "power2.out" });
      }
    },
    onLeaveBack: () => {
      if (window.innerWidth > 900) {
        gsap.set(header, { position: "absolute", top: 0, backgroundColor: "transparent", marginTop: "40px", paddingBlock: "0px", overflow: "visible", color: "white" });
        gsap.set(".header__nav > a img", { filter: "invert(0)" });
        gsap.set(".header__list > li > span img", { filter: "invert(0)" });
        gsap.set(".header__buttons div img:last-of-type", { filter: "invert(0)" });
        gsap.set(".header__buttons img:nth-of-type(2)", { filter: "invert(0)" });
        gsap.set("#menu-icon", { filter: "invert(0)" });
        gsap.to(header, { y: "0%", duration: 0.3, ease: "power2.in" });
      } else {
        gsap.set(header, { position: "absolute", top: 0, backgroundColor: "transparent", marginTop: "0px", paddingBlock: "20px", color: "white", overflow: "hidden", height: "auto" });
        gsap.set(".header__mobile", { height: "calc(100vh + 20px)" });
        gsap.set(".header__nav > a img", { filter: "invert(0)" });
        gsap.set(".header__list > li > span img", { filter: "invert(0)" });
        gsap.set(".header__buttons div img:last-of-type", { filter: "invert(0)" });
        gsap.set(".header__buttons img:nth-of-type(2)", { filter: "invert(0)" });
        gsap.set("#menu-icon", { filter: "invert(0)" });
        gsap.to(header, { y: "0%", duration: 0.3, ease: "power2.in" });
      }
    },
  });
}

document.addEventListener("scroll", function () {
  const photoTextImage = document.querySelector(".photo-text__desktop-image");
  const scrollPosition = window.scrollY;

  const parallaxSpeed = -0.2;

  photoTextImage.style.transform = `translateY(${scrollPosition * parallaxSpeed + 400}px) translateZ(0px)`;
});

function startCounting() {
  const counters = document.querySelectorAll(".introduction__statistics-block-text p:first-child");

  counters.forEach((counter, index) => {
    const countText = counter.textContent.trim();
    const countTo = parseInt(countText.replace(/[^0-9]/g, ""), 10);

    const countUp = new CountUp(counter, countTo);

    countUp.start(() => {
      if (index !== 1) {
        counter.textContent += "+";
      }
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);
