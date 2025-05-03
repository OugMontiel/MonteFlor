<script>
export default {
  name: "sidebar de la documentacion de MonyMonty",
  data() {
    return {
      // Estado para controlar la visibilidad de las secciones
      isApiOpen: false,
      isWebOpen: false,
      isModeloNegocioOpen: false,
    };
  },
  methods: {
    toggleSection(section) {
      // Alternar la visibilidad de la sección seleccionada
      this[section] = !this[section];
    },
  },
};
</script>

<template>
  <aside class="sidebar">
    <h2>General</h2>
    <ul>
      <li @click="toggleSection('isApiOpen')">
        <router-link to="/documentacion/MonyMonty">Api</router-link>
        <ul v-if="isApiOpen">
          <li><router-link to="/documentacion/MonyMonty/ApiUser">Usuarios</router-link></li>
          <li><router-link to="/documentacion/MonyMonty/ApiAuth">Inicio Seccion</router-link></li>
        </ul>
      </li>
      <li @click="toggleSection('isWebOpen')">
        Web
        <ul v-if="isWebOpen">
          <li>Función 1</li>
          <li>Función 2</li>
          <li>Función 3</li>
        </ul>
      </li>
      <li @click="toggleSection('isModeloNegocioOpen')">
        Modelo de Negocio
        <ul v-if="isModeloNegocioOpen">
          <li>Función 1</li>
          <li>Función 2</li>
          <li>Función 3</li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  background-color: #f4f4f4;
  padding: 20px;
  border-right: 1px solid #ccc;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 10px 0;
}

li ul {
  margin-left: 20px;
}
</style>
