<template>
  <Header></Header>
  <Baner
    image="/images/offers/air-taxi-baner.png"
    title="Trendsetter transportu lotniczego — AIR Taxi: podróżuj szybko i wygodnie"
    text="AIR Taxi jest innowacyjną formą transportu lotniczego, która oferuje szybką i wygodną podróż z Warszawy do dowolnego miasta w Polsce. Jest to nowoczesna usługa transportu lotniczego, która dostępna jest dla klientów indywidualnych oraz biznesowych, szukających wyjątkowego doświadczenia podróżowania."
    :from="['Oferta', 'Air Taxi']"
    titleVersion="small"
    titleWidth="wide"
    version="high"
    textVersion="medium"
    :gap="32"
    :linkTo="'/oferta'"
    width="wide"
  ></Baner>
  <section class="offerDetails">
    <div class="offerDetails__localization">
      <div class="offerDetails__localization-container">
        <div class="offerDetails__localization-header">
          <h4>Wybierz miasto wylotu</h4>
          <div class="offerDetails__localization-slide">
            <div
              class="offerDetails__localization-city"
              :class="{
                'offerDetails__localization-city--active':
                  activeCity === 'Wrocław',
              }"
              @click="activeCity = 'Wrocław'"
            >
              Wrocław
            </div>
            <div
              class="offerDetails__localization-city"
              :class="{
                'offerDetails__localization-city--active':
                  activeCity === 'Warszawa',
              }"
              @click="activeCity = 'Warszawa'"
            >
              Warszawa
            </div>
            <div
              class="offerDetails__localization-slider"
              :style="{ left: activeCity === 'Wrocław' ? '0px' : '50%' }"
            ></div>
          </div>
        </div>
        <div class="offerDetails__localization-table-container">
          <table
            v-if="activeCity === 'Wrocław'"
            class="offerDetails__localization-table"
          >
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
          <table v-else class="offerDetails__localization-table">
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
        <div class="offerDetails__localization-map-container">
          <div class="offerDetails__localization-map-inside">
            <img src="/images/map.png" alt="Map" />
            <div
              class="offerDetails__localization-map-city"
              v-for="(city, cityIndex) in cities"
              :key="cityIndex"
              :data-city="city"
            >
              <img src="/icons/pin.svg" />
              <p>{{ city }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offerDetails__content">
      <div class="offerDetails__content-block">
        <h4 class="headers headers--small headers--gray headers--left">
          Dlaczego my?
        </h4>
        <h2 class="offerDetails__content-header">
          Twoja wygoda, bezpieczeństwo i pełna elastyczność w przestworzach!
        </h2>
        <p class="offerDetails__content-text">
          Zapewniamy szybki i elastyczny transport helikopterem, dostępny o
          każdej porze dnia i nocy. Czas od wyceny do realizacji lotu skracamy
          do minimum, dostosowując się do Twoich potrzeb. Oferujemy organizację
          noclegu dla pilota, jeśli wymaga tego powrót następnego dnia.
          <br /><br />
          Nasze śmigłowce są utrzymywane w najwyższym standardzie przez
          organizację CAMO, a każdy pasażer objęty jest ubezpieczeniem. Możemy
          również zorganizować dojazd na miejsce startu, dostęp do saloników
          business lounge oraz dedykowanego opiekuna.
        </p>
      </div>
      <div class="offerDetails__content-block">
        <div class="offerDetails__content-element">
          <div class="offerDetails__content-point">
            <span>01</span>
            <p>Szybkość i elastyczność</p>
          </div>
          <p class="offerDetails__content-subpoint">
            Organizujemy loty w najkrótszym możliwym czasie, działamy 24/7 i
            dostosowujemy się do Twojego harmonogramu - niezależnie od pory dnia
            czy nocy.
          </p>
        </div>
        <div class="offerDetails__content-element">
          <div class="offerDetails__content-point">
            <span>02</span>
            <p>Najwyższe standardy bezpieczeństwa</p>
          </div>
          <p class="offerDetails__content-subpoint">
            Nasze śmigłowce są pod stałym nadzorem CAMO, spełniają rygorystyczne
            normy techniczne, a każdy pasażer objęty jest pełnym ubezpieczeniem.
            Doświadczeni piloci gwarantują bezpieczny i płynny lot.
          </p>
        </div>
        <div class="offerDetails__content-element">
          <div class="offerDetails__content-point">
            <span>03</span>
            <p>Komfort i dyskrecja</p>
          </div>
          <p class="offerDetails__content-subpoint">
            Oferujemy luksusowe wnętrza z wygodnymi fotelami, klimatyzacją i
            systemami wygłuszania hałasu. Gwarantujemy pełną prywatność i
            możliwość personalizacji helikoptera zgodnie z Twoimi oczekiwaniami.
          </p>
        </div>
        <div class="offerDetails__content-element">
          <div class="offerDetails__content-point">
            <span>04</span>
            <p>Kompleksowa obsługa</p>
          </div>
          <p class="offerDetails__content-subpoint">
            Organizujemy transport na miejsce startu, zapewniamy dostęp do
            business lounge na lotniskach oraz dedykowanego opiekuna, który
            zadba o każdy szczegół Twojej podróży.
          </p>
        </div>
      </div>
    </div>
    <div class="offerDetails__image-block">
      <img src="/images/offers/oferta-image.jpg" alt="Oferta" />
      <div class="offerDetails__image-gradient"></div>
      <div class="offerDetails__image-content">
        <div class="offerDetails__image-content-left">
          <h4 class="headers headers--small headers--lightgray headers--left">
            Zamów lot
          </h4>
          <h3>
            Twoja podniebna<br />
            przygoda zaczyna się tutaj
          </h3>
        </div>
        <div class="offerDetails__image-content-right">
          <p>
            Zapewnij sobie pełną swobodę i oszczędność czasu dzięki lotom
            biznesowym dostosowanym do Twoich potrzeb. Zarezerwuj swój lot już
            teraz i dotrzyj na miejsce sprawnie, komfortowo i bez zbędnych
            przesiadek.
          </p>
          <button class="button button--blue button--long">zamów lot</button>
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
import Faq from "../../components/faq.vue";
import Baner from "../../components/baner.vue";

export default {
  components: {
    Header,
    Footer,
    Faq,
    Baner,
  },
  data() {
    return {
      activeCity: "Wrocław",
      flightData1: [
        { city: "Warszawa", time: "1h 45m" },
        { city: "Poznań", time: "0h 50m" },
        { city: "Gdańsk", time: "2h 15m" },
        { city: "Zakopane", time: "1h 40m" },
        { city: "Szczecin", time: "1h 45m" },
        { city: "Kraków", time: "1h 45m" },
        { city: "Białystok", time: "1h 45m" },
        { city: "Lublin", time: "1h 45m" },
        { city: "Rzeszów", time: "1h 45m" },
        { city: "Katowice", time: "1h 40m" },
      ],
      flightData2: [
        { city: "Wrocław", time: "1h 45m" },
        { city: "Poznań", time: "0h 50m" },
        { city: "Gdańsk", time: "2h 15m" },
        { city: "Zakopane", time: "1h 40m" },
        { city: "Szczecin", time: "1h 45m" },
        { city: "Kraków", time: "1h 45m" },
        { city: "Białystok", time: "1h 45m" },
        { city: "Lublin", time: "1h 45m" },
        { city: "Rzeszów", time: "1h 45m" },
        { city: "Katowice", time: "1h 40m" },
      ],
      cities: [
        "Gdańsk",
        "Szczecin",
        "Bydgoszcz",
        "Olsztyn",
        "Poznań",
        "Białystok",
        "Warszawa",
        "Łódź",
        "Wrocław",
        "Lublin",
        "Katowice",
        "Kraków",
        "Rzeszów",
        "Zakopane",
      ],
    };
  },
};
</script>
