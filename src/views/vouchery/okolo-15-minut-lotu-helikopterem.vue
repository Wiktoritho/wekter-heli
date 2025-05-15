<template>
  <section class="vouchers--black-header">
    <Header></Header>
    <section class="vouchers__details">
      <div class="vouchers__nav">
        <a>Strona główna</a>
        <img src="/icons/arrow-side.svg" alt="Arrow Icon" />
        <a>Vouchery</a>
        <img src="/icons/arrow-side.svg" alt="Arrow Icon" />
        <a v-if="voucher?.title" :href="`/vouchery/${voucher.slug}`">{{ voucher.title }}</a>
      </div>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "../../components/header.vue";
import Footer from "../../components/footer.vue";
import { useStore } from "../../store";
import axios from "axios";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      voucher: null,
    };
  },
  methods: {
    async fetchVouchers() {
      if (useStore().vouchers.length === 0) {
        const response = await axios.get("/jsons/vouchers.json");
        const vouchers = response.data;
        this.voucher = vouchers.filter((voucher) => voucher.slug === window.location.pathname.split("/")[2])[0];
      } else {
        this.voucher = useStore().vouchers.filter((voucher) => voucher.slug === window.pathname.split("/")[2])[0];
      }
    },
  },
  mounted() {
    this.fetchVouchers();
  },
};
</script>
