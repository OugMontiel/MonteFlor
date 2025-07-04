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
  <div class="container-links">
    <a class="linksNav" href="#inicio">Inicio</a>
    <span class="separator">|</span>
    <a class="linksNav" href="#nosotros">Nosotros</a>
    <span class="separator">|</span>
    <a class="linksNav" href="#productos">Productos</a>
    <span class="separator">|</span>
    <a class="linksNav" href="#clientes">Clientes</a>
    <span class="separator">|</span>
    <a class="linksNav" href="#contacto">Contacto</a>
    <span class="separator">|</span>
    <a class="linksNav" @click="irADocumentacion">Documentacion</a>
  </div>
</template>

<style>
/* Estilos para tu aplicación */
.container-links {
  display: flex;
  align-items: center;
  gap: 0.3em;
}

.linksNav:hover {
  color: var(--color-acento);
}

.separator {
  color: var(--texto-primario);
  padding: 0 0.3em;
  user-select: none;
  pointer-events: none;
}

.separator:hover {
  padding: 0 0.3em;
  user-select: none;
  pointer-events: none;
}
</style>
