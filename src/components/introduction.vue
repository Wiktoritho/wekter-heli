<template>
  <section class="introduction">
    <h4 class="headers headers--small headers--gray headers--padding-big">loty helikopterem</h4>
    <h2 class="headers headers--big headers--margin-big">Niezapomniane Loty helikopterem - komfort, bezpieczeństwo i profesjonalizm</h2>
    <div class="introduction__container">
      <div class="introduction__informations">
        <div class="introduction__text-content">
          <p class="introduction__header">Każdy lot naszymi śmigłowcami to wyjątkowe doświadczenie, a my dbamy, żeby zostało w pamięć na dłużej.</p>
          <p class="introduction__text">
            Latamy helikopterami Robinson R44, na pokładzie których w komfortowych warunkach oprócz pilota podróżować mogą aż 3 osoby. Latamy wszędzie tam, gdzie pozwala nam na to prawo lotnicze.
            <br />
            <br />
            Począwszy od działu obsługi, przez personel naziemny aż po pilotów – możesz liczyć na zawsze najwyższą jakość i profesjonalizm świadczonych przez nas usług.
          </p>
          <button class="button button--blue button--long">Kup Voucher</button>
        </div>
        <div class="introduction__mosaic">
          <div class="introduction__mosaic--desktop">
            <img src="/images/mosaic1.png" alt="Mosaic" />
            <img src="/images/mosaic2.png" alt="Mosaic" />
          </div>
          <img class="introduction__mosaic--mobile" src="/images/mosaic1.png" alt="Mosaic" />
          <img class="introduction__mosaic--mobile" src="/images/mosaic2.png" alt="Mosaic" />
        </div>
      </div>
      <div class="introduction__statistics" ref="statistics">
        <div class="introduction__statistics-block">
          <div class="introduction__statistics-block-icon">
            <img src="/icons/clock.svg" alt="Clock Icon" />
          </div>
          <div class="introduction__statistics-block-text">
            <p>
              <CountTo v-if="isVisible" :startVal="0" :endVal="5000" :duration="3000"> </CountTo>
              <span v-if="isVisible">+</span>
            </p>
            <p>Wylatanych godzin</p>
          </div>
        </div>
        <div class="introduction__statistics-block">
          <div class="introduction__statistics-block-icon">
            <img src="/icons/helicopter.svg" alt="Clock Icon" />
          </div>
          <div class="introduction__statistics-block-text">
            <p>
              <CountTo v-if="isVisible" :startVal="0" :endVal="3" :duration="3000"> </CountTo>
            </p>
            <p>Lądowiska</p>
          </div>
        </div>
        <div class="introduction__statistics-block">
          <div class="introduction__statistics-block-icon">
            <img src="/icons/star.svg" alt="Clock Icon" />
          </div>
          <div class="introduction__statistics-block-text">
            <p>
              <CountTo v-if="isVisible" :startVal="0" :endVal="450" :duration="3000"> </CountTo>
              <span v-if="isVisible">+</span>
            </p>
            <p>Zadowolonych klientów</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { CountTo } from "vue3-count-to";

export default {
  components: {
    CountTo,
  },
  data() {
    return {
      isVisible: false,
    }
  },
   mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect(); 
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (this.$refs.statistics) {
      observer.observe(this.$refs.statistics);
    }
  },
};
</script>
