<template>
  <Header></Header>
  <Baner
    title="Trendsetter transportu lotniczego — AIR Taxi: podróżuj szybko i wygodnie"
    text="AIR Taxi jest innowacyjną formą transportu lotniczego, która oferuje szybką i wygodną podróż z Warszawy do dowolnego miasta w Polsce. Jest to nowoczesna usługa transportu lotniczego, która dostępna jest dla klientów indywidualnych oraz biznesowych, szukających wyjątkowego doświadczenia podróżowania."
    :from="[
      'Blog',
      'Trendsetter transportu lotniczego — AIR Taxi: podróżuj szybko i wygodnie',
    ]"
    titleVersion="small"
    version="high"
    textVersion="big"
    :noPicture="true"
    :height="880"
    :gap="32"
  ></Baner>
  <section class="blog" ref="baseScroll">
    <div class="blog__absolute-container">
      <img src="/images/blogs/blog-8.png" alt="Blog Image" />
      <div class="blog__absolute-share">
        <div class="blog__absolute-block">
          <span>Data</span>
          <span v-if="getCurrentBlog">{{ getCurrentBlog.date }}</span>
        </div>
        <div class="blog__absolute-block">
          <span>Udostępnij</span>
          <a href="https://www.x.com">
            <img src="/icons/x.svg" alt="X Icon" />
          </a>
          <a href="https://www.fb.com">
            <img src="/icons/fb.svg" alt="Facebook Icon" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="/icons/linkedin.svg" alt="Linkedin Icon" />
          </a>
        </div>
      </div>
    </div>
    <div class="blog__main">
      <div class="blog__main-side">
        <div class="blog__side-links">
          <div class="blog__side-bar" :style="{ background: gradient }"></div>
          <p class="blog__side-time">
            <span>
              <img src="/icons/clock.svg" alt="Clock icon" />
            </span>
            {{ readingTime }} minut czytania
          </p>
          <p class="blog__side-header">Spis treści</p>
          <div class="blog__side-content">
            <p @click="$refs.baseScroll.scrollIntoView({ behavior: 'smooth' })">
              Powrót na początek
            </p>
            <ol class="blog__side-content-list">
              <li
                v-for="(element, index) in listElement"
                @click="scrollToView(index)"
                :key="index"
                class="blog__side-content-element"
              >
                {{ element }}
              </li>
            </ol>
          </div>
        </div>
        <div class="blog__side-share">
          <p>Udostępnij artykuł znajomym</p>
          <div>
            <a href="https://www.x.com">
              <img src="/icons/x.svg" alt="X Icon" />
            </a>
            <a href="https://www.fb.com">
              <img src="/icons/fb.svg" alt="Facebook Icon" />
            </a>
            <a href="https://www.linkedin.com">
              <img src="/icons/linkedin.svg" alt="Linkedin Icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="blog__main-content" ref="mainContent">
        <div class="blog__main-section">
          <h2 class="blog__main-header">
            Co to jest AIR Taxi i jak działa ta nowoczesna forma transportu
            lotniczego?
          </h2>
          <p class="blog__main-text" :ref="setTextsRefs">
            AIR Taxi, zwane również lotnictwem międzymiastowym, to nowoczesna
            forma transportu oferująca krótkie loty. AIR Taxi jest często oparte
            na zaawansowanych technologiach, a jej głównym celem jest
            zapewnienie szybkiego i efektywnego transportu pasażerów pomiędzy
            zatłoczonymi miastami. Pasażerowie mogą korzystać z usług AIR Taxi,
            rezerwując loty za pośrednictwem platformy internetowej. Koncepcja
            AIR Taxi zakłada, że pasażerowie będą mogli skorzystać z usług
            transportowych lotniczych na żądanie, podobnie jak w przypadku
            tradycyjnych taksówek. Po zarezerwowaniu lotu pasażerowie będą mieli
            dostęp do pobliskiego lądowiska lub heliportu, z którego odbywa się
            operacja AIR Taxi.
          </p>
          <ul class="blog__main-unorganized-list">
            <li>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor</span
              >
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </li>
            <li>
              <span
                >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium</span
              >
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </li>
            <li>
              <span
                >Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself</span
              >, because it is pain, but because occasionally circumstances
              occur in which toil and pain can procure him some great pleasure.
              To take a trivial example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage from it?
            </li>
          </ul>
        </div>
        <div class="blog__main-section">
          <h2 class="blog__main-header">
            Czy warto zdecydować się na lot AIR Taxi z Warszawy do innego miasta
            w Polsce?
          </h2>
          <p class="blog__main-text" :ref="setTextsRefs">
            AIR Taxi wykorzystuje małe helikoptery, które są zoptymalizowane pod
            kątem podróży na krótkie dystanse. Helikoptery dostępne w naszej
            ofercie mogą zabrać na pokład maksymalnie kilku pasażerów. Dzięki
            temu można uniknąć konieczności korzystania z dużych heliportów i
            długiego oczekiwania na odlot. Klienci AIR Taxi mogą korzystać z
            wygodnego rezerwowania lotów online lub za pomocą kontaktu
            telefonicznego i mailowego. Mogą wybrać dogodne godziny wylotu i
            przylotu oraz preferowany rodzaj helikoptera, jeśli jest dostępny.
            Helikoptery są dobrze wyposażone i zapewniają wygodne miejsca
            siedzące oraz odpowiednie przestrzenie bagażowe.
          </p>
          <div class="blog__main-quote">
            <img src="/icons/quote.svg" alt="Quote Icon" />
            <p>
              The wise man therefore always holds in these matters to this
              principle of selection: he rejects pleasures to secure other
              greater pleasures, or else he endures pains to avoid worse pains.
            </p>
          </div>
        </div>
        <div class="blog__main-section">
          <h2 class="blog__main-header">
            Jakie są korzyści wynikające z podróży AIR Taxi?
          </h2>
          <p class="blog__main-text" :ref="setTextsRefs">
            Decyzja o skorzystaniu z lotu AIR Taxi z Warszawy do innego miasta w
            Polsce zależy od kilku czynników, które warto wziąć pod uwagę.
            Pierwszym z nich jest czas podróży, który skraca się do minimum.
            Jeśli to właśnie on jest dla Ciebie kluczowy, AIR Taxi może być
            atrakcyjną opcją, ponieważ unikasz potencjalnych zatorów drogowych i
            ograniczeń związanych z tradycyjnym transportem. Dzięki AIR Taxi
            może podróżować w komfortowych warunkach o każdej porze dnia i nocy.
            Dzięki AIR Taxi możesz dotrzeć do różnych miejsc i zagwarantować
            sobie dotarcie na miejsce o wyznaczonej porze. Możesz również
            uniknąć niektórych procedur związanych z tradycyjnymi lotami, takich
            jak odprawa bezpieczeństwa czy oczekiwanie na bagaż.
          </p>
          <div class="blog__main-image-sub">
            <img src="/images/blog-image.png" alt="Blog Image" />
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical
            </p>
          </div>
          <p class="blog__main-text">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
        </div>
        <div class="blog__main-section">
          <h2 class="blog__main-header">
            Jakie miasta w Polsce można odwiedzić z Warszawy, korzystając z
            usług AIR Taxi?
          </h2>
          <p class="blog__main-text" :ref="setTextsRefs">
            Obecnie w Polsce usługi AIR Taxi są jeszcze na wczesnym etapie
            rozwoju, jednak my jesteśmy zawsze gotowi. Oto kilka miast, które
            mogą być potencjalnymi celami podróży z Warszawy przy wykorzystaniu
            usług AIR Taxi:
          </p>
          <ol class="blog__main-organized-list">
            <li>
              <span>Kraków</span> jest jednym z najważniejszych i
              najpiękniejszych miast w Polsce. Dystans między Warszawą a
              Krakowem wynosi około 290 km, co czyni go potencjalnym celem
              podróży z użyciem AIR Taxi.
            </li>
            <li>
              <span>Gdańsk</span> jest położony nad Morzem Bałtyckim i jest
              jednym z najważniejszych portów w Polsce.
            </li>
            <li>
              <span>Wrocław</span> to dynamiczne i historyczne miasto, położone
              we wschodniej części Dolnego Śląska. Odległość między Warszawą a
              Wrocławiem wynosi około 350 km.
            </li>
            <li>
              <span>Poznań</span> to jedno z najważniejszych miast w zachodniej
              Polsce, znane z historycznego Starego Rynku i innych atrakcji.
            </li>
          </ol>
          <p class="blog__main-text">
            Warto sprawdzić dostępne usługi AIR Taxi w Warszawie oraz
            kontaktować się z naszymi operatorami, aby uzyskać szczegółowe
            informacje na temat tras i połączeń dostępnych aktualnie z Warszawy.
          </p>
        </div>
        <div class="blog__main-section">
          <h2 class="blog__main-header">
            Jakie są koszty lotów AIR Taxi w Polsce?
          </h2>
          <p class="blog__main-text" :ref="setTextsRefs">
            Ceny lotów AIR Taxi uzależnione są przede wszystkim od długości
            trasy, jaką helikopter musi pokonać. Szczegóły dotyczące ceny
            ustalane są indywidualnie. Chcąc poznać szczegółową ofertę,
            skontaktuj się z nami, a my wycenimy Twoją podróż w niedługim
            czasie. Ceny różnią się w zależności od długości trasy. Na
            całościowy koszt lotu składa się przelot do klienta, dolot na
            miejsce docelowe oraz powrót do bazy.
          </p>
        </div>
        <div class="blog__main-section">
          <h2 class="blog__main-header">
            Bezpieczeństwo w locie AIR Taxi — jakie standardy są stosowane?
          </h2>
          <p class="blog__main-text" :ref="setTextsRefs">
            Bezpieczeństwo w locie AIR Taxi jest priorytetem dla operatorów i
            branży lotniczej. Chociaż każdy operator może mieć swoje specyficzne
            procedury i standardy, istnieją ogólne wytyczne i regulacje, które
            mają na celu zapewnienie bezpieczeństwa operacji AIR Taxi. Personel
            obsługujący AIR Taxi, w tym piloci i personel naziemny, przechodzi
            odpowiednie szkolenia i certyfikacje. Operatorzy AIR Taxi regularnie
            monitorują swoje pojazdy i przeprowadzają rutynowe kontrole
            techniczne w celu zapewnienia, że są one w pełni sprawne i zgodne z
            przepisami. Pasażerowie w trakcie lotu są odpowiednio zabezpieczeni,
            a każdego z nich obowiązuje ubezpieczenie, które zawiera się w cenie
            lotu.
          </p>
        </div>
        <div class="blog__main-question">
          <h3>Masz dodatkowe pytania dotyczące wynajmu helikoptera?</h3>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore 👇
          </p>
          <button class="button button--blue button--long">Zamów lot</button>
        </div>
      </div>
    </div>
    <div class="blog__similar">
      <h4 class="headers headers--small headers--gray">Zobacz również</h4>
      <h2 class="headers headers--big headers--margin-semi-medium">
        Nie przegap wartościowych informacji – zgłębiaj temat jeszcze bardziej!
      </h2>
      <ul class="blogs__list">
        <li
          class="blogs__element"
          v-for="(data, index) in similarBlogs"
          :key="index"
        >
          <a :href="`/blog/${data.url}`">
            <div class="blogs__image">
              <img :src="`/images/blogs/${data.image}`" :alt="data.title" />
            </div>
            <p class="blogs__date">{{ data.date }}</p>
            <p class="blogs__title">{{ data.title }}</p>
            <div class="blogs__arrow-block">
              <img src="/icons/arrow-side-header.svg" alt="Arrow" />
            </div>
            <div class="blogs__share-block">
              <img src="/icons/share-arrow.svg" alt="Share Arrow" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Baner from "../../components/baner.vue";
import Footer from "../../components/footer.vue";
import Header from "../../components/header.vue";
import axios from "axios";
import { useStore } from "../../store";

export default {
  components: {
    Header,
    Footer,
    Baner,
  },
  data() {
    return {
      readingTime: 12,
      gradient: "",
      listElement: [
        "Co to jest AIR Taxi i jak działa ta nowoczesna forma transportu lotniczego?",
        "Czy warto zdecydować się na lot AIR Taxi z Warszawy do innego miasta w Polsce?",
        "Jakie są korzyści wynikające z podróży AIR Taxi?",
        "Jakie miasta w Polsce można odwiedzić z Warszawy, korzystając z usług AIR Taxi?",
        "Jakie są koszty lotów AIR Taxi w Polsce?",
        "Bezpieczeństwo w locie AIR Taxi — jakie standardy są stosowane?",
      ],
      textsRefs: [],
      percent: 0,
    };
  },
  computed: {
    getCurrentBlog() {
      const slug = window.location.pathname.split("/").slice(1)[
        window.location.pathname.split("/").slice(1).length - 1
      ];
      const currentBlog = useStore().blogs.filter((blog) => blog.url === slug);
      console.log(slug);
      console.log(useStore().blogs);
      
      
      return currentBlog[0];
    },
    similarBlogs() {
      return useStore().blogs.slice(0, 3);
    },
  },
  methods: {
    async fetchBlogs() {
      const response = await axios.get("/jsons/blogs.json");
      useStore().set("blogs", response.data);
    },
    scrollToView(index) {
      const texts = this.textsRefs;
      texts.forEach((text, textIndex) => {
        if (index === textIndex) {
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
        progress =
          ((window.innerHeight - topOffset) /
            (elementHeight + window.innerHeight)) *
          100;

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
    if (useStore().blogs.length === 0) {
      this.fetchBlogs();
    }
    window.addEventListener("scroll", this.computedBarProgress);
  },
};
</script>
