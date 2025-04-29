import {createRouter, createWebHistory} from "vue-router";

// Rutas Principales
import Home from "@/views/paginaWeb/home.vue";
import document from "@/views/paginaDocumentacion/documentation.vue";

// rutas hijas de MonyMonty
import MonyMonty from "@/views/paginaDocumentacion/MonyMonty/principal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // Vista estática de la documentación
    {
      path: "/documentacion",
      name: "Vista de la documentación",
      component: document,
      children: [
        {
          path: "MonyMonty",
          name: "documentación de MonyMonty",
          component: MonyMonty,
        },
      ],
    },
  ],
});

export default router;
