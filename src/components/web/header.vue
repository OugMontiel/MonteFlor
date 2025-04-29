<script>
export default {
  name: "Header de home",
};
</script>

<template>
  <header class="headerHome">
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
    </div>
  </header>
</template>

<style>
/* Estilos para tu aplicación */
.headerHome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  background-color: var(--color-fondo-nav);
  padding: 0.3em 0.4em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.headerHome div {
  display: flex;
  align-items: center;
}

.headerHome a {
  color: var(--texto-primario);
  text-decoration: none;
  padding: 0.5em 0.3em;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}
.headerHome a:hover {
  background-color: var(--color-fondo-hover);
  color: var(--color-letra-seleccion);
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
