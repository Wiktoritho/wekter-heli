<template>
  <Header></Header>
  <Baner
    image="/wekter-heli/src/assets/images/blog-baner.png"
    title="Wszystko o lotach"
    text="Wszystko, co musisz wiedzieć o lataniu helikopterami – od najnowszych technologii i konstrukcji po relacje z lotów, ciekawostki i porady"
    from="Blog"
    titleVersion="big"
    version="low"
    :hideButtonsFromHeader=true></Baner>
  <Blogs></Blogs>
  <Footer></Footer>
</template>

<script>
import Baner from "../components/baner.vue";
import Blogs from "../components/blogs.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";

export default {
  components: {
    Header,
    Footer,
    Baner,
    Blogs,
  },
};
</script>
