<template>
  <div class="faq">
    <div class="faq__infos">
      <h4 class="headers headers--small headers--gray headers--left">FAQ</h4>
      <h3 class="faq__header">Poznaj odpowiedź na Twoje pytanie!</h3>
      <p class="faq__text">Nie znalazłeś odpowiedzi?<br />Skontaktuj się z nami bezpośrednio.</p>
      <button class="button button--blue button--long">Kontakt</button>
    </div>
    <div class="faq__content">
      <div class="faq__block" :class="{'faq__block--active' : activeIndexes[index]}" v-for="(question, index) in questions" :key="index" @click="toggleList(index)">
        <p class="faq__question">
          {{ question.question }}
          <span><img src="/icons/plus.svg" alt="See more" /></span>
        </p>
        <p class="faq__answer">{{ question.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "Ile osób może lecieć na pokładzie helikoptera?",
          answer:
            "Na pokładzie helikoptera mogą znajdować się maksymalnie cztery osoby - pilot oraz trzech dodatkowych pasażerów. Niestety nie ma możliwości zwiększenia limitu osób w tego typu pojeździe.",
        },
        {
          question: "Ile jest miejsc w helikopterze?",
          answer: "Na pokładzie helikoptera są 4 miejsca, w tym 1 przeznaczone dla pilota i 3 dla pasażerów.",
        },
        {
          question: "Jak długi może być lot?",
          answer: "Długość lotu zależy od woli klienta, organizujemy loty każdej długości.",
        },
        {
          question: "Czy dzieci mogą lecieć helikopterem?",
          answer: "Oczywiście, dzieci w każdym wieku mogą lecieć.",
        },
        {
          question: "Czy można nagrywać lot i robić zdjecia?",
          answer: "Oczywiście. Dodatkowo, na życzenia pasażera możemy nagrać oraz udostępnić lot z użyciem zainstalowanej na pokładzie kamery sferycznej.",
        },
        {
          question: "Czy helikopter może lądować gdzie chce?",
          answer:
            "Oczywiście posiadamy specjalnie wyznaczone lotniska i miejsca, w których mamy zezwolenie na bezpieczne lądowanie na danym terenie. W skrajnych sytuacjach helikopter może jednak lądować tak naprawdę wszędzie tam, gdzie jest wystarczająca ilość wolnego miejsca dla tego typu pojazdu.",
        },
        {
          question: "Czy obowiązuje limit wagowy dla pasażera?",
          answer: "Limit wagowy dla pasażera to 130kg.",
        },
      ],
      activeIndexes: Array(7).fill(false),
    };
  },
  methods: {
    toggleList(index) {
      this.activeIndexes[index] = !this.activeIndexes[index];
      this.activeIndexes = [...this.activeIndexes];
    },
  },
};
</script>
