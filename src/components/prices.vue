<template>
  <section class="prices section--animated" ref="sectionAnimated">
    <h4 class="headers headers--small headers--gray">Ceny voucherów</h4>
    <h2 class="headers headers--big headers--margin-small">Cennik lotów w formule Flight Sharing</h2>
    <div class="prices__buttons">
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
    <div v-if="switchValue === 'Loty widokowe'" class="prices__carousel-wrapper">
      <Carousel v-bind="config" ref="pricesCarousel" @slide-end="handleSlidesDrag">
        <Slide>
          <div class="prices__swiper-title--big" :style="{ marginTop: `${computedMargin}px` }">Nazwa</div>
          <div class="prices__swiper-title--small">Długość lotu</div>
          <div class="prices__swiper-title--small">Czas trwania</div>
          <div class="prices__swiper-title--small">Charakterystyka</div>
          <div class="prices__swiper-title--small">Max liczba pasażerów</div>
          <div class="prices__swiper-title--small">Max waga pasażerów</div>
          <div class="prices__swiper-title--small">Cena</div>
        </Slide>
        <Slide v-for="(slide, index) in slides" :key="index">
          <div class="prices__ring-container" ref="rings">
            <div class="prices__ring--outside" :style="{ background: `conic-gradient(#3B5EAB ${slide.ringDegrees}deg, #ddd ${slide.ringDegrees}deg)` }">
              <div class="prices__ring--inside">
                <div class="prices__ring-content">
                  <p class="prices__ring-time">czas</p>
                  <p class="prices__ring-value">{{ slide.value }}</p>
                  <p class="prices__ring-minutes">minut</p>
                </div>
              </div>
            </div>
          </div>
          <div class="prices__swiper-text--big">
            {{ slide.text }}
          </div>
          <div class="prices__swiper-text--small">{{ slide.length }}</div>
          <div class="prices__swiper-text--small">{{ slide.time }}</div>
          <div class="prices__swiper-text--small">{{ slide.text2 }}</div>
          <div class="prices__swiper-text--small">3</div>
          <div class="prices__swiper-text--small">250 kg</div>
          <div class="prices__swiper-price">
            <p>{{ slide.price }}</p>
            <button class="prices__swiper-button">Kup teraz</button>
          </div>
        </Slide>
        <Slide></Slide>
      </Carousel>
      <div class="prices__swiper-gradient"></div>
      <div class="swiper-button-prev" :class="{ 'swiper--button-disabled': carouselIndex <= 2 }" @click="handleSlides('prev')">
        <img src="/src/assets/icons/arrow-blue.svg" alt="Arrow Left" />
      </div>
      <div class="swiper-button-next" :class="{ 'swiper--button-disabled': carouselIndex >= 4 }" @click="handleSlides('next')">
        <img src="/src/assets/icons/arrow-blue.svg" alt="Arrow Right" />
      </div>
    </div>
    <div v-if="switchValue === 'Loty widokowe'" class="prices__swiper-supplement">
      <img src="/src/assets/icons/arrow-gradient.png" alt="Arrow Gradient" />
      <p>Przesuń w bok aby zobaczyć wszystkie produkty</p>
      <img src="/src/assets/icons/arrow-gradient.png" alt="Arrow Gradient" />
    </div>
    <div v-if="switchValue === 'Loty biznesowe'" class="prices__business">
      <img class="prices__business-desktop-image" src="/src/assets/images/heli-guy.png" alt="Guy" />
      <img class="prices__business-mobile-image" src="/src/assets/images/heli-guy-mobile.png" alt="Guy" />
      <div class="prices__business-content">
        <h3 class="prices__business-header">Loty biznesowe</h3>
        <p class="prices__business-text">
          Podróżuj prestiżowo i bezpiecznie, omijając korki, a tym samym nie ryzykując spóźnień. Docieraj zawsze na czas i z najwyższą klasą. Możemy lecieć z oraz do dowolnie wybranego przez Ciebie
          miejsca: od dużego lotniska po trawnik przed Twoim domem lub firmą, o ile pozwolą nam na to przepisy prawa lotniczego.
        </p>
        <div class="prices__business-buttons">
          <button class="button button--blue button--large button--long">zamów lot</button>
          <button class="button button--white button--large button--long">Dowiedz się więcej</button>
        </div>
      </div>
    </div>
  </section>
  <section class="prices section--animated" ref="sectionAnimated">
    <div class="prices__border"></div>
    <h4 class="headers headers--small headers--gray">{{ switchValue === "Loty widokowe" ? "Lokalizacje heliportów" : "Oferta dla firm" }}</h4>
    <h2 class="headers headers--big headers--margin-semi-medium">
      {{ switchValue === "Loty widokowe" ? "Nasze heliporty to komfortowe warunki dla śmigłowców i ich pasażerów" : "Kup udział w śmigłowcu i oszczędzaj na każdej godzinie spędzonej w powietrzu" }}
    </h2>
    <p v-if="switchValue === 'Loty biznesowe'" class="prices__header-text">
      Pakiety godzin to idealne rozwiązanie dla Twojej firmy, umożliwia wygodne korzystanie z AirTaxi z priorytetowym dostępem do śmigłowca. Nie musisz kupować śmigłowca, aby poczuć się jak jego
      właściciel.
    </p>
    <div class="prices__localizations">
      <div v-if="switchValue === 'Loty widokowe'" class="prices__localization" v-for="(localization, index2) in localizations" :key="index2">
        <img class="prices__localization-image" :src="localization.image" :alt="localization.city" />
        <div class="prices__localization-content">
          <h4 class="prices__localization-header">{{ localization.city }}</h4>
          <p class="prices__localization-text">{{ localization.text }}</p>
          <p class="prices__localization-link">
            Zobacz więcej
            <span>
              <img src="/src/assets/icons/arrow-side.svg" alt="Arrow" />
            </span>
          </p>
        </div>
      </div>
      <Carousel v-bind="configLocalizations" v-if="switchValue === 'Loty widokowe'" class="swiper-wrapper">
        <Slide v-for="(localization, index3) in localizations" :key="index3">
          <img class="prices__swiper-localization-image" :src="localization.image" :alt="localization.city" />
          <div class="prices__swiper-localization-content">
            <h4 class="prices__swiper-localization-header">{{ localization.city }}</h4>
            <p class="prices__swiper-localization-text">{{ localization.text }}</p>
            <p class="prices__swiper-localization-link">
              Zobacz więcej <span><img src="/src/assets/icons/arrow-side.svg" alt="Arrow" /></span>
            </p>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      <div v-if="switchValue === 'Loty biznesowe'" class="prices__chopper" v-for="(chopper, index4) in choppers" :key="index4">
        <img :src="chopper.image" :alt="chopper.header" />
        <div class="prices__chopper-content">
          <h4 class="prices__chopper-header">{{ chopper.header }}</h4>
          <div class="prices__chopper-info" v-for="(hour, hourIndex) in chopper.hours" :key="hourIndex">
            <p>{{ hour }}</p>
            <p>{{ chopper.prices[hourIndex] }}€<span>/godz</span></p>
          </div>
        </div>
      </div>
      <div v-if="switchValue === 'Loty biznesowe'" class="prices__swiper-choppers">
        <Carousel v-bind="configChoppers" class="swiper-wrapper">
          <Slide v-for="(chopperSlide, index5) in choppers" :key="index5">
            <img :src="chopperSlide.image" :alt="chopperSlide.header" />
            <div class="prices__swiper-chopper-content">
              <h4 class="prices__swiper-chopper-header">{{ chopperSlide.header }}</h4>
              <div class="prices__swiper-chopper-info" v-for="(hourSlide, hourIndex2) in chopperSlide.hours" :key="hourIndex2">
                <p>{{ hourSlide }}</p>
                <p>{{ chopperSlide.prices[hourIndex2] }}€<span>/godz</span></p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "../store";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  computed: {
    switchValue() {
      return useStore().switch;
    },
  },
  data() {
    return {
      config: {
        itemsToShow: 5,
        breakpoints: {
          1400: { itemsToShow: 5 },
          1100: { itemsToShow: 4 },
          800: { itemsToShow: 3 },
          100: { itemsToShow: 2.25 },
        },
      },
      configLocalizations: {
        itemsToShow: 1.2,
        gap: 16,
      },
      configChoppers: {
        itemsToShow: 1.2,
        gap: 16,
      },
      computedMargin: 0,
      carouselIndex: window.innerWidth <= 900 ? 0 : 2,
      maxCarouselIndex: 4,
      choppers: [
        {
          image: "/wekter-heli/src/assets/images/chopper-buy1.jpg",
          header: "Robinson R66 Turbine",
          hours: ["10H", "20H", "30H"],
          prices: ["1375", "1350", "1325"],
        },
        {
          image: "/wekter-heli/src/assets/images/chopper-buy2.jpg",
          header: "Robinson R44 Raven II",
          hours: ["10H", "20H", "30H"],
          prices: ["825", "800", "775"],
        },
      ],
      slides: [
        {
          value: "00:15",
          text: "Lot widokowy 15 minutowy",
          length: "około 55 km",
          time: "13-15 minut",
          text2: "W tym czasie odbędziesz całkiem ciekawą wycieczkę.",
          price: "900 zł",
          ringDegrees: 0,
        },
        {
          value: "00:20",
          text: "Lot widokowy 20 minutowy",
          length: "około 55 km",
          time: "18-20 minut",
          text2: "Zdążysz poczuć i zobaczyć więcej w czasie lotu.",
          price: "1 200 zł",
          ringDegrees: 0,
        },
        {
          value: "00:30",
          text: "Lot widokowy 30 minutowy",
          length: "około 110 km",
          time: "28-30 minut",
          text2: "W czasie tego lotu zwiedzisz znaczącą część Karkonoszy.",
          price: "1 800 zł",
          ringDegrees: 0,
        },
        {
          value: "00:40",
          text: "Lot widokowy 40 minutowy",
          length: "około 150 km",
          time: "38-40 minut",
          text2: "Podczas tej wycieczki odwiedzisz najbardziej znane zakątki.",
          price: "2 400 zł",
          ringDegrees: 0,
        },
        {
          value: "00:50",
          text: "Lot widokowy 50 minutowy",
          length: "około 180 km",
          time: "45-50 minut",
          text2: "Podczas tej wycieczki odwiedzisz najbardziej znane zakątki.",
          price: "3 000 zł",
          ringDegrees: 0,
        },
      ],
      localizations: [
        {
          image: "/wekter-heli/src/assets/images/sosnowka.png",
          city: "Sosnówka",
          text: "Miejsce bazowania i lądowisko macierzyste naszych helikopterów.",
        },
        {
          image: "/wekter-heli/src/assets/images/polkowice.png",
          city: "Polkowice",
          text: "Miejsce bazowania i lądowisko macierzyste naszych helikopterów.",
        },
        {
          image: "/wekter-heli/src/assets/images/wroclaw.png",
          city: "Wrocław",
          text: "Miejsce bazowania i lądowisko macierzyste naszych helikopterów.",
        },
      ],
    };
  },

  methods: {
    setSwitch(string) {
      useStore().set("switch", string);
    },
    handleSlides(direction) {
      if (direction === "prev" && this.carouselIndex > 2) {
        this.$refs.pricesCarousel.prev();
        this.carouselIndex--;
      }
      if (direction === "next" && this.carouselIndex <= this.maxCarouselIndex) {
        this.$refs.pricesCarousel.next();
        this.carouselIndex++;
      }
    },
    handleSlidesDrag(data) {
      this.carouselIndex = data.currentSlideIndex;
    },
    countMargin() {
      if (this.$refs.rings[0]) {
        this.computedMargin = this.$refs.rings[0].offsetHeight;
      }
    },
    fillRings() {
      this.$refs.rings.forEach((ring, index) => {
        const valueElement = ring.querySelector(".prices__ring-value");
        const minutes = parseInt(valueElement.textContent.trim().split(":")[1] || "0", 10);
        const degrees = (minutes / 60) * 360;
        this.slides[index].ringDegrees = degrees;
      });
    },
  },
  mounted() {
    this.$refs.pricesCarousel.slideTo(this.carouselIndex);
    this.countMargin();
    this.fillRings();
    window.addEventListener("resize", this.countMargin);
  },
};
</script>
