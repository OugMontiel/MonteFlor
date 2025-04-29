import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/paginaWeb/home.vue";
import document from "@/views/paginaDocumentacion/documentation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // Vista estática de la documentación
    {
      path: "/document",
      name: "Vista de la documentación",
      component: document,
    },
  ],
});

export default router;
