<template>
  <div class="about__pilots-content">
    <h4 class="headers headers--small headers--gray headers--left">Załoga</h4>
    <h3 class="about__pilots-header">Zaufaj pilotom z prawdziwą pasją</h3>
    <p class="about__pilots-text">
      Poznaj nasz zespół doświadczonych pilotów i specjalistów, dla których lotnictwo to nie tylko praca, ale i pasja. Dzięki ich profesjonalizmowi każda podróż jest bezpieczna, komfortowa i
      niezapomniana.
    </p>
  </div>
  <div class="about__pilots-slider">
    <div class="about__pilots-slide" :class="{ 'about__pilots-slide--active': activeIndex === index }" v-for="(pilot, index) in pilots" :key="index" @click="activeIndex = index">
      <div>
        <span>Pilot</span>
        <h3 v-html="pilot.name"></h3>
        <p>{{ pilot.description }}</p>
      </div>
      <img :src="pilot.photo" :alt="pilot.name" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pilots: [
        {
          name: "Jan <br> Kowalski",
          description:
            "Doświadczony pilot z tysiącami godzin w powietrzu. Specjalista od lotów widokowych i transportowych, dla którego bezpieczeństwo i komfort pasażerów to priorytet. Pasjonat lotnictwa, który chętnie dzieli się swoją wiedzą i miłością do latania.",
          photo: "/images/slider-pilot1.png",
        },
        {
          name: "Łukasz <br> Nowak",
          description:
            "Doświadczony pilot z tysiącami godzin w powietrzu. Specjalista od lotów widokowych i transportowych, dla którego bezpieczeństwo i komfort pasażerów to priorytet. Pasjonat lotnictwa, który chętnie dzieli się swoją wiedzą i miłością do latania.",
          photo: "/images/slider-pilot1.png",
        },
        {
          name: "Kamil <br> Dąbrowski",
          description:
            "Doświadczony pilot z tysiącami godzin w powietrzu. Specjalista od lotów widokowych i transportowych, dla którego bezpieczeństwo i komfort pasażerów to priorytet. Pasjonat lotnictwa, który chętnie dzieli się swoją wiedzą i miłością do latania.",
          photo: "/images/slider-pilot1.png",
        },
      ],
      activeIndex: 0,
    };
  },
};
</script>
