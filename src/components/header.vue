<script setup>
import {useRouter} from "vue-router";
import {defineComponent, ref, computed, onMounted, onUnmounted} from "vue";

import {NavConstante} from "./const.js";

defineOptions({
  name: "HeaderPrincipal",
});
// Router
const router = useRouter();

// Métodos de navegación
function irAInicio() {
  router.push("/");
}

const SeleccionNav = ref("MonteFlor");

const logoSrc = computed(() => NavConstante[SeleccionNav.value].logo.src);
const logoAlt = computed(() => NavConstante[SeleccionNav.value].logo.alt);
const Name = computed(() => NavConstante[SeleccionNav.value].label);
const currentTabs = computed(() => NavConstante[SeleccionNav.value].tabs);

// lista derivada para el nav
const navigationItems = computed(() =>
  Object.entries(NavConstante).map(([key, val]) => ({
    id: key,
    label: val.label,
    active: SeleccionNav.value === key,
  }))
);

function handleNavigation(navItem) {
  SeleccionNav.value = navItem.id;
}
</script>

<template>
  <div>
    <!-- Header principal -->
    <header class="flex items-center justify-around px-4 py-2 bg-white shadow">
      <!-- Sección de Marca -->
      <div
        class="flex items-center gap-4 cursor-pointer transition-opacity duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1 group"
        @click="irAInicio"
        tabindex="0"
        @keydown.enter="irAInicio"
      >
        <div class="flex-shrink-0">
          <img :src="logoSrc" :alt="logoAlt" class="logo transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </div>
        <h1 class="text-xl font-bold sm:text-2xl">{{ Name }}</h1>
      </div>

      <nav class="flex gap-6">
        <a
          v-for="item in navigationItems"
          :key="item.id"
          href="#"
          @click.prevent="handleNavigation(item)"
          :class="['transition-colors', item.active ? 'text-black font-semibold' : 'text-gray-600 hover:text-black']"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Botones con PrimeVue -->
      <div class="flex gap-3">
        <Button label="Iniciar Sesión" outlined @click="irAInicio" />
      </div>
    </header>

    <!-- Tab de Navegacion dinámicos-->
    <div class="flex justify-center items-center gap-2">
      <template v-for="(tab, index) in currentTabs" :key="tab.id">
        <a class="linksNav" :href="`#${tab.id}`">{{ tab.label }}</a>
        <Divider layout="vertical" v-if="index < currentTabs.length - 1" />
      </template>
    </div>
  </div>
</template>

<style>
.logo {
  height: 3rem;
  cursor: pointer;
}
</style>
