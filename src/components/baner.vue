<template>
    <div class="baner">
        <img class="baner__image" :src="image" alt="Baner"/>
        <div :class='`baner__content baner__content--${version}`'>
            <p class="baner__link">
                <a href="/">Strona główna</a>
                <img src="/icons/arrow-side-header.svg" alt="Arrow"/>
                <a>{{ from }}</a>
            </p>
            <h2 :class="`baner__title baner__title--${titleVersion}`">{{ title }}</h2>
            <p class="baner__text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        text: String,
        from: String,
        titleVersion: String,
        version: String,
        hideButtonsFromHeader: Boolean
    }
}
</script>