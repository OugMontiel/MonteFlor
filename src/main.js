import "./assets/style.css";

import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import 'primeicons/primeicons.css';

// Componentes primevue
import Button from "primevue/button";
import Divider from "primevue/divider";
import Card from "primevue/card";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.app-dark'
    },
  },
});

// Registrar Componentes primevue
app.component("PrimeButton", Button);
app.component("PrimeDivider", Divider);
app.component("PrimeCard", Card);

app.mount("#app");
