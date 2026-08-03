<script>
export default {
  name: "Header-dehome",
  methods: {
    irADocumentacion() {
      this.$router.push("/documentacion");
    },
  },
};
</script>

<template>
  <nav class="flex items-center gap-1 text-base font-medium">
    <a href="#inicio" class="text-gray-500 no-underline transition-colors duration-200 hover:text-amber-400 focus:outline-none"> Inicio </a>
    <span class="text-gray-500 select-none pointer-events-none px-0.5">|</span>

    <a href="#nosotros" class="text-gray-500 no-underline transition-colors duration-200 hover:text-amber-400 focus:outline-none">
      Nosotros
    </a>
    <span class="text-gray-500 select-none pointer-events-none px-0.5">|</span>

    <a href="#productos" class="text-gray-500 no-underline transition-colors duration-200 hover:text-amber-400 focus:outline-none">
      Productos
    </a>
    <span class="text-gray-500 select-none pointer-events-none px-0.5">|</span>

    <a href="#clientes" class="text-gray-500 no-underline transition-colors duration-200 hover:text-amber-400 focus:outline-none">
      Clientes
    </a>
    <span class="text-gray-500 select-none pointer-events-none px-0.5">|</span>

    <a href="#contacto" class="text-gray-500 no-underline transition-colors duration-200 hover:text-amber-400 focus:outline-none">
      Contacto
    </a>
  </nav>
</template>
