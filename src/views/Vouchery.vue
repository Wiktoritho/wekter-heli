<template>
  <Header></Header>
  <Baner image="/images/voucher-baner.png" title="Vouchery" :from="['Vouchery']" titleVersion="big" titleWidth="wide" version="high" :gap="16" :linkTo="'/vouchery'"></Baner>
  <section class="vouchers">
    <div v-for="(voucher, index) in vouchers" :key="index" class="vouchers__voucher">
      <div class="vouchers__image">
        <img src="/images/voucher.png" alt="Voucher" />
        <div v-if="voucher.popular" class="vouchers__image-popular">
          <img src="/icons/wekter-icon.svg" alt="Wekter Icon" />
          <p>Najczęściej wybierane</p>
        </div>
      </div>
      <div class="vouchers__content">
        <div class="vouchers__content-text">
          <h4>{{ voucher.title }}</h4>
          <p>{{ voucher.desc }}</p>
        </div>
        <div class="vouchers__icons">
          <div>
            <img src="/icons/time-blue.svg" alt="Time Icon" />
            <p>Czas trwania lotu: <br />{{ voucher.time }}</p>
          </div>
          <div>
            <img src="/icons/distance.svg" alt="Distance Icon" />
            <p>
              Długość lotu: <br />
              {{ voucher.distance }}
            </p>
          </div>
        </div>
        <div class="vouchers__links">
            <p>{{ voucher.price }} zł</p>
            <div>
                <button class="button button--blue button--long">Dodaj do koszyka</button>
                <a :href="`/vouchery/${voucher.slug}`">szczegóły</a>
            </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Baner from "../components/baner.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
import { useStore } from "../store";
import axios from "axios";

export default {
  components: {
    Header,
    Baner,
    Footer,
  },
  data() {
    return {
      vouchers: [],
    };
  },
  methods: {
    async fetchVouchers() {
      if (useStore().vouchers.length === 0) {
        const response = await axios.get("/jsons/vouchers.json");
        this.vouchers = response.data;
      } else {
        this.vouchers = useStore().vouchers;
      }
      },
      createLinkSlug(text) {
        return text.toLowerCase().replaceAll(" ", "-")
    }
  },
  mounted() {
    this.fetchVouchers();
  },
};
</script>
