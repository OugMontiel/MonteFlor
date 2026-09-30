import Home from "./views/home.vue";
import HomeMonyMonty from "../monymonty/views/home.vue";

const monteFlorRoutes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "home",
        component: HomeMonyMonty,
      },
      {
        path: "monymonty",
        name: "monymonty",
        component: HomeMonyMonty,
      },
      {
        path: "MonyMonty",
        redirect: "/monymonty",
      },
    ],
  },
];

export default monteFlorRoutes;
