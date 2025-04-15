<template>
  <Header></Header>
  <Baner
    image="/images/oferta-baner.png"
    title="Nasza oferta - więcej niż latanie"
    text="Oferujemy szeroki zakres usług – od szybkiego transportu AirTaxi, przez spektakularne loty widokowe, aż po profesjonalne szkolenia pilotażowe. Realizujemy również transport cargo oraz organizujemy wyjątkowe eventy i wydarzenia z wykorzystaniem helikopterów."
    :from="['Oferta']"
    titleVersion="big"
    titleWidth="wide"
    version="low"
    :gap="16"
    :linkTo="'/oferta'"
    width="wide"></Baner>
  <section class="offer">
    <div class="offer__main">
        <h4 class="headers headers--small headers--gray headers--left">Oferta</h4>
        <h2 class="offer__main-header">Wybierz ofertę skrojoną na miarę Twoich potrzeb!</h2>
        <p class="offer__main-text">Oferujemy szeroki wachlarz usług - od szybkiego transportu, przez zapierające dech w piersiach widoki, aż po profesjonalne szkolenia i wyjątkowe eventy. Wybierz opcję, która najlepiej odpowiada Twoim oczekiwaniom i ciesz się niezapomnianym doświadczeniem</p>
        <div class="offer__content">
          <div class="offer__content-header">
            <div>
              <img src="/icons/briefcase.svg" alt="Briefcase Icon"/>
            </div>
            <h3>Biznes</h3>
          </div>
          <div class="offer__content-tiles">
            <div class="offer__content-tile" v-for="(business, businessIndex) in business" :key="businessIndex">
              <p class="offer__content-tile-header">{{ business.title }}</p>
              <p class="offer__content-tile-text">{{ business.text }}</p>
              <a :href="`/oferta/${business.link}`" class="offer__content-tile-link">Zobacz ofertę</a>
            </div>
          </div>
        </div>
        <div class="offer__content">
          <div class="offer__content-header">
            <div>
              <img src="/icons/avalanche.svg" alt="Loty widokowe Icon"/>
            </div>
            <h3>Loty widokowe</h3>
          </div>
          <div class="offer__content-tiles">
            <div class="offer__content-tile" v-for="(viewFlight, flightIndex) in viewFlights" :key="flightIndex">
              <p class="offer__content-tile-header">{{ viewFlight.title }}</p>
              <p class="offer__content-tile-text">{{ viewFlight.text }}</p>
              <a :href="`/oferta/${viewFlight.link}`" class="offer__content-tile-link">Zobacz ofertę</a>
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

export default {
  components: {
    Baner,
    Footer,
    Header,
    Faq,
  },
  data() {
    return {
      business: [
        {
          title: "Air Taxi",
          text: "Szybki, komfortowy i bezpieczny transport helikopterem, idealny na spotkania biznesowe, prywatne podróże i omijanie korków.",
          link: "air-taxi"
        },
        {
          title: "Cargo",
          text: "Ekspresowy transport ładunków drogą powietrzną, zapewniający szybkość, bezpieczeństwo i dostarczenie towaru nawet w trudno dostępne miejsca.",
          link: "cargo"
        },
        {
          title: "Eventy i wydarzenia",
          text: "Loty helikopterem jako wyjątkowa atrakcja na weselach, imprezach firmowych, pokazach i specjalnych okazjach.",
          link: "eventy-i-wydarzenia"
        },
        {
          title: "Udziały",
          text: "Pakiety godzin to idealne rozwiązanie dla Twojej firmy, umożliwia wygodne korzystanie z AirTaxi z priorytetowym dostępem do śmigłowca.",
          link: "udzialy"
        },
        {
          title: "Fotografowanie i filmowanie",
          text: "Spektakularne ujęcia z lotu ptaka dla filmowców, fotografów i twórców reklam - bez ograniczeń perspektywy.",
          link: "fotografowanie-i-filmowanie"
        },
      ],
      viewFlights: [
        {
          title: "Loty widokowe",
          text: "Niezapomniane podniebne przeżycia z panoramicznymi widokami na malownicze krajobrazy, miasta i wyjątkowe miejsca.",
          link: "loty-widokowe"
        },
        {
          title: "Loty grupowe",
          text: "Wzbierzcie w przestworza razem! Idealna opcja na wyjątkową przygodę z rodziną, przyjaciółmi lub współpracownikami.",
          link: "loty-grupowe"
        },
        {
          title: "Loty zapoznawcze",
          text: "Poczuj dreszczyk emocji, poznaj podstawy pilotażu i doświadcz lotu helikopterem z perspektywy pilota.",
          link: "loty-zapoznawcze"
        },
        {
          title: "Zaręczyny",
          text: "Stwórz niezapomniany moment i poproś o rękę ukochaną osobę w romantycznej scenerii nad chmurami.",
          link: "zareczyny"
        },
        {
          title: "Szkolenia licencyjne dla pilotów",
          text: "Profesjonalne kursy dla przyszłych pilotów prowadzone przez doświadczonych instruktorów, przygotowujące do zdobycia licencji śmigłowcowej.",
          link: "szkolenia-licencyjne-dla-pilotow"
        },
      ]
    }
  }
};
</script>
