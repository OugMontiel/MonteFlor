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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  background-color: var(--color-fondo-nav);
  padding: 0.3em 0.4em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.header div {
  display: flex;
  align-items: center;
}

.login-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 60%;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.login-logo {
  max-width: 120px;
}

.loginMonyMonty {
  background-color: var(--color-fondo-boton);
  color: var(--texto-primario);
  padding: 1em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.loginMonyMonty:hover {
  background-color: var(--color-fondo-hover);
  color: var(--color-letra-seleccion);
}

.app-logo {
  max-width: auto;
  height: 3em;
}

.menu-links {
  display: flex;
  align-items: center;
  gap: 0.3em;
}

.menu-links .separator {
  color: var(--texto-primario);
  padding: 0 0.3em;
  user-select: none;
  pointer-events: none;
}
</style>
