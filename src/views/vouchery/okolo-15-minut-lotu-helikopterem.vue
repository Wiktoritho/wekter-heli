<template>
  <section class="vouchers--black-header">
    <Header></Header>
    <section class="vouchers__details">
      <div class="vouchers__nav">
        <a href="/">Strona główna</a>
        <img src="/icons/arrow-side.svg" alt="Arrow Icon" />
        <a href="/vouchery">Vouchery</a>
        <img src="/icons/arrow-side.svg" alt="Arrow Icon" />
        <a v-if="voucher?.title" :href="`/vouchery/${voucher.slug}`">{{ voucher.title }}</a>
      </div>
      <div class="vouchers__details-main">
        <div class="vouchers__details-photo">
          <img class="vouchers__details-image" src="/images/voucher.png" alt="voucher image" />
          <div v-if="voucher?.popular" class="vouchers__details-abs">
            <img src="/icons/wekter-icon.svg" />
            <span>najczęściej wybierane</span>
          </div>
        </div>
        <div class="vouchers__details-block">
          <div class="vouchers__details-container">
            <div>
              <h3>{{ voucher?.title }}</h3>
              <p class="vouchers__details-price">{{ voucher?.price }},00 zł</p>
              <p class="vouchers__details-text">{{ voucher?.desc }}</p>
              <div class="vouchers__details-info">
                <span>
                  <img src="/icons/time-blue.svg" alt="Time Icon" />
                  {{ voucher?.time }}
                </span>
                <div></div>
                <span>
                  <img src="/icons/distance.svg" alt="Distance Icon" />
                  {{ voucher?.distance }}
                </span>
              </div>
            </div>
            <div class="vouchers__details-buttons">
              <div class="vouchers__details-counter">
                <img :class="voucherAmount > 1 ? 'vouchers__details-button-active' : 'vouchers__details-button'" src="/icons/minus.svg" @click="handleAmount('minus')" />
                <span>{{ voucherAmount }}</span>
                <img class="vouchers__details-button-active" src="/icons/plus.svg" @click="handleAmount('plus')" />
              </div>
              <a class="button button--blue button--long">dodaj do koszyka</a>
            </div>
          </div>
          <div class="vouchers__details-container">
            <div>
              <p class="vouchers__details-title">Szczegóły</p>
              <p class="vouchers__details-desc" v-html="voucher?.details"></p>
            </div>
            <div class="vouchers__details-medias">
              <p>Udostępnij</p>
              <div class="vouchers__details-icons">
                <a href="https://x.com">
                  <img src="/icons/x.svg" />
                </a>
                <a href="https://instagram.com">
                  <img src="/icons/ig.svg" />
                </a>
                <a href="https://fb.com">
                  <img src="/icons/fb.svg" />
                </a>
                <a href="https://linkedin.com">
                  <img src="/icons/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="vouchers__similar">
      <h3>Polecane produkty</h3>
      <ul class="vouchers__similar-list">
        <li v-for="similarVoucher in otherVouchers">
          <div class="vouchers__similar-photo">
            <img src="/images/voucher.png"/>
            <div v-if="similarVoucher?.popular" class="vouchers__similar-abs">
            <img src="/icons/wekter-icon.svg" />
            <span>najczęściej wybierane</span>
          </div>
          </div>
          <div class="vouchers__similar-content">
            <p class="vouchers__similar-header">{{ similarVoucher.title }}</p>
            <div class="vouchers__similar-price">
              <span>{{ similarVoucher.price }},00 zł</span>
              <div>
                <img src="/icons/shopping-cart.svg"/>
              </div>
            </div>
          </div>
        </li>
      </ul>
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
      voucherAmount: 1,
      otherVouchers: null,
    };
  },
  methods: {
    async fetchVouchers() {
      if (useStore().vouchers.length === 0) {
        const response = await axios.get("/jsons/vouchers.json");
        const vouchers = response.data;
        this.voucher = vouchers.filter((voucher) => voucher.slug === window.location.pathname.split("/")[2])[0];
        this.otherVouchers = vouchers.filter((voucher) => voucher.slug !== window.location.pathname.split("/")[2]);
      } else {
        this.voucher = useStore().vouchers.filter((voucher) => voucher.slug === window.pathname.split("/")[2])[0];
        this.otherVouchers = useStore().vouchers.filter((voucher) => voucher.slug !== window.pathname.split("/")[2]);
      }
    },
    handleAmount(method) {
      if (method === "plus") {
        this.voucherAmount++;
      } else {
        if (this.voucherAmount === 1) {
          return;
        } else {
          this.voucherAmount--;
        }
      }
    },
  },
  mounted() {
    this.fetchVouchers();
  },
};
</script>
