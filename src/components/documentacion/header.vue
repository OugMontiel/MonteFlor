<script>
export default {
  name: "Header de Documentacion",
};
</script>

<template>
  <header class="HeaderDoc">
    <!-- menú -->
    <div class="menu-links">
      <router-link to="/documentacion/MonyMonty">MonyMonty</router-link>
      <router-link to="/documentacion/MonteFlor">MonteFlor</router-link>
    </div>
  </header>
</template>

<style>
/* Estilos para tu aplicación */
.HeaderDoc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  background-color: var(--color-fondo-nav);
  padding: 0.3em 0.4em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.HeaderDoc div {
  display: flex;
  align-items: center;
}

.HeaderDoc a {
  color: var(--texto-primario);
  text-decoration: none;
  padding: 0.5em 0.3em;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}
.HeaderDoc a:hover {
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
