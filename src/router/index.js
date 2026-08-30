import {createRouter, createWebHistory} from "vue-router";

// Rutas Principales
import monteFlorRoutes from "../feature/monteFlor/routerMonteFlor.js";
import monyMontyRoutes from "../feature/monymonty/routerMonyMonty.js";
//import mgRoutes from "../feature/mg/routerMg.js";
//import ymcaSantanderRoutes from "../feature/ymca/routerYmca.js";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...monteFlorRoutes,
    ...monyMontyRoutes,
    //...ymcaSantanderRoutes,
    //...mgRoutes,
  ],
});

export default router;
