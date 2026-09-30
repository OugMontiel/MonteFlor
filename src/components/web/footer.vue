<script setup>
import {ref} from "vue";
import logoImg from "@/assets/img/MonyMontySinFondo3.png";

defineOptions({
  name: "FooterView",
});

const email = ref("");
const subscribed = ref(false);

const handleSubscribe = () => {
  if (email.value) {
    subscribed.value = true;
    setTimeout(() => {
      email.value = "";
      subscribed.value = false;
    }, 4000);
  }
};

const navigationLinks = [
  {id: "inicio", label: "Inicio"},
  {id: "nosotros", label: "Nosotros"},
  {id: "productos", label: "Pilares MonyMonty"},
  {id: "clientes", label: "Testimonios"},
  {id: "contacto", label: "Contacto"},
];

const socialLinks = [
  {name: "GitHub", icon: "pi pi-github", href: "https://github.com"},
  {name: "Instagram", icon: "pi pi-instagram", href: "https://instagram.com"},
  {name: "Facebook", icon: "pi pi-facebook", href: "https://facebook.com"},
  {name: "Twitter", icon: "pi pi-twitter", href: "https://twitter.com"},
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: "smooth", block: "start"});
  }
}
</script>

<template>
  <footer class="mt-20 border-t border-surface-200/70 bg-surface-0/60 transition-colors dark:border-surface-800/80 dark:bg-surface-950/60">
    <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <!-- Banner de Suscripción / Acción -->
      <div
        class="relative mb-16 overflow-hidden rounded-3xl border border-primary-200/60 bg-gradient-to-br from-primary-50/70 via-surface-0 to-primary-100/30 p-8 shadow-sm sm:p-12 dark:border-primary-900/40 dark:from-primary-950/30 dark:via-surface-900 dark:to-primary-900/20"
      >
        <div class="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <span
            class="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary-100/80 px-3 py-1 text-xs font-semibold text-primary-800 dark:bg-primary-950 dark:text-primary-300"
          >
            <i class="pi pi-sparkles text-xs" /> Comunidad MonteFlor
          </span>
          <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-surface-900 dark:text-surface-0">
            ¡Sé parte de esta transformación!
          </h3>
          <p class="mt-3 text-sm sm:text-base text-surface-600 dark:text-surface-300">
            Comienza a construir una relación saludable y estratégica con tu dinero. Agenda tu sesión informativa o suscríbete a nuestras
            guías prácticas.
          </p>

          <form @submit.prevent="handleSubscribe" class="mt-6 flex w-full max-w-md flex-col gap-2.5 sm:flex-row">
            <input
              v-model="email"
              type="email"
              placeholder="tu.correo@ejemplo.com"
              required
              class="w-full rounded-full border border-surface-300 bg-surface-0 px-4 py-2.5 text-sm text-surface-800 placeholder-surface-400 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-900 dark:text-surface-100 dark:placeholder-surface-500"
            />
            <PrimeButton
              type="submit"
              :label="subscribed ? '¡Listo!' : 'Suscribirse'"
              :icon="subscribed ? 'pi pi-check' : 'pi pi-arrow-right'"
              iconPos="right"
              severity="primary"
              class="shrink-0 !rounded-full !px-5 !py-2.5 !text-sm !font-medium"
            />
          </form>
          <p v-if="subscribed" class="mt-2 text-xs font-medium text-primary-600 dark:text-primary-400">
            ¡Gracias por suscribirte! Te contactaremos pronto.
          </p>
        </div>
      </div>

      <!-- Links y Columnas Principales -->
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
        <!-- Columna 1: Marca -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-950">
              <img :src="logoImg" alt="MonteFlor Logo" class="h-6 w-6 object-contain" />
            </div>
            <span class="text-lg font-bold tracking-tight text-surface-900 dark:text-surface-0">
              Monte<span class="text-primary-600 dark:text-primary-400">Flor</span>
            </span>
          </div>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-surface-500 dark:text-surface-400">
            Ecosistema tecnológico y humano enfocado en la educación, control y gestión financiera inteligente para familias y profesionales
            en Colombia y Latinoamérica.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a
              v-for="s in socialLinks"
              :key="s.name"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.name"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-surface-200/80 bg-surface-0 text-surface-600 transition-all hover:border-primary-400 hover:text-primary-600 dark:border-surface-800 dark:bg-surface-900 dark:text-surface-300 dark:hover:text-primary-400"
            >
              <i :class="s.icon" class="text-sm" />
            </a>
          </div>
        </div>

        <!-- Columna 2: Navegación -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-surface-900 dark:text-surface-100">Navegación</h4>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="link in navigationLinks" :key="link.id">
              <button
                @click="scrollToSection(link.id)"
                class="cursor-pointer text-surface-500 transition-colors hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400"
              >
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Ecosistema -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-surface-900 dark:text-surface-100">Ecosistema</h4>
          <ul class="mt-4 space-y-2.5 text-sm text-surface-500 dark:text-surface-400">
            <li class="flex items-center gap-1.5">
              <i class="pi pi-check text-xs text-primary-500" />
              <span>MonyMonty App</span>
            </li>
            <li class="flex items-center gap-1.5">
              <i class="pi pi-check text-xs text-primary-500" />
              <span>Educación Financiera</span>
            </li>
            <li class="flex items-center gap-1.5">
              <i class="pi pi-check text-xs text-primary-500" />
              <span>Asesoría Personalizada</span>
            </li>
            <li class="flex items-center gap-1.5">
              <i class="pi pi-check text-xs text-primary-500" />
              <span>Comunidad MonteFlor</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Barra Inferior de Copyright -->
      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-200/60 pt-8 text-xs text-surface-400 sm:flex-row dark:border-surface-800/60 dark:text-surface-500"
      >
        <p>&copy; 2026 MonteFlor • Todos los derechos reservados. Impulsando MonyMonty.</p>
        <p class="flex items-center gap-1">
          <span>Diseño minimalista & tecnología limpia</span>
          <i class="pi pi-heart-fill text-[10px] text-primary-500" />
        </p>
      </div>
    </div>
  </footer>
</template>
