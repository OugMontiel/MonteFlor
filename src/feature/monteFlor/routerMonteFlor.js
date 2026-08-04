import Home from "./views/home.vue";

const monteFlorRoutes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "",
        redirect: "/MonyMonty",
      },
    ],
  },
];

export default monteFlorRoutes;
