<template>
  <Header></Header>
  <Baner
    title="Trendsetter transportu lotniczego — AIR Taxi: podróżuj szybko i wygodnie"
    text="AIR Taxi jest innowacyjną formą transportu lotniczego, która oferuje szybką i wygodną podróż z Warszawy do dowolnego miasta w Polsce. Jest to nowoczesna usługa transportu lotniczego, która dostępna jest dla klientów indywidualnych oraz biznesowych, szukających wyjątkowego doświadczenia podróżowania."
    :from="['Blog', 'Trendsetter transportu lotniczego — AIR Taxi: podróżuj szybko i wygodnie']"
    titleVersion="small"
    version="high"
    textVersion="big"
    :noPicture="true"
    :height="880"
    :gap="32"></Baner>
  <section class="blog">
    <div class="blog__absolute-container">
      <img src="/images/blogs/blog-8.png" alt="Blog Image" />
      <div class="blog__absolute-share">
        <div class="blog__absolute-block">
          <span>Data</span>
          <span v-if="getCurrentBlog">{{ getCurrentBlog.date }}</span>
        </div>
        <div class="blog__absolute-block">
          <span>Udostępnij</span>
          <a href="https://www.x.com">
            <img src="/icons/x.svg" alt="X Icon" />
          </a>
          <a href="https://www.fb.com">
            <img src="/icons/fb.svg" alt="Facebook Icon" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="/icons/linkedin.svg" alt="Linkedin Icon" />
          </a>
        </div>
      </div>
    </div>
    <div class="blog__main">
      <div class="blog__main-side">
        <div class="blog__side-links">
          <div class="blog__side-bar" :style="{ background: gradient }"></div>
          <p class="blog__side-time">
            <span>
              <img src="/icons/clock.svg" alt="Clock icon" />
            </span>
            {{ readingTime }} minut czytania
          </p>
          <p class="blog__side-header">Spis treści</p>
          <div class="blog__side-content">
            <p>Powrót na początek</p>
            <ol class="blog__side-content-list">
              <li v-for="(element, index) in listElement" :key="index" class="blog__side-content-element">{{ element }}</li>
            </ol>
          </div>
        </div>
        <div class="blog__side-share">
          <p>Udostępnij artykuł znajomym</p>
          <div>
            <a href="https://www.x.com">
              <img src="/icons/x.svg" alt="X Icon" />
            </a>
            <a href="https://www.fb.com">
              <img src="/icons/fb.svg" alt="Facebook Icon" />
            </a>
            <a href="https://www.linkedin.com">
              <img src="/icons/linkedin.svg" alt="Linkedin Icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="blog__main-content">
        asdlasldasld
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Baner from "../../components/baner.vue";
import Footer from "../../components/footer.vue";
import Header from "../../components/header.vue";
import axios from "axios";
import { useStore } from "../../store";

export default {
  components: {
    Header,
    Footer,
    Baner,
  },
  data() {
    return {
      readingTime: 12,
      gradient: "",
      listElement: [
        "Co to jest AIR Taxi i jak działa ta nowoczesna forma transportu lotniczego?",
        "Czy warto zdecydować się na lot AIR Taxi z Warszawy do innego miasta w Polsce?",
        "Jakie są korzyści wynikające z podróży AIR Taxi?",
        "Jakie miasta w Polsce można odwiedzić z Warszawy, korzystając z usług AIR Taxi?",
        "Jakie są koszty lotów AIR Taxi w Polsce?",
        "Bezpieczeństwo w locie AIR Taxi — jakie standardy są stosowane?",
      ],
    };
  },
  computed: {
    getCurrentBlog() {
      const slug = window.location.pathname.split("/").slice(1)[window.location.pathname.split("/").slice(1).length - 1];
      const currentBlog = useStore().blogs.filter((blog) => blog.url === slug);
      return currentBlog[0];
    },
  },
  methods: {
    async fetchBlogs() {
      const response = await axios.get("/jsons/blogs.json");
      useStore().set("blogs", response.data);
    },
    computedBarProgress() {
      const percent = (this.readingTime / 60) * 100;
      this.gradient = `linear-gradient(to right, #3b5eab 0%, #3b5eab ${percent}%, #dedede ${percent}%, #dedede 100%)`;
    },
  },
  mounted() {
    this.computedBarProgress();
    if (useStore().blogs.length === 0) {
      this.fetchBlogs();
    }
  },
};
</script>
