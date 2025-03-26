<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__main">
        <div class="footer__logos">
          <a href="/">
            <img src="/icons/wekter_logo.svg" alt="Wekter Logo" />
          </a>
          <div class="footer__icons">
            <a href="https://x.com" target="_blank">
              <img src="/icons/x.svg" alt="X Icon" />
            </a>
            <a href="https://instagram.pl" target="_blank">
              <img src="/icons/ig.svg" alt="Instagram Icon" />
            </a>
            <a href="https://facebook.pl" target="_blank">
              <img src="/icons/fb.svg" alt="Facebook Icon" />
            </a>
            <a href="https://linkedin.pl" target="_blank">
              <img src="/icons/linkedin.svg" alt="Linkedin Icon" />
            </a>
          </div>
        </div>
        <div class="footer__lists">
          <div
            class="footer__list"
            v-for="(list, index) in lists"
            :key="index"
            :style="{
              height: expandedLists[index] ? (list.header === 'Oferta' ? '350px' : '200px') : '67px',
            }">
            <h3 @click="toggleList(index)">
              {{ list.header }} <span><img src="/icons/plus.svg" alt="Plus icon" /></span>
            </h3>
            <ul>
              <li v-for="(link, linkIndex) in list.links" :key="linkIndex">
                <a>{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__newsletter">
        <img src="/icons/newsletter.svg" alt="Newsletter Icon" />
        <h3>Newsletter</h3>
        <p>Bądź na bieżąco z nowościami, promocjami i ciekawymi artykułami!</p>
        <button class="button button--blue button--long">zapisz się</button>
      </div>
    </div>
    <div class="footer__creators">
      <p>
        Copyright © 2025 by Wekter Helicopters.<br />
        All rights reserved.
      </p>
      <p>Design & wdrożenie: <a href="crafton.pl" target="_blank">Crafton.pl</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          header: "Wekter",
          links: ["O nas", "Vouchery", "Blog", "Kontakt"],
        },
        {
          header: "Zakupy",
          links: ["Koszyk", "Rejestracja", "Logowanie"],
        },
        {
          header: "Oferta",
          links: ["Air Taxi", "Loty widokowe", "Cargo", "Szkolenia licencyjne", "Eventy i wydarzenia", "Loty grupowe", "Zaręczyny", "Loty zapoznawcze", "Fotografowanie i filmowanie"],
        },
        {
          header: "",
          links: ["Loty grupowe", "Zaręczyny", "Loty zapoznawcze", "Fotografowanie i filmowanie"],
        },
      ],
      expandedLists: Array(4).fill(false),
    };
  },
  methods: {
    toggleList(index) {
      this.expandedLists[index] = !this.expandedLists[index];
      this.expandedLists = [...this.expandedLists];
    },
  },
};
</script>
