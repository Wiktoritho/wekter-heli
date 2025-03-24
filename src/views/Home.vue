<template>
  <Header showButtons="true"></Header>
  <Swiper></Swiper>
  <section class="section--black section--animated" ref="sectionAnimated">
    <h4 class="section--black__header">
      <span v-for="(text, index) in linesText" :key="index" ref="lines" class="line" v-html="text"> </span>
    </h4>
    <img class="section--black__image" src="/icons/section-vector.png" alt="Section Vector" />
  </section>
  <Introduction></Introduction>
  <section class="photo-text">
    <img
      class="photo-text__desktop-image"
      ref="parallax"
      src="/images/photo-text.png"
      alt="Helicopter pilot"
      :style="{ transform: `translateY(${scrollPosition * parallaxSpeed + 400}px) translateZ(0px)`}" />
    <img class="photo-text__mobile-image" src="/images/photo-text-mobile.png" alt="Helicopter pilot" :style="{ transform: `translateY(${scrollPosition * (parallaxSpeed/2) + 250}px) translateZ(0px)`}"/>
    <div class="photo-text__content">
      <p class="headers headers--small headers--white">Kim jesteśmy?</p>
      <p class="photo-text__text">
        Nie latamy od zawsze, ale od zawsze było to naszą pasją, która sprawiła, że spotkaliśmy się i wspólnie stworzyliśmy Wekter Helicopters, przyciągając do siebie kolejnych ludzi, którzy nie
        wyobrażają sobie życia bez latania.
      </p>
      <button class="button button--blue button--long">Więcej o nas</button>
    </div>
  </section>
  <Offers></Offers>
  <Fleet></Fleet>
  <Prices></Prices>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
import Introduction from "../components/introduction.vue";
import Offers from "../components/offers.vue";
import Swiper from "../components/swiper.vue";
import Fleet from "../components/fleet.vue";
import Prices from "../components/prices.vue";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(_ScrollTrigger);

export default {
  components: {
    Header,
    Footer,
    Swiper,
    Introduction,
    Offers,
    Fleet,
    Prices,
  },
  data() {
    return {
      linesText: [
        "Jesteśmy grupą ludzi, których połączyła wspólna pasja do latania. Lot helikopterem",
        " to <span>przestrzeń, wolność, piękne widoki</span> i niemal nieograniczone możliwości",
        " przemieszczania się. Naszym wspólnym celem jest umożliwienie każdemu możliwości",
        "<span> przeżycia takiego doświadczenia w formule “Flight Sharing”</span>",
      ],
      scrollPosition: 0,
      parallaxSpeed: -0.2,
    };
  },
  methods: {
    checkVisibility() {
      this.$refs.lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight - 50) {
          line.classList.add("visible");
        } else {
          line.classList.remove("visible");
        }
      });
    },
    parallaxPhoto() {
      this.scrollPosition = window.scrollY;
    },
    animateSections() {
      const panels = document.querySelectorAll(".section--animated");
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
    },
  },
  mounted() {
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

    window.addEventListener("scroll", this.checkVisibility);
    window.addEventListener("scroll", this.parallaxPhoto);
    this.checkVisibility();
    this.animateSections();
  },
};
</script>
