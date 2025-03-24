<template>
<ul class="blogs__list">
    <li class="blogs__element" v-for="(data, index) in data" :key="index">
        <a :href="`/wekter-heli/${data.url}`">
          <div class="blogs__image">
            <img :src="imagePaths[index]" :alt="data.title"/>
          </div>
          <p class="blogs__date">{{ data.date }}</p>
          <p class="blogs__title">{{ data.title }}</p>
          <div class="blogs__arrow-block"><img src="/src/assets/icons/arrow-side-header.svg" alt="Arrow" /></div>
          <div class="blogs__share-block"><img src="/src/assets/icons/share-arrow.svg" alt="Share Arrow" /></div>
        </a>
      </li>
</ul>
</template>

<script>
export default {
    props: {
        data: Array,
        imagePaths: Array,
    }
}
</script>