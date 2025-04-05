<template>
  <h4 class="headers headers--small headers--gray headers--padding-medium">Nasze wartości</h4>
  <h2 class="headers headers--big headers--margin-small">
    Nowoczesna flota,<br />
    niezrównane możliwości
  </h2>
  <div class="about__chopper-container" v-for="(chopper, chopperIndex) in choppers" :key="chopperIndex">
    <div class="about__chopper" :class="{ 'about__chopper--reverse': chopperIndex % 2 !== 0 }">
      <div class="about__chopper-slider-container">
        <div class="about__chopper-tile">
          <div class="about__chopper-icon">
            <img src="/icons/range.svg" alt="Range Icon" />
          </div>
          <div class="about__chopper-infos">
            <h3>{{ chopper.range }} KM</h3>
            <p>Zasięgu</p>
          </div>
        </div>
        <div class="about__chopper-tile">
          <div class="about__chopper-icon">
            <img src="/icons/velocity.svg" alt="Speed Icon" />
          </div>
          <div class="about__chopper-infos">
            <h3>{{ chopper.velocity }} KM/H</h3>
            <p>Prędkość przelotowa</p>
          </div>
        </div>
        <div class="about__chopper-tile">
          <div class="about__chopper-icon">
            <img src="/icons/passengers.svg" alt="Passengers Icon" />
          </div>
          <div class="about__chopper-infos">
            <h3>{{ chopper.passengers }}</h3>
            <p>Pasażerów</p>
          </div>
        </div>
        <div class="about__chopper-slider">
          <div class="about__chopper-slider-inside">
            <Carousel :ref="`carousel${chopperIndex}`" @slide-end="handleSlideChange(chopperIndex)">
              <Slide v-for="(slide, slideIndex) in chopper.slides" :key="slideIndex">
                <img :src="slide" :alt="chopper.title" />
              </Slide>
            </Carousel>
            <div class="about__chopper-left" :class="{ 'chopper__arrow--disabled': carouselStates[chopperIndex]?.currentSlide === 0 }">
              <img src="/icons/arrow-side.svg" alt="Arrow Left" />
            </div>
            <div class="about__chopper-right" :class="{ 'chopper__arrow--disabled': carouselStates[chopperIndex]?.currentSlide === chopper.slides.length - 1 }">
              <img src="/icons/arrow-side.svg" alt="Arrow Right" />
            </div>
            <div class="about__chopper-vr">
              <img src="/icons/vr.svg" alt="VR Icon" />
            </div>
          </div>
        </div>
      </div>
      <div class="about__chopper-content">
        <h3>{{ chopper.title }}</h3>
        <p>
          {{ chopper.textPartOne }}
          <br />
          <br />
          {{ chopper.textPartTwo }}
          <br />
          <br />
          {{ chopper.textPartThree }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      choppers: [
        {
          title: "Robinson R44 Raven II",
          textPartOne: "Jeden z najpopularniejszych śmigłowców cywilnych na świecie. Czteromiejscowy, niezawodny i komfortowy - idealny do lotów widokowych oraz transportu pasażerskiego.",
          textPartTwo: "Dzięki nowoczesnej konstrukcji i zaawansowanym systemom bezpieczeństwa R44 Raven II zapewnia stabilny i płynny lot, sprawdzając się w różnych warunkach atmosferycznych.",
          textPartThree:
            "Na pokładzie czekają skórzane fotele, klimatyzacja i słuchawki Bose A20 z systemem wygłuszania hałasu. Przestrzeń bagażowa pomieści najpotrzebniejsze rzeczy, a duże przeszklenia kabiny gwarantują spektakularne widoki.",
          range: 550,
          velocity: 200,
          passengers: 3,
          slides: ["/images/about-chopper1-slide.png", "/images/about-chopper1-slide.png", "/images/about-chopper1-slide.png"],
        },
        {
          title: "Robinson R66 Turbine",
          textPartOne:
            "Nowoczesny, pięciomiejscowy śmigłowiec z silnikiem turbinowym Rolls-Royce RR300, zapewniającym większą prędkość, płynniejszy lot i wyższy komfort podróży. Dodatkowe zbiorniki paliwa pozwalają na dłuższe loty bez częstego tankowania.",
          textPartTwo:
            "Na pokładzie czekają przestronne wnętrze, panoramiczne przeszklenia i duża przestrzeń bagażowa mieszcząca 2-3 walizki kabinowe. Środkowy fotel w tylnej części kabiny można zamienić w elegancki barek z napojami i przekąskami.",
          textPartThree: "R66 to idealny wybór zarówno na biznesowe przeloty, jak i wyjątkowe podniebne przygody.",
          range: 800,
          velocity: 220,
          passengers: 5,
          slides: ["/images/about-chopper2-slide.png", "/images/about-chopper2-slide.png", "/images/about-chopper2-slide.png"],
        },
      ],
      carouselStates: [],
    };
  },
  methods: {
    handleSlideChange(chopperIndex) {
      if (chopperIndex === 0) {
        const carousel = this.$refs.carousel0;
        this.carouselStates[chopperIndex].currentSlide = carousel[chopperIndex].currentSlide;
      } else {
        const carousel = this.$refs.carousel1;
        this.carouselStates[chopperIndex].currentSlide = carousel[chopperIndex - 1].currentSlide;
      }
    },
  },
  mounted() {
    this.choppers.forEach(() => {
      this.carouselStates.push({
        currentSlide: 0,
      });
    });
  },
};
</script>
