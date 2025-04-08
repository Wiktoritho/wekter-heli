<template>
  <div>
    <h4 class="headers headers--small headers--gray headers--padding-medium">
      Opinie
    </h4>
    <h2 class="headers headers--big headers--margin-big">
      Zobacz, co nasi pasażerowie mówią <br />
      o swoich podniebnych doświadczeniach.
    </h2>
    <div class="about__opinion-carousel">
      <OpinionCarousel :config="config1" :slides="firstHalf"></OpinionCarousel>
    </div>
    <div class="about__opinion-carousel">
      <OpinionCarousel :config="config2" :slides="secondHalf"></OpinionCarousel>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "../store";
import OpinionCarousel from "./opinionCarousel.vue";

export default {
  components: {
    OpinionCarousel,
  },
  data() {
    return {
      opinions: [],
      firstHalf: [],
      secondHalf: [],
      config1: {
        itemsToShow: 3,
        autoplay: 1000,
        wrapAround: true,
        transition: 7000,
        gap: 24,
        breakpoints: {
          900: { itemsToShow: 3 },
          100: { itemsToShow: 1.5 },
        },
      },
      config2: {
        itemsToShow: 3,
        autoplay: 1000,
        wrapAround: true,
        transition: 7000,
        gap: 24,
        snapAlign: "center-even",
        breakpoints: {
          900: { itemsToShow: 3 },
          100: { itemsToShow: 1.5 },
        },
      },
    };
  },
  methods: {
    async fetchOpinions() {
      const response = await axios.get("/jsons/opinions.json");
      useStore().set("opinions", response.data);
      this.opinions = response.data;
      this.prepareOpinions(response.data);
    },
    prepareOpinions(data) {
      const middleIndex = Math.ceil(data.length / 2);
      this.firstHalf = data.slice(0, middleIndex);
      this.secondHalf = data.slice(middleIndex);
    },
  },
  mounted() {
    if (useStore().opinions.length === 0) {
      this.fetchOpinions();
    } else {
      this.opinions = useStore().opinions;
      this.prepareOpinions(this.opinions);
    }
  },
};
</script>
