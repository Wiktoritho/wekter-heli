<template>
  <Header></Header>
  <Baner
    title="Polityka prywatności"
    text="Twoja prywatność i bezpieczeństwo Twoich danych są dla nas priorytetem. Niniejsza polityka prywatności wyjaśnia, jakie informacje zbieramy, w jaki sposób je przetwarzamy i jakie prawa przysługują Ci w związku z ich przetwarzaniem."
    :from="['Polityka prywatności']"
    titleVersion="small"
    version="high"
    textVersion="big"
    :noPicture="true"
    :linkTo="'/polityka-prywatnosci'"
    :height="520"
    :gap="32"></Baner>
  <section class="policy" ref="baseScroll">
    <div class="policy__side">
      <div class="policy__side-bar" :style="{ background: gradient }"></div>
      <h5 class="policy__side-header">Spis Treści</h5>
      <ol class="policy__side-list">
        <li @click="$refs.baseScroll.scrollIntoView({ behavior: 'smooth' })">Powrót na początek</li>
        <li v-for="(element, index) in listElement" @click="scrollToView(index)" :key="index">
          {{ element }}
        </li>
      </ol>
      <div class="policy__side-print">
        <p>Pobierz w PDF</p>
      </div>
    </div>
    <div class="policy__main" ref="mainContent">
      <div class="policy__main-element">
        <h2>Postanowienia ogólne</h2>
        <p :ref="setTextsRefs">
          Celem Wekter Helicopters jest ochrona prywatności osób odwiedzających strony internetowe firmy. Wszystkie osoby, których dane osobowe są przetwarzane przez Wekter Helicopters, muszą przez
          cały czas mieć pewność, że prywatność danej osoby jest szanowana i że z należytą starannością obchodzą się z jej danymi osobowymi. Zbieramy od Ciebie informacje, gdy rejestrujesz się na
          naszej stronie lub wypełniasz formularz. Możesz jednak odwiedzać naszą witrynę anonimowo. Wekter Helicopters jest wyłącznym właścicielem informacji zebranych w tej witrynie i nie będziemy
          udostępniać Twoich danych osobom trzecim spoza naszej organizacji, chyba że będzie to konieczne do spełnienia Twojej prośby.
        </p>
        <p><b>Dane osobowe gromadzone przez serwis obejmują:</b></p>
        <ul>
          <li><span>Dane kontaktowe</span> – imię, nazwisko, adres e-mail, numer telefonu;</li>
          <li><span>Dane wysyłkowe</span> – adres;</li>
          <li><span>Dane transakcyjne</span> – informacje dotyczące zamówień voucherów na loty, w tym preferencje dotyczące rezerwacji;</li>
          <li><span>Inne informacje przekazane dobrowolnie</span> – np. podczas kontaktu przez formularz na stronie.</li>
        </ul>
      </div>
      <div class="policy__main-element">
        <h2>Podstawy przetwarzania danych</h2>
        <p :ref="setTextsRefs">Podanie danych jest dobrowolne, ale niezbędne do realizacji usług. Twoje dane wykorzystujemy wyłącznie w celu:</p>
        <ul>
          <li>Realizacji zamówień i rezerwacji lotów,</li>
          <li>Umożliwienia kontaktu i obsługi klienta,</li>
          <li>Wysyłania powiadomień dotyczących zamówień,</li>
          <li>Ulepszania naszej strony internetowej i dopasowywania jej do Twoich preferencji,</li>
          <li>Spełnienia obowiązków wynikających z przepisów prawa.</li>
        </ul>
      </div>
      <div class="policy__main-element">
        <h2>Postanowienia końcowe</h2>
        <p :ref="setTextsRefs">
          Aby przejrzeć i zaktualizować swoje dane osobowe w celu zapewnienia ich dokładności, skontaktuj się z nami pod adresem
          <a href="mailto:loty@wekter-helicopters.eu">loty@wekter-helicopters.eu</a>
        </p>
        <p>W innych sprawach dotyczących danych osobowych i polityki prywatności prosimy o kontakt pod adresem <a href="mailto:loty@wekter-helicopters.eu">loty@wekter-helicopters.eu</a></p>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Baner from "../components/baner.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";

export default {
  components: {
    Header,
    Footer,
    Baner,
  },
  data() {
    return {
      gradient: "",
      listElement: ["1. Postanowienia ogólne", "2. Podstawy przetwarzania danych", "3. Postanowienia końcowe"],
      textsRefs: [],
    };
  },
  methods: {
    scrollToView(index) {
      const texts = this.textsRefs;
      texts.forEach((text, textIndex) => {
        if (index === textIndex - 3) {
          text.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    },
    setTextsRefs(el) {
      if (el) {
        this.textsRefs.push(el);
      }
    },
    computedBarProgress() {
      const content = this.$refs.mainContent;
      const rect = content.getBoundingClientRect();

      const elementHeight = content.clientHeight;
      const topOffset = rect.top;

      let progress = 0;

      if (topOffset < window.innerHeight && topOffset + elementHeight > 0) {
        progress = ((window.innerHeight - topOffset) / (elementHeight + window.innerHeight)) * 100;

        if (progress <= 78.5) {
          this.percent = progress * (100 / 78.5);
        } else {
          this.percent = 100;
        }
      } else {
        this.percent = 0;
      }
      this.gradient = `linear-gradient(to right, #3b5eab 0%, #3b5eab ${this.percent}%, #dedede ${this.percent}%, #dedede 100%)`;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.computedBarProgress);
  },
};
</script>
