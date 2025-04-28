
<script>
import logo from "@/assets/img/MonyMontySinFondo3.png";

export default {
  name: "Navegacion-1",
  data() {
    return {
      logo,
    };
  },
  methods: {
    irAMonymonty() {
      window.location.href = 'http://localhost:5174/login';
    },
    irADocumentacion() {
      this.$router.push('/Document');
    }
  }


};
</script>
<template>
  <nav>
    <!-- logo -->
    <div>
      <router-link to="/">
        <img :src="logo" alt="Icono de la aplicación" class="app-logo" />
      </router-link>
    </div>

    <!-- menú --> 
    <div class="menu-links">
      <a href="#inicio">Inicio</a>
      <span class="separator">|</span>
      <a href="#productos">Productos</a>
      <span class="separator">|</span>
      <a href="#nosotros">Nosotros</a>
      <span class="separator">|</span>
      <a href="#clientes">Clientes</a>
      <span class="separator">|</span>
      <a href="#contacto">Contacto</a>
      <span class="separator">|</span>
      <a href="" @click.prevent="irADocumentacion">Documentacion</a>
    </div>


    <!-- inicio de sesión -->

    <div>
      <button class="loginMonyMonty" @click="irAMonymonty">Inicio de Sesión</button>
    </div>
  </nav>
</template>


<style>
/* Estilos para tu aplicación */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  height: 4em;
  background-color: var(--color-fondo-nav); 
  padding: 0.3em 0.4em; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
}

nav div {
  display: flex;
  align-items: center; 
}

nav a {
  color: var(--texto-primario);
  text-decoration: none;
  padding: 0.5em 0.3em; 
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s; 
}
nav a:hover {
  background-color: var(--color-fondo-hover); 
  color: var(--color-letra-seleccion);
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
.loginMonyMonty:hover{
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
