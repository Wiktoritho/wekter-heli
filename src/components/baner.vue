<template>
  <div class="baner">
    <img v-if="!noPicture" class="baner__image" :src="image" alt="Baner" />
    <div
      v-else
      class="baner__image"
      :style="{ backgroundColor: 'black', height: `${height}px` }"
    ></div>
    <div
      :class="`baner__content baner__content--${version} baner__content--${width}`"
      :style="{ gap: `${gap}px` }"
    >
      <div class="baner__link">
        <a href="/">Strona główna</a>
        <div
          class="baner__link-wrapper"
          v-for="(link, index) in from"
          :key="index"
        >
          <img src="/icons/arrow-side-header.svg" alt="Arrow" />
          <a
            :href="
              index === 0
                ? linkTo
                : link
                    .toLowerCase()
                    .replaceAll('—', '')
                    .replaceAll(' ', '-')
                    .replace(':', '')
                    .replace('.', '')
            "
            >{{ cutLink(link) }}</a
          >
        </div>
      </div>
      <h2 :class="`baner__title baner__title--${titleVersion} baner__title--${titleWidth}`" :style="`letter-spacing: ${titleSpacing}`">{{ title }}</h2>
      <p
        class="baner__text"
        :class="{ 'baner__text--big': textVersion === 'big', 'baner__text--medium': textVersion === 'medium' }"
      >
        {{ text }}
      </p>
      <div v-if="allowMediaLinks" class="baner__medias">
        <ul>
          <li>
            <a href="https://x.com" target="_blank">
              <img src="/icons/x.svg" alt="X Icon"/>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <img src="/icons/ig.svg" alt="Ig Icon"/>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              <img src="/icons/fb.svg" alt="Fb Icon"/>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank">
              <img src="/icons/linkedin.svg" alt="Linkedin Icon"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="form" class="baner__form">
      <BanerForm></BanerForm>
    </div>
    <div class="baner__gradient"></div>
  </div>
</template>

<script>
import BanerForm from './BanerForm.vue';

export default {
  props: {
    image: String,
    title: String,
    text: String,
    from: Array,
    titleVersion: String,
    version: String,
    noPicture: Boolean,
    height: Number,
    gap: Number,
    textVersion: String,
    linkTo: String,
    width: String,
    titleWidth: String,
    titleSpacing: String,
    allowMediaLinks: Boolean,
    form: Boolean
  },
  components: {
    BanerForm
  },
  methods: {
    cutLink(link) {
      if (window.innerWidth <= 900 && link.length > 40) {
        return link.slice(0, 40) + "...";
      } else {
        return link;
      }
    },
  },
};
</script>
