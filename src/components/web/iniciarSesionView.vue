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
      window.location.href = 'http://localhost:5174/'
    },

  }

};
</script>

<template>
  <div class="container-button">
      <button class="button-MonyMonty" @click="irAMonymonty">Abrir aplicativo web</button>
  </div>

</template>

<style>
/* Estilos para tu aplicación */
.container-button {
  display: flex;
  justify-content: center;
}

.button-MonyMonty {
  cursor: pointer;
  color: var(--texto-primario);
  padding: 0.1em 1em;
  font-size: var(--texto-tamano-boton);
  background: var(--color-fondo-boton-claro);
  border-radius: 5px;
  margin: 0 0.5em;
  transition:
    background-color 0.3s,
    color 0.2s;
}

.button-MonyMonty:hover {  
  color: var(--texto-primario);
  background: var(--color-acento);
}
</style>
