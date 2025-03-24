<template>
  <section class="blogs">
    <RecommendedBlogs :data="highlightedDatas" :highlightedPaths="highlightedPaths"></RecommendedBlogs>
    <div class="blogs__filters">
      <div class="blogs__filters-content" ref="scrollDestination">
        <p class="blogs__filters-header">Filtruj</p>
        <div class="blogs__filters-wrapper">
          <div class="blogs__multiselect-wrapper">
            <Multiselect v-model="selectedCategory" :options="categories" :canClear="false" :canDeselect="false" :caret="false"></Multiselect>
            <img src="/icons/arrow-search.svg" />
          </div>
          <div class="blogs__filters-border"></div>
          <div class="blogs__multiselect-wrapper">
            <Multiselect v-model="selectedSort" :options="sort" :canClear="false" :canDeselect="false" :caret="false"></Multiselect>
            <img src="/icons/arrow-search.svg" />
          </div>
          <div class="blogs__filters-border"></div>
          <div class="blogs__filters-input-wrapper">
            <input v-model="searchInput" class="blogs__filters-input" type="text" id="search" placeholder="Szukaj..." />
          </div>
        </div>
      </div>
      <p class="blogs__filters-reset" @click="resetFilters">Resetuj filtry</p>
    </div>
    <AllBlogs :data="paginatedData" :imagePaths="imagePaths"></AllBlogs>
    <div class="blogs__pagination" v-if="totalPages > 1">
      <button class="blogs__pagination-button blogs__pagination-button--prev" @click="prevPage" :disabled="currentPage === 1">
        <img src="/icons/arrow-side-header.svg" />
      </button>

      <button v-for="page in paginationPages" :key="page" class="blogs__pagination-button" :class="{ 'blogs__pagination-button--active': page === currentPage }" @click="changePage(page)">
        {{ page }}
      </button>

      <button class="blogs__pagination-button blogs__pagination-button--next" @click="nextPage" :disabled="currentPage === totalPages">
        <img src="/icons/arrow-side-header.svg" />
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import RecommendedBlogs from "./recommendedBlogs.vue";
import AllBlogs from "./allBlogs.vue";
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    RecommendedBlogs,
    AllBlogs,
    Multiselect,
  },
  data() {
    return {
      allData: [],
      filteredData: [],
      categories: ["Wszystkie"],
      highlightedDatas: [],
      imagePaths: [],
      highlightedPaths: [],
      currentPage: 1,
      itemsPerPage: 6,
      searchInput: "",
      selectedCategory: "Wszystkie",
      selectedSort: "Sortowanie: najnowsze",
      sort: ["Sortowanie: najnowsze", "Sortowanie: najstarsze"],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredData.slice(start, start + this.itemsPerPage);
    },
     paginationPages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        if (i === 1 || i === this.totalPages || (i >= this.currentPage - 1 && i <= this.currentPage + 1)) {
          pages.push(i);
        } else if (i === this.currentPage - 2 || i === this.currentPage + 2) {
          pages.push("...");
        }
      }
      return pages;
    }
  },
  methods: {
    async fetchBlogs() {
      const response = await axios.get("/jsons/blogs.json");
      this.allData = response.data;
      const uniqueCategories = [...new Set(this.allData.map((el) => el.category))];
      this.categories = ["Wszystkie", ...uniqueCategories];

      this.highlightedDatas = this.allData.filter((el) => el.highlight);
      if (this.highlightedDatas.length > 0) {
        const latestHighlightedPosts = this.highlightedDatas.sort((a, b) => this.parseDate(b.date) - this.parseDate(a.date)).slice(0, 2);
        this.highlightedPaths = latestHighlightedPosts.map((el) => `/images/blogs/${el.image}`);
      }

      this.applyFilters();
    },
    applyFilters() {
      let data = [...this.allData];

      if (this.selectedCategory !== "Wszystkie") {
        data = data.filter((el) => el.category.toLowerCase() === this.selectedCategory.toLowerCase());
      }

      if (this.searchInput) {
        data = data.filter((el) => el.title.toLowerCase().includes(this.searchInput.toLowerCase()));
      }

      data = data.sort((a, b) => (this.selectedSort === "Sortowanie: najnowsze" ? this.parseDate(b.date) - this.parseDate(a.date) : this.parseDate(a.date) - this.parseDate(b.date)));

      this.filteredData = data;
      this.imagePaths = this.filteredData.map((el) => `/images/blogs/${el.image}`);
    },
    parseDate(dateString) {
      const months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
      const [day, monthName, year] = dateString.split(" ");
      const month = months.indexOf(monthName.toLowerCase());
      return new Date(`${year}-${month + 1}-${day}`);
    },
    resetFilters() {
      this.selectedCategory = "Wszystkie";
      this.selectedSort = "Sortowanie: najnowsze";
      this.searchInput = "";
      this.currentPage = 1;
      this.scrollToFilters();
    },
    changePage(page) {
      if (page !== "...") {
        this.currentPage = page;
        this.scrollToFilters();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToFilters();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToFilters();
      }
    },
     scrollToFilters() {
      this.$refs.scrollDestination.scrollIntoView({ behavior: "smooth" });
    },
  },
  watch: {
    selectedCategory: "applyFilters",
    selectedSort: "applyFilters",
    searchInput: "applyFilters",
  },
  mounted() {
    this.fetchBlogs();
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
