<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import logoImg from "@/assets/img/MonyMontySinFondo3.png";

defineOptions({
  name: "HeaderPrincipal",
});

const router = useRouter();
const isDark = ref(false);
const mobileMenuOpen = ref(false);

const navLinks = [
  {id: "inicio", label: "Inicio"},
  {id: "nosotros", label: "Nosotros"},
  {id: "productos", label: "Pilares"},
  {id: "clientes", label: "Testimonios"},
  {id: "contacto", label: "Contacto"},
];

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("app-dark", isDark.value);
};

function scrollToSection(id) {
  mobileMenuOpen.value = false;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: "smooth", block: "start"});
  } else {
    router.push(`/#${id}`);
  }
}

function irAInicio() {
  window.scrollTo({top: 0, behavior: "smooth"});
}
</script>

<template>
  <header class="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 transition-all duration-300">
    <div
      class="flex items-center justify-between rounded-full border border-surface-200/70 bg-surface-0/80 px-4 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] backdrop-blur-md transition-colors dark:border-surface-800/80 dark:bg-surface-900/80 dark:shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
    >
      <!-- Logo y Marca -->
      <div
        class="group flex cursor-pointer items-center gap-3 rounded-full transition-opacity hover:opacity-90 focus:outline-none"
        @click="irAInicio"
        tabindex="0"
        @keydown.enter="irAInicio"
      >
        <div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary-50 dark:bg-primary-950/40">
          <img
            :src="logoImg"
            alt="MonteFlor - MonyMonty Logo"
            class="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-base font-semibold tracking-tight text-surface-900 dark:text-surface-0">
            Monte<span class="text-primary-600 dark:text-primary-400">Flor</span>
          </span>
          <span class="text-[10px] uppercase tracking-wider text-surface-500 dark:text-surface-400"> MonyMonty </span>
        </div>
      </div>

      <!-- Navegación Desktop -->
      <nav class="hidden items-center gap-1 md:flex">
        <button
          v-for="item in navLinks"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-medium text-surface-600 transition-colors duration-200 hover:text-primary-600 hover:bg-surface-100/60 dark:text-surface-300 dark:hover:text-primary-400 dark:hover:bg-surface-800/60"
        >
          {{ item.label }}
        </button>
      </nav>

      <!-- Acciones y Selector de Tema -->
      <div class="flex items-center gap-2">
        <PrimeButton
          :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
          severity="secondary"
          text
          rounded
          @click="toggleTheme"
          :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          class="!h-9 !w-9 !text-surface-600 dark:!text-surface-300"
        />

        <div class="hidden sm:flex sm:items-center sm:gap-2">
          <PrimeButton
            label="Ingresar"
            severity="secondary"
            text
            size="small"
            class="!rounded-full !px-3.5 !text-sm !font-medium"
            @click="scrollToSection('contacto')"
          />
          <PrimeButton
            label="Comenzar"
            severity="primary"
            size="small"
            class="!rounded-full !px-4 !text-sm !font-medium shadow-sm transition-all hover:shadow"
            @click="scrollToSection('contacto')"
          />
        </div>

        <!-- Botón Menú Móvil -->
        <PrimeButton
          :icon="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'"
          severity="secondary"
          text
          rounded
          class="md:hidden !h-9 !w-9"
          @click="mobileMenuOpen = !mobileMenuOpen"
          title="Menú"
        />
      </div>
    </div>

    <!-- Menú Desplegable Móvil -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-95"
    >
      <div
        v-if="mobileMenuOpen"
        class="mt-2 flex flex-col gap-1 rounded-2xl border border-surface-200/80 bg-surface-0/95 p-3 shadow-lg backdrop-blur-md md:hidden dark:border-surface-800 dark:bg-surface-900/95"
      >
        <button
          v-for="item in navLinks"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="flex w-full cursor-pointer items-center rounded-xl px-4 py-2.5 text-left text-sm font-medium text-surface-700 hover:bg-surface-100 dark:text-surface-200 dark:hover:bg-surface-800"
        >
          {{ item.label }}
        </button>
        <div class="mt-2 flex flex-col gap-2 border-t border-surface-200 pt-2 dark:border-surface-800">
          <PrimeButton
            label="Comenzar Ahora"
            severity="primary"
            class="w-full !rounded-xl !py-2.5 !text-sm !font-medium"
            @click="scrollToSection('contacto')"
          />
        </div>
      </div>
    </transition>
  </header>
</template>
