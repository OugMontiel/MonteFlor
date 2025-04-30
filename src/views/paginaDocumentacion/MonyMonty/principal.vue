<script>
import sidebar from "@/components/documentacion/MonyMonty/siderbar.vue";
export default {
  name: "layaud de la documentacion monteFlor",
  components: {
    sidebar,
  },
};
</script>
<template>
  <div class="layoutMonyMonty">
    <sidebar />
    <main class="content">
      <router-view name="plan0" />
      <router-view class="us__content" />
      <router-view name="Deplazamiento" />
    </main>
  </div>
</template>

<style scoped>
.layoutMonyMonty {
  display: grid;
  grid-template-columns: 1fr 8fr; /* Barra lateral y contenido */
}

@media (max-width: 768px) {
  .layoutMonyMonty {
    grid-template-columns: 1fr; /* Cambia a una sola columna en pantallas pequeñas */
  }

  .sidebar {
    display: none; /* Oculta la barra lateral en pantallas pequeñas */
  }
}
</style>
