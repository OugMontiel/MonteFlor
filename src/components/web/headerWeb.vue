<script>
export default {
  name: "Header-dehome",
  methods: {
    irADocumentacion() {
      this.$router.push('/documentacion');
    },

  },
};
</script>

<template>
  <!-- menú -->
  <div class="menu-links">
    <a href="#inicio">Inicio</a>
    <span class="separator">|</span>
    <a href="#nosotros">Nosotros</a>
    <span class="separator">|</span>
    <a href="#productos">Productos</a>
    <span class="separator">|</span>
    <a href="#clientes">Clientes</a>
    <span class="separator">|</span>
    <a href="#contacto">Contacto</a>
    <span class="separator">|</span>
    <a @click="irADocumentacion">Documentacion</a>
  </div>
</template>

<style>
/* Estilos para tu aplicación */
.menu-links {
  display: flex;
  align-items: center;
  gap: 0.3em;
}

.separator {
  color: var(--texto-primario);
  padding: 0 0.3em;
  user-select: none;
  pointer-events: none;
}

.separator:hover {
  color: var(--texto-primario);
  padding: 0 0.3em;
  user-select: none;
  pointer-events: none;
}
</style>
