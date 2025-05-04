<template>
    <Header></Header>
    <Baner
    image="/images/kontakt-baner.png"
    title="Skontaktuj się z nami jeśli masz jakiekolwiek pytania"
    text="Planujesz podniebną przygodę lub potrzebujesz szczegółowych informacji? Napisz lub zadzwoń – chętnie pomożemy i dopasujemy ofertę do Twoich potrzeb!"
    :from="['Kontakt']"
    titleVersion="small"
    titleWidth="wide"
    version="high"
    :gap="16"
    :linkTo="'/kontakt'"
    titleSpacing="0.04em"
    :allowMediaLinks="true"
    :form="true"
    ></Baner>
    <Faq></Faq>
    <Footer></Footer>
</template>


<script>
import Baner from "../components/baner.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
import Faq from "../components/faq.vue";

export default {
  components: {
    Header,
    Footer,
    Baner,
    Faq,
  },
};
</script>