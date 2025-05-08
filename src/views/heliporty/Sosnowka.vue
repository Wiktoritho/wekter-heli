<template>
  <Header></Header>
  <Baner
    image="/images/heliporty-baner.png"
    title="Heliport Sosnówka"
    text="Nasze flagowe miejsce wykonywania lotów w Karkonoszach. Malowniczo położony heliport nad zbiornikiem wodnym Sosnówka, z niesamowitym miejscem widokowym na panoramę gór i szczyty Karkonoszy."
    :from="['Heliport Sosnówka']"
    titleVersion="small"
    titleWidth="wide"
    version="high"
    :gap="16"
    :linkTo="'/heliporty/sosnowka'"
    titleSpacing="0.04em"></Baner>
  <section class="heliports">
    <div class="heliports__info">
      <div class="heliports__weather">
        <div class="heliports__weather-main">
          <div>
            <p>Sosnówka</p>
            <p>
              <span><img src="/icons/sun.svg" alt="Sunny Icon" />Słonecznie</span>
              <span>&bull;</span>
              <span>{{ todaysDate }}</span>
            </p>
          </div>
          <p class="heliports__weather-temperature">-7°<sub>C</sub></p>
        </div>
        <div class="heliports__weather-days">
          <div v-for="(day, index) in nextDays" :key="index">
            <p>{{ day.name }}</p>
            <img :src="day.icon" :alt="day.alt" />
            <span>{{ day.temp }}°<sub>C</sub></span>
          </div>
        </div>
      </div>
      <div class="heliports__heliport">
        <div class="heliports__heliport-content">
          <h3>Heliport Sosnówka</h3>
          <p>
            Miejsce spotkań i wypoczynku dla całej rodziny, z którego możemy realizować loty w najpiękniejsze zakątki Sudetów. Bliskość takich hoteli jak
            <span>Hotel Gołębiewski, Platinium Mountain, Blue Mountain czy Lake Hill Resort & SPA</span> sprawia, że możesz połączyć lot z pobytem w luksusowych warunkach. Na Heliporcie Sosnówka
            możesz pozostawić swój śmigłowiec pod naszą opieką, monitoringiem i całodobowym nadzorem kamer.
          </p>
        </div>
        <div class="heliports__map">
            <l-map :zoom="13" :center="[50.82212522657864, 15.720946074924123]">
            <l-tile-layer :url="tileUrl" :attribution="attribution" />
            <l-marker :lat-lng="[50.82212522657864, 15.720946074924123]" :icon="customIcon"></l-marker>
          </l-map>
        </div>
        <div class="heliports__icon">
            <img src="/icons/google-maps.svg" alt="Google Maps Icon"/>
        </div>
      </div>
    </div>
    <Faq></Faq>
  </section>
  <Footer></Footer>
</template>

<script>
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
import Baner from "../../components/baner.vue";
import Faq from "../../components/faq.vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";

export default {
  components: {
    Header,
    Footer,
    Baner,
    Faq,
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      todaysDate: null,
      nextDays: [],
      daysOfWeek: ["ndz", "pon", "wt", "śr", "czw", "pt", "sob"],
      weatherIcons: [
        { src: "/icons/sun.svg", alt: "Sun Icon" },
        { src: "/icons/rain.svg", alt: "Rain Icon" },
        { src: "/icons/storm.svg", alt: "Storm Icon" },
        { src: "/icons/big-rain.svg", alt: "Big Rain Icon" },
        ],
      customIcon: L.icon({
        iconUrl: "/icons/marker.png",
      }),
      tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    };
  },
  methods: {
    getToday() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      this.todaysDate = `${day}.${month}.${year}`;
    },
    generateNextDays() {
      const today = new Date();
      const todayIndex = today.getDay();
      const result = [];

      for (let i = 1; i <= 6; i++) {
        const nextIndex = (todayIndex + i) % 7;
        const randomTemp = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        const randomIcon = this.weatherIcons[Math.floor(Math.random() * this.weatherIcons.length)];

        const dayName = i === 1 ? "jutro" : this.daysOfWeek[nextIndex];

        result.push({
          name: dayName,
          temp: randomTemp,
          icon: randomIcon.src,
          alt: randomIcon.alt,
        });
      }

      this.nextDays = result;
    },
  },
  mounted() {
    this.getToday();
    this.generateNextDays();
  },
};
</script>
