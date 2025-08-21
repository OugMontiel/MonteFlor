// Constantes de Header y Navegación
import logoIMonyMonty from "@/assets/img/MonyMontySinFondo3.png";
import logoYMCA from "@/assets/img/MonyMontySinFondo3.png";
import logoIMG from "@/assets/img/MonyMontySinFondo3.png";
import logoIMonteFlor from "@/assets/img/MonyMontySinFondo3.png";

const monymonty = {
  name: "monymonty",
  label: "Mony Monty",
  route: "/monymonty",
  logo: {
    src: logoIMonyMonty,
    alt: "Logo de Mony Monty",
  },
  tabs: [
    {id: "inicio", label: "Inicio"},
    {id: "nosotros", label: "Nosotros"},
    {id: "productos", label: "Productos"},
    {id: "clientes", label: "Clientes"},
    {id: "contacto", label: "Contacto"},
  ],
};
const YMCA = {
  name: "ymca",
  label: "YMCA Santander",
  route: "/ymca-santander",
  logo: {
    src: logoYMCA,
    alt: "Logo de YMCA Santander",
  },
};
const Mg = {
  name: "mg",
  label: "M & G",
  route: "/mg",
  logo: {
    src: logoIMG,
    alt: "Logo de M & G",
  },
};
const MonteFlor = {
  name: "MonteFlor",
  label: "Monte Flor",
  route: "/",
  logo: {
    src: logoIMonteFlor,
    alt: "Logo de Monte Flor",
  },
};

export const NavConstante = {
  monymonty,
  YMCA,
  Mg,
  MonteFlor,
};
