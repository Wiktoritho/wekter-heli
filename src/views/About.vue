<template>
  <Header></Header>
  <Baner
    image="/images/about-baner.png"
    title="Wekter Helicopters to przede wszystkim spełnione marzenia"
    text="Nie tylko naszych pasażerów, ale również wszystkich nas – członków załogi."
    :from="['O nas']"
    titleVersion="small"
    version="high"
    :gap="16"></Baner>
  <section class="section--black section--black--padding">
    <h4 class="headers headers--small headers--gray">Nasza misja</h4>
    <p class="section--black__text">
      Lot helikopterem to przestrzeń, wolność, piękne widoki i niemal nieograniczone możliwości przemieszczania się w dowolnym kierunku, w którym tylko poniosą nas oczy.
    </p>
    <div class="section--black__gallery">
      <img src="/images/gallery1.png" alt="Gallery image" />
      <img src="/images/gallery2.png" alt="Gallery image" />
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Baner from "../components/baner.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";

export default {
  components: {
    Header,
    Footer,
    Baner,
  },
};
</script>
