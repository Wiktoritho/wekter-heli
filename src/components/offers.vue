<template>
  <section class="offers">
    <div class="offers__container">
      <h4 class="headers headers--small headers--gray headers--padding-small">nasza oferta</h4>
      <h2 class="headers headers--big headers--margin-medium">Oferujemy loty widokowe, usługę air taxi oraz wiele więcej</h2>
      <div class="offers__buttons">
        <button
          @click="setSwitch('Loty widokowe')"
          :class="{
            'button button--medium button--fonted button--reset': switchValue === 'Loty widokowe',
            'button button--white button--medium': switchValue !== 'Loty widokowe',
          }">
          Loty widokowe
        </button>
        <button
          @click="setSwitch('Loty biznesowe')"
          :class="{
            'button button--medium button--fonted button--reset': switchValue === 'Loty biznesowe',
            'button button--white button--medium': switchValue !== 'Loty biznesowe',
          }">
          Loty biznesowe
        </button>
        <div class="button--active" :style="{ left: switchValue === 'Loty biznesowe' ? '50%' : '0%' }"></div>
      </div>
      <ul v-if="switchValue === 'Loty widokowe'" class="offers__list">
        <li class="offers__list-element" v-for="(offer, index) in offersList1Sliced" :key="index">
          <div class="offers__list-image">
            <img :src="offer.image" :alt="offer.alt" />
          </div>
          <div class="offers__list-container">
            <div>
              <img src="/src/assets/icons/arrow-side.svg" alt="Arrow Right" />
            </div>
            <p>{{ offer.text }}</p>
            <span>{{ offer.number }}</span>
          </div>
        </li>
      </ul>
      <p v-if="switchValue === 'Loty widokowe' && offersList1Sliced.length !== offersList1.length" class="offers__show-more" @click="offersList1Sliced = offersList1">Pokaż więcej</p>
      <ul v-if="switchValue === 'Loty biznesowe'" class="offers__list">
        <li class="offers__list-element" v-for="(offer, index2) in offersList2Sliced" :key="index2">
          <div class="offers__list-image">
            <img :src="offer.image" :alt="offer.alt" />
          </div>
          <div class="offers__list-container">
            <div>
              <img src="/src/assets/icons/arrow-side.svg" alt="Arrow Right" />
            </div>
            <p>{{ offer.text }}</p>
            <span>{{ offer.number }}</span>
          </div>
        </li>
      </ul>
      <p v-if="switchValue === 'Loty biznesowe' && offersList2Sliced.length !== offersList2.length" class="offers__show-more" @click="offersList2Sliced = offersList2">Pokaż więcej</p>
    </div>
  </section>
</template>

<script>
import { useStore } from "../store";

export default {
  computed: {
    switchValue() {
      return useStore().switch;
    },
  },
  data() {
    return {
      offersList1: [
        {
          image: "/src/assets/images/loty-widokowe.png",
          alt: "Loty widokowe",
          text: "Loty widokowe",
          number: ".01",
        },
        {
          image: "/src/assets/images/szkolenia-licencyjne.png",
          alt: "Szkolenia Licencyjne",
          text: "Szkolenia Licencyjne",
          number: ".02",
        },
        {
          image: "/src/assets/images/zareczyny.png",
          alt: "Zaręczyny",
          text: "Zaręczyny",
          number: ".03",
        },
        {
          image: "/src/assets/images/loty-widokowe.png",
          alt: "Loty zapoznawcze",
          text: "Loty zapoznawcze",
          number: ".04",
        },
        {
          image: "/src/assets/images/szkolenia-licencyjne.png",
          alt: "Loty grupowe",
          text: "Loty grupowe",
          number: ".05",
        },
      ],
      offersList2: [
        {
          image: "/src/assets/images/air-taxi.png",
          alt: "Air Taxi",
          text: "Air Taxi",
          number: ".01",
        },
        {
          image: "/src/assets/images/cargo.png",
          alt: "Cargo",
          text: "Cargo",
          number: ".02",
        },
        {
          image: "/src/assets/images/eventy-i-wydarzenia.png",
          alt: "Eventy i Wydarzenia",
          text: "Eventy i wydarzenia",
          number: ".03",
        },
        {
          image: "/src/assets/images/loty-widokowe.png",
          alt: "Udziały",
          text: "Udziały",
          number: ".04",
        },
        {
          image: "/src/assets/images/szkolenia-licencyjne.png",
          alt: "Fotografowanie i filmowanie",
          text: "Fotografowanie i filmowanie",
          number: ".05",
        },
      ],
      offersList1Sliced: [],
      offersList2Sliced: [],
      numberOfItemsVisible: window.innerWidth <= 900 ? 5 : 3,
    };
  },
  methods: {
    setSwitch(string) {
      useStore().set("switch", string);
    },
  },
  mounted() {
    this.offersList1Sliced = this.offersList1.slice(0, this.numberOfItemsVisible);
    this.offersList2Sliced = this.offersList2.slice(0, this.numberOfItemsVisible);
  },
};
</script>
