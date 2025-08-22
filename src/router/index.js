import {createRouter, createWebHistory} from "vue-router";

// Rutas Principales
import Home from "@/views/paginaWeb/home.vue";
import HomeMonyMonty from "@/feature/monymonty/home.vue";

import Document from "@/views/paginaDocumentacion/documentation.vue";
// Rutas hijas de Documentacion
import MonyMonty from "@/views/paginaDocumentacion/MonyMonty/principal.vue";
import MonteFlor from "@/views/paginaDocumentacion/MonteFlor/principal.vue";

// Rutas hijas de MonyMonty
import MonyMontyApi from "@/views/paginaDocumentacion/MonyMonty/api/api.vue";
import MonyMontyApiUser from "@/views/paginaDocumentacion/MonyMonty/api/apiUser.vue";
import MonyMontyApiAuth from "@/views/paginaDocumentacion/MonyMonty/api/apiAuth.vue";
import EnConstruccion from "@/views/EnConstruccion.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "",
          redirect: "/MonyMonty",
        },
        {
          path: "MonyMonty",
          name: "MonyMonty",
          component: HomeMonyMonty,
        },
        {
          path: "MonteFlor",
          name: "MonteFlor",
          component: EnConstruccion,
        },
        {
          path: "YMCASantander",
          name: "YMCA",
          component: EnConstruccion,
        },
        {
          path: "mg",
          name: "mg",
          component: EnConstruccion,
        },
      ],
    },

    // Vista estática de la documentación
    {
      path: "/documentacion",
      name: "documentacion",
      component: Document,
      children: [
        {
          path: "MonyMonty",
          name: "monyMonty",
          component: MonyMonty,
          children: [
            {
              path: "",
              name: "monyMontyHome",
              component: MonyMontyApi,
            },
            {
              path: "ApiUser",
              name: "monyMontyApiUser",
              component: MonyMontyApiUser,
            },
            {
              path: "ApiAuth",
              name: "monyMontyApiAuth",
              component: MonyMontyApiAuth,
            },
          ],
        },
        {
          path: "MonteFlor",
          name: "monteFlor",
          component: MonteFlor,
        },
      ],
    },
  ],
});

export default router;
