<template>
  <header class="header" ref="headerRef" :style="{overflow : mobileMenu ? 'visible !important' : 'visible'}">
    <nav class="header__nav">
      <a href="/">
        <img src="/icons/wekter_logo.svg" alt="Wekter Logo" />
      </a>
      <div class="header__container">
        <ul class="header__list">
          <li>
            <a href="/oferta" :style="splitedUrl === 'oferta' ? {'text-decoration': 'underline'} : {}"><span>Oferta</span> <span><img src="/icons/arrow-down.svg" alt="Arrow Icon" /></span></a>
            <div class="header__offers">
              <div class="header__offer">
                <div class="header__offer-header">
                  <div>
                    <img src="/icons/briefcase.svg" alt="Briefcase Icon" />
                  </div>
                  <h3>Biznes</h3>
                </div>
                <ul class="header__offer-list">
                  <li>
                    <a href="/oferta/air-taxi">Air Taxi <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/oferta/cargo">Cargo <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/oferta/eventy-i-wydarzenia">Eventy i wydarzenia <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/oferta/udzialy"> Udziały <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/oferta/fotografowanie-i-filmowanie">Fotografowanie i filmowanie <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                </ul>
              </div>
              <div class="header__offer">
                <div class="header__offer-header">
                  <div>
                    <img src="/icons/avalanche.svg" alt="Avalanche Icon" />
                  </div>
                  <h3>loty widokowe</h3>
                </div>
                <ul class="header__offer-list">
                  <li>
                    <a href="/oferta/loty-widokowe">Loty widokowe <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/oferta/loty-grupowe">Loty grupowe <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/oferta/loty-zapoznawcze">Loty zapoznawcze <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/oferta/zareczyny">Zaręczyny <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/oferta/szkolenia-licencyjne-dla-pilotow">Szkolenia licencyjne dla pilotów <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li><a href="/o-nas" :style="splitedUrl === 'o-nas' ? {'text-decoration': 'underline'} : {}">O nas</a></li>
          <li><a href="/vouchery" :style="splitedUrl === 'vouchery' ? {'text-decoration' : 'underline'} : {}">Vouchery</a></li>
          <li>
            <a><span>Heliporty</span> <span><img src="/icons/arrow-down.svg" alt="Arrow Icon" /></span></a>
            <div class="header__offers">
              <div class="header__offer">
                <div class="header__offer-header">
                  <div>
                    <img src="/icons/briefcase.svg" alt="Briefcase Icon" />
                  </div>
                  <h3>Lokalizacje</h3>
                </div>
                <ul class="header__offer-list">
                  <li>
                    <a href="/heliporty/sosnowka">Sosnówka <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/heliporty/polkowice">Polkowice <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                  <li>
                    <a href="/heliporty/wroclaw">Wrocław <span><img src="/icons/arrow-side-header.svg" alt="Arrow Icon" /></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="/blog" :style="splitedUrl === 'blog' ? {'text-decoration': 'underline'} : {}">Blog</a>
          </li>
          <li>
            <a href="/kontakt" :style="splitedUrl === 'kontakt' ? {'text-decoration': 'underline'} : {}">Kontakt</a>
          </li>
        </ul>
      </div>
      <div class="header__buttons">
        <div class="header__switch" v-if="showButtons">
          <button
            @click="setSwitch('Loty widokowe')"
            :class="{
              'header__button--active': switchValue === 'Loty widokowe',
              header__button: switchValue !== 'Loty widokowe',
            }">
            Loty widokowe
          </button>
          <button
            @click="setSwitch('Loty biznesowe')"
            :class="{
              'header__button--active': switchValue === 'Loty biznesowe',
              header__button: switchValue !== 'Loty biznesowe',
            }">
            Loty biznesowe
          </button>
          <div class="header__button--slider" :style="{ left: switchValue === 'Loty biznesowe' ? '50%' : '0%' }"></div>
        </div>
        <img src="/icons/flag.svg" alt="Flag Icon" />
        <img src="/icons/profile.svg" alt="Profile Icon" />
        <div class="header__icon-container">
          <img src="/icons/shopping-bag.svg" alt="Shopping Bag Icon" />
        </div>
        <img id="menu-icon" src="/icons/menu.svg" alt="Menu Icon" @click="mobileMenu = true" />
      </div>
      <div class="header__mobile" :style="{ transform: `${mobileMenu ? 'translateX(0%)' : 'translateX(100%)'}` }">
        <div class="header__mobile-top">
          <div class="header__mobile-top-nav">
            <a href="/">
              <img src="/icons/wekter_logo.svg" alt="Wekter Logo" />
            </a>
            <div class="header__mobile-icons">
              <img src="/icons/profile.svg" alt="Profile Icon" />
              <img src="/icons/shopping-bag.svg" alt="Shopping Bag Icon" />
              <img id="close-icon" src="/icons/close.svg" alt="Close Icon" @click="mobileMenu = false" />
            </div>
          </div>
          <div class="header__mobile-top-main" :style="{ transform: `${(offerMobile || heliportsMobile) && mobileMenu ? 'translateX(-100%)' : 'translateX(0%)'}` }">
            <ul>
              <li>
                <a href="/">Strona główna</a>
              </li>
              <li id="mobile-offer" @click="offerMobile = true">
                Oferta <span><img src="/icons/arrow-mobile.svg" alt="Arrow" /></span>
                <div class="header__mobile-offer" :style="{ transform: `${heliportsMobile ? 'translateX(224%)' : 'translateX(112%)'}` }">
                  <p id="mobile-offer-close" @click.stop="offerMobile = false">
                    <span><img src="/icons/arrow-mobile.svg" alt="Arrow Icon" /></span>Oferta
                  </p>
                  <ul>
                    <li><a href="/oferta/air-taxi">Air Taxi</a></li>
                    <li><a href="/oferta/loty-widokowe">Loty widokowe</a></li>
                    <li><a href="/oferta/cargo">Cargo</a></li>
                    <li><a href="/oferta/eventy-i-wydarzenia">Eventy i wydarzenia</a></li>
                    <li><a href="/oferta/loty-grupowe">Loty grupowe</a></li>
                    <li><a href="/oferta/zareczyny">Zaręczyny</a></li>
                    <li><a href="/oferta/loty-zapoznawcze">Zaręczyny</a></li>
                    <li><a href="/oferta/fotografowanie-i-filmowanie">Fotografowanie i filmowanie</a></li>
                    <li><a href="/oferta/szkolenia-licencyjne-dla-pilotow">Szkolenia do licencji</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/o-nas">O nas</a>
              </li>
              <li>
              <a href="/vouchery">Vouchery</a>
              </li>
              <li id="mobile-heliports" @click="heliportsMobile = true">
                Heliporty <span><img src="/icons/arrow-mobile.svg" alt="Arrow" /></span>
                <div class="header__mobile-heliports" :style="{ transform: `${offerMobile ? 'translateX(224%)' : 'translateX(112%)'}` }">
                  <p id="mobile-heliports-close" @click.stop="heliportsMobile = false">
                    <span><img src="/icons/arrow-mobile.svg" alt="Arrow Icon" /></span>Heliporty
                  </p>
                  <ul>
                    <li>
                      <a href="/heliporty/sosnowka">Sosnówka</a>
                    </li>
                    <li>
                      <a href="/heliporty/polkowice">Polkowice</a>
                    </li>
                    <li>
                      <a href="/heliporty/wroclaw">Wrocław</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header__mobile-bottom">
          <div class="header__mobile-switch" v-if="showButtons">
            <button
              @click="setSwitch('Loty widokowe')"
              :class="{
                'header__mobile-button--active': switchValue === 'Loty widokowe',
                'header__mobile-button': switchValue !== 'Loty widokowe',
              }">
              Loty widokowe
            </button>
            <button
              @click="setSwitch('Loty biznesowe')"
              :class="{
                'header__mobile-button--active': switchValue === 'Loty biznesowe',
                'header__mobile-button': switchValue !== 'Loty biznesowe',
              }">
              Loty biznesowe
            </button>
            <div class="header__mobile-button--slider" :style="{ left: switchValue === 'Loty biznesowe' ? '50%' : '0%' }"></div>
          </div>
          <div class="header__mobile-footer">
            <div class="header__mobile-languages">
              <div class="header__mobile-language--active">EN</div>
              <div class="header__mobile-language">PL</div>
            </div>
            <div class="header__mobile-rights">Copyright © 2025 by Wekter Helicopters. All rights reserved.</div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useStore } from "../store";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(_ScrollTrigger);

export default {
  props: {
    showButtons: Boolean,
  },
  computed: {
    switchValue() {
      return useStore().switch;
    },
  },
  data() {
    return {
      mobileMenu: false,
      offerMobile: false,
      heliportsMobile: false,
      splitedUrl: null,
    };
  },
  methods: {
    setSwitch(string) {
      useStore().set("switch", string);
    },
    checkUrl() {
      this.splitedUrl = window.location.pathname.split("/")[1]
    },
    scrollMenu() {
      _ScrollTrigger.create({
      trigger: ".header",
      start: "bottom top",
      end: "top top",
      onEnter: () => {
        if (window.innerWidth > 900) {
          gsap.set(this.$refs.headerRef, { position: "fixed", top: 0, backgroundColor: "white", marginTop: "0px", paddingBlock: "40px 32px", color: "black", overflow: "visible", borderBottom: "1px solid black" });
          if (document.querySelector(".header__switch")) {
            gsap.set(".header__switch", { color: "white" });
          }
          gsap.set(".header__nav > a img", { filter: "invert(1)" });
          gsap.set(".header__list > li > a > span img", { filter: "invert(1)" });
          gsap.set(".header__buttons div img:last-of-type", { filter: "invert(1)" });
          gsap.set(".header__buttons img:nth-of-type(2)", { filter: "invert(1)" });
          gsap.set("#menu-icon", { filter: "invert(1)" });
          gsap.fromTo(this.$refs.headerRef, { y: "-100%" }, { y: "0%", duration: 0.3, ease: "power2.out" });
        } else {
          gsap.set(this.$refs.headerRef, { position: "fixed", top: 0, backgroundColor: "white", marginTop: "0px", paddingBlock: "20px", color: "black", overflow: "visible", borderBottom: "1px solid black" });
          if (document.querySelector(".header__mobile-switch")) {
            gsap.set(".header__mobile-switch", { color: "white" });
          }
          gsap.set(".header__mobile-languages", { color: "white" });
          gsap.set(".header__nav > a img", { filter: "invert(1)" });
          gsap.set(".header__list > li > span img", { filter: "invert(1)" });
          gsap.set(".header__buttons div img:last-of-type", { filter: "invert(1)" });
          gsap.set(".header__buttons img:nth-of-type(2)", { filter: "invert(1)" });
          gsap.set("#menu-icon", { filter: "invert(1)" });
          gsap.fromTo(this.$refs.headerRef, { y: "-100%" }, { y: "0%", duration: 0.3, ease: "power2.out" });
        }
      },
      onLeaveBack: () => {
        if (window.innerWidth > 900) {
          gsap.set(this.$refs.headerRef, { position: "absolute", top: 0, backgroundColor: "transparent", marginTop: "40px", paddingBlock: "0px", overflow: "visible", color: "white", borderBottom: "none" });
          gsap.set(".header__nav > a img", { filter: "invert(0)" });
          gsap.set(".header__list > li >  a > span img", { filter: "invert(0)" });
          gsap.set(".header__buttons div img:last-of-type", { filter: "invert(0)" });
          gsap.set(".header__buttons img:nth-of-type(2)", { filter: "invert(0)" });
          gsap.set("#menu-icon", { filter: "invert(0)" });
          gsap.to(this.$refs.headerRef, { y: "0%", duration: 0.3, ease: "power2.in" });
        } else {
          gsap.set(this.$refs.headerRef, { position: "absolute", top: 0, backgroundColor: "transparent", marginTop: "0px", paddingBlock: "20px", color: "white", overflow: "hidden", height: "auto", borderBottom: "none" });
          gsap.set(".header__mobile", { height: "calc(100vh + 20px)" });
          gsap.set(".header__nav > a img", { filter: "invert(0)" });
          gsap.set(".header__list > li > span img", { filter: "invert(0)" });
          gsap.set(".header__buttons div img:last-of-type", { filter: "invert(0)" });
          gsap.set(".header__buttons img:nth-of-type(2)", { filter: "invert(0)" });
          gsap.set("#menu-icon", { filter: "invert(0)" });
          gsap.to(this.$refs.headerRef, { y: "0%", duration: 0.3, ease: "power2.in" });
        }
      },
    });
    }
  },
  mounted() {
    if (!window.location.pathname.includes('/vouchery/')) {
      this.scrollMenu();
    }
    this.checkUrl();
  },
  watch: {
    mobileMenu(newValue) {
      if (newValue) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "15px";
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    },
  },
};
</script>
