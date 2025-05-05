<template>
  <Header></Header>
  <Baner
    image="/images/kontakt-baner.png"
    title="Skontaktuj się z nami jeśli masz jakiekolwiek pytania"
    text="Planujesz podniebną przygodę lub potrzebujesz szczegółowych informacji? Napisz lub zadzwoń – chętnie pomożemy i dopasujemy ofertę do Twoich potrzeb!"
    :from="['Kontakt']"
    titleVersion="small"
    titleWidth="wide"
    version="high"
    :gap="16"
    :linkTo="'/kontakt'"
    titleSpacing="0.04em"
    :allowMediaLinks="true"
    :form="true"></Baner>
  <section class="contact">
    <div class="contact__container">
      <h4 class="headers headers--small headers--gray headers--left">Kontakt</h4>
      <h2 class="contact__header">Odezwij się do nas w najwygodniejszy dla Ciebie sposób</h2>
      <div class="contact__map">
        <div class="contact__map-infos">
          <div class="contact__map-infos-icon">
            <img src="/icons/chat.svg" alt="Chat Icon" />
          </div>
          <p class="contact__map-infos-text">
            Wolisz tradycyjne sposoby?<br />
            Skontaktuj się z nami bezpośrednio
          </p>
          <div class="contact__map-infos-medias">
            <a href="tel:+48730730066"><img src="/icons/phone.svg" alt="Phone Icon" /><span>(+48) 730 730 066</span></a>
            <a href="mailto:loty@wekter-helicopters.eu"><img src="/icons/email.svg" alt="Mail Icon" /><span>loty@wekter-helicopters.eu</span></a>
          </div>
        </div>
        <div class="contact__map-content">
          <l-map style="height: 550px; width: 100%" :zoom="13" :center="currentCenter.coords">
            <l-tile-layer :url="tileUrl" :attribution="attribution" />
            <l-marker :lat-lng="currentCenter.coords" :icon="customIcon"></l-marker>
          </l-map>
          <div class="contact__map-panel">
            <div class="contact__map-panel-icon">
              <img src="/icons/localization.svg" alt="Localization Icon" />
            </div>
            <div class="contact__map-panel-switcher">
              <p>Porozmawiajmy osobiście. <br />Zobacz gdzie nas znajdziesz</p>
              <div class="contact__map-switch">
                <button
                  :class="{
                    'contact__map-button--active': currentLocation === 'Sosnówka',
                    'contact__map-button': currentLocation !== 'Sosnówka',
                  }"
                  @click="currentLocation = 'Sosnówka'">
                  Sosnówka
                </button>
                <button
                  :class="{
                    'contact__map-button--active': currentLocation === 'Wrocław',
                    'contact__map-button': currentLocation !== 'Wrocław',
                  }"
                  @click="currentLocation = 'Wrocław'">
                  Wrocław
                </button>
                <button
                  :class="{
                    'contact__map-button--active': currentLocation === 'Polkowice',
                    'contact__map-button': currentLocation !== 'Polkowice',
                  }"
                  @click="currentLocation = 'Polkowice'">
                  Polkowice
                </button>
                <div
                  :style="{
                    left: currentLocation === 'Sosnówka' ? '3px' : currentLocation === 'Wrocław' ? '33%' : currentLocation === 'Polkowice' ? '66%' : '0px',
                  }"></div>
              </div>
            </div>
            <div class="contact__map-details">
              <div class="contact__map-details-name">
                <p>Wekter Helicopters</p>
                <p>{{ currentCenter.address }}</p>
              </div>
              <button class="contact__map-details-button">Sprawdź dojazd</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Faq></Faq>
  </section>
  <Footer></Footer>
</template>

<script>
import Baner from "../components/baner.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
import Faq from "../components/faq.vue";
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
      tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      customIcon: L.icon({
        iconUrl: "/icons/marker.png",
      }),
      locations: [
        { name: "Sosnówka", coords: [50.82212522657864, 15.720946074924123], address: "58-564 Sosnówka"},
        { name: "Wrocław", coords: [51.1079, 17.0385], address: "50-001 Wrocław"},
        { name: "Polkowice", coords: [51.5033, 16.0726], address: "59-100 Polkowice"},
      ],
      currentLocation: "Sosnówka",
    };
  },
  computed: {
    selectedLocation() {
      return this.locations.find(loc => loc.name === this.currentLocation);
    },
    currentCenter() {
      return this.selectedLocation;
    },
  },
};
</script>
