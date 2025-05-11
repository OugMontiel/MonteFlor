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
    <div>
      <button class="loginMonyMonty" @click="irAMonymonty">Inicio de Sesión</button>
    </div>
</template>

<style>
/* Estilos para tu aplicación */

.loginMonyMonty {
  background-color: var(--color-fondo-boton);
  color: var(--texto-primario);
  padding: 1em 1em;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.loginMonyMonty:hover {
  font-weight: bold;
  background-color: var(--color-fondo-hover);
  color: var(--color-letra-seleccion);
  cursor: pointer;
  transform: scale(1.07);
}

</style>
