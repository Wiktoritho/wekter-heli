<template>
  <div class="baner">
    <img v-if="!noPicture" class="baner__image" :src="image" alt="Baner" />
    <div
      v-else
      class="baner__image"
      :style="{ backgroundColor: 'black', height: `${height}px` }"
    ></div>
    <div
      :class="`baner__content baner__content--${version}`"
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
                ? '/blog'
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
      <h2 :class="`baner__title baner__title--${titleVersion}`">{{ title }}</h2>
      <p
        class="baner__text"
        :class="{ 'baner__text--big': textVersion === 'big' }"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
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
