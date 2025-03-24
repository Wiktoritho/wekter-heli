<template>
  <div class="blogs__recommended">
    <div v-for="(data, index) in data" :key="index" :class="index === 0 ? 'blogs__recommended-blog--highlighted' : 'blogs__recommended-blog'">
      <a :href="`/${data.url}`">
        <div :class="index === 0 ? 'blogs__recommended-image--highlighted' : 'blogs__recommended-image'">
          <img :src="highlightedPaths[index]" :alt="data.title" />
        </div>
        <p :class="index === 0 ? 'blogs__recommended-date--highlighted' : 'blogs__recommended-date'">{{ data.date }}</p>
        <p :class="index === 0 ? 'blogs__recommended-title--highlighted' : 'blogs__recommended-title'">{{ data.title }}</p>
        <div class="blogs__arrow-block"><img src="/icons/arrow-side-header.svg" alt="Arrow" /></div>
        <div class="blogs__share-block"><img src="/icons/share-arrow.svg" alt="Share Arrow" /></div>
        <div class="blogs__blue-block">
          <img src="/icons/wekter-icon.svg" alt="Wekter Icon" />
          <span>Polecane</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    highlightedPaths: Array,
  },
};
</script>
