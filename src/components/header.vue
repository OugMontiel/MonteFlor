<script>
import logo from "@/assets/img/MonyMontySinFondo3.png";

export default {
  name: "Header-principal de Monte Flor",
  data() {
    return {
      logo,
    };
  },
  components: {
  },
  methods: {
    irAInicio() {
      this.$router.push('/');
    },
    methods: {
    irADocumentacion() {
      this.$router.push('/documentacion');
    },

  },

  }

};
</script>

<template>
  <header class="header">
   <div class="login-logo">
      <img :src="logo" alt="Icono de la aplicación" class="logo" @click="irAInicio" />
    </div>
    <!-- menú -->
    <div class="menuDocument">
      <router-link to="/"> Inicio </router-link>
      <router-link to="/documentacion"> Documentacion </router-link>
    </div>

  </header>
</template>

<style>
/* Estilos para tu aplicación */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  padding: 0.3em 0.4em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.logo {
  height: 3rem;
  cursor: pointer;
}

.menuDocument {
  display: flex;
  align-items: center;
  gap: 0.3em;
}

</style>
