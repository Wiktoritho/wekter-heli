import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "appStore",
  state: () => ({
    switch: "Loty widokowe",
  }),
  actions: {
    set(key, value) {
      if (key in this) {
        this[key] = value;
      }
    },
  },
});
