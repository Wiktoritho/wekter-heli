<template>
    <Carousel v-bind="config">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="about__opinion">
          <img class="about__opinion-icon" src="/icons/quote-thin.svg" alt="Quote Icon" />
          <p class="about__opinion-text">{{ slide.text }}</p>
          <p class="about__opinion-author">{{ slide.author }}</p>
        </div>
      </Slide>
    </Carousel>
</template>


<script>
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
    props: {
        config: Object,
        slides: Array,
    }
}
</script>