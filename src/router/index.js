import {createRouter, createWebHistory} from "vue-router";

// Rutas Principales
import Home from "@/views/paginaWeb/home.vue";
import document from "@/views/paginaDocumentacion/documentation.vue";

// rutas hijas de Documentacion
import MonyMonty from "@/views/paginaDocumentacion/MonyMonty/principal.vue";
import MonteFlor from "@/views/paginaDocumentacion/MonteFlor/principal.vue";

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
        {
          path: "MonteFlor",
          name: "documentación de MonteFlor",
          component: MonteFlor,
        },
      ],
    },
  ],
});

export default router;
