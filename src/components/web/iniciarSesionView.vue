<script>
import logo from "@/assets/img/MonyMontySinFondo3.png";

export default {
  name: "Header-principal de Monte Flor",
  data() {
    return {
      logo,
    };
  },
  methods: {
    irAMonymonty() {
      this.$router.push('/');
    },

  }

};
</script>

<template>
  <div class="container">
    <div class="options">
      <button class="btn-login" @click="irAMonymonty">Iniciar Sesion</button>
    </div>
    <div class="options">
      <button class="btn-register" @click="irAMonymonty">Registrarse</button>
    </div>
  </div>

</template>

<style>
/* Estilos para tu aplicación */
.container {
  display: flex;
  justify-content: center;
}

.options {
  cursor: pointer;
  color: var(--texto-primario);
  padding: 1em 1em;
  font-size: var(--texto-tamano-boton);
  background: var(--color-fondo-boton-claro);
  border: 2px solid rgb(0, 0, 255);
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.options:hover {
  color: var(--color-letra-seleccion);
}


</style>
