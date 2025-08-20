<script>
import logo from "@/assets/img/MonyMontySinFondo3.png";
import headerHomeView from "@/components/web/headerWeb.vue";

export default {
  name: "HeaderPrincipal",
  data() {
    return {
      logo,
    };
  },
  components: {
    headerHomeView,
  },
  methods: {
    irAInicio() {
      this.$router.push("/");
    },
    irAMonymonty() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <!-- Header principal -->
  <header class="flex items-center justify-around px-4 py-2 bg-white shadow">
    <div class="flex items-center gap-6 cursor-pointer" @click="irAInicio">
      <div>
        <img :src="logo" alt="Icono de la aplicación" class="logo" />
      </div>
      <h1 class="text-xl font-bold">MonteFlor</h1>
    </div>

    <nav class="flex gap-6">
      <a href="#" class="nav-item">MonyMonty</a>
      <a href="#" class="nav-item">YMCA Santander </a>
      <a href="#" class="nav-item">M & G</a>
    </nav>

    <!-- Botones con PrimeVue -->
    <div class="flex gap-3">
      <Button label="Iniciar Sesión" outlined @click="irAMonymonty" />
      <Divider layout="vertical" />
      <Button label="Registrarse" severity="primary" @click="irAMonymonty" />
    </div>
  </header>

  <!-- Tab de Navegacion -->
  <div>
    <headerHomeView />
  </div>
</template>

<style>
.logo {
  height: 3rem;
  cursor: pointer;
}
</style>
