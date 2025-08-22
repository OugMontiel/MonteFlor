<script setup>
import {useRouter} from "vue-router";
import {ref, computed} from "vue";

import {NavConstante} from "./const.js";

defineOptions({
  name: "HeaderPrincipal",
});

const router = useRouter();

const SeleccionNav = ref("MonteFlor");

const logoSrc = computed(() => NavConstante[SeleccionNav.value].logo.src);
const logoAlt = computed(() => NavConstante[SeleccionNav.value].logo.alt);
const Name = computed(() => NavConstante[SeleccionNav.value].label);
const currentTabs = computed(() => NavConstante[SeleccionNav.value].tabs);

// Métodos de navegación
function irAInicio() {
  router.push("/");
}

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("app-dark", isDark.value);
};

// lista derivada para el nav
const navigationItems = computed(() =>
  Object.entries(NavConstante).map(([key, val]) => ({
    id: key,
    label: val.label,
    route: val.route,
    active: SeleccionNav.value === key,
  }))
);

function handleNavigation(navItem) {
  SeleccionNav.value = navItem.id;
  if (navItem.route) {
    router.push(navItem.route);
  }
}
</script>

<template>
  <header class="p-2">
    <!-- Header principal -->
    <div class="flex items-center justify-between w-full">
      <!-- Sección de Marca -->
      <div
        class="flex items-center gap-4 cursor-pointer transition-opacity duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg p-1 group"
        @click="irAInicio"
        tabindex="0"
        @keydown.enter="irAInicio"
      >
        <div class="flex-shrink-0">
          <img :src="logoSrc" :alt="logoAlt" class="logo transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </div>
        <h1 class="text-xl font-bold sm:text-2xl">{{ Name }}</h1>
      </div>

      <!-- Navegación -->
      <nav class="flex gap-6">
        <a v-for="item in navigationItems" :key="item.id" href="#" @click.prevent="handleNavigation(item)">
          {{ item.label }}
        </a>
      </nav>

      <!-- Botones con PrimeVue -->
      <div class="flex p-2">
        <Button label="Iniciar Sesión" outlined @click="irAInicio" />
        <Divider layout="vertical" />
        <Button :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" outlined @click="toggleTheme" :title="isDark ? 'Tema claro' : 'Tema oscuro'" />
      </div>
    </div>

    <!-- Tab de Navegacion dinámicos-->
    <div class="flex items-center gap-2">
      <template v-for="(tab, index) in currentTabs" :key="tab.id">
        <a class="linksNav" :href="`#${tab.id}`">{{ tab.label }}</a>
        <Divider layout="vertical" v-if="index < currentTabs.length - 1" />
      </template>
    </div>
  </header>
</template>

<style>
.logo {
  height: 3rem;
  cursor: pointer;
}
</style>
