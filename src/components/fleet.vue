<template>
  <section class="fleet section--animated" ref="sectionAnimated">
    <div class="fleet__logo">
      <img src="/src/assets/icons/wekter-icon.svg" alt="Wekter Icon" />
      <span>Flota Wekter Helicopters</span>
    </div>
    <div class="fleet__choppers">
      <div class="fleet__choppers-info--small">
        <h3 class="headers headers--big headers--white">Nasza flota - Twoja podniebna przygoda</h3>
        <p class="texts--small texts--width-small">Nasze helikoptery to połączenie nowoczesnej technologii, najwyższego komfortu i niezawodnego bezpieczeństwa.</p>
        <button class="button button--blue button--long">Więcej informacji</button>
      </div>
      <div class="fleet__examples">
        <div v-for="(example, index) in fleetExamples" :key="index" :class="{ 'fleet__example--active': activeIndex === index, fleet__example: activeIndex !== index }" @click="activeIndex = index">
          <div>
            <p :class="{ 'fleet__example-index--active': activeIndex === index, 'fleet__example-index': activeIndex !== index }">
              {{ example.index }}
            </p>
            <h4 :class="{ 'fleet__example-header--active': activeIndex === index, 'fleet__example-header': activeIndex !== index }">
              {{ example.header }}
            </h4>
            <p :class="{ 'fleet__example-text--active': activeIndex === index, 'fleet__example-text': activeIndex !== index }">
              {{ example.text }}
            </p>
          </div>
          <img :class="{ 'fleet__example-image--active': activeIndex === index, 'fleet__example-image': activeIndex !== index }" :src="example.src" alt="Chopper" />
        </div>
        <div class="fleet__carousel-wrapper">
          <Carousel v-bind="config">
            <Slide v-for="(slide, index) in fleetExamples" :key="index">
              <p class="fleet__swiper-index">{{ slide.index }}</p>
              <h4 class="fleet__swiper-header">{{ slide.header }}</h4>
              <p class="fleet__swiper-text">
                {{ slide.text }}
              </p>
              <img :src="slide.src" alt="Chopper" />
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
  <section class="fleet section--animated" ref="sectionAnimated">
    <div class="fleet__logo">
      <img src="/src/assets/icons/wekter-icon.svg" alt="Wekter Icon" />
      <span>Air Taxi - wygoda i niezawodność</span>
    </div>
    <div class="fleet__container">
      <div class="fleet__choppers-info--big">
        <h3 class="headers headers--big headers--white">Oferujemy kompleksową usługę przewozu lotniczego śmigłowcami Robinson R44 oraz R66</h3>
        <p class="texts--small texts--width-big">
          Szybka możliwość transportu może odegrać kluczową rolę w podróżach służbowych, dlatego jesteśmy dostępni pod telefonem, adresem e-mail stale, a czas od wyceny do realizacji lotu jest
          skrócony do minimum
        </p>
      </div>
      <button class="button button--blue button--long">Pełna oferta air taxi</button>
    </div>
    <div class="fleet__advantages">
      <div class="fleet__advantages-content" :style="{ height: computedHeight }">
        <div :class="{ 'fleet__advantages-element': activeTextIndex === 1, 'fleet__advantages-element--active': activeTextIndex === 0 }">
          <p :class="{ 'fleet__advantages-header': activeTextIndex === 1, 'fleet__advantages-header--active': activeTextIndex === 0 }" ref="header1" @click="handleActiveHeader(0)">
            <span>01</span>
            bezpieczeństwo i niezawodność
          </p>
        </div>
        <p :class="{ 'fleet__advantages-text': activeTextIndex === 1, 'fleet__advantages-text--active': activeTextIndex === 0 }" ref="text1">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <div
          :class="{ 'fleet__advantages-element': activeTextIndex === 0, 'fleet__advantages-element--active': activeTextIndex === 1 }"
          :style="{ transform: activeTextIndex === 1 ? `translateY(-${headerTransition}px)` : 'translateY(0px)' }">
          <p :class="{ 'fleet__advantages-header': activeTextIndex === 0, 'fleet__advantages-header--active': activeTextIndex === 1 }" ref="header2" @click="handleActiveHeader(1)">
            <span>02</span>
            oszczędność czasu w podróży
          </p>
        </div>
        <p
          :class="{ 'fleet__advantages-text': activeTextIndex === 0, 'fleet__advantages-text--active': activeTextIndex === 1 }"
          :style="{ transform: activeTextIndex === 1 ? `translateY(-${headerTransition}px)` : 'translateY(0px)' }"
          ref="text2">
          Podróżuj prestiżowo i bezpiecznie, omijając korki, a tym samym nie ryzykując spóźnień. Docieraj zawsze na czas i z najwyższą klasą. Możemy lecieć z oraz do dowolnie wybranego przez Ciebie
          miejsca: od dużego lotniska po trawnik przed Twoim domem lub firmą, o ile pozwolą nam na to przepisy prawa lotniczego.
          <br /><br />
          Czas oczekiwania śmigłowca na miejscu wykonywania operacji w obu kierunkach jest elastyczny, jeśli istnieje potrzeba powrotu dnia kolejnego, gwarantujemy organizację noclegu dla pilota oraz
          postoju helikoptera możliwie blisko, tak aby pozostawał dyspozycji klienta. Lotnictwo biznesowe to nie tylko oszczędność czasu, który w obecnych czasach jest szczególnie cenny, to także
          możliwość zaprezentowania się z jak najlepszej strony
        </p>
      </div>
      <div class="fleet__advantages-cities">
        <div class="fleet__advantages-cities-container">
          <div class="fleet__advantages-cities-header">
            <p class="fleet__advantages-cities-header-text">Wybierz miasto wylotu</p>
            <div class="fleet__advantages-cities-buttons">
              <p
                @click="activeCity = 'Wrocław'"
                :class="{
                  'fleet__advantages-city': activeCity === 'Warszawa',
                  'fleet__advantages-city--active': activeCity !== 'Warszawa',
                }">
                Wrocław
              </p>
              <p
                @click="activeCity = 'Warszawa'"
                :class="{
                  'fleet__advantages-city': activeCity === 'Wrocław',
                  'fleet__advantages-city--active': activeCity !== 'Wrocław',
                }">
                Warszawa
              </p>
              <div class="fleet__advantages-city-switch" :style="{ left: activeCity === 'Warszawa' ? '50%' : '0%' }"></div>
            </div>
          </div>
          <div class="fleet__advantages-block">
            <table v-if="activeCity === 'Wrocław'" class="fleet__advantages-table">
              <tbody>
                <tr>
                  <th>Miasto docelowe</th>
                  <th colspan="2">Czas lotu</th>
                </tr>
                <tr v-for="(item, index3) in flightData1" :key="index3">
                  <td>{{ item.city }}</td>
                  <td>{{ item.time }}</td>
                  <td><span>Zamów</span></td>
                </tr>
              </tbody>
            </table>
            <table v-else class="fleet__advantages-table">
              <tbody>
                <tr>
                  <th>Miasto docelowe</th>
                  <th colspan="2">Czas lotu</th>
                </tr>
                <tr v-for="(item, index4) in flightData2" :key="index4">
                  <td>{{ item.city }}</td>
                  <td>{{ item.time }}</td>
                  <td><span>Zamów</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      fleetExamples: [
        {
          index: "01",
          header: "Robinson R66 Turbine",
          text: "Najpopularniejszy czteromiejscowy śmigłowiec świata, stworzony specjalnie dla lotnictwa cywilnego. Helikopter ten zaliczany jest do najbezpieczniejszych śmigłowców na świecie.",
          src: "/src/assets/images/chopper1.jpg",
        },
        {
          index: "02",
          header: "Robinson R44 Raven II",
          text: "Śmigłowiec z silnikiem turbinowym posiadający 4 miejsca pasażerskie i dużą dodatkową przestrzeń bagażową, w którą zmieścisz 2-3 walizki kabinowe.",
          src: "/src/assets/images/chopper2.jpg",
        },
      ],
      activeIndex: 0,
      activeCity: "Wrocław",
      flightData1: [
        { city: "Warszawa", time: "1h 45m" },
        { city: "Poznań", time: "0h 50m" },
        { city: "Gdańsk", time: "2h 15m" },
        { city: "Zakopane", time: "1h 40m" },
        { city: "Szczecin", time: "1h 45m" },
        { city: "Warszawa", time: "1h 45m" },
        { city: "Warszawa", time: "1h 45m" },
        { city: "Warszawa", time: "1h 45m" },
      ],
      flightData2: [
        { city: "Wrocław", time: "1h 45m" },
        { city: "Poznań", time: "0h 50m" },
        { city: "Gdańsk", time: "2h 15m" },
        { city: "Zakopane", time: "1h 40m" },
        { city: "Szczecin", time: "1h 45m" },
        { city: "Wrocław", time: "1h 45m" },
        { city: "Wrocław", time: "1h 45m" },
        { city: "Wrocław", time: "1h 45m" },
      ],
      activeTextIndex: 0,
      computedHeight: "0px",
      marginValue: 44,
      headerTransition: 0,
      config: {
        itemsToShow: 1.2,
        gap: 12,
      },
    };
  },
  methods: {
    handleActiveHeader(index) {
      this.activeTextIndex = index;
      if (this.activeTextIndex === 1) {
        if (window.innerWidth >= 900) {
          this.computedHeight = `${this.$refs.header1.offsetHeight + this.$refs.header2.offsetHeight + this.$refs.text2.offsetHeight + this.marginValue}px`;
          this.headerTransition = this.$refs.text1.offsetHeight + this.marginValue;
        } else {
          this.computedHeight = `${this.$refs.header1.offsetHeight + this.$refs.header2.offsetHeight + this.$refs.text2.offsetHeight + this.marginValue * 4}px`;
          this.headerTransition = this.$refs.text1.offsetHeight + this.marginValue - 70;
        }
      } else {
        if (window.innerWidth >= 900) {
          this.computedHeight = `${this.$refs.header1.offsetHeight + this.$refs.header2.offsetHeight + this.$refs.text1.offsetHeight + this.marginValue}px`;
        } else {
          this.computedHeight = `${this.$refs.header1.offsetHeight + this.$refs.header2.offsetHeight + this.$refs.text1.offsetHeight + this.marginValue * 2.5}px`;
        }
      }
    },
    countStartHeight() {
      this.computedHeight = `${this.$refs.header1.offsetHeight + this.$refs.header2.offsetHeight + this.$refs.text1.offsetHeight + this.marginValue}px`;
    },
  },
  mounted() {
    this.countStartHeight();
    window.addEventListener("resize", () => {
      this.$nextTick(() => {
        this.countStartHeight();
      })
    });
  },
};
</script>
