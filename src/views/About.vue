<template>
  <Header></Header>
  <Baner
    image="/images/about-baner.png"
    title="Wekter Helicopters to przede wszystkim spełnione marzenia"
    text="Nie tylko naszych pasażerów, ale również wszystkich nas - członków załogi."
    :from="['O nas']"
    titleVersion="small"
    version="high"
    :gap="16"
    :linkTo="'/o-nas'"></Baner>
  <section class="section--black section--black--padding section--black--bg-black">
    <h4 class="headers headers--small headers--gray">Nasza misja</h4>
    <p class="section--black__text">
      Lot helikopterem to przestrzeń, wolność, piękne widoki i niemal nieograniczone możliwości przemieszczania się w dowolnym kierunku, w którym tylko poniosą nas oczy.
    </p>
    <div class="section--black__gallery">
      <img src="/images/gallery1.png" alt="Gallery image" />
      <img src="/images/gallery2.png" alt="Gallery image" />
    </div>
    <p class="section--black__text--normal">
      <span>Naszym wspólnym celem</span> jest umożliwienie<br />
      każdemu możliwości przeżycia takiego<br />
      doświadczenia w formule <span>„Flight Sharing”.</span>
    </p>
  </section>
  <section class="about">
    <div class="about__values">
      <div class="about__values-texts">
        <h4 class="headers headers--small headers--gray headers--left">Nasze wartości</h4>
        <h3 class="about__values-header">Nie latamy od zawsze, ale od zawsze było to naszą pasją</h3>
        <p class="about__values-text">
          Napędzają nas Wasze uśmiechy, momenty “wow” i te wszystkie niezapomniane chwile oraz widoki, które wspólnie doświadczamy na pokładzie naszych śmigłowców. Dbamy o to, żeby każdy lot był
          profesjonalnie przygotowany oraz bezpieczny.
        </p>
      </div>
      <div class="about__values-content">
        <div class="about__values-tile" v-for="(tile, index) in tiles" :key="index">
          <div class="about__values-icon">
            <img :src="tile.icon" :alt="tile.title" />
          </div>
          <p class="about__values-top-text">{{ tile.title }}</p>
          <p class="about__values-bottom-text">{{ tile.text }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="about">
    <AboutUsChoppers></AboutUsChoppers>
  </section>
  <section class="about__pilots">
    <AboutUsPilots></AboutUsPilots>
  </section>
  <section class="about__opinions">
    <Opinions></Opinions>
  </section>
  <section class="about">
    <Faq></Faq>
  </section>
  <Footer></Footer>
</template>

<script>
import Baner from "../components/baner.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
import AboutUsChoppers from "../components/aboutUsChoppers.vue";
import AboutUsPilots from "../components/aboutUsPilots.vue";
import Opinions from "../components/opinions.vue";
import Faq from "../components/faq.vue";

export default {
  components: {
    Header,
    Footer,
    Baner,
    AboutUsChoppers,
    AboutUsPilots,
    Opinions,
    Faq
  },
  data() {
    return {
      tiles: [
        {
          icon: "/icons/profesional.svg",
          title: "Profesjonalizm",
          text: "Doświadczeni piloci, precyzja i punktualność w każdym locie.",
        },
        {
          icon: "/icons/happy.svg",
          title: "Zadowolenie klientów",
          text: "Indywidualne podejście i najwyższa jakość obsługi.",
        },
        {
          icon: "/icons/security-check.svg",
          title: "Bezpieczeństwo",
          text: "Nowoczesne technologie i procedury dla pełnej ochrony.",
        },
        {
          icon: "/icons/special-times.svg",
          title: "Wyjątkowe chwile",
          text: "Spektakularne widoki i emocje, które zostają na długo.",
        },
      ],
    };
  },
};
</script>
