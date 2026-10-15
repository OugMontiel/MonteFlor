// Tokens de Diseño MonyMonty
import "@ougmontiel/monymonty-tokens/build/web/MonyMontyStyle.css";
import "./assets/style.css";
import "./assets/main.css";

import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import MonyMontyPreset from "./theme/preset.js";
import "primeicons/primeicons.css";

// Componentes primevue
import Button from "primevue/button";
import Divider from "primevue/divider";
import Card from "primevue/card";
import Tag from "primevue/tag";
import Avatar from "primevue/avatar";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: MonyMontyPreset,
    options: {
      darkModeSelector: ".app-dark",
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
    },
  },
});

// Registrar Componentes primevue globalmente
app.component("PrimeButton", Button);
app.component("PrimeDivider", Divider);
app.component("PrimeCard", Card);
app.component("PrimeTag", Tag);
app.component("PrimeAvatar", Avatar);

app.mount("#app");
