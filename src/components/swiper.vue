<template>
  <Carousel ref="myCarousel" @slide-end="slidesChanged">
      <Slide v-for="(slide, index) in slides" :key="index">
        <img class="swiper__image" :src='slide.src' :alt="`Slajd ${index}`" />
        <div class="swiper__gradient"></div>
        <div class="swiper__content">
          <h1 class="swiper__header">{{ slide.header }}</h1>
          <p class="swiper__text">{{ slide.text }}</p>
          <div class="swiper__buttons">
            <button class="button button--blue">{{ slide.buttonFirst }}</button>
            <button class="button button--black">{{ slide.buttonSecond }}</button>
          </div>
        </div>
      </Slide>
    </Carousel>
</template>

<script>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { useStore } from "../store";

export default {
  components: {
    Carousel,
    Slide,
  },
  computed: {
    switchValue() {
      return useStore().switch
    }
  },
  data() {
    return {
      slides: [
        {
          src: "/wekter-heli/src/assets/images/slide1.png",
          header: "Latanie to nasza pasja",
          text: "Lot helikopterem to przestrzeń, wolność, piękne widoki i niemal nieograniczone możliwości przemieszczania się w dowolnym kierunku",
          buttonFirst: "Voucher na przelot",
          buttonSecond: "Więcej o nas",
        },
        {
          src: "/wekter-heli/src/assets/images/slide2.png",
          header: "Air Taxi dla twojego biznesu",
          text: "Oferujemy kompleksową usługę przewozu lotniczego śmigłowcami Robinson R44 oraz R66. Komfort podróży w niemal każdych warunkach.",
          buttonFirst: "Zamów lot",
          buttonSecond: "Czytaj więcej",
        }
      ]
    }
  },
  methods: {
    slidesChanged(data) {
      if (data.currentSlideIndex === 1) {
        useStore().set('switch', 'Loty biznesowe')
      } else {
        useStore().set('switch', 'Loty widokowe')
      }
      
    }
  },
  watch: {
    switchValue(newValue) {
      if (newValue === 'Loty biznesowe') {
        this.$refs.myCarousel.slideTo(1)
      } else {
        this.$refs.myCarousel.slideTo(0)
      }
    }
  }
};
</script>
