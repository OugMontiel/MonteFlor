<script setup>
import {useRouter, useRoute} from "vue-router";
import {ref, computed, onMounted, onBeforeUnmount, watch} from "vue";

import {NavConstante} from "./const.js";

defineOptions({
  name: "HeaderPrincipal",
});

const router = useRouter();
const route = useRoute();

function navKeyParaRuta(path) {
  const entrada = Object.entries(NavConstante).find(
    ([, val]) => val.route && val.route.replace(/^\//, "").toLowerCase() === path.replace(/^\//, "").toLowerCase()
  );
  return entrada ? entrada[0] : "monymonty";
}

const SeleccionNav = ref(navKeyParaRuta(route.path));

watch(
  () => route.path,
  (nuevaRuta) => {
    SeleccionNav.value = navKeyParaRuta(nuevaRuta);
  }
);

const logoSrc = computed(() => NavConstante[SeleccionNav.value].logo.src);
const logoAlt = computed(() => NavConstante[SeleccionNav.value].logo.alt);
const Name = computed(() => NavConstante[SeleccionNav.value].label);
const currentTabs = computed(() => NavConstante[SeleccionNav.value].tabs);

// Métodos de navegación
function irAInicio() {
  router.push("/");
  cerrarMenuMovil();
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
  cerrarMenuMovil();
}

function irATab() {
  cerrarMenuMovil();
}

// Menú móvil
const menuMovilAbierto = ref(false);

function toggleMenuMovil() {
  menuMovilAbierto.value = !menuMovilAbierto.value;
}

function cerrarMenuMovil() {
  menuMovilAbierto.value = false;
}

// Header con fondo "glass" al hacer scroll
const conScroll = ref(false);

function onScroll() {
  conScroll.value = window.scrollY > 12;
}

// Scroll-spy: resalta el tab de la sección visible
const tabActivo = ref("");
let observer = null;

function iniciarObservador() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }

  const secciones = currentTabs.value
    .map((tab) => document.getElementById(tab.id))
    .filter(Boolean);

  if (!secciones.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        tabActivo.value = visible.target.id;
      }
    },
    {rootMargin: "-45% 0px -45% 0px", threshold: 0}
  );

  secciones.forEach((seccion) => observer.observe(seccion));
}

watch(currentTabs, () => {
  requestAnimationFrame(iniciarObservador);
});

onMounted(() => {
  window.addEventListener("scroll", onScroll, {passive: true});
  onScroll();
  requestAnimationFrame(iniciarObservador);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  observer?.disconnect();
});
</script>

<template>
  <header
    class="header-principal"
    :class="{'header-scrolled': conScroll}"
    v-motion
    :initial="{opacity: 0, y: -24}"
    :enter="{opacity: 1, y: 0, transition: {duration: 500}}"
  >
    <!-- Header principal -->
    <div class="flex items-center justify-between w-full px-2 py-2">
      <!-- Sección de Marca -->
      <div
        class="flex items-center gap-3 cursor-pointer transition-opacity duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg p-1 group"
        @click="irAInicio"
        tabindex="0"
        @keydown.enter="irAInicio"
      >
        <div class="flex-shrink-0">
          <img :src="logoSrc" :alt="logoAlt" class="logo transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </div>
      </div>

      <!-- Navegación de escritorio -->
      <nav class="hidden md:flex gap-6">
        <a v-for="item in navigationItems" :key="item.id" href="#" class="nav-link" :class="{'nav-link-active': item.active}" @click.prevent="handleNavigation(item)">
          {{ item.label }}
        </a>
      </nav>

      <!-- Botones con PrimeVue (escritorio) -->
      <div class="hidden md:flex items-center p-2 gap-1">
        <PrimeButton label="Iniciar Sesión" outlined @click="irAInicio" />
        <PrimeDivider layout="vertical" />
        <PrimeButton :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" outlined @click="toggleTheme" :title="isDark ? 'Tema claro' : 'Tema oscuro'" />
      </div>

      <!-- Botón de menú móvil -->
      <button
        class="menu-toggle md:hidden"
        type="button"
        :aria-expanded="menuMovilAbierto"
        aria-label="Abrir menú de navegación"
        @click="toggleMenuMovil"
      >
        <i :class="menuMovilAbierto ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>
    </div>

    <!-- Tabs de navegación dinámicos (escritorio) -->
    <div class="hidden md:flex items-center gap-2 px-2 pb-1">
      <template v-for="(tab, index) in currentTabs" :key="tab.id">
        <a class="linksNav" :class="{'linksNav-active': tabActivo === tab.id}" :href="`#${tab.id}`" @click="irATab(tab.id)">{{ tab.label }}</a>
        <PrimeDivider layout="vertical" v-if="index < currentTabs.length - 1" />
      </template>
    </div>

    <!-- Panel de menú móvil -->
    <Transition name="menu-movil">
      <div v-if="menuMovilAbierto" class="menu-movil-panel md:hidden">
        <nav class="flex flex-col gap-1">
          <a v-for="item in navigationItems" :key="item.id" href="#" class="menu-movil-link" :class="{'menu-movil-link-active': item.active}" @click.prevent="handleNavigation(item)">
            {{ item.label }}
          </a>
        </nav>

        <div v-if="currentTabs.length" class="menu-movil-divisor"></div>

        <nav class="flex flex-col gap-1">
          <a v-for="tab in currentTabs" :key="tab.id" class="menu-movil-link" :class="{'menu-movil-link-active': tabActivo === tab.id}" :href="`#${tab.id}`" @click="irATab(tab.id)">
            {{ tab.label }}
          </a>
        </nav>

        <div class="menu-movil-divisor"></div>

        <div class="flex items-center gap-2">
          <PrimeButton class="flex-1" label="Iniciar Sesión" outlined @click="irAInicio" />
          <PrimeButton :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" outlined @click="toggleTheme" :title="isDark ? 'Tema claro' : 'Tema oscuro'" />
        </div>
      </div>
    </Transition>
  </header>
</template>

<style>
.logo {
  height: 3rem;
  cursor: pointer;
}

.header-principal {
  position: sticky;
  top: 0;
  z-index: 50;
  background: transparent;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;
}

.header-scrolled {
  background: var(--color-fondo-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--sombra-sm);
}

/* Nav de escritorio con subrayado animado */
.nav-link,
.linksNav {
  position: relative;
  color: var(--texto-primario);
  padding-bottom: 2px;
}

.nav-link::after,
.linksNav::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: var(--gradiente-acento);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav-link:hover::after,
.linksNav:hover::after,
.nav-link-active::after,
.linksNav-active::after {
  transform: scaleX(1);
}

.nav-link-active,
.linksNav-active {
  color: var(--color-acento);
  font-weight: 600;
}

/* Botón hamburguesa */
.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--borde-radio-sm);
  color: var(--texto-primario);
  font-size: 1.25rem;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-toggle:hover {
  background: var(--color-fondo-hover);
}

/* Panel de menú móvil */
.menu-movil-panel {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  margin: 0 0.5rem 0.75rem;
  background: var(--color-superficie);
  border-radius: var(--borde-radio);
  box-shadow: var(--sombra-md);
}

.menu-movil-link {
  padding: 0.6rem 0.75rem;
  border-radius: var(--borde-radio-sm);
  color: var(--texto-primario);
  transition: background-color 0.2s ease;
}

.menu-movil-link:hover {
  background: var(--color-fondo-hover);
}

.menu-movil-link-active {
  color: var(--color-acento);
  font-weight: 600;
}

.menu-movil-divisor {
  height: 1px;
  background: var(--color-neutro);
  opacity: 0.4;
}

.menu-movil-enter-active,
.menu-movil-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-movil-enter-from,
.menu-movil-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
