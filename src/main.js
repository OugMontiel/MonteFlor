import "./assets/style.css";

import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

// Componentes primevue
import Button from "primevue/button";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

// Registrar Componentes primevue
app.component("Button", Button);

app.mount("#app");
