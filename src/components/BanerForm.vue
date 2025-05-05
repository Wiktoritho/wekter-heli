<template>
  <form>
    <div class="baner__form-labels">
      <label>
        Imię
        <input placeholder="Imię" name="name" id="nameInput" v-model="name" type="text" />
      </label>
      <label>
        Nazwisko
        <input placeholder="Nazwisko" name="surname" id="surnameInput" v-model="surname" type="text" />
      </label>
    </div>
    <div class="baner__form-label">
      <label>
        Email
        <input placeholder="Email" name="email" id="emailInput" v-model="email" type="text" />
      </label>
    </div>
    <div class="baner__form-label">
      <label>
        Temat
        <Multiselect v-model="selectedTopic" :options="topics" :canClear="false" :canDeselect="false" :caret="false" :placeholder="'Wybierz temat'"></Multiselect>
        <img src="/icons/arrow-search.svg" />
      </label>
    </div>
    <div class="baner__form-label">
      <label>
        Twoja wiadomosć
        <textarea placeholder="Napisz w czym potrzebujesz pomocy"></textarea>
      </label>
    </div>
    <div class="baner__form-label">
      <label>
        Zgoda RODO
        <label>
          <input type="checkbox" v-model="rodoAccept" />
          <span>Wyrażam zgodę na przetwarzanie moich danych osobowych przez Wekter Helicopters w celu realizacji zapytania zgodnie z <a href="/polityka-prywatnosci">Polityką Prywatności.</a></span>
        </label>
      </label>
    </div>
    <div class="baner__form-submit">Wyślij wiadomość</div>
  </form>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      selectedTopic: null,
      topics: ["Temat1", "Temat2"],
      name: null,
      surname: null,
      email: null,
      textarea: null,
      rodoAccept: false,
    };
  },
};
</script>
